
import React from 'react';

const SignupScreen: React.FC<{ onBack: () => void; onSignup: () => void }> = ({ onBack, onSignup }) => {
  return (
    <div className="bg-deep-night min-h-screen text-white flex flex-col animate-in slide-in-from-bottom duration-500">
      <header className="p-4 pt-6">
        <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full hover:bg-white/10 active:bg-white/20 transition-all">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
      </header>

      <div className="flex-1 px-6 w-full max-w-md mx-auto pb-10">
        <div className="flex flex-col items-center pt-2 pb-8">
          <div className="relative size-28 mb-6">
            <div className="absolute inset-0 bg-primary rounded-full blur-[40px] opacity-20" />
            <div className="relative size-full bg-[#181611] rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
              <img className="size-full object-cover p-1" src="https://picsum.photos/seed/brand/300/300" alt="Cafe Oz" />
            </div>
          </div>
          <h1 className="text-[32px] font-bold tracking-tight text-center">Join the Tribe</h1>
          <p className="text-secondary-text text-center mt-3 text-base">Create your account to unlock exclusive offers and events at Café Oz.</p>
        </div>

        <form className="flex flex-col gap-5 w-full" onSubmit={(e) => { e.preventDefault(); onSignup(); }}>
          <InputGroup label="Full Name" placeholder="e.g. Crocodile Dundee" icon="person" />
          <InputGroup label="Email Address" placeholder="name@example.com" icon="mail" type="email" />
          <InputGroup label="Password" placeholder="Create a strong password" icon="visibility_off" type="password" isRightIcon />
          <InputGroup label="Confirm Password" placeholder="Repeat your password" icon="check_circle" type="password" isRightIcon />

          <button type="submit" className="w-full bg-primary text-black font-bold h-14 rounded-xl shadow-lg mt-4 active:scale-[0.98] transition-all">
            Create Account
          </button>
        </form>

        <div className="relative my-8 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative bg-deep-night px-4">
            <span className="text-xs uppercase tracking-widest text-secondary-text font-semibold">Or join with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SocialAction label="Apple" icon="https://picsum.photos/seed/apple/20/20" />
          <SocialAction label="Google" icon="https://picsum.photos/seed/googleicon/20/20" />
        </div>

        <div className="mt-8 text-center">
          <p className="text-secondary-text text-sm">
            Already a member? 
            <button onClick={onBack} className="text-primary font-bold hover:text-white transition-colors ml-1">Log In</button>
          </p>
        </div>
      </div>
    </div>
  );
};

const InputGroup: React.FC<{ label: string; placeholder: string; icon: string; type?: string; isRightIcon?: boolean }> = ({ label, placeholder, icon, type = "text", isRightIcon }) => (
  <div className="flex flex-col gap-2">
    <label className="ml-1 text-sm font-semibold text-primary">{label}</label>
    <div className="relative group">
      <input 
        className="w-full h-14 bg-card-dark border border-white/10 rounded-xl text-white placeholder-secondary-text/50 pl-4 pr-12 focus:border-primary focus:ring-0 transition-all" 
        placeholder={placeholder} 
        type={type} 
      />
      <span className={`material-symbols-outlined absolute ${isRightIcon ? 'right-4' : 'right-4'} top-1/2 -translate-y-1/2 text-secondary-text pointer-events-none group-focus-within:text-primary transition-colors`}>
        {icon}
      </span>
    </div>
  </div>
);

const SocialAction: React.FC<{ label: string; icon: string }> = ({ label, icon }) => (
  <button type="button" className="flex h-12 items-center justify-center gap-3 rounded-xl border border-white/10 bg-card-dark hover:bg-white/5 transition-colors font-medium text-sm">
    <img className="size-5" src={icon} alt="" />
    {label}
  </button>
);

export default SignupScreen;
