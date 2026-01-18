"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useGameStore } from "@/store/useGameStore";
import { motion, AnimatePresence } from "framer-motion";

const GRID_SIZE = 20;
const INITIAL_SPEED = 150;
const MIN_SPEED = 60;
const SPEED_DECREMENT = 3; 

export default function SnakeGame() {
  const { closeGame } = useGameStore();
  
  // Game State
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 5 });
  const [direction, setDirection] = useState({ x: 0, y: -1 });
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [gameSpeed, setGameSpeed] = useState(INITIAL_SPEED);

  // Refs for inputs to prevent "double move" glitches
  const lastMoveDirection = useRef({ x: 0, y: -1 });

  // Load High Score
  useEffect(() => {
    const saved = localStorage.getItem("snake_highscore");
    if (saved) setHighScore(parseInt(saved));
  }, []);

  // Save High Score
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("snake_highscore", score.toString());
    }
  }, [score, highScore]);

  const generateFood = useCallback(() => {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  }, []);

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection({ x: 0, y: -1 });
    lastMoveDirection.current = { x: 0, y: -1 };
    setScore(0);
    setGameSpeed(INITIAL_SPEED);
    setGameOver(false);
    setIsPaused(false);
  };

  // Keyboard Controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight", " "].includes(e.key)) {
        e.preventDefault();
      }

      if (gameOver) return;

      const currentDir = lastMoveDirection.current;

      switch (e.key) {
        case "ArrowUp": 
          if (currentDir.y === 0) setDirection({ x: 0, y: -1 }); 
          break;
        case "ArrowDown": 
          if (currentDir.y === 0) setDirection({ x: 0, y: 1 }); 
          break;
        case "ArrowLeft": 
          if (currentDir.x === 0) setDirection({ x: -1, y: 0 }); 
          break;
        case "ArrowRight": 
          if (currentDir.x === 0) setDirection({ x: 1, y: 0 }); 
          break;
        case " ": setIsPaused(p => !p); break;
        case "Escape": closeGame(); break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeGame, gameOver]);

  // Game Loop
  useEffect(() => {
    if (gameOver || isPaused) return;

    const moveSnake = setInterval(() => {
      setSnake((prev) => {
        // Update the "Last Move" ref so we know where we actually moved
        lastMoveDirection.current = direction;

        const newHead = { x: prev[0].x + direction.x, y: prev[0].y + direction.y };

        // 1. Collision Walls
        if (
          newHead.x < 0 || newHead.x >= GRID_SIZE ||
          newHead.y < 0 || newHead.y >= GRID_SIZE ||
          prev.some(s => s.x === newHead.x && s.y === newHead.y)
        ) {
          setGameOver(true);
          return prev;
        }

        const newSnake = [newHead, ...prev];

        // 2. Eat Food
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(s => s + 10);
          setGameSpeed(s => Math.max(MIN_SPEED, s - SPEED_DECREMENT));
          setFood(generateFood());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, gameSpeed);

    return () => clearInterval(moveSnake);
  }, [direction, food, gameOver, isPaused, generateFood, gameSpeed]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 99999,
        backgroundColor: "rgba(0,0,0,0.9)",
        backdropFilter: "blur(5px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div 
        className="relative bg-zinc-900 rounded-xl p-4 border-4 border-zinc-700 shadow-2xl"
        style={{ maxWidth: "500px", width: "95%" }}
      >
        
        {/* TOP BAR */}
        <div className="flex justify-between items-end mb-4 px-2 font-mono text-white tracking-widest">
           <div>
              <span className="text-xs text-zinc-500 block">SCORE</span>
              <span className="text-3xl text-neon-pink drop-shadow-[0_0_5px_#ff00ff]">{score.toString().padStart(4, '0')}</span>
           </div>
           <div className="text-right">
              <span className="text-xs text-zinc-500 block">HIGH SCORE</span>
              <span className="text-xl text-neon-blue">{highScore.toString().padStart(4, '0')}</span>
           </div>
        </div>

        {/* SCREEN CONTAINER */}
        <div className="relative overflow-hidden rounded border-4 border-zinc-800 bg-black shadow-inner">
          
          {/* Subtle Scanlines (Reduced opacity for performance) */}
          <div className="absolute inset-0 z-20 pointer-events-none opacity-10"
               style={{ 
                 background: "linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.2) 50%)",
                 backgroundSize: "100% 4px"
               }} 
          />

          {/* THE GRID */}
          <div 
            style={{ 
              display: "grid",
              gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
              gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
              aspectRatio: "1/1",
              width: "100%",
              backgroundColor: "#111",
            }}
          >
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
              const x = i % GRID_SIZE;
              const y = Math.floor(i / GRID_SIZE);
              
              // Simple check - pure JS, no heavy framer-motion here
              const isSnake = snake.some(s => s.x === x && s.y === y);
              const isHead = snake[0].x === x && snake[0].y === y;
              const isFood = food.x === x && food.y === y;
              
              let bgClass = "";
              let shadowStyle = "";

              if (isHead) {
                bgClass = "bg-white z-10 scale-100";
                shadowStyle = "0 0 15px white";
              } else if (isSnake) {
                bgClass = "bg-neon-blue scale-95";
                shadowStyle = "0 0 5px #00ffff";
              } else if (isFood) {
                // Stable Food (No layoutId, no scaling animation)
                bgClass = "bg-neon-pink rounded-full scale-75"; 
                shadowStyle = "0 0 15px #ff00ff";
              }

              return (
                <div key={i} className="relative flex items-center justify-center">
                   <div 
                      className={`w-full h-full transition-none ${bgClass}`}
                      style={{ boxShadow: shadowStyle }}
                   />
                </div>
              );
            })}
          </div>

          {/* OVERLAYS */}
          <AnimatePresence>
            {(gameOver || isPaused) && (
               <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm"
               >
                 {gameOver ? (
                   <>
                     <h2 className="font-mono text-5xl text-red-500 drop-shadow-[0_0_10px_red] mb-2">GAME OVER</h2>
                     <button onClick={resetGame} className="px-6 py-2 bg-neon-blue text-black font-bold font-mono hover:bg-white transition-colors">
                       RESTART
                     </button>
                   </>
                 ) : (
                   <h2 className="font-mono text-4xl text-white tracking-widest animate-pulse">PAUSED</h2>
                 )}
               </motion.div>
            )}
          </AnimatePresence>
        
        </div>

        <div className="mt-4 flex justify-between text-xs font-mono text-zinc-500">
           <span>ARROWS to Move</span>
           <span>SPACE to Pause</span>
           <button onClick={closeGame} className="hover:text-red-400">[ESC] QUIT</button>
        </div>

      </div>
    </div>
  );
}