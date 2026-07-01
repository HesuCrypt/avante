import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-avante-dark text-white min-h-[100svh] flex flex-col pt-16 lg:pt-24 pb-8 relative overflow-hidden justify-between">
      {/* Background Decor - Refined for depth */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,rgba(10,61,145,0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-12 items-center">
          
          {/* Main Content Area */}
          <div className="lg:col-span-7 flex flex-col h-full justify-center">
            {/* Top Navigation / Brand - Matches IntroSplash Tracking */}
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] mb-16 text-blue-300/60">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white hover:text-blue-400 transition-colors">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white hover:text-blue-400 transition-colors">LinkedIn</a>
              <div className="h-px w-12 bg-white/10 hidden sm:block"></div>
              <span className="text-white tracking-[0.5em]">Avante Digital</span>
            </div>

            {/* Hero Heading - Optimized for stable placement */}
            <h2 className="text-[clamp(2rem,6vw,4rem)] lg:text-[clamp(3rem,4.5vw,5rem)] font-black leading-[0.9] mb-12 lg:mb-16 uppercase tracking-tighter max-w-5xl text-white">
              The best client<br />
              relationships<br />
              start with a good<br />
              conversation.
            </h2>

            {/* Contact Info Grid - Stable Bottom Alignment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-auto">
              <div className="group cursor-default">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-px bg-avante-blue group-hover:w-10 transition-all duration-500" />
                  <p className="text-blue-400/60 text-[10px] uppercase font-bold tracking-[0.3em]">Head Office</p>
                </div>
                <div className="space-y-2 pl-8">
                  <div className="flex items-center gap-3 text-lg font-medium group/item cursor-pointer">
                    <Phone className="w-4 h-4 text-avante-blue" />
                    <span>+63 917 000 1234</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-100/70 hover:text-white transition-colors cursor-pointer">
                    <Mail className="w-4 h-4 text-avante-blue" />
                    <span>hello@avantedigital.com</span>
                  </div>
                </div>
              </div>

              <div className="group cursor-default">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-px bg-avante-blue group-hover:w-10 transition-all duration-500" />
                  <p className="text-blue-400/60 text-[10px] uppercase font-bold tracking-[0.3em]">Location</p>
                </div>
                <div className="space-y-2 pl-8">
                  <div className="flex items-start gap-3 text-lg font-medium">
                    <MapPin className="w-4 h-4 text-avante-blue mt-1.5" />
                    <span>Makati, Metro Manila<br /><span className="text-sm text-blue-100/50 font-normal">Philippines, 1200</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section - Fixed Width for Stability */}
          <div className="lg:col-span-5 h-full flex flex-col justify-start lg:pl-12">
            <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-14 relative group transition-all duration-700 hover:border-white/20">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-avante-blue/5 to-transparent rounded-[3rem] pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Connect with us</h3>
                <p className="text-blue-100/60 text-base mb-10 leading-relaxed max-w-sm">Join our network for exclusive digital insights and project updates.</p>

                <form className="space-y-5 mb-12" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative group/input">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full rounded-2xl border border-white/5 bg-white/5 px-8 py-5 text-base placeholder:text-white/20 text-white outline-none focus:border-white/20 focus:bg-white/[0.08] transition-all duration-500"
                    />
                  </div>
                  <button className="w-full group/btn relative overflow-hidden inline-flex items-center justify-center gap-3 rounded-2xl bg-white text-avante-dark px-10 py-5 text-base font-bold hover:bg-avante-blue hover:text-white transition-all duration-500">
                    <span className="relative z-10">Subscribe Now</span>
                    <ArrowUpRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-500" />
                  </button>
                </form>

                <div className="flex gap-5">
                  {[Instagram, Linkedin].map((Icon, index) => (
                    <a
                      key={index}
                      href={index === 0 ? "https://instagram.com" : "https://linkedin.com"}
                      target="_blank"
                      rel="noreferrer"
                      className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-white hover:text-avante-dark hover:scale-105 transition-all duration-500"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar - Ultra Clean */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-12 mt-12 lg:mt-auto">
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-bold tracking-[0.3em] text-white/20">
          <p className="hover:text-white/40 transition-colors">&copy; {new Date().getFullYear()} Avante Digital Solutions</p>
          <div className="flex items-center gap-10">
            <a href="#privacy" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white/60 transition-colors">Terms</a>
            <p className="text-white/10 hidden lg:block tracking-[0.5em]">Digital Excellence</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
