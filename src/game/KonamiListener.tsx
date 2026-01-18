"use client";

import { useEffect, useState } from "react";
import { useGameStore } from "@/store/useGameStore";
import SnakeGame from "./SnakeGame";
import { AnimatePresence } from "framer-motion";

const KONAMI_CODE = [
  "arrowup", "arrowup", 
  "arrowdown", "arrowdown", 
  "arrowleft", "arrowright", 
  "arrowleft", "arrowright", 
  "b", "a"
];

export default function KonamiListener() {
  const [input, setInput] = useState<string[]>([]);
  const { isOpen, openGame } = useGameStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      
      setInput((prev) => {
        const newArray = [...prev, key].slice(-KONAMI_CODE.length);
        return newArray;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (JSON.stringify(input) === JSON.stringify(KONAMI_CODE)) {
      openGame();
      setInput([]); 
    }
  }, [input, openGame]);

  return (
    <AnimatePresence>
      {isOpen && <SnakeGame />}
    </AnimatePresence>
  );
}