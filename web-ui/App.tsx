
import React, { useState } from 'react';
import { Tab } from './types';
import EventsScreen from './components/EventsScreen';
import LocationsScreen from './components/LocationsScreen';
import MenuScreen from './components/MenuScreen';
import ClubScreen from './components/ClubScreen';
import ProfileScreen from './components/ProfileScreen';
import EventDetailScreen from './components/EventDetailScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Events');
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isSigningUp, setIsSigningUp] = useState<boolean>(false);

  // Simple Auth Flow simulation
  if (!isAuthenticated) {
    if (isSigningUp) {
      return <SignupScreen onBack={() => setIsSigningUp(false)} onSignup={() => setIsAuthenticated(true)} />;
    }
    return <LoginScreen onLogin={() => setIsAuthenticated(true)} onGoToSignup={() => setIsSigningUp(true)} />;
  }

  // Event Detail Screen takes priority if an event is selected
  if (selectedEventId) {
    return <EventDetailScreen eventId={selectedEventId} onBack={() => setSelectedEventId(null)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'Events':
        return <EventsScreen onSelectEvent={setSelectedEventId} />;
      case 'Locations':
        return <LocationsScreen />;
      case 'Menu':
        return <MenuScreen />;
      case 'Sub':
        return <ClubScreen />;
      case 'Profile':
        return <ProfileScreen onLogout={() => setIsAuthenticated(false)} />;
      default:
        return <EventsScreen onSelectEvent={setSelectedEventId} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto relative bg-deep-night shadow-2xl">
      <main className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#181610]/90 backdrop-blur-xl border-t border-white/5 safe-area-bottom max-w-md mx-auto">
        <div className="flex justify-around items-center h-16 px-2">
          <TabButton 
            icon="calendar_month" 
            label="Events" 
            isActive={activeTab === 'Events'} 
            onClick={() => setActiveTab('Events')} 
          />
          <TabButton 
            icon="map" 
            label="Locations" 
            isActive={activeTab === 'Locations'} 
            onClick={() => setActiveTab('Locations')} 
          />
          <TabButton 
            icon="restaurant_menu" 
            label="Menu" 
            isActive={activeTab === 'Menu'} 
            onClick={() => setActiveTab('Menu')} 
          />
          <TabButton 
            icon="loyalty" 
            label="Club" 
            isActive={activeTab === 'Sub'} 
            onClick={() => setActiveTab('Sub')} 
          />
          <TabButton 
            icon="person" 
            label="Profile" 
            isActive={activeTab === 'Profile'} 
            onClick={() => setActiveTab('Profile')} 
          />
        </div>
      </nav>
    </div>
  );
};

interface TabButtonProps {
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, label, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${isActive ? 'text-primary' : 'text-secondary-text'}`}
  >
    <span className={`material-symbols-outlined text-[26px] ${isActive ? 'filled' : ''}`}>{icon}</span>
    <span className="text-[10px] font-medium">{label}</span>
  </button>
);

export default App;
