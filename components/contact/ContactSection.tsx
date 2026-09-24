"use client";

import * as React from "react";
import { profile } from "@/data/profile";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

interface DispatchPayload {
  gmailUrl: string;
  mailtoUrl: string;
  formattedText: string;
}

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  const [copiedPayload, setCopiedPayload] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Spam protection
  });
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [dispatchData, setDispatchData] = React.useState<DispatchPayload | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPayload = () => {
    if (!dispatchData) return;
    navigator.clipboard.writeText(dispatchData.formattedText);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields (Name, Email, and Message).");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to process message.");
      }

      setStatus("success");

      if (data.payload) {
        setDispatchData(data.payload);
        // Automatically open the mailto link or web composer
        window.location.href = data.payload.mailtoUrl;
      }
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred. Please reach out directly."
      );
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setDispatchData(null);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-[hsl(var(--border))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Outreach Info */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[hsl(var(--primary))] font-semibold">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] mt-1.5">
                Let's build something useful.
              </h2>
              <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))] mt-2 leading-relaxed">
                Open to software engineering, full-stack, and applied AI/ML opportunities. Whether you're hiring for a high-impact engineering team or discussing a technical challenge, feel free to reach out.
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-3 pt-2">
              {/* Email item with copy button */}
              <div className="flex items-center justify-between p-3.5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[hsl(var(--secondary))] text-[hsl(var(--primary))]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[hsl(var(--muted-foreground))] block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm font-mono font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded hover:bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone item */}
              <div className="flex items-center gap-3 p-3.5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
                <div className="p-2 rounded bg-[hsl(var(--secondary))] text-[hsl(var(--primary))]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[hsl(var(--muted-foreground))] block">
                    Phone / Mobile
                  </span>
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                    className="text-sm font-mono font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
                <div className="p-2 rounded bg-[hsl(var(--secondary))] text-[hsl(var(--primary))]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[hsl(var(--muted-foreground))] block">
                    Location
                  </span>
                  <span className="text-sm font-medium text-[hsl(var(--foreground))]">
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-xs font-mono text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-xs font-mono text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Direct Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="engineering-card rounded-xl p-6 sm:p-8">
              <h3 className="text-base font-semibold text-[hsl(var(--foreground))] mb-1">
                Send Direct Message
              </h3>
              <p className="text-xs text-[hsl(var(--muted-foreground))] mb-5">
                Structured message composer with one-click webmail and mail client dispatch.
              </p>

              {status === "success" && (
                <div className="p-4 mb-5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-500 text-xs font-medium">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Message payload formatted successfully!</span>
                  </div>

                  {dispatchData && (
                    <div className="pt-2 border-t border-emerald-500/20 space-y-2">
                      <p className="text-[11px] text-[hsl(var(--muted-foreground))]">
                        Choose your preferred way to send:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={dispatchData.gmailUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[hsl(var(--foreground))] text-[hsl(var(--background))] text-xs font-medium hover:opacity-90 transition-opacity"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Open in Gmail Web</span>
                        </a>

                        <a
                          href={dispatchData.mailtoUrl}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--foreground))] text-xs font-medium hover:border-[hsl(var(--primary))] transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Open Default Mail App</span>
                        </a>

                        <button
                          type="button"
                          onClick={handleCopyPayload}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--foreground))] text-xs font-medium hover:border-[hsl(var(--primary))] transition-colors"
                        >
                          {copiedPayload ? (
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                          <span>{copiedPayload ? "Copied" : "Copy Message"}</span>
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="text-[11px] font-mono text-[hsl(var(--primary))] hover:underline"
                    >
                      ← Send another message
                    </button>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 mb-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status !== "success" && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot anti-spam field */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono text-[hsl(var(--foreground))] mb-1"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3 py-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--secondary))/50] text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--primary))] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono text-[hsl(var(--foreground))] mb-1"
                      >
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3 py-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--secondary))/50] text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--primary))] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-mono text-[hsl(var(--foreground))] mb-1"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Engineering Role / Project Collaboration"
                      className="w-full px-3 py-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--secondary))/50] text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--primary))] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-[hsl(var(--foreground))] mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Prakhar, I'd like to discuss an opportunity..."
                      className="w-full px-3 py-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--secondary))/50] text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--primary))] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[hsl(var(--foreground))] text-[hsl(var(--background))] font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <span>Sending & Formatting Payload...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
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
