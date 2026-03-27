import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Home, Search, ChevronDown, Mail, Shirt, Footprints,
  Watch, X, Menu, ShoppingBag, Sparkles
} from 'lucide-react';

const EMAIL = 'your.email@gmail.com'; // Replace with actual email

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [fashionOpen, setFashionOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const fashionItems = [
    { icon: <Shirt size={16} />, label: 'Dressing', path: '/fashion/dressing' },
    { icon: <Footprints size={16} />, label: 'Shoes', path: '/fashion/shoes' },
    { icon: <Watch size={16} />, label: 'Accessories', path: '/fashion/accessories' },
    { icon: <ShoppingBag size={16} />, label: 'Bags', path: '/fashion/bags' },
    { icon: <Sparkles size={16} />, label: 'New Arrivals', path: '/fashion/new' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-glass shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border-2 border-yellow-400 flex items-center justify-center bg-gradient-to-br from-yellow-900/40 to-green-900/40 group-hover:scale-110 transition-transform duration-300">
                <span className="text-yellow-400 font-bold text-sm font-serif">OO</span>
              </div>
              <div className="hidden sm:block">
                <span className="gold-text font-serif text-xl font-bold tracking-widest">OPAL</span>
                <span className="text-yellow-200/80 font-serif text-xl font-light tracking-widest ml-2">OUTFITTER</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {/* Home */}
              <Link to="/" className="flex items-center gap-2 text-yellow-200/70 hover:text-yellow-400 transition-all duration-300 group text-sm font-medium tracking-wide">
                <Home size={18} className="group-hover:scale-110 transition-transform" />
                <span>Home</span>
              </Link>

              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="flex items-center gap-2 text-yellow-200/70 hover:text-yellow-400 transition-all duration-300 group text-sm font-medium tracking-wide"
              >
                <Search size={18} className="group-hover:scale-110 transition-transform" />
                <span>Search</span>
              </button>

              {/* Fashion Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setFashionOpen(!fashionOpen)}
                  onBlur={() => setTimeout(() => setFashionOpen(false), 200)}
                  className="flex items-center gap-2 text-yellow-200/70 hover:text-yellow-400 transition-all duration-300 group text-sm font-medium tracking-wide"
                >
                  <Shirt size={18} className="group-hover:scale-110 transition-transform" />
                  <span>Fashion</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${fashionOpen ? 'rotate-180' : ''}`} />
                </button>

                {fashionOpen && (
                  <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 fashion-dropdown rounded-xl shadow-2xl p-2 min-w-[180px] animate-fade-in-down">
                    <div className="px-3 py-2 mb-1">
                      <span className="text-yellow-400/60 text-xs uppercase tracking-widest font-medium">Categories</span>
                    </div>
                    {fashionItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-yellow-200/70 hover:text-yellow-400 hover:bg-green-900/50 transition-all duration-200 text-sm"
                      >
                        <span className="text-yellow-400/60">{item.icon}</span>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact */}
              <a
                href="mailto:your.email@gmail.com"
                className="flex items-center gap-2 text-yellow-200/70 hover:text-yellow-400 transition-all duration-300 group text-sm font-medium tracking-wide"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span>Contact</span>
              </a>

              {/* Shop CTA */}
              <Link to="/#collection" className="btn-gold px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300">
                Shop Now
              </Link>
            </div>

            {/* Mobile buttons */}
            <div className="flex md:hidden items-center gap-3">
              <a href="mailto:your.email@gmail.com" className="text-yellow-400/70 hover:text-yellow-400 transition-colors">
                <Mail size={20} />
              </a>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="text-yellow-400/70 hover:text-yellow-400 transition-colors">
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="nav-glass border-t border-yellow-400/10 px-4 py-3 animate-fade-in-down">
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex gap-3">
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search shoes, collections..."
                className="luxury-input flex-1 px-4 py-2.5 rounded-xl text-sm"
              />
              <button type="submit" className="btn-gold px-5 py-2.5 rounded-xl text-sm font-bold">
                Search
              </button>
              <button type="button" onClick={() => setSearchOpen(false)} className="text-yellow-200/60 hover:text-yellow-400 transition-colors">
                <X size={20} />
              </button>
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden nav-glass border-t border-yellow-400/10 animate-fade-in-down">
            <div className="px-4 py-4 space-y-1">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-lg text-yellow-200/70 hover:text-yellow-400 hover:bg-green-900/40 transition-all">
                <Home size={18} /> Home
              </Link>
              <button onClick={() => setFashionOpen(!fashionOpen)} className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-yellow-200/70 hover:text-yellow-400 hover:bg-green-900/40 transition-all text-left">
                <Shirt size={18} /> Fashion <ChevronDown size={14} className={`ml-auto transition-transform ${fashionOpen ? 'rotate-180' : ''}`} />
              </button>
              {fashionOpen && (
                <div className="pl-8 space-y-1">
                  {fashionItems.map((item) => (
                    <Link key={item.label} to={item.path} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-lg text-yellow-200/60 hover:text-yellow-400 text-sm transition-all">
                      {item.icon} {item.label}
                    </Link>
                  ))}
                </div>
              )}
              <a href="mailto:your.email@gmail.com" className="flex items-center gap-3 px-3 py-3 rounded-lg text-yellow-200/70 hover:text-yellow-400 hover:bg-green-900/40 transition-all">
                <Mail size={18} /> Contact
              </a>
              <Link to="/#collection" onClick={() => setMobileOpen(false)} className="btn-gold block text-center mt-3 py-3 rounded-xl text-sm font-bold">
                Shop Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
