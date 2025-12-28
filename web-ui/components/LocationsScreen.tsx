
import React from 'react';

const LocationsScreen: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="sticky top-0 z-20 bg-deep-night/95 backdrop-blur-md safe-area-top p-4">
        <div className="flex items-center justify-between mb-2">
          <button className="text-primary flex items-center text-sm font-medium">
            <span className="material-symbols-outlined text-xl -ml-1">chevron_left</span> Back
          </button>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white leading-tight">Where are we<br/>meeting?</h1>
      </header>

      <div className="px-4 py-2">
        <div className="flex w-full flex-1 items-stretch rounded-xl h-11 bg-card-dark shadow-sm border border-white/5">
          <div className="text-secondary-text flex items-center justify-center pl-3">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </div>
          <input className="bg-transparent border-none focus:ring-0 text-white flex-1 text-base placeholder-secondary-text/70" placeholder="Search city or bar name..." />
        </div>
      </div>

      <div className="px-4 mt-4">
        <div className="bg-card-dark rounded-2xl p-4 border border-white/5 shadow-sm flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <div className="size-10 shrink-0 flex items-center justify-center rounded-full bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-[20px]">near_me</span>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold">Find nearest Oz</p>
              <p className="text-secondary-text text-xs leading-relaxed">Enable location to see bars near you and check wait times.</p>
            </div>
          </div>
          <button className="w-full h-9 rounded-lg bg-primary text-deep-night text-sm font-semibold active:scale-[0.98] transition-all">Allow Location</button>
        </div>
      </div>

      <div className="px-4 mt-8 flex flex-col gap-8">
        <CitySection title="Paris" locations={[
          { name: "Châtelet", addr: "18 Rue Saint-Denis, 75001", badge: "Open until 5am", img: "https://picsum.photos/seed/loc1/500/300" },
          { name: "Denfert-Rochereau", addr: "3 Place Denfert-Rochereau, 75014", badge: "Rooftop Open", img: "https://picsum.photos/seed/loc2/500/300", isAltBadge: true },
          { name: "Grands Boulevards", addr: "8 Boulevard Montmartre, 75009", img: "https://picsum.photos/seed/loc3/500/300" }
        ]} />
        <CitySection title="Lille" locations={[
          { name: "The Australian Bar", addr: "33 Place Louise de Bettignies", badge: "Live Sport", img: "https://picsum.photos/seed/loc4/500/300" }
        ]} />
      </div>
      <div className="h-10" />
    </div>
  );
};

const CitySection: React.FC<{ title: string; locations: any[] }> = ({ title, locations }) => (
  <div className="flex flex-col gap-4">
    <h2 className="text-lg font-bold px-1">{title}</h2>
    {locations.map((loc, i) => (
      <div key={i} className="relative flex flex-col justify-end overflow-hidden rounded-2xl aspect-[16/10] bg-surface-dark shadow-md active:scale-[0.98] transition-transform duration-200 cursor-pointer">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${loc.img}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-night via-deep-night/40 to-transparent opacity-90"></div>
        <div className="relative z-10 p-5">
          {loc.badge && (
            <div className={`absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow-sm ${loc.isAltBadge ? 'bg-white/20 backdrop-blur-md border border-white/10 text-white' : 'bg-primary text-deep-night'}`}>
              {loc.badge}
            </div>
          )}
          <h3 className="text-white text-2xl font-bold leading-tight">{loc.name}</h3>
          <div className="flex items-center text-gray-300 text-sm font-medium gap-1">
            <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
            {loc.addr}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default LocationsScreen;
