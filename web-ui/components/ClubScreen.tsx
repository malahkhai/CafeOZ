
import React from 'react';

const ClubScreen: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 bg-deep-night min-h-screen text-white">
      <header className="sticky top-0 z-20 flex items-end justify-between bg-deep-night/95 px-4 pb-4 pt-14 backdrop-blur-md">
        <h1 className="text-3xl font-bold tracking-tight">Oz Club</h1>
        <button className="text-sm font-medium text-primary">Restore</button>
      </header>

      <main className="flex flex-col gap-6 px-4 pt-2 pb-24">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold leading-tight">Unlock the Full<br/><span className="text-primary">Oz Experience</span></h2>
          <p className="text-sm text-secondary-text">Join the tribe and enjoy exclusive perks at all locations.</p>
        </div>

        <div className="flex w-full rounded-xl bg-card-dark p-1">
          <button className="flex-1 h-10 rounded-lg text-sm font-medium text-secondary-text">Monthly</button>
          <button className="flex-1 h-10 rounded-lg bg-primary text-black font-bold text-sm">Yearly <span className="ml-1 text-[10px] font-normal opacity-80">-15%</span></button>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-card-dark shadow-lg ring-1 ring-white/5">
          <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/seed/club/600/300')` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent"></div>
          </div>
          <div className="relative -mt-12 p-5 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="mb-1 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-primary">BEST VALUE</span>
                <h3 className="text-xl font-bold">Oz Gold Member</h3>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">€59.99</p>
                <p className="text-xs text-secondary-text">per year</p>
              </div>
            </div>
            <div className="h-px w-full bg-white/10" />
            <div className="flex flex-col gap-4 py-2">
              <BenefitItem icon="bolt" title="Skip the Line" sub="Express entry at all locations" />
              <BenefitItem icon="celebration" title="Happy Hour Extension" sub="Happy hour prices all night Thursdays" />
              <BenefitItem icon="cake" title="Birthday Treat" sub="Free bottle of bubbly on your week" />
              <BenefitItem icon="confirmation_number" title="Priority Access" sub="Early bird tickets for special events" />
            </div>
            <button className="mt-2 w-full py-3.5 rounded-xl bg-primary text-black text-sm font-bold shadow-[0_0_15px_rgba(249,184,31,0.3)] active:scale-95 transition-transform">
              Become a Member
            </button>
            <p className="text-center text-[10px] text-secondary-text">Recurring billing. Cancel anytime via Apple ID.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <ManageLink label="Manage Payment Methods" />
          <ManageLink label="Terms of Service" />
        </div>
      </main>
    </div>
  );
};

const BenefitItem: React.FC<{ icon: string; title: string; sub: string }> = ({ icon, title, sub }) => (
  <div className="flex items-center gap-3">
    <div className="size-8 shrink-0 flex items-center justify-center rounded-full bg-white/5 text-primary">
      <span className="material-symbols-outlined text-lg">{icon}</span>
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-semibold">{title}</span>
      <span className="text-xs text-secondary-text">{sub}</span>
    </div>
  </div>
);

const ManageLink: React.FC<{ label: string }> = ({ label }) => (
  <button className="flex items-center justify-between rounded-lg bg-card-dark px-4 py-3 active:bg-white/5 transition-colors">
    <span className="text-sm font-medium">{label}</span>
    <span className="material-symbols-outlined text-secondary-text text-lg">chevron_right</span>
  </button>
);

export default ClubScreen;
