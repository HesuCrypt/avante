import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-avante-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                AVANTE
              </span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed mb-6">
              Avante Digital Solutions helps brands navigate the digital landscape with confidence. From live streaming to e-commerce, we deliver innovation that drives growth.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-avante-blue hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Services</h4>
            <ul className="space-y-3 text-slate-500">
              <li className="hover:text-avante-blue cursor-pointer transition-colors">Live Streaming</li>
              <li className="hover:text-avante-blue cursor-pointer transition-colors">Digital Marketing</li>
              <li className="hover:text-avante-blue cursor-pointer transition-colors">Social Media</li>
              <li className="hover:text-avante-blue cursor-pointer transition-colors">E-commerce</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-3 text-slate-500">
              <li className="hover:text-avante-blue cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-avante-blue cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-avante-blue cursor-pointer transition-colors">Partners</li>
              <li className="hover:text-avante-blue cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Avante Digital Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-slate-600 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-600 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
