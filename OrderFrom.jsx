import { useState } from 'react';
import { X, Send, CheckCircle, Package, User, Phone, MapPin, MessageSquare } from 'lucide-react';

const OWNER_EMAIL = 'your.email@gmail.com'; // Replace with actual email

export default function OrderForm({ shoe, selectedSize, selectedColor, onClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    notes: '',
    size: selectedSize || '',
    color: selectedColor || '',
    quantity: '1',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitting(true);

    // Build mailto link with order details
    const subject = encodeURIComponent(`New Order: ${shoe.name} — Opal Outfitter`);
    const body = encodeURIComponent(
`🛍️ NEW ORDER — OPAL OUTFITTER
================================

Product: ${shoe.name}
Price: PKR ${shoe.price.toLocaleString()}
Size: ${form.size || 'Not specified'}
Color: ${form.color || 'Not specified'}
Quantity: ${form.quantity}

CUSTOMER DETAILS
-----------------
Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}
City: ${form.city}

Additional Notes:
${form.notes || 'None'}

================================
Total: PKR ${(shoe.price * parseInt(form.quantity)).toLocaleString()}
`
    );

    // Open Gmail compose in new tab
    const mailtoUrl = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');

    // Simulate sending
    await new Promise((res) => setTimeout(res, 800));
    setSubmitting(false);
    setSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="luxury-card rounded-2xl p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-serif text-xl font-bold text-yellow-100">Place Your Order</h2>
              <p className="text-yellow-200/50 text-sm mt-0.5">{shoe.name} — PKR {shoe.price.toLocaleString()}</p>
            </div>
            <button onClick={onClose} className="w-8 h-8 rounded-full border border-yellow-400/20 flex items-center justify-center text-yellow-400/60 hover:text-yellow-400 hover:border-yellow-400/50 transition-all">
              <X size={16} />
            </button>
          </div>

          {success ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 rounded-full bg-green-900/50 border-2 border-green-400/50 flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={36} className="text-green-400" />
              </div>
              <h3 className="font-serif text-xl font-bold text-yellow-100 mb-2">Order Sent!</h3>
              <p className="text-yellow-200/60 text-sm mb-6 leading-relaxed">
                Your order details have been sent via Gmail. We'll contact you shortly to confirm your order.
              </p>
              <p className="text-yellow-200/40 text-xs mb-6">You can also reach us directly on WhatsApp for faster confirmation.</p>
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/923483351028?text=${encodeURIComponent(`Hello! I just placed an order for: ${shoe.name}. My name is ${form.name}, phone: ${form.phone}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl border-2 border-green-500/40 text-green-400 hover:bg-green-900/20 text-sm font-medium transition-all flex items-center justify-center gap-2"
                >
                  Confirm on WhatsApp
                </a>
                <button onClick={onClose} className="flex-1 btn-gold py-3 rounded-xl text-sm font-bold">
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-900/30 border border-red-500/30 rounded-xl px-4 py-3 text-red-300 text-sm">
                  {error}
                </div>
              )}

              {/* Size & Color */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-yellow-200/60 text-xs font-medium mb-1.5 block uppercase tracking-wide">Size</label>
                  <select
                    name="size"
                    value={form.size}
                    onChange={handleChange}
                    className="luxury-input w-full px-3 py-2.5 rounded-xl text-sm"
                  >
                    <option value="">Select size</option>
                    {shoe.sizes.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-yellow-200/60 text-xs font-medium mb-1.5 block uppercase tracking-wide">Color</label>
                  <select
                    name="color"
                    value={form.color}
                    onChange={handleChange}
                    className="luxury-input w-full px-3 py-2.5 rounded-xl text-sm"
                  >
                    <option value="">Select color</option>
                    {shoe.colors.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="text-yellow-200/60 text-xs font-medium mb-1.5 flex items-center gap-1.5 uppercase tracking-wide">
                  <User size={12} /> Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="luxury-input w-full px-4 py-2.5 rounded-xl text-sm"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-yellow-200/60 text-xs font-medium mb-1.5 flex items-center gap-1.5 uppercase tracking-wide">
                  <Phone size={12} /> Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="0300-0000000"
                  className="luxury-input w-full px-4 py-2.5 rounded-xl text-sm"
                  required
                />
              </div>

              {/* Address */}
              <div>
                <label className="text-yellow-200/60 text-xs font-medium mb-1.5 flex items-center gap-1.5 uppercase tracking-wide">
                  <MapPin size={12} /> Delivery Address <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="House/flat number, street, area"
                  rows={2}
                  className="luxury-input w-full px-4 py-2.5 rounded-xl text-sm resize-none"
                  required
                />
              </div>

              {/* City & Quantity */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-yellow-200/60 text-xs font-medium mb-1.5 flex items-center gap-1.5 uppercase tracking-wide">
                    <MapPin size={12} /> City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="luxury-input w-full px-3 py-2.5 rounded-xl text-sm"
                  />
                </div>
                <div>
                  <label className="text-yellow-200/60 text-xs font-medium mb-1.5 flex items-center gap-1.5 uppercase tracking-wide">
                    <Package size={12} /> Qty
                  </label>
                  <select
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    className="luxury-input w-full px-3 py-2.5 rounded-xl text-sm"
                  >
                    {[1,2,3,4,5].map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="text-yellow-200/60 text-xs font-medium mb-1.5 flex items-center gap-1.5 uppercase tracking-wide">
                  <MessageSquare size={12} /> Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Any special requests or instructions..."
                  rows={2}
                  className="luxury-input w-full px-4 py-2.5 rounded-xl text-sm resize-none"
                />
              </div>

              {/* Total */}
              <div className="bg-green-900/30 rounded-xl px-4 py-3 border border-yellow-400/10 flex justify-between items-center">
                <span className="text-yellow-200/60 text-sm">Total Amount</span>
                <span className="price-tag font-bold text-xl">
                  PKR {(shoe.price * parseInt(form.quantity || 1)).toLocaleString()}
                </span>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-gold w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    Sending Order...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Order via Email
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
