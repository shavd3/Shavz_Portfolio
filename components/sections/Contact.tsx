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

  // Underline-style input: no box border, only bottom border + focus glow
  const inputClass =
    "w-full bg-transparent border-b border-grey-700 px-0 py-3.5 text-sm text-white font-body placeholder:text-grey-700 focus:border-silver focus:outline-none transition-colors duration-400 tracking-wide";

  return (
    <SectionWrapper id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left */}
          <div>
            <SectionHeading label="08 — Contact" title={"Let's build\nsomething great."} />

            <p className="font-body text-grey-500 text-sm leading-loose mb-12 max-w-sm">
              Whether you have a project in mind, want to discuss a role, or are looking for a
              lecturer — I&apos;d love to hear from you.
            </p>

            <div className="space-y-6">
              {[
                { href: `mailto:${CONTACT.email}`, icon: <Mail size={13} />, label: CONTACT.email },
                { href: CONTACT.linkedin, icon: <LinkedinIcon size={13} />, label: "linkedin.com/in/shavin-fernando-d3", external: true },
                { href: CONTACT.github, icon: <GithubIcon size={13} />, label: "github.com/shavd3", external: true },
              ].map(({ href, icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-5 text-grey-500 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-9 h-9 border border-grey-800 group-hover:border-grey-600 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-grey-900">
                    {icon}
                  </div>
                  <span className="font-body text-sm group-hover:text-grey-200 transition-colors duration-300">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-grey-800 p-12 flex flex-col items-center justify-center gap-5 min-h-[380px] text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className="w-14 h-14 border border-grey-700 flex items-center justify-center"
                >
                  <Send size={16} className="text-silver" />
                </motion.div>
                <p className="font-display text-3xl font-light text-white">Message sent.</p>
                <p className="font-body text-sm text-grey-600 max-w-[20ch] leading-relaxed">
                  I&apos;ll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="relative">
                  <textarea
                    placeholder="Your message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className={cn(inputClass, "resize-none")}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group w-full flex items-center justify-center gap-3 border border-white text-white text-[11px] tracking-[0.3em] uppercase font-body py-4 hover:bg-white hover:text-black transition-all duration-400 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={12} className="group-hover:-rotate-12 transition-transform duration-300" />
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
