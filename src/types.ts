export interface SectorPlacement {
  sector: string;
  offers: number;
  avgPackage: string;
}

export interface PlacementYear {
  year: number;
  packageLpa: number;
}

export interface Ranking {
  organization: string;
  rank: string;
}

export interface College {
  id: string;
  name: string;
  location: string;
  city: string; // "Mumbai", "Delhi NCR", "Bangalore", "Pune"
  rating: number;
  reviewsCount: number;
  badge?: string; // "UGC Approved", "Premier Rank #5", "Top Ranked", "High ROI", etc.
  badgeType?: 'success' | 'secondary' | 'accent' | 'none';
  annualFee: number; // Numerical for sorting/filtering
  annualFeeFormatted: string; // e.g. "$18,500" or "₹ 4,20,000"
  originalFeeIndian?: string; // e.g. "₹ 8.2 Lakhs" (or "₹ 4,20,000")
  averagePackage: string; // e.g. "₹ 24.5 LPA" or "14.2 LPA"
  averagePackageValue?: number; // e.g. 24.5
  facultyCount: string; // e.g. "680+ Members"
  description: string;
  image: string; // Link to campus photo
  logo: string; // Link to logo
  accredited: boolean;
  courseType: 'Full-Time' | 'Part-Time' | 'Distance';
  rankings: Ranking[];
  placements: PlacementYear[];
  sectorPlacements: SectorPlacement[];
  similarColleges: string[]; // IDs of similar colleges
  campusLocationName: string; // e.g. "Whitefield Tech Corridor"
  mapImage: string; // Link to local map image
}

export interface FilterState {
  searchQuery: string;
  locations: string[]; // list of active cities: "Mumbai", "Delhi NCR", "Bangalore", "Pune"
  feeRange: string | null; // "under-5k", "5k-15k", "15k-30k", "above-30k" or raw values
  minRating: number | null; // 1, 2, 3, 4, 5
  courseTypes: string[]; // "Full-Time", "Part-Time", "Distance"
  sortBy: 'Highest Rated' | 'Low to High Fee' | 'Top Placements';
}
