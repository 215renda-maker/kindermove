import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Landing } from './views/Landing';
import { TeacherDashboard } from './views/TeacherDashboard';
import { ParentPortal } from './views/ParentPortal';
import { ReportView } from './views/ReportView';
import { ChildReport } from './types';

type ViewState = 'landing' | 'teacher' | 'parent' | 'report';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [selectedReport, setSelectedReport] = useState<ChildReport | null>(null);
  const [userRole, setUserRole] = useState<'teacher' | 'parent'>('teacher');

  const handleNavigate = (view: string) => {
    // Simple routing logic
    if (view === 'landing') {
      setCurrentView('landing');
      setSelectedReport(null);
    }
  };

  const handleRoleSelect = (role: 'teacher' | 'parent') => {
    setUserRole(role);
    setCurrentView(role);
  };

  const handleViewReport = (report: ChildReport) => {
    setSelectedReport(report);
    setCurrentView('report');
  };

  const handleBackFromReport = () => {
    setSelectedReport(null);
    setCurrentView(userRole);
  };

  return (
    <Layout activeView={currentView} onNavigate={handleNavigate}>
      {currentView === 'landing' && (
        <Landing onSelectRole={handleRoleSelect} />
      )}

      {currentView === 'teacher' && (
        <TeacherDashboard onViewReport={handleViewReport} />
      )}

      {currentView === 'parent' && (
        <ParentPortal onViewReport={handleViewReport} />
      )}

      {currentView === 'report' && selectedReport && (
        <ReportView 
          report={selectedReport} 
          onBack={handleBackFromReport} 
          userType={userRole}
        />
      )}
    </Layout>
  );
};

export default App;