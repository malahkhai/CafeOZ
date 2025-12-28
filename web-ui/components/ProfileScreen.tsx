
import React from 'react';

const ProfileScreen: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="sticky top-0 z-20 bg-deep-night/95 backdrop-blur-sm p-4 pb-2">
        <div className="flex items-center h-10 justify-end">
          <button className="text-primary text-base font-bold active:opacity-70 transition-opacity">Edit</button>
        </div>
        <h1 className="text-white tracking-tight text-[34px] font-bold leading-tight">Profile</h1>
      </header>

      <div className="px-4 pb-6 pt-2">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="size-20 rounded-full border-2 border-primary shadow-lg bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/seed/alex/200/200')` }} />
            <div className="absolute bottom-0 right-0 bg-primary rounded-full p-1 border-2 border-deep-night">
              <span className="material-symbols-outlined text-[14px] text-black font-bold flex">camera_alt</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-bold leading-tight">G'day, Alex!</p>
            <p className="text-sm font-medium text-secondary-text">Member since 2021</p>
          </div>
        </div>
      </div>

      <div className="px-4 pb-8">
        <div className="relative overflow-hidden w-full rounded-2xl shadow-xl bg-gradient-to-br from-[#f9b81f] via-[#eeb01c] to-[#d49a12] p-5 flex flex-col justify-between h-48">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5c4208] mb-1">Status</span>
              <span className="text-2xl font-extrabold text-[#231d0f]">Oz Legend</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-2">
              <span className="material-symbols-outlined text-[#231d0f] text-[28px]">qr_code_2</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-auto">
            <div className="flex justify-between items-end mb-1">
              <span className="text-[#5c4208] font-bold text-sm">Points Balance</span>
              <span className="text-[#231d0f] font-black text-3xl">1,250</span>
            </div>
            <div className="w-full bg-[#bd8a13]/30 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#231d0f] h-full rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[#5c4208] text-[10px] font-medium">750 to next tier</span>
              <span className="text-[#231d0f] text-xs font-bold hover:underline cursor-pointer">View Rewards</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 flex flex-col gap-6">
        <MenuSection title="My Activity" items={[
          { icon: 'calendar_month', label: 'My Bookings' },
          { icon: 'local_activity', label: 'Upcoming Events', badge: '2' },
          { icon: 'favorite', label: 'Saved Drinks' }
        ]} />
        <MenuSection title="Account" items={[
          { icon: 'person', label: 'Personal Details' },
          { icon: 'credit_card', label: 'Payment Methods' },
          { icon: 'notifications', label: 'Notifications' }
        ]} />
        <MenuSection title="Support" items={[
          { icon: 'help', label: 'Help & Support' },
          { icon: 'logout', label: 'Log Out', isDanger: true, onClick: onLogout }
        ]} />
      </div>

      <div className="mt-8 mb-10 text-center">
        <p className="text-gray-600 text-xs font-medium">Café Oz App v2.4.1</p>
      </div>
    </div>
  );
};

const MenuSection: React.FC<{ title: string; items: any[] }> = ({ title, items }) => (
  <div>
    <h3 className="text-secondary-text text-xs font-bold uppercase tracking-wider px-1 pb-2">{title}</h3>
    <div className="rounded-xl bg-card-dark border border-white/5 overflow-hidden flex flex-col">
      {items.map((item, i) => (
        <button 
          key={i} 
          onClick={item.onClick}
          className={`flex items-center gap-4 px-4 py-4 justify-between active:bg-white/5 transition-colors border-b border-white/5 last:border-0 ${item.isDanger ? 'text-red-500' : 'text-white'}`}
        >
          <div className="flex items-center gap-4">
            <div className={`size-9 flex items-center justify-center rounded-lg shrink-0 ${item.isDanger ? 'bg-red-500/10' : 'bg-primary/10 text-primary'}`}>
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <p className="text-base font-medium truncate flex-1 text-left">{item.label}</p>
          </div>
          {item.badge ? (
            <div className="flex items-center gap-2">
              <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{item.badge}</span>
              <span className="material-symbols-outlined text-gray-500 text-[20px]">arrow_forward_ios</span>
            </div>
          ) : (
            !item.isDanger && <span className="material-symbols-outlined text-gray-500 text-[20px]">arrow_forward_ios</span>
          )}
        </button>
      ))}
    </div>
  </div>
);

export default ProfileScreen;
