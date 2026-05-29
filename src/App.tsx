import React, { useState } from 'react';
import { collegesData } from './data';
import TopNavBar from './components/TopNavBar';
import BrowseView from './components/BrowseView';
import DetailView from './components/DetailView';
import CompareView from './components/CompareView';
import FooterView from './components/FooterView';

export default function App() {
  // Navigation states
  const [activeTab, setActiveTab] = useState<'browse' | 'details' | 'compare'>('browse');
  const [selectedCollegeId, setSelectedCollegeId] = useState<string>('iit-mumbai'); // IIT Mumbai preloaded details
  
  // Pre-load compared colleges to match the exact evaluated metrics of screenshot 3
  const [selectedCompareIds, setSelectedCompareIds] = useState<string[]>([
    'st-lawrence',
    'metropolitan-academy'
  ]);

  // Handle toggling compared lists
  const handleToggleCompare = (collegeId: string) => {
    setSelectedCompareIds((prev) => {
      const exists = prev.includes(collegeId);
      if (exists) {
        return prev.filter((id) => id !== collegeId);
      } else {
        if (prev.length >= 3) {
          alert("Comparison limit reached! You can compare up to 3 institutions at once. Remove one of the existing choices to add a new one.");
          return prev;
        }
        return [...prev, collegeId];
      }
    });
  };

  const handleClearCompare = () => {
    setSelectedCompareIds([]);
  };

  const handleSelectCollege = (collegeId: string) => {
    setSelectedCollegeId(collegeId);
    setActiveTab('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRemoveCompareCollege = (id: string) => {
    setSelectedCompareIds((prev) => prev.filter((item) => item !== id));
  };

  const handleAddCompareCollege = (id: string) => {
    setSelectedCompareIds((prev) => {
      if (prev.includes(id)) return prev;
      if (prev.length >= 3) {
        alert("Maximum 3 compared colleges allowed.");
        return prev;
      }
      return [...prev, id];
    });
  };

  // Find college details for detail view
  const currentDetailsCollege = collegesData.find((c) => c.id === selectedCollegeId) || collegesData[0];

  // Find compared colleges data lists
  const comparedColleges = collegesData.filter((c) => selectedCompareIds.includes(c.id));

  return (
    <div className="bg-brand-surface font-sans min-h-screen flex flex-col selection:bg-brand-secondary/20 selection:text-brand-secondary">
      {/* Shared Header Navigation */}
      <TopNavBar
        currentTab={activeTab}
        onChangeTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        selectedCompareCount={selectedCompareIds.length}
      />

      {/* Primary Dynamic Screen router content */}
      <main className="flex-grow flex flex-col w-full">
        {activeTab === 'browse' && (
          <BrowseView
            colleges={collegesData}
            selectedCompareIds={selectedCompareIds}
            onToggleCompare={handleToggleCompare}
            onClearCompare={handleClearCompare}
            onSelectCollege={handleSelectCollege}
            onViewComparePage={() => {
              setActiveTab('compare');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'details' && (
          <DetailView
            college={currentDetailsCollege}
            allColleges={collegesData}
            isSelectedForCompare={selectedCompareIds.includes(selectedCollegeId)}
            onToggleCompare={handleToggleCompare}
            onSelectCollege={handleSelectCollege}
            onBackToBrowse={() => {
              setActiveTab('browse');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'compare' && (
          <CompareView
            selectedColleges={comparedColleges}
            allColleges={collegesData}
            onRemoveCollege={handleRemoveCompareCollege}
            onAddCollege={handleAddCompareCollege}
            onBackToBrowse={() => {
              setActiveTab('browse');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectCollege={handleSelectCollege}
          />
        )}
      </main>

      {/* Shared Platform Footer */}
      <FooterView />
    </div>
  );
}
