import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Shield, Truck, RotateCcw, ChevronDown, Star, Sparkles } from 'lucide-react';
import ShoeCard from '../components/ShoeCard';
import { shoes } from '../data/shoes';
function useIntersection(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}
function AnimatedSection({ children, className = '', delay = '' }) {
  const [ref, visible] = useIntersection();
  return (
    <div ref={ref} className={`${className} ${visible ? `animate-fade-in-up ${delay}` : 'opacity-0'}`}>
      {children}
    </div>
  );
}
export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setHeroLoaded(true), 100);
  }, []);
  const features = [
    { icon: <Award size={24} />, title: 'Premium Quality', desc: 'Handpicked luxury materials from the finest sources' },
    { icon: <Shield size={24} />, title: 'Authenticity Guaranteed', desc: 'Every pair verified and certified genuine' },
    { icon: <Truck size={24} />, title: 'Fast Delivery', desc: 'Swift nationwide delivery to your doorstep' },
    { icon: <RotateCcw size={24} />, title: 'Easy Returns', desc: 'Hassle-free 7-day return policy' },
  ];
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=1600&q=90"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0"></div>
          {/* Decorative circles */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-yellow-400/5 animate-spin-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full border border-yellow-400/10"></div>
        </div>
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400"></div>
              <span className="text-yellow-400 text-sm font-medium tracking-[0.3em] uppercase">Luxury Footwear</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold mb-4 leading-tight">
              <span className="gold-text">OPAL</span>
              <br />
              <span className="text-white">OUTFITTER</span>
            </h1>
            <p className="text-yellow-200/70 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-10">
              Where every step speaks luxury. Discover our curated collection of premium footwear crafted for the modern connoisseur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#collection" className="btn-gold px-8 py-4 rounded-full text-base font-bold tracking-wide flex items-center justify-center gap-2">
                Explore Collection <ArrowRight size={18} />
              </a>
              <a href="https://wa.me/923483351028" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full border-2 border-yellow-400/40 text-yellow-200 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 text-base font-medium">
                Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <a href="#marquee" className="flex flex-col items-center gap-2 text-yellow-400/50 hover:text-yellow-400 transition-colors">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown size={18} className="animate-bounce" />
          </a>
        </div>
      </section>
      {/* MARQUEE */}
      <div id="marquee" className="py-4 bg-gradient-to-r from-yellow-900/20 via-yellow-700/10 to-yellow-900/20 border-y border-yellow-400/10 overflow-hidden">
        <div className="animate-marquee flex gap-16 whitespace-nowrap">
          {['Premium Leather', 'Handcrafted', 'Luxury Footwear', 'Made for You', 'Opal Outfitter', 'New Collection', 'Free Delivery', 'Authentic Quality', 'Shop Now'].map((text, i) => (
            <span key={i} className="text-yellow-400/60 text-sm font-medium tracking-widest uppercase flex items-center gap-4">
              <Sparkles size={12} className="text-yellow-500" />
              {text}
            </span>
          ))}
        </div>
      </div>
      {/* FEATURES */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={`delay-${(i+1)*100}`}>
              <div className="luxury-card rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-900/50 to-green-900/50 border border-yellow-400/20 flex items-center justify-center mx-auto mb-4 text-yellow-400">
                  {f.icon}
                </div>
                <h3 className="font-serif text-yellow-100 font-semibold mb-2">{f.title}</h3>
                <p className="text-yellow-200/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
      {/* COLLECTION */}
      <section id="collection" className="py-20 px-4 section-alt">
        <div className="max-w-7xl mx-auto w-full">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400"></div>
              <span className="text-yellow-500 text-xs font-medium tracking-[0.3em] uppercase">Our Collection</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gold-text">Signature</span>
              <span className="text-white ml-3">Footwear</span>
            </h2>
            <p className="text-yellow-200/50 max-w-lg mx-auto text-base leading-relaxed">
              Each piece in our collection is a testament to uncompromising quality and timeless style. Explore our curated selection.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {shoes.map((shoe, i) => (
              <AnimatedSection key={shoe.id} delay={`delay-${(i+1)*100}`}>
                <ShoeCard shoe={shoe} index={i} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <AnimatedSection className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400"></div>
            <span className="text-yellow-500 text-xs font-medium tracking-[0.3em] uppercase">Testimonials</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            <span className="gold-text">What Our</span>
            <span className="text-white ml-3">Clients Say</span>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Ahmed K.', review: 'The Samba shoes are absolutely stunning. The quality is exceptional and they arrived perfectly packaged. Worth every rupee!', rating: 5, location: 'Lahore' },
            { name: 'Fatima R.', review: 'I ordered the Chunky Loafers and I am in love. The leather quality is top-notch and the fit is perfect. Highly recommend Opal Outfitter!', rating: 5, location: 'Karachi' },
            { name: 'Usman A.', review: 'The formal shoes are exactly what I needed for my office look. Elegant, comfortable and the delivery was super fast.', rating: 5, location: 'Islamabad' },
          ].map((t, i) => (
            <AnimatedSection key={t.name} delay={`delay-${(i+1)*100}`}>
              <div className="luxury-card rounded-2xl p-6">
                <div className="flex mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-yellow-200/60 text-sm leading-relaxed mb-5 italic">"{t.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-800 to-green-900 flex items-center justify-center text-yellow-300 text-sm font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-yellow-300 text-sm font-semibold">{t.name}</div>
                    <div className="text-yellow-200/40 text-xs">{t.location}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
      {/* CTA BANNER */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=1400&q=80"
            alt="CTA"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f0a] via-[#0a1f0a]/80 to-[#0a1f0a]"></div>
        </div>
        <AnimatedSection className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            <span className="text-white">Step Into</span>
            <br />
            <span className="gold-text">Luxury Today</span>
          </h2>
          <p className="text-yellow-200/60 text-base mb-8 leading-relaxed">
            Join hundreds of satisfied customers who have elevated their style with Opal Outfitter. Order now and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#collection" className="btn-gold px-8 py-4 rounded-full text-base font-bold tracking-wide">
              Shop the Collection
            </a>
            <a href="https://wa.me/923483351028?text=Hello!%20I'd%20like%20to%20place%20an%20order." target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full border-2 border-green-500/50 text-green-400 hover:border-green-400 hover:bg-green-900/20 transition-all duration-300 text-base font-medium flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Order
            </a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
