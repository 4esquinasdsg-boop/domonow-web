import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { AuthoritySection } from './components/AuthoritySection';
import { PlanSection } from './components/PlanSection';
import { SummarySection } from './components/SummarySection';
import { SpiderSection } from './components/SpiderSection';
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
import { SuperAdminPage } from './components/solutions/SuperAdminPage';

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoType, setDemoType] = useState<string>('general');

  const handleOpenDemo = (type: string = 'general') => {
    setDemoType(type);
    setIsDemoModalOpen(true);
  };

  const HomePage = () => (
    <>
      <Hero onOpenDemo={() => handleOpenDemo('general')} />
      <SpiderSection />
      <ProblemSection onOpenDemo={() => handleOpenDemo('general')} />
      <SolutionSection onOpenDemo={() => handleOpenDemo('general')} />
      <AuthoritySection />
      <PlanSection onOpenDemo={() => handleOpenDemo('general')} />
      <SummarySection onOpenDemo={() => handleOpenDemo('general')} />
      <ContactFormSection />
    </>
  );

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-arquitectura font-sans text-torre selection:bg-domo selection:text-white">
        <Header onOpenDemo={() => handleOpenDemo('general')} />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<AboutPage onOpenDemo={() => handleOpenDemo('general')} />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/por-que-elegirnos" element={<WhyChooseUsPage onOpenDemo={() => handleOpenDemo('general')} />} />
            <Route path="/centro-de-ayuda" element={<HelpCenterPage onOpenDemo={() => handleOpenDemo('general')} />} />
            <Route path="/propiedades" element={<PropertyTypesPage onOpenDemo={handleOpenDemo} />} />
            <Route path="/privacidad" element={<PrivacyPolicyPage onOpenDemo={() => handleOpenDemo('general')} />} />

            {/* Solutions */}
            <Route path="/comunicaciones" element={<CommunicationsPage onOpenDemo={() => handleOpenDemo('general')} />} />
            <Route path="/porteria" element={<AccessControlPage onOpenDemo={() => handleOpenDemo('general')} />} />
            <Route path="/panico" element={<EmergencyPage onOpenDemo={() => handleOpenDemo('general')} />} />
            <Route path="/documental" element={<DocumentsPage onOpenDemo={() => handleOpenDemo('general')} />} />
            <Route path="/solicitudes" element={<RequestsPage onOpenDemo={() => handleOpenDemo('general')} />} />
            <Route path="/votaciones" element={<VotingPage onOpenDemo={() => handleOpenDemo('general')} />} />
            <Route path="/reservas" element={<CommonAreasPage onOpenDemo={() => handleOpenDemo('general')} />} />
            <Route path="/gestion-financiera" element={<FinancialPage onOpenDemo={() => handleOpenDemo('general')} />} />
            <Route path="/asambleas" element={<AssembliesPage onOpenDemo={() => handleOpenDemo('general')} />} />
            <Route path="/eventos" element={<EventsPage onOpenDemo={() => handleOpenDemo('general')} />} />
            <Route path="/normativo" element={<CompliancePage onOpenDemo={() => handleOpenDemo('general')} />} />
            <Route path="/super-administrador" element={<SuperAdminPage onOpenDemo={() => handleOpenDemo('general')} />} />

            {/* Redirect any unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />

        <DemoModal
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
          demoType={demoType}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;