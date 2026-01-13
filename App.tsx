import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { AuthoritySection } from './components/AuthoritySection';
import { PlanSection } from './components/PlanSection';
import { SummarySection } from './components/SummarySection';
import { Footer } from './components/Footer';
import { PropertyTypesPage } from './components/PropertyTypesPage';
import { ContactFormSection } from './components/ContactFormSection';
import { DemoModal } from './components/DemoModal';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { WhyChooseUsPage } from './components/WhyChooseUsPage';
import { HelpCenterPage } from './components/HelpCenterPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';


// Solutions
import { CommunicationsPage } from './components/solutions/CommunicationsPage';
import { AccessControlPage } from './components/solutions/AccessControlPage';
import { EmergencyPage } from './components/solutions/EmergencyPage';
import { DocumentsPage } from './components/solutions/DocumentsPage';
import { RequestsPage } from './components/solutions/RequestsPage';
import { VotingPage } from './components/solutions/VotingPage';
import { CommonAreasPage } from './components/solutions/CommonAreasPage';
import { FinancialPage } from './components/solutions/FinancialPage';
import { AssembliesPage } from './components/solutions/AssembliesPage';
import { EventsPage } from './components/solutions/EventsPage';
import { CompliancePage } from './components/solutions/CompliancePage';

type PageView = 'home' | 'properties' | 'about' | 'contact' | 'why-us' | 'help-center' | 'communications' | 'access' | 'emergency' | 'documents' | 'requests' | 'voting' | 'common' | 'financial' | 'assemblies' | 'events' | 'compliance' | 'privacy';

function App() {

  const [currentView, setCurrentView] = useState<PageView>('home');
  const [initialPropertyTab, setInitialPropertyTab] = useState<string | undefined>(undefined);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoType, setDemoType] = useState<string>('general');

  // Loading Logic


  const handleNavigate = (target: string, subTarget?: string) => {
    // Logic to switch views based on target
    if (target === 'properties') {
      setCurrentView('properties');
      setInitialPropertyTab(subTarget);
    } else if (target === 'about') {
      setCurrentView('about');
    } else if (target === 'contact') {
      setCurrentView('contact');
    } else if (target === 'why-us') {
      setCurrentView('why-us');
    } else if (target === 'help-center') {
      setCurrentView('help-center');
    } else if (target === 'privacy') {
      setCurrentView('privacy');
    } else if (target === 'solution') {
      switch (subTarget) {
        case 'Comunicaciones': setCurrentView('communications'); break;
        case 'Seguridad y control de accesos': setCurrentView('access'); break;
        case 'Alertas de emergencia': setCurrentView('emergency'); break;
        case 'Gestión documental': setCurrentView('documents'); break;
        case 'Solicitudes': setCurrentView('requests'); break;
        case 'Votaciones y encuestas': setCurrentView('voting'); break;
        case 'Áreas comunes': setCurrentView('common'); break;
        case 'Gestión financiera': setCurrentView('financial'); break;
        case 'Asambleas': setCurrentView('assemblies'); break;
        case 'Eventos': setCurrentView('events'); break;
        case 'Compliance': setCurrentView('compliance'); break;
        default: setCurrentView('home');
      }
    } else if (target === 'home') {
      setCurrentView('home');
    } else {
      setCurrentView('home');
    }
  };

  const handleOpenDemo = (type: string = 'general') => {
    setDemoType(type);
    setIsDemoModalOpen(true);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'about': return <AboutPage onOpenDemo={() => handleOpenDemo('general')} />;
      case 'contact': return <ContactPage onNavigate={handleNavigate} />;
      case 'why-us': return <WhyChooseUsPage onOpenDemo={() => handleOpenDemo('general')} />;
      case 'help-center': return <HelpCenterPage onOpenDemo={() => handleOpenDemo('general')} />;
      case 'communications': return <CommunicationsPage onOpenDemo={() => handleOpenDemo('general')} />;
      case 'access': return <AccessControlPage onOpenDemo={() => handleOpenDemo('general')} />;
      case 'emergency': return <EmergencyPage onOpenDemo={() => handleOpenDemo('general')} />;
      case 'documents': return <DocumentsPage onOpenDemo={() => handleOpenDemo('general')} />;
      case 'requests': return <RequestsPage onOpenDemo={() => handleOpenDemo('general')} />;
      case 'voting': return <VotingPage onOpenDemo={() => handleOpenDemo('general')} />;
      case 'common': return <CommonAreasPage onOpenDemo={() => handleOpenDemo('general')} />;
      case 'financial': return <FinancialPage onOpenDemo={() => handleOpenDemo('general')} />;
      case 'assemblies': return <AssembliesPage onOpenDemo={() => handleOpenDemo('general')} />;
      case 'events': return <EventsPage onOpenDemo={() => handleOpenDemo('general')} />;
      case 'compliance': return <CompliancePage onOpenDemo={() => handleOpenDemo('general')} />;
      case 'privacy': return <PrivacyPolicyPage onOpenDemo={() => handleOpenDemo('general')} />;
      case 'properties': return <PropertyTypesPage initialTab={initialPropertyTab} onOpenDemo={handleOpenDemo} />;
      case 'home':
      default:
        return (
          <>
            <Hero onOpenDemo={() => handleOpenDemo('general')} />
            <ProblemSection onOpenDemo={() => handleOpenDemo('general')} />
            <SolutionSection onOpenDemo={() => handleOpenDemo('general')} />
            <AuthoritySection />
            <PlanSection onOpenDemo={() => handleOpenDemo('general')} />
            <SummarySection onOpenDemo={() => handleOpenDemo('general')} />
            <ContactFormSection onNavigate={handleNavigate} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-arquitectura font-sans text-torre selection:bg-domo selection:text-white">


      {/* Main App Content - Only accessible after loading starts fading, but rendered to allow asset loading */}
      <div>
        <Header onNavigate={handleNavigate} onOpenDemo={() => handleOpenDemo('general')} />

        <main>
          {renderContent()}
        </main>

        <Footer onNavigate={handleNavigate} />

        <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} demoType={demoType} onNavigate={handleNavigate} />
      </div>
    </div>
  );
}

export default App;