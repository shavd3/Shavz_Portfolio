"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { CONTACT } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Placeholder — wire up to Resend / Formspree when ready
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  const inputClass =
    "w-full bg-transparent border border-grey-700 px-5 py-4 text-sm text-white font-body placeholder:text-grey-600 focus:border-grey-400 focus:outline-none transition-colors duration-300";

  return (
    <SectionWrapper id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <SectionHeading label="08 — Contact" title={`Let's build\nsomething great.`} />

            <p className="font-body text-grey-400 text-sm leading-relaxed mb-10">
              Whether you have a project in mind, want to discuss a role, or are looking for a
              lecturer for your institution — I&apos;d love to hear from you.
            </p>

            <div className="space-y-5">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-4 text-grey-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-10 h-10 border border-grey-800 group-hover:border-grey-600 flex items-center justify-center transition-colors duration-300">
                  <Mail size={14} />
                </div>
                <span className="font-body text-sm">{CONTACT.email}</span>
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-grey-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-10 h-10 border border-grey-800 group-hover:border-grey-600 flex items-center justify-center transition-colors duration-300">
                  <LinkedinIcon size={14} />
                </div>
                <span className="font-body text-sm">linkedin.com/in/shavin-fernando-d3</span>
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-grey-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-10 h-10 border border-grey-800 group-hover:border-grey-600 flex items-center justify-center transition-colors duration-300">
                  <GithubIcon size={14} />
                </div>
                <span className="font-body text-sm">github.com/shavd3</span>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-grey-700 p-10 flex flex-col items-center justify-center gap-4 min-h-[360px] text-center"
              >
                <div className="w-12 h-12 border border-silver flex items-center justify-center">
                  <Send size={16} className="text-silver" />
                </div>
                <p className="font-display text-2xl font-light text-white">Message sent.</p>
                <p className="font-body text-sm text-grey-500">
                  I&apos;ll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <textarea
                  placeholder="Your message"
                  required
                  rows={7}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className={cn(inputClass, "resize-none")}
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-3 bg-white text-black text-xs tracking-[0.25em] uppercase font-body py-4 hover:bg-grey-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-3 h-3 border border-black border-t-transparent rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={13} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
