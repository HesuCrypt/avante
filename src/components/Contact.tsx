import { useEffect, useState, useRef, FormEvent } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (status !== "success" && status !== "error") return;
    const timer = setTimeout(() => setStatus("idle"), 3000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");

    // NOTE: In a real production environment, replace these with actual environment variables
    // For this demo, we'll simulate a successful submission if keys are missing
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_demo";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_demo";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "key_demo";

    try {
      // Simulate API call delay for better UX if keys are dummy
      if (serviceId === "service_demo") {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setStatus("success");
        formRef.current.reset();
        return;
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="bg-avante-blue p-6 md:p-10 text-white md:col-span-2 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-8">Contact Us</h3>
              </div>
              <div className="space-y-4 text-sm text-blue-100">
                <p>contact@avantedigital.com</p>
                <p>+1 (555) 123-4567</p>
                <p>Manila, Philippines</p>
              </div>
            </div>

            <div className="p-6 md:p-10 md:col-span-3">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-slate-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-avante-blue focus:border-transparent outline-none transition-all input-val peer"
                    placeholder="John Doe"
                    onChange={() => status !== "idle" && setStatus("idle")}
                  />
                  <p className="mt-1 text-xs text-red-500 scale-y-0 origin-top peer-[&:user-invalid]:scale-y-100 transition-transform duration-200">
                    Please enter your name.
                  </p>
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-avante-blue focus:border-transparent outline-none transition-all input-val peer"
                    placeholder="john@company.com"
                    onChange={() => status !== "idle" && setStatus("idle")}
                  />
                  <p className="mt-1 text-xs text-red-500 scale-y-0 origin-top peer-[&:user-invalid]:scale-y-100 transition-transform duration-200">
                    Please enter a valid email address.
                  </p>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-avante-blue focus:border-transparent outline-none transition-all resize-none input-val peer"
                    placeholder="Tell us about your project..."
                    onChange={() => status !== "idle" && setStatus("idle")}
                  />
                  <p className="mt-1 text-xs text-red-500 scale-y-0 origin-top peer-[&:user-invalid]:scale-y-100 transition-transform duration-200">
                    Please write a short message.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full py-4 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2 ${
                    status === "success"
                      ? "bg-green-500 hover:bg-green-600"
                      : status === "error"
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-avante-blue hover:bg-avante-dark"
                  }`}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : status === "error" ? (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      Try Again
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
