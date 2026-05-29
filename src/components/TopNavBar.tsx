import React from 'react';
import { ArrowLeftRight, LogIn } from 'lucide-react';

interface TopNavBarProps {
  currentTab: 'browse' | 'details' | 'compare';
  onChangeTab: (tab: 'browse' | 'details' | 'compare') => void;
  selectedCompareCount: number;
}

export default function TopNavBar({ currentTab, onChangeTab, selectedCompareCount }: TopNavBarProps) {
  return (
    <header className="bg-white border-b border-brand-surface-container sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-10 max-w-7xl mx-auto h-16 w-full">
        {/* Brand Logo & Nav Links */}
        <div className="flex items-center gap-8">
          <button 
            id="logo-button"
            className="text-2xl font-headline font-bold text-brand-primary tracking-tight transition-all active:scale-95 cursor-pointer"
            onClick={() => onChangeTab('browse')}
          >
            EduScout
          </button>
          
          <nav className="hidden md:flex items-center gap-6">
            <button
              id="nav-browse"
              onClick={() => onChangeTab('browse')}
              className={`font-sans text-sm pb-1 transition-all border-b-2 hover:text-brand-secondary cursor-pointer ${
                currentTab === 'browse' || currentTab === 'details'
                  ? 'text-brand-secondary border-brand-secondary font-semibold'
                  : 'text-text-muted border-transparent hover:border-text-muted'
              }`}
            >
              Browse Colleges
            </button>
            <button
              id="nav-placements"
              onClick={() => {
                alert("Deep placement reports section. Explore top placements, corporate tie-ups, and salaries.");
              }}
              className="font-sans text-sm text-text-muted hover:text-brand-primary border-b-2 border-transparent hover:border-text-muted pb-1 transition-all cursor-pointer"
            >
              Placements
            </button>
            <button
              id="nav-courses"
              onClick={() => {
                alert("Browse active undergraduate, post-graduate, and online courses.");
              }}
              className="font-sans text-sm text-text-muted hover:text-brand-primary border-b-2 border-transparent hover:border-text-muted pb-1 transition-all cursor-pointer"
            >
              Courses
            </button>
            <button
              id="nav-news"
              onClick={() => {
                alert("Latest news, admission policy notices, and ranking releases.");
              }}
              className="font-sans text-sm text-text-muted hover:text-brand-primary border-b-2 border-transparent hover:border-text-muted pb-1 transition-all cursor-pointer"
            >
              News
            </button>
          </nav>
        </div>

        {/* User Interaction & Action Buttons */}
        <div className="flex items-center gap-4">
          <button
            id="compare-top-nav-btn"
            onClick={() => onChangeTab('compare')}
            className={`font-sans text-sm text-brand-primary border border-brand-primary px-4 py-2 rounded-lg hover:bg-brand-surface-low transition-all active:scale-95 cursor-pointer relative flex items-center gap-2 ${
              currentTab === 'compare' ? 'bg-brand-surface-low font-semibold ring-2 ring-brand-primary/20' : ''
            }`}
          >
            <ArrowLeftRight className="w-4 h-4 text-brand-primary" />
            <span className="hidden sm:inline">Compare</span>
            {selectedCompareCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-secondary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
                {selectedCompareCount}
              </span>
            )}
          </button>
          
          <button
            id="signin-btn"
            onClick={() => {
              alert("Signed in successfully as sakshimaan012@gmail.com!");
            }}
            className="font-sans text-sm font-semibold bg-brand-secondary text-white px-5 py-2 rounded-lg hover:opacity-90 transition-all active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            <span>Sign In</span>
          </button>
        </div>
      </div>
    </header>
  );
}
