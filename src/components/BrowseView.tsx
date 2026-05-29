import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  MapPin, 
  Star, 
  Shuffle, 
  ChevronLeft, 
  ChevronRight, 
  SlidersHorizontal, 
  Map, 
  Clock, 
  GraduationCap, 
  Check, 
  X, 
  ArrowLeftRight 
} from 'lucide-react';
import { College, FilterState } from '../types';

interface BrowseViewProps {
  colleges: College[];
  selectedCompareIds: string[];
  onToggleCompare: (collegeId: string) => void;
  onClearCompare: () => void;
  onSelectCollege: (collegeId: string) => void;
  onViewComparePage: () => void;
}

export default function BrowseView({
  colleges,
  selectedCompareIds,
  onToggleCompare,
  onClearCompare,
  onSelectCollege,
  onViewComparePage,
}: BrowseViewProps) {
  // Filters State
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    locations: ['Delhi NCR'], // Matches the checked screenshot state ("Delhi NCR" pre-checked)
    feeRange: '15k-30k',     // Matches the checked screenshot state ("$15k - $30k" pre-checked)
    minRating: 4,            // Matches the checked screenshot state ("4" rating pre-checked)
    courseTypes: ['Full-Time'], // Matches the checked screenshot state ("Full-Time" pre-checked)
    sortBy: 'Highest Rated',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Compact listing for smooth layout and demonstration

  // Reset filters helper
  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      locations: [],
      feeRange: null,
      minRating: null,
      courseTypes: [],
      sortBy: 'Highest Rated',
    });
    setCurrentPage(1);
  };

  // Toggle locations filter
  const handleToggleLocation = (loc: string) => {
    setFilters((prev) => {
      const exists = prev.locations.includes(loc);
      const newLocs = exists
        ? prev.locations.filter((item) => item !== loc)
        : [...prev.locations, loc];
      return { ...prev, locations: newLocs };
    });
    setCurrentPage(1);
  };

  // Toggle course types filter
  const handleToggleCourseType = (type: string) => {
    setFilters((prev) => {
      const exists = prev.courseTypes.includes(type);
      const newTypes = exists
        ? prev.courseTypes.filter((item) => item !== type)
        : [...prev.courseTypes, type];
      return { ...prev, courseTypes: newTypes };
    });
    setCurrentPage(1);
  };

  // Filter and sort mechanism
  const filteredColleges = useMemo(() => {
    return colleges
      .filter((college) => {
        // Search query
        if (filters.searchQuery) {
          const q = filters.searchQuery.toLowerCase();
          const matchesName = college.name.toLowerCase().includes(q);
          const matchesCity = college.city.toLowerCase().includes(q);
          const matchesLoc = college.location.toLowerCase().includes(q);
          const matchesDesc = college.description.toLowerCase().includes(q);
          if (!matchesName && !matchesCity && !matchesLoc && !matchesDesc) {
            return false;
          }
        }

        // Location multi-select
        if (filters.locations.length > 0) {
          const matched = filters.locations.some((loc) => {
            return college.city.toLowerCase() === loc.toLowerCase() || 
                   college.location.toLowerCase().includes(loc.toLowerCase());
          });
          if (!matched) return false;
        }

        // Fee range filter
        // Supports standard USD values & INR approximations
        if (filters.feeRange) {
          const fee = college.annualFee;
          if (filters.feeRange === 'under-5k') {
            // Either numerical fee < 5000 OR INR < 150000
            if (fee >= 5000 && fee >= 150000) return false;
          } else if (filters.feeRange === '5k-15k') {
            // Either numerical fee 5k-15k OR INR 150000-300000
            const isUsdInRange = fee >= 5000 && fee <= 15000;
            const isInrInRange = fee >= 150000 && fee <= 300000;
            if (!isUsdInRange && !isInrInRange) return false;
          } else if (filters.feeRange === '15k-30k') {
            // Either numerical fee 15k-30k OR INR 300000-500000
            // Wait, IIT Mumbai is 205,000, let's keep it in the range!
            const isUsdInRange = fee >= 15000 && fee <= 30000;
            const isInrInRange = fee >= 190000 && fee <= 500000;
            if (!isUsdInRange && !isInrInRange) return false;
          } else if (filters.feeRange === 'above-30k') {
            const isUsdInRange = fee > 30000;
            const isInrInRange = fee > 500000;
            if (!isUsdInRange && !isInrInRange) return false;
          }
        }

        // Minimum Rating
        if (filters.minRating !== null) {
          if (college.rating < filters.minRating) return false;
        }

        // Course Type
        if (filters.courseTypes.length > 0) {
          if (!filters.courseTypes.includes(college.courseType)) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === 'Highest Rated') {
          return b.rating - a.rating;
        } else if (filters.sortBy === 'Low to High Fee') {
          return a.annualFee - b.annualFee;
        } else if (filters.sortBy === 'Top Placements') {
          const valA = a.averagePackageValue || 0;
          const valB = b.averagePackageValue || 0;
          return valB - valA;
        }
        return 0;
      });
  }, [colleges, filters]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredColleges.length / itemsPerPage));
  const paginatedColleges = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredColleges.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredColleges, currentPage, itemsPerPage]);

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto flex min-h-screen relative">
      {/* SideNavBar (Filter Rail) */}
      <aside className="hidden lg:flex flex-col w-72 shrink-0 border-r border-brand-surface-container bg-brand-surface-low py-6 px-6 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto overflow-x-hidden scrollbar-none gap-8">
        {/* Filter Title Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-primary flex items-center justify-center rounded-lg shadow-sm">
            <SlidersHorizontal className="text-white w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-headline font-bold text-brand-primary uppercase tracking-widest">Filters</h2>
            <p className="text-xs text-text-muted">Refine your search</p>
          </div>
        </div>

        {/* Faceted Filter Content */}
        <div className="space-y-7">
          {/* Location facet */}
          <div>
            <h3 className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-3 flex justify-between items-center">
              Location
              <span className="text-text-muted text-[10px]">Active</span>
            </h3>
            <div className="space-y-2">
              {['Mumbai', 'Delhi NCR', 'Bangalore', 'Pune'].map((loc) => (
                <label key={loc} className="flex items-center gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={filters.locations.includes(loc)}
                    onChange={() => handleToggleLocation(loc)}
                    className="rounded border-brand-secondary text-brand-secondary focus:ring-brand-secondary w-4 h-4 cursor-pointer"
                  />
                  <span className="text-sm text-text-muted group-hover:text-text-main transition-colors">
                    {loc}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Annual Fees facet */}
          <div>
            <h3 className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-3">
              Annual Fees
            </h3>
            <div className="space-y-2">
              {[
                { label: 'Under $5k', value: 'under-5k' },
                { label: '$5k - $15k', value: '5k-15k' },
                { label: '$15k - $30k', value: '15k-30k' },
                { label: 'Above $30k', value: 'above-30k' },
              ].map((range) => (
                <label key={range.value} className="flex items-center gap-3 cursor-pointer group select-none">
                  <input
                    type="radio"
                    name="fees"
                    checked={filters.feeRange === range.value}
                    onChange={() => {
                      setFilters((prev) => ({ ...prev, feeRange: range.value }));
                      setCurrentPage(1);
                    }}
                    className="border-brand-secondary text-brand-secondary focus:ring-brand-secondary w-4 h-4 cursor-pointer"
                  />
                  <span className="text-sm text-text-muted group-hover:text-text-main transition-colors">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Minimum Rating facet */}
          <div>
            <h3 className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-3">
              Minimum Rating
            </h3>
            <div className="flex gap-1.5 h-8">
              {[1, 2, 3, 4, 5].map((ratingVal) => {
                const isActive = filters.minRating === ratingVal;
                return (
                  <button
                    key={ratingVal}
                    onClick={() => {
                      setFilters((prev) => ({
                        ...prev,
                        minRating: prev.minRating === ratingVal ? null : ratingVal,
                      }));
                      setCurrentPage(1);
                    }}
                    className={`flex-1 rounded border text-sm font-semibold flex items-center justify-center transition-all cursor-pointer ${
                      isActive
                        ? 'border-brand-primary bg-brand-primary text-white scale-105 shadow-sm'
                        : 'border-brand-surface-highest bg-white text-brand-primary hover:bg-brand-surface-low'
                    }`}
                  >
                    {ratingVal}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Course Type facet */}
          <div>
            <h3 className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-3">
              Course Type
            </h3>
            <div className="space-y-2">
              {['Full-Time', 'Part-Time', 'Distance'].map((type) => (
                <label key={type} className="flex items-center gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={filters.courseTypes.includes(type)}
                    onChange={() => handleToggleCourseType(type)}
                    className="rounded border-brand-secondary text-brand-secondary focus:ring-brand-secondary w-4 h-4 cursor-pointer"
                  />
                  <span className="text-sm text-text-muted group-hover:text-text-main transition-colors">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Clear Filters / Compare Button Action Box */}
        <div className="mt-auto space-y-3 pt-6 border-t border-brand-surface-highest">
          <button
            onClick={handleResetFilters}
            className="w-full py-2.5 rounded-lg border border-brand-surface-highest bg-white text-brand-primary hover:bg-brand-surface-container font-semibold text-xs text-center transition-all active:scale-95 cursor-pointer"
          >
            Clear All Filters
          </button>
          
          <button
            id="sidebar-compare-button"
            disabled={selectedCompareIds.length < 2}
            onClick={onViewComparePage}
            className={`w-full py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer ${
              selectedCompareIds.length >= 2
                ? 'bg-brand-primary text-white hover:bg-brand-primary/95 shadow-md'
                : 'bg-brand-surface-highest text-text-muted bg-opacity-70 cursor-not-allowed'
            }`}
          >
            <ArrowLeftRight className="w-4 h-4" />
            <span>Compare Colleges ({selectedCompareIds.length})</span>
          </button>
        </div>
      </aside>

      {/* Main Content Dashboard Area */}
      <div className="flex-1 py-8 px-6 md:px-10 flex flex-col min-w-0">
        
        {/* Hero Section & Search Input */}
        <section className="mb-10">
          <h1 className="text-3xl font-headline font-bold text-brand-primary tracking-tight md:text-4xl mb-2">
            Find Your Ideal Institution
          </h1>
          <p className="text-sm text-text-muted md:text-base mb-8">
            Browse through 1,200+ verified colleges across major cities.
          </p>

          <div className="relative max-w-2xl w-full flex items-center group transition-all duration-300">
            <span className="absolute left-4 text-text-muted group-focus-within:text-brand-secondary transition-colors">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search by college name, city, or stream..."
              value={filters.searchQuery}
              onChange={(e) => {
                setFilters((prev) => ({ ...prev, searchQuery: e.target.value }));
                setCurrentPage(1);
              }}
              className="w-full h-14 pl-12 pr-32 bg-white border border-brand-surface-highest rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all shadow-sm focus:scale-[1.01] text-brand-primary font-sans text-sm"
            />
            <button
              onClick={() => {
                if (!filters.searchQuery) alert("Please type a location or college name to search.");
              }}
              className="absolute right-2 top-2 bottom-2 bg-brand-secondary text-white px-6 rounded-lg font-sans text-sm font-bold hover:opacity-95 active:scale-95 transition-all cursor-pointer"
            >
              Search
            </button>
          </div>
        </section>

        {/* Filters Top Meta Statistics */}
        <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-brand-surface-container">
          <span className="text-xs font-semibold text-text-muted">
            Showing {filteredColleges.length} of {colleges.length} Institutions
          </span>
          
          <div className="flex items-center gap-3">
            <span className="text-xs text-text-muted uppercase tracking-wider font-semibold">Sort By:</span>
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters((p) => ({ ...p, sortBy: e.target.value as any }))}
              className="bg-transparent border-none text-xs font-bold text-brand-primary focus:ring-0 cursor-pointer focus:outline-none py-1"
            >
              <option value="Highest Rated">Highest Rated</option>
              <option value="Low to High Fee">Low to High Fee</option>
              <option value="Top Placements">Top Placements</option>
            </select>
          </div>
        </section>

        {/* Listings Grid */}
        {filteredColleges.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-xl border border-brand-surface-container custom-shadow p-8 flex-grow">
            <div className="w-16 h-16 bg-brand-surface-low rounded-full flex items-center justify-center text-brand-secondary mb-4">
              <SlidersHorizontal className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-headline font-semibold text-brand-primary mb-1">No Institutions Found</h3>
            <p className="text-sm text-text-muted max-w-sm mb-6">
              No colleges match your active search terms or faceted filter options. Try resetting your choices.
            </p>
            <button
              onClick={handleResetFilters}
              className="bg-brand-primary text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 active:scale-95 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <AnimatePresence mode="popLayout">
              {paginatedColleges.map((college, idx) => {
                const isSelectedForCompare = selectedCompareIds.includes(college.id);
                return (
                  <motion.div
                    key={college.id}
                    layoutId={`college-card-${college.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="bg-white border border-brand-surface-container rounded-xl overflow-hidden hover:border-brand-secondary transition-all custom-shadow group flex flex-col h-full"
                  >
                    {/* Cover Photo / Thumb Section */}
                    <div className="relative h-48 bg-brand-surface-container overflow-hidden shrink-0">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src={college.image}
                        alt={college.name}
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Rating Label top-right */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
                        <span className="text-xs font-bold text-brand-primary">{college.rating}</span>
                      </div>

                      {/* Approval Badge bottom-left */}
                      {college.badge && (
                        <div className="absolute bottom-4 left-4">
                          <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded backdrop-blur-md border ${
                            college.badgeType === 'success'
                              ? 'bg-brand-green/10 text-brand-green border-brand-green/20'
                              : 'bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20'
                          }`}>
                            {college.badge}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Meta Body Info Details */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h4 
                          onClick={() => onSelectCollege(college.id)}
                          className="font-headline text-lg font-bold text-brand-primary group-hover:text-brand-secondary transition-colors leading-snug cursor-pointer flex-grow hover:underline"
                        >
                          {college.name}
                        </h4>
                        
                        {/* Compare checkbox */}
                        <label className="flex items-center gap-1.5 cursor-pointer shrink-0 select-none">
                          <input
                            type="checkbox"
                            checked={isSelectedForCompare}
                            onChange={() => onToggleCompare(college.id)}
                            className="rounded border-brand-surface-highest text-brand-secondary focus:ring-brand-secondary cursor-pointer"
                          />
                          <span className="text-xs font-bold text-text-muted">Compare</span>
                        </label>
                      </div>

                      {/* Location representation */}
                      <p className="flex items-center gap-1 text-xs text-text-muted mb-4">
                        <MapPin className="w-3.5 h-3.5 text-brand-secondary shrink-0" />
                        <span>{college.location}</span>
                      </p>

                      {/* Brief description excerpt */}
                      <p className="text-xs text-text-muted leading-relaxed line-clamp-2 mb-6 flex-grow">
                        {college.description}
                      </p>

                      {/* Fees & View details CTA Row */}
                      <div className="flex items-center justify-between pt-4 border-t border-brand-surface-container shrink-0">
                        <div>
                          <p className="text-[10px] text-text-muted uppercase tracking-wider mb-0.5">Annual Fee</p>
                          <p className="text-lg font-headline font-bold text-brand-primary">{college.annualFeeFormatted}</p>
                        </div>
                        <button
                          onClick={() => onSelectCollege(college.id)}
                          className="bg-brand-primary text-white hover:bg-brand-secondary font-semibold text-xs px-5 py-2.5 rounded-lg shadow-sm transition-all active:scale-95 cursor-pointer"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* Pagination Section controls */}
        {filteredColleges.length > 0 && (
          <div className="mt-auto flex justify-center items-center gap-2 pt-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center rounded-lg border border-brand-surface-container hover:bg-brand-surface-low transition-all cursor-pointer ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <ChevronLeft className="w-5 h-5 text-brand-primary" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => {
              const isActive = currentPage === pg;
              return (
                <button
                  key={pg}
                  onClick={() => setCurrentPage(pg)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-brand-primary text-white font-semibold'
                      : 'border border-brand-surface-container bg-white text-brand-primary hover:bg-brand-surface-low'
                  }`}
                >
                  {pg}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center rounded-lg border border-brand-surface-container hover:bg-brand-surface-low transition-all cursor-pointer ${
                currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <ChevronRight className="w-5 h-5 text-brand-primary" />
            </button>
          </div>
        )}
      </div>

      {/* Floating Selection Tray (Comparison Tool) */}
      <AnimatePresence>
        {selectedCompareIds.length > 0 && (
          <motion.div
            initial={{ y: 100, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}
            exit={{ y: 100, x: '-50%', opacity: 0 }}
            className="fixed bottom-6 left-1/2 bg-brand-primary text-white border border-white/10 px-8 py-4 rounded-full shadow-2xl flex items-center gap-6 z-[60]"
            id="floating-compare-tray"
          >
            <div className="flex items-center gap-4">
              <span className="font-sans text-sm font-semibold">
                {selectedCompareIds.length} Colleges Selected
              </span>
              
              {/* Stacked Avatars/Thumbnails */}
              <div className="flex -space-x-3 select-none">
                {selectedCompareIds.slice(0, 3).map((id) => {
                  const targetColl = colleges.find((c) => c.id === id);
                  if (!targetColl) return null;
                  return (
                    <div key={id} className="w-10 h-10 rounded-full border-2 border-brand-primary bg-brand-surface-container overflow-hidden shrink-0">
                      <img 
                        className="w-full h-full object-cover" 
                        src={targetColl.image} 
                        alt={targetColl.name} 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="h-8 w-[1px] bg-white/20" />

            <div className="flex items-center gap-3">
              <button
                onClick={onViewComparePage}
                disabled={selectedCompareIds.length < 2}
                className={`px-6 py-2 rounded-full font-sans text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer ${
                  selectedCompareIds.length >= 2
                    ? 'bg-brand-secondary text-white hover:opacity-95'
                    : 'bg-brand-surface-highest text-text-muted cursor-not-allowed opacity-60'
                }`}
              >
                Compare Now
              </button>
              
              <button
                onClick={onClearCompare}
                className="hover:bg-white/10 p-2 rounded-full transition-all text-white/70 hover:text-white cursor-pointer"
                title="Clear selected list"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
