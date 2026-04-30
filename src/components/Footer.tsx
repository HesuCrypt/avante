import { ArrowUpRight, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-avante-dark text-white pt-14 md:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 xl:gap-16 mb-14">
          <div className="xl:col-span-2">
            <div className="flex flex-wrap items-center gap-6 text-sm font-semibold uppercase tracking-wide mb-10 text-blue-100">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <span className="text-white font-black tracking-[0.18em]">Avante Digital Solutions</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-[0.95] max-w-3xl mb-10">
              THE BEST CLIENT RELATIONSHIPS START WITH A GOOD CONVERSATION.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base">
              <div>
                <p className="text-blue-200 mb-3 font-semibold">Head Office</p>
                <p className="text-blue-50">+63 917 000 1234</p>
                <p className="text-blue-50">hello@avantedigital.com</p>
              </div>
              <div>
                <p className="text-blue-200 mb-3 font-semibold">Address</p>
                <p className="text-blue-50">Makati, Metro Manila</p>
                <p className="text-blue-50">Philippines</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
            <p className="text-blue-100 font-semibold mb-4">Subscribe to Newsletter</p>
            <p className="text-blue-200/85 text-sm mb-6">Always fresh updates. Unsubscribe anytime.</p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
              <input
                type="email"
                placeholder="Your email address..."
                className="flex-1 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm placeholder:text-blue-100/80 text-white outline-none focus:border-blue-300 min-w-0"
              />
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-avante-blue px-5 py-3 text-sm font-semibold hover:bg-blue-500 transition-colors w-full sm:w-auto">
                Sign Up <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-3">
              {[Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href={index === 0 ? "https://instagram.com" : "https://linkedin.com"}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={index === 0 ? "Instagram" : "LinkedIn"}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-blue-100 hover:bg-avante-blue hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs md:text-sm text-blue-100">
          <p>&copy; {new Date().getFullYear()} Avante Digital Solutions. All rights reserved.</p>
          <p>Made for modern digital brands.</p>
        </div>
      </div>
    </footer>
  );
}
