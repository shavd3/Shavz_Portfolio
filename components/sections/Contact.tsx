"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon, PhoneIcon } from "@/components/ui/SocialIcons";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { CONTACT } from "@/lib/data";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full bg-transparent border-b border-grey-700 px-0 py-3.5 text-sm text-white font-body placeholder:text-grey-700 focus:border-silver focus:outline-none transition-colors duration-300 tracking-wide";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };


  return (
    <SectionWrapper id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left */}
          <div>
            <SectionHeading label="09 — Contact" title={"Let's build\nsomething great."} />

            <p className="font-body text-grey-500 text-sm leading-loose mb-10 max-w-sm">
              Whether you have a project in mind, want to discuss a role, or are looking for a
              lecturer. I&apos;d love to hear from you.
            </p>

            {/* Direct contact */}
            <div className="mb-8">
              <p className="text-[9px] tracking-[0.35em] uppercase text-grey-700 font-body mb-3">Direct</p>
              <div className="space-y-2">
                {[
                  { href: `mailto:${CONTACT.email}`,    icon: <Mail size={13} />, label: CONTACT.email,    sub: "Personal" },
                  { href: `mailto:${CONTACT.emailIFS}`, icon: <Mail size={13} />, label: CONTACT.emailIFS, sub: "IFS R&D" },
                  { href: `mailto:${CONTACT.emailIIT}`, icon: <Mail size={13} />, label: CONTACT.emailIIT, sub: "IIT" },
                  { href: `tel:${CONTACT.phone.replace(/\s/g, "")}`, icon: <PhoneIcon size={13} />, label: CONTACT.phone, sub: "Mobile" },
                ].map(({ href, icon, label, sub }) => (
                  <a key={sub} href={href} className="flex items-center gap-3 text-grey-500 hover:text-white transition-colors duration-300 group py-0.5">
                    <div className="w-7 h-7 border border-grey-800 group-hover:border-grey-600 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      {icon}
                    </div>
                    <div>
                      <p className="font-body text-sm leading-tight group-hover:text-grey-200 transition-colors duration-300">{label}</p>
                      <p className="text-[9px] tracking-[0.2em] uppercase text-grey-700 font-body">{sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-[9px] tracking-[0.35em] uppercase text-grey-700 font-body mb-3">Social</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { href: CONTACT.linkedin,      icon: <LinkedinIcon size={14} />,  label: "LinkedIn" },
                  { href: CONTACT.github,         icon: <GithubIcon size={14} />,    label: "GitHub" },
                  { href: CONTACT.instagram,      icon: <InstagramIcon size={14} />, label: "Instagram" },
                  { href: CONTACT.facebook,       icon: <FacebookIcon size={14} />,  label: "Facebook" },
                  { href: CONTACT.photographyFb,  icon: <FacebookIcon size={14} />,  label: "Photography" },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-grey-800 hover:border-grey-600 text-grey-500 hover:text-white px-3 py-2 text-[11px] font-body tracking-wide transition-all duration-300 group"
                  >
                    {icon}
                    <span>{label}</span>
                  </a>
                ))}
              </div>
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
                  <input type="text" placeholder="Name" required value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className={inputClass} />
                  <input type="email" placeholder="Email" required value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className={inputClass} />
                </div>
                <textarea placeholder="Your message" required rows={6} value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className={cn(inputClass, "resize-none")} />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group w-full flex items-center justify-center gap-3 border border-white text-white text-[11px] tracking-[0.3em] uppercase font-body py-4 hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-40"
                >
                  {status === "sending" ? (
                    <><span className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />Sending…</>
                  ) : (
                    <><Send size={12} className="group-hover:-rotate-12 transition-transform duration-300" />Send Message</>
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
