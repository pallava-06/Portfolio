"use client";
import { FormEvent, useState } from "react";
import { site } from "@/content/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name") || "a visitor"}`);
    const body = encodeURIComponent(`Name: ${data.get("name") || ""}\nEmail: ${data.get("email") || ""}\n\n${data.get("message") || ""}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    e.currentTarget.reset();
  };
  return (
    <form className="form" onSubmit={submit}>
      {status === "success" && <div className="status">Message prepared. Your email client should open with the message ready to send.</div>}
      <label>Name<input name="name" autoComplete="name" required /></label>
      <label>Email<input type="email" name="email" autoComplete="email" required /></label>
      <label>Message<textarea name="message" required /></label>
      <button className="btn primary" type="submit">Send message <span>→</span></button>
    </form>
  );
}
