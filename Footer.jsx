import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#050f05] border-t border-yellow-400/10 overflow-hidden">
      {/* Decorative top border */}
      <div className="gold-divider"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #ffd700 0px, #ffd700 1px, transparent 1px, transparent 50%)`,
          backgroundSize: '30px 30px'
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full border-2 border-yellow-400 flex items-center justify-center bg-gradient-to-br from-yellow-900/40 to-green-900/40">
                <span className="text-yellow-400 font-bold font-serif">OO</span>
              </div>
              <div>
                <span className="gold-text font-serif text-2xl font-bold tracking-widest">OPAL</span>
                <span className="text-yellow-200/70 font-serif text-2xl font-light tracking-widest ml-2">OUTFITTER</span>
              </div>
            </div>
            <p className="text-yellow-200/50 text-sm leading-relaxed max-w-xs mb-6">
              Curating luxury footwear for the discerning individual. Each pair tells a story of craftsmanship, elegance, and timeless style.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={16} />, label: 'Instagram' },
                { icon: <Facebook size={16} />, label: 'Facebook' },
                { icon: <Twitter size={16} />, label: 'Twitter' },
              ].map((s) => (
                <a key={s.label} href="#" className="w-9 h-9 rounded-full border border-yellow-400/20 flex items-center justify-center text-yellow-400/60 hover:text-yellow-400 hover:border-yellow-400/50 transition-all duration-300 hover:scale-110">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-yellow-400 font-serif font-semibold text-base mb-5 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Collection', path: '/#collection' },
                { label: 'Chunky Loafer', path: '/shoes/chunky-loafer' },
                { label: 'Samba Shoes', path: '/shoes/samba-shoes' },
                { label: 'Formal Shoes', path: '/shoes/formal-shoes' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-yellow-200/50 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-yellow-600 group-hover:bg-yellow-400 transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-yellow-400 font-serif font-semibold text-base mb-5 tracking-wide">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:your.email@gmail.com" className="flex items-start gap-3 text-yellow-200/50 hover:text-yellow-400 transition-colors group">
                  <Mail size={16} className="mt-0.5 text-yellow-600 group-hover:text-yellow-400 flex-shrink-0" />
                  <span className="text-sm">your.email@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/923483351028" className="flex items-start gap-3 text-yellow-200/50 hover:text-yellow-400 transition-colors group">
                  <Phone size={16} className="mt-0.5 text-yellow-600 group-hover:text-yellow-400 flex-shrink-0" />
                  <span className="text-sm">+92 348 335 1028</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-yellow-200/50">
                  <MapPin size={16} className="mt-0.5 text-yellow-600 flex-shrink-0" />
                  <span className="text-sm">Pakistan</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mt-12 mb-6"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-yellow-200/30 text-xs">
          <span>© {new Date().getFullYear()} Opal Outfitter. All rights reserved.</span>
          <span className="flex items-center gap-4">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
