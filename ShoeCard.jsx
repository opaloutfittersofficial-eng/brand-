import { Link } from 'react-router-dom';
import { ArrowRight, Star, Tag } from 'lucide-react';

export default function ShoeCard({ shoe, index }) {
  return (
    <Link to={`/shoes/${shoe.id}`} className="block group">
      <div className="luxury-card rounded-2xl overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="img-zoom relative h-60 sm:h-64">
          <img
            src={shoe.image}
            alt={shoe.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-gradient-to-r from-yellow-700 to-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full tracking-wide">
              {shoe.badge}
            </span>
          </div>

          {/* Category */}
          <div className="absolute top-3 right-3">
            <span className="bg-black/50 backdrop-blur-sm text-yellow-300 text-xs px-2.5 py-1 rounded-full border border-yellow-400/20">
              {shoe.category}
            </span>
          </div>

          {/* Rating */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-yellow-200/70 text-xs ml-1">(4.9)</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-serif text-lg font-bold text-yellow-100 group-hover:text-yellow-400 transition-colors duration-300 mb-2">
            {shoe.name}
          </h3>
          <p className="text-yellow-200/50 text-sm line-clamp-2 mb-4 flex-1 leading-relaxed">
            {shoe.description.slice(0, 120)}...
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-yellow-400/10">
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <Tag size={12} className="text-yellow-600" />
                <span className="text-yellow-200/40 text-xs uppercase tracking-wide">Price</span>
              </div>
              <span className="price-tag font-bold text-xl">
                PKR {shoe.price.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center gap-2 text-yellow-400 font-medium text-sm group-hover:gap-3 transition-all duration-300">
              <span>View</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
