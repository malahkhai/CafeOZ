
import React from 'react';

interface EventDetailScreenProps {
  eventId: string;
  onBack: () => void;
}

const EventDetailScreen: React.FC<EventDetailScreenProps> = ({ eventId, onBack }) => {
  return (
    <div className="bg-deep-night min-h-screen text-white animate-in slide-in-from-right duration-300">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 pt-12 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto flex size-10 items-center justify-center rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
        </button>
        <button className="pointer-events-auto flex size-10 items-center justify-center rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition-colors">
          <span className="material-symbols-outlined text-[20px]">ios_share</span>
        </button>
      </div>

      {/* Hero */}
      <div className="relative h-[420px] w-full">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/seed/concert/800/600')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-night via-deep-night/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full px-5 pb-6">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="bg-primary/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-black rounded-full shadow-sm backdrop-blur-sm">Live Event</span>
            <span className="bg-white/10 px-3 py-1 text-xs font-semibold text-white rounded-full backdrop-blur-md border border-white/10">Happy Hour</span>
          </div>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm">
            Friday Night Live:<br/>The Super Bowl LVIII
          </h1>
        </div>
      </div>

      <div className="px-5 pt-2 flex flex-col gap-8 pb-32">
        {/* Info Grid */}
        <div className="bg-[#2a2418] rounded-2xl p-5 border border-white/5 flex flex-col gap-5">
          <DetailRow icon="calendar_today" label="Date & Time" value="Sunday, Feb 11 • 11:30 PM" />
          <DetailRow icon="location_on" label="Location" value="Café Oz Châtelet" subValue="View on Map" />
          <DetailRow icon="confirmation_number" label="Entry" value="Free Entry" />
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-3">About Event</h3>
          <p className="text-base leading-relaxed text-slate-300">
            Join us for the ultimate showdown! We're broadcasting the Super Bowl live on our giant HD screens. The atmosphere will be electric with live DJ sets during breaks and an after-party that goes until dawn.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Enjoy our famous happy hour until 10 PM and grab some of our signature Aussie burgers to keep you fueled throughout the game. No reservations for the bar area—first come, first served!
          </p>
        </div>

        {/* Hosted By */}
        <div>
          <h3 className="text-lg font-bold mb-3">Hosted By</h3>
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-full border border-white/10 bg-slate-800 overflow-hidden">
              <img alt="Host" className="h-full w-full object-cover" src="https://picsum.photos/seed/host/100/100" />
            </div>
            <div>
              <p className="text-base font-bold">Café Oz Team</p>
              <p className="text-sm text-slate-400">The Australian Bar</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl border border-white/5 bg-[#2a2418] overflow-hidden">
          <div className="h-40 w-full bg-cover bg-center opacity-80" style={{ backgroundImage: `url('https://picsum.photos/seed/map/400/200')` }}></div>
          <div className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm font-medium">18 Rue Saint-Denis</p>
              <p className="text-xs text-slate-400">75001 Paris, France</p>
            </div>
            <button className="size-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <span className="material-symbols-outlined">directions</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 w-full border-t border-white/10 bg-deep-night/80 px-5 pt-4 backdrop-blur-xl safe-area-bottom pb-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-white/60">Total Price</span>
            <span className="text-xl font-bold text-white">Free</span>
          </div>
          <button className="h-[50px] flex-1 rounded-xl bg-primary text-base font-bold text-black shadow-[0_0_20px_rgba(253,185,28,0.3)] active:scale-95 transition-transform">
            Book a Table
          </button>
        </div>
      </div>
    </div>
  );
};

const DetailRow: React.FC<{ icon: string; label: string; value: string; subValue?: string }> = ({ icon, label, value, subValue }) => (
  <div className="flex items-start gap-4">
    <div className="size-10 shrink-0 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-medium text-white/60">{label}</span>
      <span className="text-base font-bold text-white">{value}</span>
      {subValue && <span className="text-xs text-primary underline mt-0.5 cursor-pointer">{subValue}</span>}
    </div>
  </div>
);

export default EventDetailScreen;
