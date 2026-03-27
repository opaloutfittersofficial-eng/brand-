import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Shirt, Footprints, Watch, ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';

const categories = {
  dressing: {
    icon: <Shirt size={32} />,
    title: 'Dressing',
    subtitle: 'Elevate your wardrobe with timeless fashion',
    description: 'From formal suits to casual elegance, our dressing collection is curated for the modern individual who values style without compromise.',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80',
    items: [
      { name: 'Formal Suit Collection', desc: 'Tailored perfection for every occasion', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
      { name: 'Casual Shirts', desc: 'Premium cotton in vibrant styles', img: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&q=80' },
      { name: 'Luxury Kurta', desc: 'Traditional elegance reimagined', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
    ]
  },
  shoes: {
    icon: <Footprints size={32} />,
    title: 'Shoes',
    subtitle: 'Step into luxury with every stride',
    description: 'Discover our handpicked selection of premium footwear. From casual loafers to formal Oxfords, each pair is a statement of refined taste.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80',
    items: [
      { name: 'Chunky Loafer', desc: 'PKR 6,000 — Trending street style', img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80', link: '/shoes/chunky-loafer' },
      { name: 'Samba Shoes', desc: 'PKR 10,000 — Premium sneakers', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80', link: '/shoes/samba-shoes' },
      { name: 'Formal Shoes', desc: 'PKR 5,500 — Classic elegance', img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&q=80', link: '/shoes/formal-shoes' },
    ]
  },
  accessories: {
    icon: <Watch size={32} />,
    title: 'Accessories',
    subtitle: 'The finishing touch to any ensemble',
    description: 'Complete your look with our exclusive accessories collection. Crafted with precision and style to complement every outfit.',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=80',
    items: [
      { name: 'Luxury Watches', desc: 'Timeless timepieces for every wrist', img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&q=80' },
      { name: 'Leather Belts', desc: 'Genuine leather in premium finishes', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80' },
      { name: 'Sunglasses', desc: 'UV protection meets designer style', img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80' },
    ]
  },
  bags: {
    icon: <ShoppingBag size={32} />,
    title: 'Bags',
    subtitle: 'Carry luxury wherever you go',
    description: 'From executive briefcases to casual backpacks, our bag collection merges function with sophisticated style.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&q=80',
    items: [
      { name: 'Executive Briefcase', desc: 'Professional leather briefcases', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80' },
      { name: 'Luxury Backpack', desc: 'Style meets functionality', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80' },
      { name: 'Tote Bags', desc: 'Everyday elegance for every occasion', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4bcc64?w=400&q=80' },
    ]
  },
  new: {
    icon: <Sparkles size={32} />,
    title: 'New Arrivals',
    subtitle: 'Fresh from the collection',
    description: 'Be the first to discover our latest additions. New pieces drop weekly, each carefully selected to meet our standard of excellence.',
    image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=1200&q=80',
    items: [
      { name: 'Derby Formal 2025', desc: 'PKR 6,000 — Latest formal wear', img: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=400&q=80', link: '/shoes/formal-shoes-2' },
      { name: 'Premium Samba', desc: 'PKR 10,000 — New colorways', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80', link: '/shoes/samba-shoes' },
      { name: 'Loafer Redux', desc: 'PKR 6,000 — Reimagined classic', img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80', link: '/shoes/chunky-loafer' },
    ]
  }
};

export default function FashionPage() {
  const { category } = useParams();
  const cat = categories[category] || categories.shoes;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setVisible(false);
    setTimeout(() => setVisible(true), 100);
  }, [category]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-72 sm:h-96 pt-16 overflow-hidden">
        <img src={cat.image} alt={cat.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f0a]/80 to-[#0a1f0a]"></div>
        <div className={`relative z-10 flex flex-col items-center justify-center h-full text-center px-4 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="w-16 h-16 rounded-full border-2 border-yellow-400/40 flex items-center justify-center text-yellow-400 mb-4 bg-green-900/40">
            {cat.icon}
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-2">
            <span className="gold-text">{cat.title}</span>
          </h1>
          <p className="text-yellow-200/60 text-base sm:text-lg max-w-xl">{cat.subtitle}</p>
        </div>
      </div>

      {/* Category Nav */}
      <div className="py-6 px-4 border-b border-yellow-400/10 overflow-x-auto">
        <div className="flex gap-2 max-w-4xl mx-auto justify-center min-w-max">
          {Object.entries(categories).map(([key, c]) => (
            <Link
              key={key}
              to={`/fashion/${key}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${key === category ? 'bg-yellow-500 text-black' : 'border border-yellow-400/20 text-yellow-200/60 hover:border-yellow-400/50 hover:text-yellow-300'}`}
            >
              {c.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Description */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <p className="text-yellow-200/60 text-base leading-relaxed">{cat.description}</p>
      </section>

      {/* Items Grid */}
      <section className="py-8 pb-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cat.items.map((item, i) => (
            <div key={item.name} className={`luxury-card rounded-2xl overflow-hidden ${visible ? `animate-fade-in-up delay-${(i+1)*100}` : 'opacity-0'}`}>
              <div className="img-zoom h-52">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-yellow-100 font-bold text-lg mb-1">{item.name}</h3>
                <p className="text-yellow-200/50 text-sm mb-4">{item.desc}</p>
                {item.link ? (
                  <Link to={item.link} className="btn-gold px-4 py-2 rounded-lg text-sm font-bold inline-flex items-center gap-2">
                    View Details <ArrowRight size={14} />
                  </Link>
                ) : (
                  <a href="https://wa.me/923483351028" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border border-yellow-400/30 text-yellow-400 text-sm font-medium hover:bg-yellow-400/10 transition-all inline-flex items-center gap-2">
                    Enquire <ArrowRight size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
