@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Inter:wght@300;400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --gold: #ffd700;
  --gold-light: #ffe566;
  --gold-dark: #b8860b;
  --dark-green: #0a1f0a;
  --mid-green: #0d2b0d;
  --card-green: #112211;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--dark-green);
  color: #e8e0c8;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

#root {
  width: 100%;
  max-width: 100%;
  margin: 0;
  text-align: left;
  border: none;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--dark-green); }
::-webkit-scrollbar-thumb { background: var(--gold-dark); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--gold); }

/* Gold shimmer text */
.gold-text {
  background: linear-gradient(135deg, #ffd700 0%, #ffe566 30%, #b8860b 60%, #ffd700 100%);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulseGold {
  0%, 100% { box-shadow: 0 0 5px #25D366, 0 0 10px #25D366; }
  50% { box-shadow: 0 0 20px #25D366, 0 0 40px #25D366; }
}

@keyframes marquee {
  from { transform: translateX(100vw); }
  to { transform: translateX(-100%); }
}

@keyframes rotateIn {
  from { opacity: 0; transform: rotate(-10deg) scale(0.9); }
  to { opacity: 1; transform: rotate(0) scale(1); }
}

.animate-fade-in { animation: fadeIn 0.8s ease-out both; }
.animate-fade-in-up { animation: fadeInUp 0.8s ease-out both; }
.animate-fade-in-down { animation: fadeInDown 0.6s ease-out both; }
.animate-slide-in-left { animation: slideInLeft 0.7s ease-out both; }
.animate-slide-in-right { animation: slideInRight 0.7s ease-out both; }
.animate-float { animation: float 3s ease-in-out infinite; }
.animate-pulse-gold { animation: pulseGold 2s infinite; }
.animate-marquee { animation: marquee 25s linear infinite; }
.animate-rotate-in { animation: rotateIn 0.5s ease-out both; }

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }

/* Nav glass */
.nav-glass {
  background: rgba(10, 31, 10, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
}

/* Luxury card */
.luxury-card {
  background: linear-gradient(145deg, #112211, #0d2b0d);
  border: 1px solid rgba(255, 215, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.luxury-card:hover {
  border-color: rgba(255, 215, 0, 0.5);
  box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(255,215,0,0.1);
  transform: translateY(-8px);
}

/* Gold button */
.btn-gold {
  background: linear-gradient(135deg, #b8860b 0%, #ffd700 50%, #b8860b 100%);
  background-size: 200% 200%;
  color: #0a1f0a;
  font-weight: 700;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  cursor: pointer;
}
.btn-gold:hover {
  background-position: right center;
  box-shadow: 0 8px 25px rgba(255,215,0,0.4);
  transform: translateY(-2px);
}

/* Image zoom */
.img-zoom { overflow: hidden; }
.img-zoom img { transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94); }
.img-zoom:hover img { transform: scale(1.08); }

/* Gold divider */
.gold-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, #ffd700, transparent);
}

/* Price */
.price-tag {
  background: linear-gradient(135deg, #b8860b, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Luxury input */
.luxury-input {
  background: rgba(17, 34, 17, 0.8);
  border: 1px solid rgba(255,215,0,0.2);
  color: #e8e0c8;
  transition: all 0.3s ease;
}
.luxury-input:focus {
  outline: none;
  border-color: rgba(255,215,0,0.6);
  box-shadow: 0 0 15px rgba(255,215,0,0.1);
}
.luxury-input::placeholder { color: rgba(232,224,200,0.4); }

/* Dropdown */
.fashion-dropdown {
  background: rgba(13, 43, 13, 0.98);
  border: 1px solid rgba(255,215,0,0.2);
  backdrop-filter: blur(20px);
}

/* Hero overlay */
.hero-overlay {
  background: linear-gradient(
    to bottom,
    rgba(10,31,10,0.6) 0%,
    rgba(10,31,10,0.2) 40%,
    rgba(10,31,10,0.85) 100%
  );
}

/* Section bg variants */
.section-alt {
  background: linear-gradient(135deg, #0d2b0d, #0a1f0a);
}

/* Glowing gold border on focus ring */
.gold-ring:focus {
  outline: 2px solid #ffd700;
  outline-offset: 2px;
}

/* WhatsApp green pulse */
.wp-pulse {
  box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  animation: wpPulse 2s infinite;
}
@keyframes wpPulse {
  0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.7); }
  70% { box-shadow: 0 0 0 12px rgba(37,211,102,0); }
  100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
}

/* Parallax section */
.parallax-hero {
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
