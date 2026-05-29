import React, { useState } from 'react';
import { 
  X, 
  Plus, 
  FileDown, 
  MapPin, 
  Star, 
  Trophy, 
  Coins, 
  Briefcase, 
  Map, 
  ArrowLeft,
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { College } from '../types';

interface CompareViewProps {
  selectedColleges: College[];
  allColleges: College[];
  onRemoveCollege: (id: string) => void;
  onAddCollege: (id: string) => void;
  onBackToBrowse: () => void;
  onSelectCollege: (id: string) => void;
}

export default function CompareView({
  selectedColleges,
  allColleges,
  onRemoveCollege,
  onAddCollege,
  onBackToBrowse,
  onSelectCollege,
}: CompareViewProps) {
  const [showAddMenu, setShowAddMenu] = useState(false);

  // Filter out colleges that are already selected
  const availableColleges = allColleges.filter(
    (c) => !selectedColleges.some((sel) => sel.id === c.id)
  );

  const handleGenerateReport = () => {
    alert("Generating institutional side-by-side analysis worksheet.pdf...\nIncluded metrics: ROI yield, ranking, student review quotients, and map plots.");
  };

  const handleApplyNow = (name: string) => {
    alert(`Registering intake application for ${name}. Form registry completed!`);
  };

  const handleDownloadBrochure = (name: string) => {
    alert(`Downloading syllabus prospectus structure.pdf for ${name}.`);
  };

  return (
    <div className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-10 py-12">
      
      {/* Title & back buttons */}
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <button
            onClick={onBackToBrowse}
            className="text-xs font-bold text-brand-secondary hover:text-brand-primary flex items-center gap-1.5 mb-2 group cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Explorer</span>
          </button>
          
          <h1 className="text-3xl font-headline font-bold text-brand-primary tracking-tight">
            Compare Institutions
          </h1>
          <p className="text-sm text-text-muted mt-1 max-w-2xl">
            Analyze side-by-side performance metrics, academic costs, and career outcomes to find your ideal college match.
          </p>
        </div>

        {selectedColleges.length > 0 && (
          <button
            onClick={handleGenerateReport}
            className="flex items-center gap-2 bg-brand-primary text-white hover:bg-brand-secondary font-sans text-xs font-bold px-5 py-3 rounded-full shadow-lg active:scale-95 transition-all cursor-pointer"
          >
            <FileDown className="w-4 h-4" />
            <span>Generate PDF Report</span>
          </button>
        )}
      </div>

      {selectedColleges.length === 0 ? (
        <div className="bg-white rounded-xl border border-brand-surface-container custom-shadow p-12 text-center max-w-md mx-auto">
          <ArrowLeftRightIcon className="w-16 h-16 text-brand-secondary mx-auto mb-4" />
          <h3 className="text-xl font-headline font-bold text-brand-primary mb-1">Select Colleges to Compare</h3>
          <p className="text-sm text-text-muted mb-6">
            You haven't selected any institutions yet. Go back to browse and click "Compare" on your target choices.
          </p>
          <button
            onClick={onBackToBrowse}
            className="bg-brand-primary text-white font-bold text-sm px-6 py-2.5 rounded-lg active:scale-95 transition-all cursor-pointer"
          >
            Go to Browse
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-brand-surface-container overflow-hidden shadow-md">
          
          {/* Header row cards listings */}
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-brand-surface-container bg-white">
            
            {/* Lead descriptor cell logo */}
            <div className="p-8 border-r border-brand-surface-container flex flex-col justify-end bg-brand-surface-low/30">
              <h2 className="text-xl font-headline font-bold text-brand-primary">Key Metrics</h2>
              <p className="text-xs text-text-muted font-bold mt-1">Academic Year 2026-27</p>
            </div>

            {/* Compared college columns loops */}
            {selectedColleges.map((college) => (
              <div key={college.id} className="p-6 border-r border-brand-surface-container relative group flex flex-col h-full bg-white transition-colors duration-300 hover:bg-brand-surface-low/10">
                <button
                  onClick={() => onRemoveCollege(college.id)}
                  className="absolute top-4 right-4 text-text-muted hover:text-brand-secondary p-1.5 rounded-full hover:bg-brand-surface-low transition-colors cursor-pointer"
                  title={`Remove ${college.name}`}
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-brand-surface-container shrink-0 cursor-pointer" onClick={() => onSelectCollege(college.id)}>
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    src={college.image}
                    alt={college.name}
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex-grow select-text">
                  {college.badge && (
                    <span className="inline-block px-2.5 py-1 mb-2 bg-brand-green/10 text-brand-green font-sans text-[10px] font-bold rounded">
                      {college.badge}
                    </span>
                  )}
                  
                  <h3 
                    onClick={() => onSelectCollege(college.id)}
                    className="text-sm font-headline font-bold leading-snug text-brand-primary hover:text-brand-secondary hover:underline cursor-pointer transition-colors duration-150 line-clamp-2"
                  >
                    {college.name}
                  </h3>
                  <p className="text-[10px] text-text-muted mt-1 flex items-center gap-0.5">
                    <MapPin className="w-3 h-3 text-brand-secondary" />
                    <span>{college.city}</span>
                  </p>
                </div>
              </div>
            ))}

            {/* Empty addon slot if less than 3 compared */}
            {selectedColleges.length < 3 ? (
              <div className="p-6 flex flex-col items-center justify-center bg-brand-surface-low m-4 rounded-xl border-2 border-dashed border-brand-border-outline hover:bg-brand-surface-container transition-all relative">
                {showAddMenu ? (
                  <div className="absolute inset-0 bg-white p-4 rounded-xl z-10 flex flex-col justify-start">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-bold text-brand-primary">Select Institution</span>
                      <button onClick={() => setShowAddMenu(false)} className="text-text-muted hover:text-brand-secondary p-1">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    {availableColleges.length === 0 ? (
                      <p className="text-xs text-text-muted text-center py-8">All colleges selected</p>
                    ) : (
                      <div className="space-y-1 overflow-y-auto max-h-36 scrollbar-none text-left">
                        {availableColleges.map((c) => (
                          <button
                            key={c.id}
                            onClick={() => {
                              onAddCollege(c.id);
                              setShowAddMenu(false);
                            }}
                            className="w-full text-left p-1.5 hover:bg-brand-surface-low rounded text-xs text-brand-primary truncate font-semibold block cursor-pointer"
                          >
                            {c.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => setShowAddMenu(true)}
                    className="flex flex-col items-center justify-center text-center w-full h-full cursor-pointer select-none"
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-brand-border-outline flex items-center justify-center mb-4 text-text-muted hover:bg-white transition-colors shadow-sm">
                      <Plus className="w-5 h-5" />
                    </div>
                    <span className="font-sans text-xs font-bold text-brand-primary">Add College</span>
                    <p className="text-[10px] text-text-muted mt-2">Compare up to 3 institutions</p>
                  </button>
                )}
              </div>
            ) : (
              <div className="p-6 flex flex-col items-center justify-center bg-brand-surface-low/30 text-center m-4 rounded-xl border border-brand-surface-container select-none">
                <Trophy className="w-8 h-8 text-brand-primary/40 mb-2" />
                <span className="text-[11px] font-bold text-brand-primary/60 uppercase tracking-wider">Comparison Filled</span>
                <p className="text-[10px] text-text-muted mt-1 font-semibold">Maximum limit reached (3 institutions compared)</p>
              </div>
            )}
          </div>

          {/* Side-by-side comparison tables */}
          <div className="bg-white">
            
            {/* National Ranking comparison */}
            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-brand-surface-container hover:bg-brand-surface-low/10 transition-colors">
              <div className="p-6 border-r border-brand-surface-container bg-brand-surface-low/30 font-sans text-xs font-bold text-brand-primary flex items-center shrink-0">
                <Trophy className="w-4 h-4 mr-2 text-text-muted fill-brand-gold/10" />
                <span>National Ranking</span>
              </div>
              {selectedColleges.map((college) => {
                const mainRank = college.rankings[0];
                return (
                  <div key={college.id} className="p-6 border-r border-brand-surface-container font-sans text-sm text-brand-primary font-bold text-center flex flex-col justify-center">
                    <span>{mainRank?.rank}</span>
                    <span className="text-[10px] text-text-muted font-semibold mt-1">({mainRank?.organization})</span>
                  </div>
                );
              })}
              {selectedColleges.length < 3 && <div className="p-6 text-center text-text-muted font-bold text-xs flex items-center justify-center">--</div>}
            </div>

            {/* Annual Fees (INR) comparison */}
            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-brand-surface-container hover:bg-brand-surface-low/10 transition-colors">
              <div className="p-6 border-r border-brand-surface-container bg-brand-surface-low/30 font-sans text-xs font-bold text-brand-primary flex items-center shrink-0">
                <Coins className="w-4 h-4 mr-2 text-text-muted" />
                <span>Annual Fees (INR)</span>
              </div>
              {selectedColleges.map((college) => (
                <div key={college.id} className="p-6 border-r border-brand-surface-container font-headline text-lg text-center text-brand-primary font-bold flex flex-col justify-center">
                  <span>{college.annualFeeFormatted}</span>
                  {college.originalFeeIndian && (
                    <span className="text-[10px] text-text-muted font-semibold mt-1">
                      {college.originalFeeIndian}
                    </span>
                  )}
                </div>
              ))}
              {selectedColleges.length < 3 && <div className="p-6 text-center text-text-muted font-bold text-xs flex items-center justify-center">--</div>}
            </div>

            {/* Avg Placement comparison */}
            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-brand-surface-container hover:bg-brand-surface-low/10 transition-colors">
              <div className="p-6 border-r border-brand-surface-container bg-brand-surface-low/30 font-sans text-xs font-bold text-brand-primary flex items-center shrink-0">
                <Briefcase className="w-4 h-4 mr-2 text-text-muted" />
                <span>Avg. Placement</span>
              </div>
              {selectedColleges.map((college) => (
                <div key={college.id} className="p-6 border-r border-brand-surface-container text-center flex flex-col justify-center">
                  <div className="font-headline text-lg text-brand-green font-bold">
                    {college.averagePackage || college.averagePackageValue + ' LPA'}
                  </div>
                  <div className="text-[10px] text-text-muted font-semibold mt-1">
                    {college.id.includes('iit') ? '96% Hired' : '88% Hired'}
                  </div>
                </div>
              ))}
              {selectedColleges.length < 3 && <div className="p-6 text-center text-text-muted font-bold text-xs flex items-center justify-center">--</div>}
            </div>

            {/* Student rating comparison */}
            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-brand-surface-container hover:bg-brand-surface-low/10 transition-colors">
              <div className="p-6 border-r border-brand-surface-container bg-brand-surface-low/30 font-sans text-xs font-bold text-brand-primary flex items-center shrink-0">
                <Star className="w-4 h-4 mr-2 text-text-muted fill-brand-gold/10" />
                <span>Student Rating</span>
              </div>
              {selectedColleges.map((college) => (
                <div key={college.id} className="p-6 border-r border-brand-surface-container text-center flex flex-col justify-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
                    <span className="font-headline text-base font-bold text-brand-primary">{college.rating}</span>
                  </div>
                  <div className="text-[10px] text-text-muted font-semibold">
                    Based on {college.reviewsCount} reviews
                  </div>
                </div>
              ))}
              {selectedColleges.length < 3 && <div className="p-6 text-center text-text-muted font-bold text-xs flex items-center justify-center">--</div>}
            </div>

            {/* Campus location maps comparison */}
            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-brand-surface-container hover:bg-brand-surface-low/10 transition-colors">
              <div className="p-6 border-r border-brand-surface-container bg-brand-surface-low/30 font-sans text-xs font-bold text-brand-primary flex items-center shrink-0">
                <Map className="w-4 h-4 mr-2 text-text-muted" />
                <span>Campus Location</span>
              </div>
              {selectedColleges.map((college) => (
                <div key={college.id} className="p-6 border-r border-brand-surface-container">
                  <div className="aspect-video w-full rounded bg-brand-surface-container mb-2 overflow-hidden border border-brand-surface-container/70 relative">
                    <img
                      className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity"
                      src={college.mapImage}
                      alt={`${college.city} map`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="text-[10px] text-text-muted font-bold text-center">
                    {college.campusLocationName}
                  </p>
                </div>
              ))}
              {selectedColleges.length < 3 && <div className="p-6 text-center text-text-muted font-bold text-xs flex items-center justify-center">--</div>}
            </div>
          </div>

          {/* Header Action CTAs under columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 bg-brand-surface-low/70 border-t border-brand-surface-container">
            <div className="p-6"></div>
            {selectedColleges.map((college) => (
              <div key={college.id} className="p-6 border-r border-brand-surface-container flex flex-col gap-2.5">
                <button
                  onClick={() => handleDownloadBrochure(college.name)}
                  className="w-full py-2.5 bg-brand-secondary text-white font-sans text-xs font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                >
                  Download Brochure
                </button>
                
                <button
                  onClick={() => handleApplyNow(college.name)}
                  className="w-full py-2.5 bg-white border border-brand-primary text-brand-primary font-sans text-xs font-bold rounded-lg hover:bg-brand-surface-low active:scale-95 transition-all cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            ))}
            {selectedColleges.length < 3 && <div className="p-6"></div>}
          </div>
        </div>
      )}
    </div>
  );
}

// Simple fallback Icon
function ArrowLeftRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 3h5v5" />
      <path d="M8 21H3v-5" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="m21 3-9 9" />
      <path d="m3 21 9-9" />
    </svg>
  );
}
