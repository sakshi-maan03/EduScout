import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Star, 
  Download, 
  BookOpen, 
  Coins, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  ArrowLeftRight, 
  ChevronRight,
  Sparkles,
  Trophy,
  Activity
} from 'lucide-react';
import { College } from '../types';

interface DetailViewProps {
  college: College;
  allColleges: College[];
  isSelectedForCompare: boolean;
  onToggleCompare: (id: string) => void;
  onSelectCollege: (id: string) => void;
  onBackToBrowse: () => void;
}

export default function DetailView({
  college,
  allColleges,
  isSelectedForCompare,
  onToggleCompare,
  onSelectCollege,
  onBackToBrowse,
}: DetailViewProps) {
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'academics' | 'placements' | 'campus' | 'admission' | 'reviews'>('overview');
  const [isExpandedProfile, setIsExpandedProfile] = useState(false);

  const handleApplyNow = () => {
    alert(`Starting Application for ${college.name}.\nOur admissions coordinator will verify your eligibility.`);
  };

  const handleDownloadBrochure = () => {
    alert(`Downloading prospectus.pdf for ${college.name}...\nPackage details and fee structural guides included.`);
  };

  const handleRequestCallback = () => {
    alert(`Callback registered! An advisor will call you shortly at registered profile number.`);
  };

  // Find similar college items
  const similarCollegesList = allColleges.filter(
    (c) => c.id !== college.id && college.similarColleges.includes(c.id)
  );

  return (
    <div className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-10 py-8">
      {/* Dynamic breadcrumbs bar */}
      <nav className="flex items-center gap-2 mb-6 text-xs text-text-muted select-none">
        <button onClick={onBackToBrowse} className="hover:text-brand-secondary transition-colors cursor-pointer font-semibold">
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button onClick={onBackToBrowse} className="hover:text-brand-secondary transition-colors cursor-pointer font-semibold">
          Institutions
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-brand-primary font-bold truncate max-w-[200px] sm:max-w-none">
          {college.name}
        </span>
      </nav>

      {/* College main header segment */}
      <div className="bg-white border border-brand-surface-container rounded-xl p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden custom-shadow">
        
        {/* Verification indicator */}
        <div className="absolute top-4 right-4">
          <span className="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-brand-green/20">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-green fill-brand-green/10" />
            <span>{college.accredited ? 'Accredited' : 'Verified'}</span>
          </span>
        </div>

        {/* Institution Brand Badge Logo */}
        <div className="w-32 h-32 md:w-36 md:h-36 rounded-xl border border-brand-surface-container bg-brand-surface-low p-3 flex items-center justify-center shrink-0 shadow-sm">
          <img 
            alt={`${college.name} Logo`} 
            className="w-full h-full object-contain" 
            src={college.logo} 
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Right segment meta */}
        <div className="flex-grow text-center md:text-left select-text">
          <h1 className="text-2xl md:text-3xl font-headline font-bold text-brand-primary mb-2 tracking-tight">
            {college.name}
          </h1>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
            <div className="flex items-center gap-1 text-text-muted text-sm">
              <MapPin className="w-4 h-4 text-brand-secondary" />
              <span>{college.location}</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-text-muted text-sm border-l border-brand-surface-highest pl-4">
              <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
              <span className="font-bold text-brand-primary">{college.rating}</span>
              <span className="text-xs">({college.reviewsCount} Reviews)</span>
            </div>
          </div>

          {/* Quick core CTAs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <button
              onClick={handleApplyNow}
              className="bg-brand-secondary text-white px-8 py-3 rounded-lg font-sans font-bold text-sm hover:opacity-95 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              Apply Now
            </button>
            
            <button
              onClick={handleDownloadBrochure}
              className="border border-brand-primary text-brand-primary px-6 py-3 rounded-lg font-sans font-bold text-sm hover:bg-brand-surface-low transition-all active:scale-95 cursor-pointer"
            >
              Download Brochure
            </button>
            
            <button
              onClick={() => onToggleCompare(college.id)}
              className={`flex items-center gap-2 border px-5 py-3 rounded-lg font-sans font-bold text-sm transition-all active:scale-95 cursor-pointer ${
                isSelectedForCompare
                  ? 'border-brand-secondary bg-brand-secondary/5 text-brand-secondary ring-2 ring-brand-secondary/15'
                  : 'border-brand-border-outline text-text-main hover:bg-brand-surface-low'
              }`}
            >
              <ArrowLeftRight className="w-4 h-4" />
              <span>{isSelectedForCompare ? 'Selected' : 'Compare'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Subtab segments bar layout */}
      <div className="border-b border-brand-surface-container mb-8 flex gap-8 overflow-x-auto whitespace-nowrap scrollbar-none scroll-smooth">
        {[
          { key: 'overview', label: 'Overview' },
          { key: 'academics', label: 'Academics' },
          { key: 'placements', label: 'Placements' },
          { key: 'campus', label: 'Campus Life' },
          { key: 'admission', label: 'Admission' },
          { key: 'reviews', label: 'Reviews' },
        ].map((tab) => {
          const isActive = activeSubTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveSubTab(tab.key as any)}
              className={`pb-4 font-sans text-sm font-bold transition-all border-b-2 cursor-pointer ${
                isActive
                  ? 'text-brand-secondary border-brand-secondary font-bold'
                  : 'text-text-muted border-transparent hover:text-brand-primary'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content grid columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Rich details tabs */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Overview Dynamic Subtab details */}
          {activeSubTab === 'overview' && (
            <section className="space-y-6">
              {/* Stats Bento layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-brand-surface-low p-6 rounded-xl border border-brand-surface-container flex flex-col items-center text-center">
                  <Coins className="w-10 h-10 text-brand-secondary mb-2" />
                  <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Average Package</span>
                  <span className="text-lg font-headline font-bold text-brand-primary mt-1">
                    {college.averagePackage}
                  </span>
                </div>
                
                <div className="bg-brand-surface-low p-6 rounded-xl border border-brand-surface-container flex flex-col items-center text-center">
                  <BookOpen className="w-10 h-10 text-brand-secondary mb-2" />
                  <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Total Fees (B.Tech)</span>
                  <span className="text-lg font-headline font-bold text-brand-primary mt-1">
                    {college.originalFeeIndian || college.annualFeeFormatted}
                  </span>
                </div>
                
                <div className="bg-brand-surface-low p-6 rounded-xl border border-brand-brand-green/20 flex flex-col items-center text-center">
                  <Users className="w-10 h-10 text-brand-secondary mb-2" />
                  <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Faculty Count</span>
                  <span className="text-lg font-headline font-bold text-brand-primary mt-1">
                    {college.facultyCount}
                  </span>
                </div>
              </div>

              {/* Textual rich narrative descriptions */}
              <div className="bg-white p-6 md:p-8 rounded-xl border border-brand-surface-container custom-shadow">
                <h3 className="text-lg font-headline font-bold text-brand-primary mb-4">About the institution</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {college.description} {isExpandedProfile ? (
                    <span className="mt-2 block">
                      The institution provides state-of-the-art laboratory infrastructure, smart classroom segments, 
                      recreational central courtyard structures, separate hostel boarding allocations for students, 
                      and deep incubator initiatives to finance and assist seed ventures. Strong alliances with industry 
                      bodies ensure direct syllabus reviews and periodic internships to provide deep practical context.
                    </span>
                  ) : '...'}
                </p>
                
                <button
                  onClick={() => setIsExpandedProfile(!isExpandedProfile)}
                  className="mt-4 text-brand-accent font-sans text-sm font-bold flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span>{isExpandedProfile ? 'Show Less' : 'Read full profile'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Placement analysis block */}
              <div className="space-y-6">
                <div className="flex justify-between items-end flex-wrap gap-2">
                  <div>
                    <h3 className="text-lg font-headline font-bold text-brand-primary">Placements Performance</h3>
                    <p className="text-xs text-text-muted">Annual package statistics representation for the last 4 seasons</p>
                  </div>
                  <span className="bg-brand-primary text-white text-xs px-4 py-2 rounded-lg font-semibold">
                    High: {college.id.includes('iit') ? '₹ 1.2 Cr PA' : '₹ 45.0 LPA'}
                  </span>
                </div>

                {/* Pure HTML visual bar charts construct */}
                <div className="bg-white p-6 md:p-8 rounded-xl border border-brand-surface-container custom-shadow">
                  <div className="flex items-end justify-between h-48 gap-4 mb-6">
                    {college.placements.map((p, idx) => {
                      // Calculate height ratio based on max element
                      const maxVal = Math.max(...college.placements.map(item => item.packageLpa));
                      const heightPercent = maxVal ? Math.round((p.packageLpa / maxVal) * 90) : 50;
                      const isLatest = idx === college.placements.length - 1;

                      return (
                        <div key={p.year} className="flex flex-col items-center flex-grow group max-w-[100px]">
                          <div className="w-full relative bg-brand-surface-container rounded-t-md flex items-end justify-center" style={{ height: '100%' }}>
                            <div 
                              style={{ height: `${heightPercent}%` }} 
                              className={`w-full rounded-t-md transition-all duration-500 relative flex justify-center ${
                                isLatest 
                                  ? 'bg-brand-secondary hover:opacity-95' 
                                  : 'bg-brand-surface-highest hover:bg-brand-primary'
                              }`}
                            >
                              <div className="absolute -top-7 text-xs font-bold font-sans text-brand-primary select-none opacity-90 group-hover:opacity-100">
                                {p.packageLpa}
                              </div>
                            </div>
                          </div>
                          <span className="mt-3 text-xs font-semibold text-text-muted">{p.year}</span>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-center text-xs text-text-muted font-semibold italic">
                    Package values represented in ₹ Lakhs Per Annum (LPA)
                  </p>
                </div>

                {/* Sector placements data tables */}
                <div className="overflow-hidden rounded-xl border border-brand-surface-container bg-white custom-shadow">
                  <table className="w-full text-left">
                    <thead className="bg-brand-surface-low border-b border-brand-surface-container">
                      <tr>
                        <th className="px-6 py-4 font-headline text-xs font-bold text-brand-primary uppercase tracking-wider">Sector</th>
                        <th className="px-6 py-4 font-headline text-xs font-bold text-brand-primary uppercase tracking-wider text-right">Offers Count</th>
                        <th className="px-6 py-4 font-headline text-xs font-bold text-brand-primary uppercase tracking-wider text-right">Avg Package</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-surface-container">
                      {college.sectorPlacements.map((sp, idx) => (
                        <tr key={sp.sector} className="hover:bg-brand-surface-low/50 transition-colors">
                          <td className="px-6 py-4 text-sm font-bold text-brand-primary">{sp.sector}</td>
                          <td className="px-6 py-4 text-sm text-brand-primary text-right">{sp.offers}</td>
                          <td className="px-6 py-4 text-sm text-brand-primary font-bold text-right">{sp.avgPackage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* Academics Tab */}
          {activeSubTab === 'academics' && (
            <div className="bg-white p-6 md:p-8 rounded-xl border border-brand-surface-container custom-shadow space-y-6">
              <h3 className="text-xl font-headline font-bold text-brand-primary">Curriculum &amp; Programs</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                We design educational tracks matching core future-work matrices. Choice-Based Syllabus modules allow students 
                to align cross-functional engineering, mathematics, computer sciences, humanities, or finance fields.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-brand-surface-low border border-brand-surface-container">
                  <h4 className="font-bold text-brand-primary text-sm mb-2">Undergraduate B.Tech / BBA Programs</h4>
                  <p className="text-xs text-text-muted">4 Year intensive specialized tracks with embedded Capstones and industrial internships.</p>
                </div>
                <div className="p-4 rounded-lg bg-brand-surface-low border border-brand-surface-container">
                  <h4 className="font-bold text-brand-primary text-sm mb-2">Postgraduate M.Tech / MBA Programs</h4>
                  <p className="text-xs text-text-muted">2 Year advanced specialization programs focused on deep laboratory experiments and paper publications.</p>
                </div>
              </div>
            </div>
          )}

          {/* Campus Life */}
          {activeSubTab === 'campus' && (
            <div className="bg-white p-6 md:p-8 rounded-xl border border-brand-surface-container custom-shadow space-y-6">
              <h3 className="text-xl font-headline font-bold text-brand-primary">Campus Infrastructure</h3>
              <img 
                src={college.image} 
                alt="campus landscape" 
                className="w-full h-64 object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
              <p className="text-sm text-text-muted leading-relaxed">
                Our massive central campus spans over hundreds of acres of manicured gardens, active technical research zones, 
                high speed wireless allocations, digital library suites, and modern indoor gymnastics court systems.
              </p>
            </div>
          )}

          {/* Admission */}
          {activeSubTab === 'admission' && (
            <div className="bg-white p-6 md:p-8 rounded-xl border border-brand-surface-container custom-shadow space-y-6">
              <h3 className="text-xl font-headline font-bold text-brand-primary font-bold">Admission Criteria 2026</h3>
              <div className="space-y-4">
                <div className="flex border-b border-brand-surface-container pb-3">
                  <span className="text-sm font-semibold text-text-muted w-1/3">Eligibility Model</span>
                  <span className="text-sm font-bold text-brand-primary w-2/3">Top ranks of national/state level entrance tests or 85%+ aggregate in Higher Secondary evaluation.</span>
                </div>
                <div className="flex border-b border-brand-surface-container pb-3">
                  <span className="text-sm font-semibold text-text-muted w-1/3">Entrance Examination criteria</span>
                  <span className="text-sm font-bold text-brand-primary w-2/3">JEE Main/JEE Advanced, NIMAT, CAT, NEET, or local designated evaluation rules.</span>
                </div>
                <div className="flex">
                  <span className="text-sm font-semibold text-text-muted w-1/3">Key intake seasons</span>
                  <span className="text-sm font-bold text-brand-primary w-2/3">Autumn semester allocation registers close June 2026.</span>
                </div>
              </div>
            </div>
          )}

          {/* Reviews */}
          {activeSubTab === 'reviews' && (
            <div className="bg-white p-6 md:p-8 rounded-xl border border-brand-surface-container custom-shadow space-y-6">
              <div className="flex justify-between items-center bg-brand-surface-low p-6 rounded-lg">
                <div>
                  <h4 className="text-lg font-headline font-bold text-brand-primary">Accumulated Reviews Summary</h4>
                  <p className="text-xs text-text-muted">Over {college.reviewsCount} graduates and active students evaluated</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-6 h-6 text-brand-gold fill-brand-gold" />
                  <span className="text-xl font-headline font-bold text-brand-primary">{college.rating}</span>
                </div>
              </div>

              {/* Review mock row constructs */}
              <div className="space-y-4 divide-y divide-brand-surface-container">
                <div className="pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-brand-primary text-sm">Priya Anand (Alumni - Class of '24)</span>
                    <span className="text-xs text-text-muted">May 2026</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Exceptional placements guidance block. The placement cell prepared us starting semester 6 with mock quizzes and code challenges.
                  </p>
                </div>
                <div className="pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-brand-primary text-sm">Rahul Mehta (B.Tech Scholar)</span>
                    <span className="text-xs text-text-muted">April 2026</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Great laboratories accessibility, extremely experienced faculty and beautiful libraries. The student clubs are very active.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Side Sidebar (Col span 4) */}
        <div className="lg:col-span-4 space-y-8 select-none">
          
          {/* Quick apply widget */}
          <div className="bg-brand-primary p-6 rounded-xl shadow-lg text-white sticky top-20">
            <h3 className="text-xl font-headline font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-secondary" />
              <span>Admissions 2026</span>
            </h3>
            <p className="text-xs opacity-90 mb-6 leading-relaxed">
              Applications for the Autumn Semester allocations are now open. Secure your seat registry on India's top academic benchmark.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-brand-secondary shrink-0" />
                <div className="text-xs">
                  Deadline: <span className="font-bold text-brand-secondary">15 June 2026</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-brand-secondary shrink-0" />
                <div className="text-xs">
                  Intake Fee Struct: <span className="font-bold text-brand-secondary">₹ 1,500</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleApplyNow}
              className="w-full bg-brand-secondary text-white py-3 rounded-lg font-sans font-bold text-sm hover:opacity-90 active:scale-95 transition-all mb-3 cursor-pointer"
            >
              Start Application
            </button>
            <button
              onClick={handleRequestCallback}
              className="w-full bg-transparent border border-white/20 text-white py-3 rounded-lg font-sans font-bold text-sm hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
            >
              Request Callback
            </button>
          </div>

          {/* Rankings table construct */}
          <div className="bg-white border border-brand-surface-container p-6 rounded-xl custom-shadow">
            <h3 className="font-headline text-sm font-bold text-brand-primary mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-brand-gold fill-brand-gold/10" />
              <span>Rankings Index</span>
            </h3>
            
            <div className="space-y-3">
              {college.rankings.map((rank) => (
                <div key={rank.organization} className="flex justify-between items-center pb-2 border-b border-brand-surface-low last:border-0 last:pb-0">
                  <span className="text-xs text-text-muted font-semibold">{rank.organization}</span>
                  <span className="text-sm font-bold text-brand-primary">{rank.rank}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Similar college registries */}
          {similarCollegesList.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-headline text-sm font-bold text-brand-primary px-1 flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-brand-secondary" />
                <span>Similar Institutions</span>
              </h3>
              
              <div className="space-y-3">
                {similarCollegesList.map((similarColl) => (
                  <div
                    key={similarColl.id}
                    onClick={() => onSelectCollege(similarColl.id)}
                    className="flex items-center gap-4 p-3 bg-white border border-brand-surface-container rounded-lg hover:border-brand-secondary transition-all custom-shadow cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-brand-surface-low rounded border border-brand-surface-container p-1 shrink-0 flex items-center justify-center">
                      <img 
                        alt={similarColl.name} 
                        className="w-full h-full object-contain" 
                        src={similarColl.logo} 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-xs font-bold text-brand-primary truncate group-hover:text-brand-secondary group-hover:underline">
                        {similarColl.name}
                      </h4>
                      <p className="text-[10px] text-text-muted">{similarColl.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
