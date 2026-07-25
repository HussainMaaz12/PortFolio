"use client";

import { FormEvent, useState } from "react";

const initialValues = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Unable to send message");
      setValues(initialValues);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-[#282730] bg-[#17161d] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.3)] sm:p-7">
      <div className="space-y-5">
        <label className="block">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.12em] text-[#e1dee8]">Name</span>
          <input required value={values.name} onChange={(event) => setValues({ ...values, name: event.target.value })} name="name" autoComplete="name" placeholder="John Doe" className="mt-2 h-11 w-full rounded-md border border-[#292831] bg-[#0d0d12] px-3.5 font-body text-sm text-text outline-none placeholder:text-[#6d6b75] focus:border-accent transition-colors" />
        </label>
        <label className="block">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.12em] text-[#e1dee8]">Email</span>
          <input required value={values.email} onChange={(event) => setValues({ ...values, email: event.target.value })} name="email" type="email" autoComplete="email" placeholder="john@example.com" className="mt-2 h-11 w-full rounded-md border border-[#292831] bg-[#0d0d12] px-3.5 font-body text-sm text-text outline-none placeholder:text-[#6d6b75] focus:border-accent transition-colors" />
        </label>
        <label className="block">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.12em] text-[#e1dee8]">Message</span>
          <textarea required value={values.message} onChange={(event) => setValues({ ...values, message: event.target.value })} name="message" rows={5} placeholder="How can we work together?" className="mt-2 w-full resize-y rounded-md border border-[#292831] bg-[#0d0d12] px-3.5 py-3 font-body text-sm leading-6 text-text outline-none placeholder:text-[#6d6b75] focus:border-accent transition-colors" />
        </label>
      </div>
      <button type="submit" disabled={status === "sending"} className="mt-6 w-full sm:w-auto rounded-md bg-accent px-6 py-3 font-label text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_6px_20px_rgba(108,92,231,0.3)] transition-all hover:bg-[#5847d2] disabled:cursor-wait disabled:opacity-70">{status === "sending" ? "Sending…" : "Send Message"}</button>
      {status === "success" && <p role="status" className="mt-4 font-body text-sm font-medium text-[#b8efcc]">Thanks — your message has been received.</p>}
      {status === "error" && <p role="alert" className="mt-4 font-body text-sm font-medium text-[#ffb4bb]">Something went wrong. Please try again.</p>}
    </form>
  );
}
