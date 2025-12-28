
import React from 'react';

interface EventsScreenProps {
  onSelectEvent: (id: string) => void;
}

const EventsScreen: React.FC<EventsScreenProps> = ({ onSelectEvent }) => {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="sticky top-0 z-20 bg-deep-night/95 backdrop-blur-md safe-area-top">
        <div className="px-4 pb-2 pt-4 flex flex-col gap-4">
          <div className="flex items-center justify-between h-12">
            <div className="flex flex-col">
              <span className="text-secondary-text text-xs font-semibold uppercase tracking-wider">Café Oz App</span>
              <span className="text-white text-sm font-medium">Sat, Oct 28</span>
            </div>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-card-dark text-primary active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-[24px]">search</span>
            </button>
          </div>
          <h1 className="text-white text-4xl font-bold tracking-tight">Browse Events</h1>
        </div>
        <div className="flex gap-3 px-4 pb-4 overflow-x-auto no-scrollbar">
          {['All Locations', 'Châtelet', 'Denfert', 'Grands Boulevards', 'Lille'].map((loc, i) => (
            <button key={loc} className={`flex h-9 shrink-0 items-center justify-center px-5 rounded-full text-sm font-bold transition-all active:scale-95 ${i === 0 ? 'bg-primary text-deep-night shadow-glow' : 'bg-card-dark border border-white/10 text-cool-sand'}`}>
              {loc}
            </button>
          ))}
        </div>
      </header>

      <section className="mt-6">
        <div className="px-4 flex items-baseline justify-between mb-3">
          <h2 className="text-2xl font-bold text-white">Featured</h2>
          <button className="text-primary text-sm font-semibold hover:text-primary-dark transition-colors">See all</button>
        </div>
        <div className="flex overflow-x-auto gap-4 px-4 pb-4 no-scrollbar snap-x snap-mandatory">
          {/* Featured Card 1 */}
          <div className="snap-center shrink-0 w-[85%] max-w-[320px] rounded-2xl overflow-hidden bg-card-dark border border-white/5 shadow-lg group cursor-pointer" onClick={() => onSelectEvent('superbowl')}>
            <div className="relative h-48 w-full">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/seed/nightclub/600/400')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent opacity-90"></div>
              <div className="absolute top-3 left-3 bg-primary text-deep-night text-xs font-bold px-2.5 py-1 rounded-md">TONIGHT</div>
              <button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-primary hover:text-deep-night transition-colors">
                <span className="material-symbols-outlined text-[18px]">favorite</span>
              </button>
            </div>
            <div className="p-4 flex flex-col gap-3 -mt-4 relative">
              <h3 className="text-white text-lg font-bold leading-tight">Friday Night Live DJ Set</h3>
              <div className="flex items-center gap-1 text-cool-sand/70 text-sm">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                <span>Café Oz Châtelet</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <div className="flex -space-x-2">
                  <img alt="User" className="w-7 h-7 rounded-full border-2 border-card-dark" src="https://picsum.photos/seed/u1/40/40" />
                  <img alt="User" className="w-7 h-7 rounded-full border-2 border-card-dark" src="https://picsum.photos/seed/u2/40/40" />
                  <div className="w-7 h-7 rounded-full border-2 border-card-dark bg-gray-700 flex items-center justify-center text-[10px] font-bold text-white">+120</div>
                </div>
                <button className="bg-primary text-deep-night text-sm font-bold px-4 py-2 rounded-lg active:scale-95 transition-all">Join Party</button>
              </div>
            </div>
          </div>

          {/* Featured Card 2 */}
          <div className="snap-center shrink-0 w-[85%] max-w-[320px] rounded-2xl overflow-hidden bg-card-dark border border-white/5 shadow-lg group cursor-pointer">
            <div className="relative h-48 w-full">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/seed/rugby/600/400')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent opacity-90"></div>
              <div className="absolute top-3 left-3 bg-sunset-orange text-white text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">local_fire_department</span> SELLING FAST
              </div>
            </div>
            <div className="p-4 flex flex-col gap-3 -mt-4 relative">
              <h3 className="text-white text-lg font-bold leading-tight">Rugby World Cup Final</h3>
              <div className="flex items-center gap-1 text-cool-sand/70 text-sm">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                <span>Grands Boulevards</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm font-medium text-primary">Oct 28 • 8:00 PM</span>
                <button className="bg-primary text-deep-night text-sm font-bold px-4 py-2 rounded-lg active:scale-95 transition-all">Book Table</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 px-4 pb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Upcoming Events</h2>
        <div className="flex flex-col gap-4">
          <EventListItem 
            title="Halloween Costume Party" 
            desc="Prepare for the spookiest night of the year with our special cocktail menu."
            loc="All Locations"
            date="OCT 31"
            img="https://picsum.photos/seed/halloween/600/400"
            actionLabel="Get Tickets"
          />
          <EventListItem 
            title="Ladies Night" 
            desc="Free entry and welcome drink for ladies every Wednesday night."
            loc="Rooftop Bar"
            date="WED WKLY"
            img="https://picsum.photos/seed/ladies/600/400"
            actionLabel="More Info"
          />
          <EventListItem 
            title="Premier League: MCI vs LIV" 
            desc="Watch the match live on our giant screens with surround sound."
            loc="Denfert-Rochereau"
            date="LIVE NOW"
            img="https://picsum.photos/seed/football/600/400"
            isLive
            actionLabel="Book Table"
          />
        </div>
      </section>
    </div>
  );
};

interface EventListItemProps {
  title: string;
  desc: string;
  loc: string;
  date: string;
  img: string;
  isLive?: boolean;
  actionLabel: string;
}

const EventListItem: React.FC<EventListItemProps> = ({ title, desc, loc, date, img, isLive, actionLabel }) => (
  <div className="flex flex-col bg-card-dark rounded-2xl overflow-hidden border border-white/5 shadow-md active:scale-[0.99] transition-transform cursor-pointer">
    <div className="relative h-40 w-full">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${img}')` }}></div>
      <div className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-center ${isLive ? 'bg-sunset-orange shadow-lg' : 'bg-black/60 backdrop-blur-md border border-white/10'}`}>
        <span className={`block text-xs font-bold uppercase ${isLive ? 'text-white' : 'text-primary'}`}>{date.split(' ')[0]}</span>
        <span className="block text-lg text-white font-bold leading-none">{date.split(' ')[1] || ''}</span>
      </div>
    </div>
    <div className="p-4 flex flex-col gap-2">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-secondary-text mt-1">{desc}</p>
      <div className="mt-2 pt-3 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-cool-sand/80">
          <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
          {loc}
        </div>
        <span className="text-primary text-sm font-bold flex items-center gap-1">
          {actionLabel} <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </span>
      </div>
    </div>
  </div>
);

export default EventsScreen;
