
import React from 'react';

const LoginScreen: React.FC<{ onLogin: () => void; onGoToSignup: () => void }> = ({ onLogin, onGoToSignup }) => {
  return (
    <div className="bg-deep-night min-h-screen text-white flex flex-col animate-in fade-in duration-500">
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-12 pb-6 max-w-md mx-auto w-full">
        <div className="mb-8 flex flex-col items-center">
          <div className="size-24 rounded-full bg-primary/10 flex items-center justify-center mb-4 ring-1 ring-primary/30">
            <img alt="Logo" className="size-20 object-contain" src="https://picsum.photos/seed/logo/200/200" />
          </div>
        </div>
        
        <div className="mb-8 text-center w-full">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome Back, Mate!</h1>
          <p className="text-secondary-text text-sm">Log in to check your points and upcoming events.</p>
        </div>

        <form className="w-full space-y-5" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div className="group">
            <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Email Address</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">mail</span>
              <input 
                className="w-full pl-11 pr-4 py-3.5 bg-card-dark border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-primary focus:ring-0 transition-all" 
                placeholder="mate@cafe-oz.com" 
                type="email" 
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Password</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">lock</span>
              <input 
                className="w-full pl-11 pr-12 py-3.5 bg-card-dark border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-primary focus:ring-0 transition-all" 
                placeholder="••••••••" 
                type="password" 
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 cursor-pointer">visibility</span>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="button" className="text-sm font-medium text-primary hover:text-primary/80">Forgot Password?</button>
          </div>

          <button type="submit" className="w-full bg-primary text-deep-night font-bold text-lg h-[50px] rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform">
            Log In
          </button>
        </form>

        <div className="w-full my-8 flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-slate-700" />
          <span className="text-slate-500 text-sm font-medium">Or continue with</span>
          <div className="h-[1px] flex-1 bg-slate-700" />
        </div>

        <div className="flex w-full gap-4">
          <SocialButton label="Google" icon="https://picsum.photos/seed/google/30/30" />
          <SocialButton label="Apple" materialIcon="ios" />
        </div>
      </div>

      <div className="w-full py-6 text-center border-t border-white/5 bg-black/20">
        <p className="text-slate-400 text-sm">
          Don't have an account? 
          <button onClick={onGoToSignup} className="text-primary font-bold hover:underline ml-1">Sign Up</button>
        </p>
      </div>
    </div>
  );
};

const SocialButton: React.FC<{ label: string; icon?: string; materialIcon?: string }> = ({ label, icon, materialIcon }) => (
  <button className="flex-1 h-[50px] bg-card-dark border border-slate-700 rounded-xl flex items-center justify-center gap-2 hover:border-slate-500 transition-colors">
    {icon ? <img src={icon} className="size-5" alt="" /> : <span className="material-symbols-outlined">{materialIcon}</span>}
    <span className="font-medium text-sm">{label}</span>
  </button>
);

export default LoginScreen;
