
import React from 'react';

const MenuScreen: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="sticky top-0 z-20 bg-deep-night/95 backdrop-blur-md px-4 pb-2 pt-4 border-b border-white/5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-0.5">Order & Pickup</span>
            <button className="flex items-center gap-1 group">
              <h2 className="text-white text-xl font-extrabold leading-tight tracking-tight">Café Oz Denfert</h2>
              <span className="material-symbols-outlined text-primary group-hover:translate-y-0.5 transition-transform text-xl">keyboard_arrow_down</span>
            </button>
          </div>
          <button className="size-10 flex items-center justify-center rounded-full bg-card-dark text-white">
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
        <div className="flex gap-3">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-11 bg-card-dark shadow-sm">
            <div className="text-secondary-text flex items-center justify-center pl-3">
              <span className="material-symbols-outlined text-xl">search</span>
            </div>
            <input className="bg-transparent border-none focus:ring-0 text-white flex-1 text-sm font-medium placeholder-secondary-text px-3" placeholder="Search menu..." />
          </div>
          <button className="size-11 flex items-center justify-center rounded-xl bg-card-dark text-white shadow-sm">
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>
      </header>

      <div className="sticky top-0 z-10 bg-deep-night py-4 pl-4 overflow-x-auto no-scrollbar flex gap-3">
        <button className="flex h-9 shrink-0 items-center justify-center px-5 rounded-full bg-primary text-deep-night text-sm font-bold shadow-lg shadow-primary/20">All</button>
        <button className="flex h-9 shrink-0 items-center justify-center px-5 rounded-full bg-card-dark border border-white/5 text-white text-sm font-medium">FOOD</button>
        <button className="flex h-9 shrink-0 items-center justify-center px-5 rounded-full bg-card-dark border border-white/5 text-white text-sm font-medium">DRINKS</button>
      </div>

      <div className="px-4 mb-8">
        <div className="relative aspect-[2/1] rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
          <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url('https://picsum.photos/seed/beer/800/400')` }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-5 w-full">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-primary text-black text-xs font-bold px-2 py-1 rounded">HAPPY HOUR</span>
              <span className="text-white/80 text-xs font-medium">Until 8PM</span>
            </div>
            <h3 className="text-white text-2xl font-bold leading-tight mb-1">Aussie Hour! 🍻</h3>
            <p className="text-secondary-text text-sm">2-for-1 Foster's Pints on tap.</p>
          </div>
        </div>
      </div>

      <div className="px-4 mb-6">
        <h2 className="text-xl font-bold uppercase tracking-wide mb-4">FOOD</h2>
        <div className="flex flex-col gap-4">
          <MenuItemCard name="Frites" desc="Avec sauces au choix" price="€6.00" img="https://picsum.photos/seed/fries/200/200" />
          <MenuItemCard name="Mini Burgers x3" desc="Bacon, cheddar, sauce BBQ" price="€15.00" img="https://picsum.photos/seed/burgers/200/200" />
          <MenuItemCard name="Chicken Wings x6" desc="Sauce BBQ" price="€11.00" img="https://picsum.photos/seed/wings/200/200" />
        </div>
      </div>

      <div className="px-4 mt-8 mb-4">
        <h2 className="text-xl font-bold uppercase tracking-wide mb-4">DRINKS</h2>
        <div className="flex flex-col gap-4">
          <MenuItemCard name="Pinte de Kro" desc="Kronenbourg 1664" price="€8.00" img="https://picsum.photos/seed/pint/200/200" />
          <MenuItemCard name="Pinte Brooklyn Lager" desc="American Amber Lager" price="€10.00" img="https://picsum.photos/seed/brooklyn/200/200" />
          <MenuItemCard name="Cocktail du moment" desc="Ask our bartender" price="€12.00" img="https://picsum.photos/seed/cocktail/200/200" />
        </div>
      </div>

      <div className="fixed bottom-24 left-4 right-4 z-30 max-w-md mx-auto">
        <button className="w-full bg-primary text-black py-4 px-5 rounded-2xl shadow-xl shadow-black/40 flex items-center justify-between group active:scale-[0.98] transition-all">
          <div className="flex items-center gap-3">
            <div className="bg-black/20 size-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-base">€29.50</span>
              <span className="text-xs font-medium opacity-80">3 items in cart</span>
            </div>
          </div>
          <div className="flex items-center gap-2 font-bold">
            Schedule Pickup <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </button>
      </div>
      <div className="h-32" />
    </div>
  );
};

const MenuItemCard: React.FC<{ name: string; desc: string; price: string; img: string }> = ({ name, desc, price, img }) => (
  <div className="flex gap-4 p-3 rounded-2xl bg-card-dark border border-white/5 shadow-sm active:scale-[0.99] transition-transform cursor-pointer">
    <div className="size-24 shrink-0 rounded-xl bg-cover bg-center" style={{ backgroundImage: `url('${img}')` }}></div>
    <div className="flex flex-col flex-1 justify-between py-0.5">
      <div>
        <h3 className="text-white font-bold text-lg leading-tight mb-1">{name}</h3>
        <p className="text-secondary-text text-sm line-clamp-2 leading-snug">{desc}</p>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-white font-bold">{price}</span>
        <button className="size-8 rounded-full bg-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
          <span className="material-symbols-outlined text-xl">add</span>
        </button>
      </div>
    </div>
  </div>
);

export default MenuScreen;
