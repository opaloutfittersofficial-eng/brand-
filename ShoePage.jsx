import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Check, ShoppingBag, ChevronRight, Package, Tag, Ruler, Palette } from 'lucide-react';
import { shoes } from '../data/shoes';
import OrderForm from '../components/OrderForm';
export default function ShoePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const shoe = shoes.find((s) => s.id === id);
  const [activeImg, setActiveImg] = useState(0);
  const [showOrder, setShowOrder] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [tab, setTab] = useState('description');
  const [imgLoaded, setImgLoaded] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setImgLoaded(false);
    setTimeout(() => setImgLoaded(true), 100);
  }, [id]);
  if (!shoe) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h2 className="font-serif text-2xl text-yellow-200 mb-4">Shoe not found</h2>
        <Link to="/" className="btn-gold px-6 py-3 rounded-full">Back to Home</Link>
      </div>
    );
  }
  const related = shoes.filter((s) => s.id !== shoe.id).slice(0, 3);
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="pt-24 pb-6 px-4 max-w-7xl mx-auto">
        <div className={`flex items-center gap-2 text-yellow-200/40 text-sm ${imgLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
          <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="hover:text-yellow-400 transition-colors cursor-pointer" onClick={() => navigate('/#collection')}>Collection</span>
          <ChevronRight size={14} />
          <span className="text-yellow-400">{shoe.name}</span>
        </div>
      </div>
      {/* Main Product */}
      <section className="px-4 max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Images */}
          <div className={`${imgLoaded ? 'animate-slide-in-left' : 'opacity-0'}`}>
            {/* Main image */}
            <div className="img-zoom rounded-2xl overflow-hidden luxury-card mb-4 aspect-square">
              <img
                src={shoe.gallery[activeImg]}
                alt={shoe.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {shoe.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-1 rounded-xl overflow-hidden aspect-square border-2 transition-all duration-300 ${activeImg === i ? 'border-yellow-400 shadow-lg shadow-yellow-400/20' : 'border-yellow-400/10 hover:border-yellow-400/40'}`}
                >
                  <img src={img} alt={`${shoe.name} view ${i+1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          {/* Details */}
          <div className={`${imgLoaded ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-gradient-to-r from-yellow-700 to-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                {shoe.badge}
              </span>
              <span className="bg-green-900/50 text-yellow-300 text-xs px-2.5 py-1 rounded-full border border-yellow-400/20">
                {shoe.category}
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-yellow-100 mb-3">{shoe.name}</h1>
            {/* Rating */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-yellow-200/50 text-sm">4.9 (128 reviews)</span>
            </div>
            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="price-tag text-4xl font-extrabold font-serif">PKR {shoe.price.toLocaleString()}</span>
            </div>
            <div className="gold-divider my-5"></div>
            {/* Size selector */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-3">
                <Ruler size={16} className="text-yellow-500" />
                <span className="text-yellow-200 text-sm font-medium">Select Size</span>
                {selectedSize && <span className="text-yellow-400 text-sm font-bold">— {selectedSize}</span>}
              </div>
              <div className="flex flex-wrap gap-2">
                {shoe.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-10 rounded-lg text-sm font-medium transition-all duration-200 ${selectedSize === size ? 'bg-yellow-500 text-black border-2 border-yellow-400 scale-105' : 'border border-yellow-400/20 text-yellow-200/60 hover:border-yellow-400/50 hover:text-yellow-300'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            {/* Color selector */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Palette size={16} className="text-yellow-500" />
                <span className="text-yellow-200 text-sm font-medium">Select Color</span>
                {selectedColor && <span className="text-yellow-400 text-sm font-bold">— {selectedColor}</span>}
              </div>
              <div className="flex flex-wrap gap-2">
                {shoe.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${selectedColor === color ? 'bg-yellow-500 text-black border-2 border-yellow-400' : 'border border-yellow-400/20 text-yellow-200/60 hover:border-yellow-400/50'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                onClick={() => setShowOrder(true)}
                className="btn-gold flex-1 px-6 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2"
              >
                <ShoppingBag size={18} />
                Order Now
              </button>
              <a
                href={`https://wa.me/923483351028?text=${encodeURIComponent(`Hello! I'd like to order: ${shoe.name} (PKR ${shoe.price.toLocaleString()})${selectedSize ? ' | Size: ' + selectedSize : ''}${selectedColor ? ' | Color: ' + selectedColor : ''}`)}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-green-500/40 text-green-400 hover:border-green-400 hover:bg-green-900/20 transition-all duration-300 font-medium flex items-center justify-center gap-2 text-base"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Order
              </a>
            </div>
            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: <Package size={14} />, text: 'Free Delivery' },
                { icon: <Shield size={14} />, text: 'Authentic' },
                { icon: <Check size={14} />, text: 'Easy Returns' },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2 text-yellow-200/50 text-xs bg-green-900/20 rounded-lg px-3 py-2 border border-yellow-400/10">
                  <span className="text-yellow-500">{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Tabs */}
        <div className="mt-16">
          <div className="flex gap-1 mb-8 border-b border-yellow-400/10">
            {['description', 'features', 'details'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-3 text-sm font-medium capitalize transition-all duration-300 border-b-2 ${tab === t ? 'border-yellow-400 text-yellow-400' : 'border-transparent text-yellow-200/50 hover:text-yellow-300'}`}
              >
                {t === 'description' ? 'Description' : t === 'features' ? 'Features' : 'Product Details'}
              </button>
            ))}
          </div>
          {tab === 'description' && (
            <div className="animate-fade-in">
              <div className="max-w-3xl">
                {shoe.description.split('\n\n').map((para, i) => (
                  <p key={i} className="text-yellow-200/60 leading-relaxed mb-4 text-base">{para}</p>
                ))}
              </div>
            </div>
          )}
          {tab === 'features' && (
            <div className="animate-fade-in grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
              {shoe.features.map((f) => (
                <div key={f} className="flex items-center gap-3 luxury-card rounded-xl px-4 py-3">
                  <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-yellow-400" />
                  </div>
                  <span className="text-yellow-200/70 text-sm">{f}</span>
                </div>
              ))}
            </div>
          )}
          {tab === 'details' && (
            <div className="animate-fade-in max-w-md">
              <div className="luxury-card rounded-2xl overflow-hidden">
                {Object.entries(shoe.details).map(([key, val], i) => (
                  <div key={key} className={`flex items-center gap-4 px-5 py-4 ${i % 2 === 0 ? 'bg-green-900/20' : ''}`}>
                    <span className="text-yellow-200/40 text-xs uppercase tracking-widest w-24 flex-shrink-0 capitalize">
                      <Tag size={12} className="inline mr-1 text-yellow-600" />
                      {key}
                    </span>
                    <span className="text-yellow-100 text-sm font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Related */}
        <div className="mt-20">
          <div className="gold-divider mb-12"></div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-8">
            <span className="gold-text">You May</span>
            <span className="text-white ml-2">Also Like</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((s) => (
              <Link key={s.id} to={`/shoes/${s.id}`} className="luxury-card rounded-2xl overflow-hidden group">
                <div className="img-zoom h-48">
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-yellow-100 font-semibold mb-1 group-hover:text-yellow-400 transition-colors">{s.name}</h3>
                  <span className="price-tag font-bold text-lg">PKR {s.price.toLocaleString()}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Order Modal */}
      {showOrder && (
        <OrderForm shoe={shoe} selectedSize={selectedSize} selectedColor={selectedColor} onClose={() => setShowOrder(false)} />
      )}
    </div>
  );
}
