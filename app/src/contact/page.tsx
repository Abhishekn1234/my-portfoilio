"use client";

import { FormEvent, useState } from "react";
import {
  CheckCircle,
  CircleAlert,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

const contactItems = [
  {
    label: "Phone",
    value: "+91 6238519397",
    href: "tel:+916238519397",
    icon: Phone,
  },
  {
    label: "Email",
    value: "abhishekpes123@gmail.com",
    href: "mailto:abhishekpes123@gmail.com",
    icon: Mail,
  },
  {
    label: "Location",
    value: "Palakkad, Kerala, India",
    icon: MapPin,
  },
];

const fieldClass =
  "w-full rounded-[8px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-100";

const formspreeEndpoint = "https://formspree.io/f/mgaeerzk";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Unable to submit contact form");
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setError("Message could not be sent. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-band bg-white/80">
      <div className="section-container">
        <div className="reveal-on-scroll mx-auto mb-14 max-w-3xl text-center">
          <span className="section-eyebrow">Get in touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-copy mx-auto">
            Have a project, role, or collaboration in mind? Send a message and
            I will get back to you soon.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          <div className="reveal-on-scroll lg:col-span-5">
            <div className="soft-card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-[8px] bg-teal-50 text-teal-700">
                  <MessageSquare className="size-5" />
                </div>
                <h3 className="text-xl font-black text-slate-950">
                  Let&apos;s talk
                </h3>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                I am available for full-time software roles, freelance web
                projects, and collaboration opportunities.
              </p>

              <div className="mt-6 space-y-3 border-t border-slate-200 pt-6">
                {contactItems.map(({ label, value, href, icon: Icon }) => {
                  const content = (
                    <>
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-[8px] bg-slate-950 text-teal-200 transition group-hover:bg-teal-700 group-hover:text-white">
                        <Icon className="size-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                          {label}
                        </span>
                        <span className="mt-1 block break-words text-sm font-bold text-slate-900">
                          {value}
                        </span>
                      </div>
                    </>
                  );

                  return href ? (
                    <a
                      key={label}
                      href={href}
                      className="group flex items-start gap-4 rounded-[8px] p-3 transition hover:bg-teal-50"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={label} className="flex items-start gap-4 p-3">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="reveal-on-scroll lg:col-span-7">
            <div className="soft-card p-6 sm:p-8">
              {submitted ? (
                <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                    <CheckCircle className="size-9" />
                  </div>
                  <h3 className="mt-5 text-2xl font-black text-slate-950">
                    Message sent successfully
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
                    Thank you for reaching out. I will get back to you as soon
                    as possible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setError("");
                    }}
                    className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white transition hover:bg-teal-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-xs font-bold uppercase tracking-[0.14em] text-slate-600"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className={fieldClass}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-xs font-bold uppercase tracking-[0.14em] text-slate-600"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-xs font-bold uppercase tracking-[0.14em] text-slate-600"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="Project Inquiry / Job Opportunity"
                      className={fieldClass}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold uppercase tracking-[0.14em] text-slate-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Write your message here..."
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  {error ? (
                    <p className="flex items-start gap-2 rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold leading-6 text-red-700">
                      <CircleAlert className="mt-0.5 size-4 shrink-0" />
                      <span>{error}</span>
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-slate-500"
                  >
                    <Send className="size-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
