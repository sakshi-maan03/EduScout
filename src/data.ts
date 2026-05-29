import { College } from './types';

export const collegesData: College[] = [
  {
    id: 'iit-mumbai',
    name: 'Indian Institute of Technology, Mumbai',
    location: 'Powai, Mumbai, Maharashtra',
    city: 'Mumbai',
    rating: 4.8,
    reviewsCount: 1240,
    badge: 'Verified',
    badgeType: 'success',
    annualFee: 205000, // ₹ 2,05,000 per year
    annualFeeFormatted: '₹ 2,05,000',
    originalFeeIndian: '₹ 8.2 Lakhs (Total B.Tech)',
    averagePackage: '₹ 24.5 LPA',
    averagePackageValue: 24.5,
    facultyCount: '680+ Members',
    description: "Established in 1958, IIT Mumbai (IITB) is widely regarded as one of the most prestigious technical universities globally. It is an 'Institute of National Importance' and has consistently ranked #1 or #2 in the NIRF Engineering rankings. The campus spans over 550 acres nestled between the Vihar and Tulsi lakes.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgo63MzFrMnYxwdbcw04gYs2R8WxVpnyUZnfskYo0UOXx6cQVT85HFG2aNd_nZhm4zkBBuSFy_Dy7E0XcPlmYYojl2C912AjU5kSqjOylVA7LjHbPrBCAIq04J_-U7Sy4MLNf1NHIPZ7keXwNHbjoCNhesFGShsJ-O0mCuGO3pyavV42ZfxiCkMAOWMHETyZo5GANJUZ_qI0JcIXAQChczfflKk-aAR2Yv83oo2H2ao40ELNZILWxKyy6CwDQ-mQp7s7lep1Wnkpdz',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpyGsA6mvy8ZjWCJD4njoQ0jrJqRlSymJ0OlGDHnajQbhBzCEPgWd5-qX0Cv7zo98gs95uaCnTfdVZqvc4Gxnl2dhgJD9bhdrrTa3EbVdYAdwhHkl5OvxgjpQpbH2iqVnLg-z4Ahvs-bDk9-7t-FlagRd-gBg6GyQSXBrMZgr_qsv0X0fm-3ZrbhKFaQneb2OAtf5sf-Pjlx91wmoo1D1GDKLN1SbtVHkJDB_6Rj0n9fNRi9t-D979O0cNHKvC3IstgaLYK_nclrx6',
    accredited: true,
    courseType: 'Full-Time',
    rankings: [
      { organization: 'NIRF (Overall)', rank: '#3' },
      { organization: 'NIRF (Engineering)', rank: '#1' },
      { organization: 'QS Global Ranking', rank: '#149' }
    ],
    placements: [
      { year: 2021, packageLpa: 18.5 },
      { year: 2022, packageLpa: 21.2 },
      { year: 2023, packageLpa: 23.8 },
      { year: 2024, packageLpa: 24.5 }
    ],
    sectorPlacements: [
      { sector: 'Software & IT', offers: 412, avgPackage: '₹ 28.5 LPA' },
      { sector: 'Core Engineering', offers: 320, avgPackage: '₹ 18.2 LPA' },
      { sector: 'Consulting', offers: 156, avgPackage: '₹ 22.0 LPA' },
      { sector: 'Analytics/Finance', offers: 124, avgPackage: '₹ 20.5 LPA' }
    ],
    similarColleges: ['iit-delhi', 'iit-madras'],
    campusLocationName: 'Powai Lakeshore Area',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0nwd-XQk6VFGMymZp76IqzY6dpB2x8nWLXVWpGQUKcx_IchEq0Xceq5x1jokC-BCwKodtZx_gRs3jhW4ekgwhghzvDBy-6lviXc4n6Gdr2owA551GJtXcJd8_gCebGECPyBGJqgfoMh_91oCQFxK1v9X9P71f3IhcSHYnW5c6iQw7kJSgG5RF82ydLxL5XA2ALN-N5M0c3HFFFGf4a_bHA8bozC_OfAUXnExAxkYe--PQ9mSQClKaooOXr4O_pPsewXfVNJDDDzEJ'
  },
  {
    id: 'st-lawrence',
    name: 'St. Lawrence Institute of Tech',
    location: 'Whitefield, Bengaluru, Karnataka',
    city: 'Bangalore',
    rating: 4.8,
    reviewsCount: 1200,
    badge: 'Top Ranked',
    badgeType: 'success',
    annualFee: 420000, 
    annualFeeFormatted: '₹ 4,20,000',
    originalFeeIndian: '₹ 16.8 Lakhs (Total B.Tech)',
    averagePackage: '14.2 LPA',
    averagePackageValue: 14.2,
    facultyCount: '580+ Members',
    description: "St. Lawrence Institute of Tech is highly acclaimed as Bengaluru's stellar choice for information technology and electronics engineering classes. Set on a beautifully landscaped modern campus, it produces cutting-edge research and places students in elite tech giants globally.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlKGieS-byOYmFXPlmEXf_SMbLqvR6UjI-1ZZ17mvl__E6b-WgBVu8w6byQf98uocXkylOmFgIagVgelf-lKkg05rVTQjEcs2TkSH3hQVMk6NZ-aZ72guSeOT6IZj2dNYgaTdtPW_FG2649jJe6CYF_vZBrKyMfs8csGHqvfwT8A3F7iTJ8e8LV8a8izLopp-4usfz8Wdcx0BCDNI3wtpGnvHTDr7aESSzz7F_PmKhJ7xMyV3I8K0N6NZPhChc8TvwoRk9VCUlV66L',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnysAuZ8o7WlP-zjxvmI-wCQMhcICQlMpD2mJQB0ZugjiPR0e8elRLfq-Nkr7qhEbUBWUxOsl8A3sMRIEfO56hMUDfFSa4XVhMTGO7-4I_HhS0efiBctj8ZsjxqMjiBvJwI5LOsQw5d6qyFAaQm9YiGOpC4llx9NhuPjTchLi8axyxSY8FgpPFm7Jo3Q-eDdXfetuIwQlJjBjkZLQ9r8AkykyKqJ1wA3IpjvuurkYl96lm3aoQNz0b8yZ46dNCezYlda_vKNvyFvSW',
    accredited: true,
    courseType: 'Full-Time',
    rankings: [
      { organization: 'NIRF (Overall)', rank: '#12' },
      { organization: 'NIRF (Engineering)', rank: '#8' },
      { organization: 'QS Global Ranking', rank: '#290' }
    ],
    placements: [
      { year: 2021, packageLpa: 10.2 },
      { year: 2022, packageLpa: 12.1 },
      { year: 2023, packageLpa: 13.8 },
      { year: 2024, packageLpa: 14.2 }
    ],
    sectorPlacements: [
      { sector: 'Software & IT', offers: 320, avgPackage: '₹ 16.5 LPA' },
      { sector: 'Core Engineering', offers: 150, avgPackage: '₹ 9.8 LPA' },
      { sector: 'Consulting', offers: 90, avgPackage: '₹ 12.0 LPA' },
      { sector: 'Analytics/Finance', offers: 85, avgPackage: '₹ 11.5 LPA' }
    ],
    similarColleges: ['apex-engineering', 'iit-mumbai'],
    campusLocationName: 'Whitefield Tech Corridor',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0nwd-XQk6VFGMymZp76IqzY6dpB2x8nWLXVWpGQUKcx_IchEq0Xceq5x1jokC-BCwKodtZx_gRs3jhW4ekgwhghzvDBy-6lviXc4n6Gdr2owA551GJtXcJd8_gCebGECPyBGJqgfoMh_91oCQFxK1v9X9P71f3IhcSHYnW5c6iQw7kJSgG5RF82ydLxL5XA2ALN-N5M0c3HFFFGf4a_bHA8bozC_OfAUXnExAxkYe--PQ9mSQClKaooOXr4O_pPsewXfVNJDDDzEJ'
  },
  {
    id: 'metropolitan-academy',
    name: 'Metropolitan Academy of Arts',
    location: 'North Campus, New Delhi, DL',
    city: 'Delhi NCR',
    rating: 4.5,
    reviewsCount: 840,
    badge: 'High ROI',
    badgeType: 'accent',
    annualFee: 285000,
    annualFeeFormatted: '₹ 2,85,000',
    originalFeeIndian: '₹ 11.4 Lakhs (Total Degree)',
    averagePackage: '9.8 LPA',
    averagePackageValue: 9.8,
    facultyCount: '250+ Members',
    description: "Metropolitan Academy of Arts is an imposing historical red brick collegiate institution. It inspires creative dialogue and architectural brilliance, combining deep humanities scholarship with global arts curation.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiVZooIjfQZse-JmdZrs5EfIroMSjUVKU27iZ3vmScKnkGD2eEY3vhih6WqQ_h4ZFn7YtomnCj7pVvUfBPPU2xAOGIb3N7hO6vY1mmF8zW8kNqhxr3lXFyeghWtk4vYJyKirnI4WtqsI3P_UoOJtnV6qXYMiutvxS-ImCnaoq1uQLfa3iQprdKCirYkM36aILOQqwDAJU7BbJWmF2My5uVsQTt4G-NkrIB13SKtZgoCJwQGu9N0vMZyyQpiARJ5sboCSr8hOOukHlq',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqEHtyL90ogf5Vn5v-3btEs130XBTZXxHsq7oCclyRFNKCcUjP0oKa3nUATlh56uQ3Fzup0I2Q03OfLdt7GGmPMi6alISRkDzln9xfdTK0J2MxzCoiHLloL-adIC-tjbi6nrym-piyrb03Ut2369LThcbFnxn3TwhqN9Sk5HYD7Dfc6dFJp1W_w0J1HydNMeMLYnTMwnlIbJLMN9oWEtavBLpNHN44-wu7EaVqYaNWADna0cefDNYo-t_XL5reI09QRlfRfrKxyWLn',
    accredited: true,
    courseType: 'Full-Time',
    rankings: [
      { organization: 'NIRF (Overall)', rank: '#28' },
      { organization: 'NIRF (Arts)', rank: '#4' },
      { organization: 'QS Global Ranking', rank: '#420' }
    ],
    placements: [
      { year: 2021, packageLpa: 7.5 },
      { year: 2022, packageLpa: 8.2 },
      { year: 2023, packageLpa: 9.1 },
      { year: 2024, packageLpa: 9.8 }
    ],
    sectorPlacements: [
      { sector: 'Arts & Media', offers: 120, avgPackage: '₹ 11.2 LPA' },
      { sector: 'Humanities Research', offers: 65, avgPackage: '₹ 7.5 LPA' },
      { sector: 'Consulting', offers: 40, avgPackage: '₹ 10.5 LPA' },
      { sector: 'Social Ventures', offers: 30, avgPackage: '₹ 8.2 LPA' }
    ],
    similarColleges: ['heritage-medical', 'global-liberal'],
    campusLocationName: 'North Campus Heritage Hub',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6QFDKiOoVt_u3k4ZdaLXMWJXGVPoWGizQgyN8qvbNKnRo_r0AxJ-53joW0iH35dKQvytCpRcoNuUoK6FIAzw98J6zw0LuZnqn4niktGjxri3WPHbn-xNJf7Sdav8HFLUjiTz05zvCHOvbSz40E9xkP6rNkL7_cDnZ4MHoNk1wt5hWpkw39mA7j8bFtBCStlEHeAddBToHEjFUywLcoMABOfTobgO7JPV0LkfiXK-wqcW22NCs1Aq4HyJBkJyMXsyGaUzTSaFxVJGc'
  },
  {
    id: 'national-institute',
    name: 'National Institute of Management',
    location: 'Vile Parle, Mumbai, Maharashtra',
    city: 'Mumbai',
    rating: 4.8,
    reviewsCount: 1120,
    badge: 'UGC Approved',
    badgeType: 'success',
    annualFee: 18500, // standard USD format for visual consistency or standard filter ranges
    annualFeeFormatted: '$18,500',
    originalFeeIndian: '₹ 15.2 Lakhs',
    averagePackage: '₹ 12.8 LPA',
    averagePackageValue: 12.8,
    facultyCount: '210+ Members',
    description: "National Institute of Management (NIM) Mumbai is a premier institution offering state-of-the-art management programs. It is known for its excellent corporate connections, industry-oriented curriculum, and high placement ratios.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgo63MzFrMnYxwdbcw04gYs2R8WxVpnyUZnfskYo0UOXx6cQVT85HFG2aNd_nZhm4zkBBuSFy_Dy7E0XcPlmYYojl2C912AjU5kSqjOylVA7LjHbPrBCAIq04J_-U7Sy4MLNf1NHIPZ7keXwNHbjoCNhesFGShsJ-O0mCuGO3pyavV42ZfxiCkMAOWMHETyZo5GANJUZ_qI0JcIXAQChczfflKk-aAR2Yv83oo2H2ao40ELNZILWxKyy6CwDQ-mQp7s7lep1Wnkpdz',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnysAuZ8o7WlP-zjxvmI-wCQMhcICQlMpD2mJQB0ZugjiPR0e8elRLfq-Nkr7qhEbUBWUxOsl8A3sMRIEfO56hMUDfFSa4XVhMTGO7-4I_HhS0efiBctj8ZsjxqMjiBvJwI5LOsQw5d6qyFAaQm9YiGOpC4llx9NhuPjTchLi8axyxSY8FgpPFm7Jo3Q-eDdXfetuIwQlJjBjkZLQ9r8AkykyKqJ1wA3IpjvuurkYl96lm3aoQNz0b8yZ46dNCezYlda_vKNvyFvSW',
    accredited: true,
    courseType: 'Full-Time',
    rankings: [
      { organization: 'NIRF (Management)', rank: '#9' },
      { organization: 'Business Today', rank: '#6' }
    ],
    placements: [
      { year: 2021, packageLpa: 10.1 },
      { year: 2022, packageLpa: 11.2 },
      { year: 2023, packageLpa: 12.1 },
      { year: 2024, packageLpa: 12.8 }
    ],
    sectorPlacements: [
      { sector: 'BFSI', offers: 154, avgPackage: '₹ 14.5 LPA' },
      { sector: 'Consulting', offers: 92, avgPackage: '₹ 15.1 LPA' },
      { sector: 'FMCG / Retail', offers: 85, avgPackage: '₹ 13.2 LPA' },
      { sector: 'Tech Management', offers: 71, avgPackage: '₹ 12.0 LPA' }
    ],
    similarColleges: ['iit-mumbai', 'apex-engineering'],
    campusLocationName: 'Powai Lakeshore Area',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0nwd-XQk6VFGMymZp76IqzY6dpB2x8nWLXVWpGQUKcx_IchEq0Xceq5x1jokC-BCwKodtZx_gRs3jhW4ekgwhghzvDBy-6lviXc4n6Gdr2owA551GJtXcJd8_gCebGECPyBGJqgfoMh_91oCQFxK1v9X9P71f3IhcSHYnW5c6iQw7kJSgG5RF82ydLxL5XA2ALN-N5M0c3HFFFGf4a_bHA8bozC_OfAUXnExAxkYe--PQ9mSQClKaooOXr4O_pPsewXfVNJDDDzEJ'
  },
  {
    id: 'apex-engineering',
    name: 'Apex Engineering University',
    location: 'Whitefield, Bangalore, Karnataka',
    city: 'Bangalore',
    rating: 4.5,
    reviewsCount: 910,
    badge: 'Premier Rank #5',
    badgeType: 'secondary',
    annualFee: 22000,
    annualFeeFormatted: '$22,000',
    originalFeeIndian: '₹ 18.2 Lakhs',
    averagePackage: '₹ 14.2 LPA',
    averagePackageValue: 14.2,
    facultyCount: '350+ Members',
    description: "Apex Engineering University stands as a beacon of engineering research and software innovation. Set in India's high-tech industrial capital, it boasts high academic output, state of the art labs, and placements in top tier globally renowned firms.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcI5N3VeOmJ8yHQc4opy6gMBRiXIed_c0uk-78T1IMyA9gDRMQldso4cdWtf9U_lx-sGKDWLa6P2NV8TTUzSGysvJBAj7FKX4RJut2j5USAXEeLJwe5qY1s7vW9FifgOGclsTxGBuG-kgwIN3lf6biewnWwMHeA_On25927pufrY4H7ik9zVd4lImrAuQoQpUDZ9xe5-tsZBARpeR69LCSsKuC6Snynn_vZ0rvrobAuiruOMorevSCentvZF30UruXFfPMTDhVHhfx',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpKoqE4oF7AIjJgHXUf_EvXug3kSzAQ3M6JYnwk3dRPKECBXdIJqN8UDMn_gbTNE5LgSuIfFjN2fs2Z5-NisBfrRtvzsJdOyT0WBmsq9Gs6Mfm4NHSR29CJcoexSp3D5IjbsBlL1yJctZ2oLf36Oa_hkQuJO2bqLP7f9XkxkueVVjegt2UIgybmDV4CMB9mSaDrhdsVhB_RZoSLjy1SrGvmZYo8dfmkADJe1eDsB5L4GRgdKwLw0qU4MKhl3esDQGtlMzej6ga2Cx_',
    accredited: true,
    courseType: 'Full-Time',
    rankings: [
      { organization: 'NIRF (Engineering)', rank: '#5' },
      { organization: 'Times Higher Ed', rank: '#12' }
    ],
    placements: [
      { year: 2021, packageLpa: 11.2 },
      { year: 2022, packageLpa: 12.8 },
      { year: 2023, packageLpa: 13.5 },
      { year: 2024, packageLpa: 14.2 }
    ],
    sectorPlacements: [
      { sector: 'Software Engineering', offers: 210, avgPackage: '₹ 16.2 LPA' },
      { sector: 'Data Science / AI', offers: 85, avgPackage: '₹ 18.0 LPA' },
      { sector: 'Hardware Systems', offers: 35, avgPackage: '₹ 11.0 LPA' },
      { sector: 'Infrastructure', offers: 20, avgPackage: '₹ 9.5 LPA' }
    ],
    similarColleges: ['st-lawrence', 'iit-mumbai'],
    campusLocationName: 'Whitefield Tech Corridor',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0nwd-XQk6VFGMymZp76IqzY6dpB2x8nWLXVWpGQUKcx_IchEq0Xceq5x1jokC-BCwKodtZx_gRs3jhW4ekgwhghzvDBy-6lviXc4n6Gdr2owA551GJtXcJd8_gCebGECPyBGJqgfoMh_91oCQFxK1v9X9P71f3IhcSHYnW5c6iQw7kJSgG5RF82ydLxL5XA2ALN-N5M0c3HFFFGf4a_bHA8bozC_OfAUXnExAxkYe--PQ9mSQClKaooOXr4O_pPsewXfVNJDDDzEJ'
  },
  {
    id: 'global-liberal',
    name: 'Global Liberal Arts College',
    location: 'Hinjewadi, Pune, Maharashtra',
    city: 'Pune',
    rating: 4.9,
    reviewsCount: 820,
    badge: 'Liberal Model',
    badgeType: 'accent',
    annualFee: 12800,
    annualFeeFormatted: '$12,800',
    originalFeeIndian: '₹ 10.6 Lakhs',
    averagePackage: '₹ 9.5 LPA',
    averagePackageValue: 9.5,
    facultyCount: '180+ Members',
    description: "An expansive, sunlit library and multi-disciplinary academic programs define our approach. Global Liberal Arts College Pune focuses on critical reasoning, philosophy, arts, and systemic thinking, nurturing global citizens for top policy, technology, and media positions.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUeUgoIccTjibDBqV813k9GiXnndD8v_gzgibszFk56zcC8d9b8XNOw65IjSi1C7wb4sH_jRieDWtbNJlGyWTtI345k7zG7s9DyCLLWzJRTgDIXlEw6WbOo0Ob4d-Kh1O_MGq-qKiwsTAtBX_5igG_fNd1kqq6O0cBd1osc-folmNn7Lm8XjtM53ZKzWaFoBfktS0G1Eg6TUAo9SfSk0m5oSfwjmNIi9yH5KhnPqGUAJJv1w5CiSnZzbiEd0Gqjy60AzI3gt7hgXhw',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqEHtyL90ogf5Vn5v-3btEs130XBTZXxHsq7oCclyRFNKCcUjP0oKa3nUATlh56uQ3Fzup0I2Q03OfLdt7GGmPMi6alISRkDzln9xfdTK0J2MxzCoiHLloL-adIC-tjbi6nrym-piyrb03Ut2369LThcbFnxn3TwhqN9Sk5HYD7Dfc6dFJp1W_w0J1HydNMeMLYnTMwnlIbJLMN9oWEtavBLpNHN44-wu7EaVqYaNWADna0cefDNYo-t_XL5reI09QRlfRfrKxyWLn',
    accredited: true,
    courseType: 'Distance',
    rankings: [
      { organization: 'NIRF (Liberal Arts)', rank: '#2' },
      { organization: 'India Today', rank: '#3' }
    ],
    placements: [
      { year: 2021, packageLpa: 7.2 },
      { year: 2022, packageLpa: 8.1 },
      { year: 2023, packageLpa: 8.9 },
      { year: 2024, packageLpa: 9.5 }
    ],
    sectorPlacements: [
      { sector: 'NGO & Public Policy', offers: 64, avgPackage: '₹ 8.5 LPA' },
      { sector: 'Media & Communications', offers: 51, avgPackage: '₹ 10.1 LPA' },
      { sector: 'Corporate Strategy', offers: 35, avgPackage: '₹ 11.2 LPA' },
      { sector: 'Human Resources', offers: 30, avgPackage: '₹ 7.8 LPA' }
    ],
    similarColleges: ['metropolitan-academy', 'st-lawrence'],
    campusLocationName: 'Hinjewadi Knowledge Hub',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6QFDKiOoVt_u3k4ZdaLXMWJXGVPoWGizQgyN8qvbNKnRo_r0AxJ-53joW0iH35dKQvytCpRcoNuUoK6FIAzw98J6zw0LuZnqn4niktGjxri3WPHbn-xNJf7Sdav8HFLUjiTz05zvCHOvbSz40E9xkP6rNkL7_cDnZ4MHoNk1wt5hWpkw39mA7j8bFtBCStlEHeAddBToHEjFUywLcoMABOfTobgO7JPV0LkfiXK-wqcW22NCs1Aq4HyJBkJyMXsyGaUzTSaFxVJGc'
  },
  {
    id: 'heritage-medical',
    name: 'Heritage Medical College',
    location: 'North Delhi, Delhi, NCR',
    city: 'Delhi NCR',
    rating: 4.2,
    reviewsCount: 1450,
    badge: 'Top Medicine',
    badgeType: 'secondary',
    annualFee: 35000,
    annualFeeFormatted: '$35,000',
    originalFeeIndian: '₹ 29 Lakhs',
    averagePackage: '₹ 21.0 LPA',
    averagePackageValue: 21.0,
    facultyCount: '420+ Members',
    description: "Famed historic collegiate gothic lecture halls and elite practitioners characterize Heritage Medical College. It is located in core Delhi NCR and delivers research integration, clinical rotations in leading teaching hospitals, and exceptional post-graduate matching.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIpNx6rLfIVq8K5T37M6qzp5pF2CjXdrvrQupASHndPjLvkFhkcir7OmSYBjSu5wyUbi0HnBjOiU7Y4Yk6KQxsgeodjC-3jj6KU6hH7ED0kVTcwk9EInS9N_L_LQTDaq6ASc_KmF4oNnniIYTp7EduN1Hyvqm-dsbJwNp0hPiDzFAKy8Jy_07Ws1rBpjJY0BzcPgTUU2xLhenhz6mnYbOjzKPNBk0UmKhj1Zuzvl10R8Znkm-z8mDi6OI9-v9Cp-ayGhjCRpxIz1Fa',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnysAuZ8o7WlP-zjxvmI-wCQMhcICQlMpD2mJQB0ZugjiPR0e8elRLfq-Nkr7qhEbUBWUxOsl8A3sMRIEfO56hMUDfFSa4XVhMTGO7-4I_HhS0efiBctj8ZsjxqMjiBvJwI5LOsQw5d6qyFAaQm9YiGOpC4llx9NhuPjTchLi8axyxSY8FgpPFm7Jo3Q-eDdXfetuIwQlJjBjkZLQ9r8AkykyKqJ1wA3IpjvuurkYl96lm3aoQNz0b8yZ46dNCezYlda_vKNvyFvSW',
    accredited: true,
    courseType: 'Part-Time',
    rankings: [
      { organization: 'NIRF (Medical)', rank: '#4' },
      { organization: 'Outlook Medicine', rank: '#3' }
    ],
    placements: [
      { year: 2021, packageLpa: 15.6 },
      { year: 2022, packageLpa: 17.2 },
      { year: 2023, packageLpa: 19.5 },
      { year: 2024, packageLpa: 21.0 }
    ],
    sectorPlacements: [
      { sector: 'Specialty Hospitals', offers: 250, avgPackage: '₹ 25.0 LPA' },
      { sector: 'General Residency', offers: 110, avgPackage: '₹ 15.2 LPA' },
      { sector: 'Clinical Research', offers: 42, avgPackage: '₹ 18.0 LPA' },
      { sector: 'Healthcare Advisory', offers: 18, avgPackage: '₹ 22.5 LPA' }
    ],
    similarColleges: ['metropolitan-academy', 'st-lawrence'],
    campusLocationName: 'North Campus Heritage Hub',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6QFDKiOoVt_u3k4ZdaLXMWJXGVPoWGizQgyN8qvbNKnRo_r0AxJ-53joW0iH35dKQvytCpRcoNuUoK6FIAzw98J6zw0LuZnqn4niktGjxri3WPHbn-xNJf7Sdav8HFLUjiTz05zvCHOvbSz40E9xkP6rNkL7_cDnZ4MHoNk1wt5hWpkw39mA7j8bFtBCStlEHeAddBToHEjFUywLcoMABOfTobgO7JPV0LkfiXK-wqcW22NCs1Aq4HyJBkJyMXsyGaUzTSaFxVJGc'
  },
  {
    id: 'iit-delhi',
    name: 'Indian Institute of Technology, Delhi',
    location: 'Hauz Khas, New Delhi, Delhi',
    city: 'Delhi NCR',
    rating: 4.9,
    reviewsCount: 1390,
    badge: 'Accredited',
    badgeType: 'success',
    annualFee: 210000,
    annualFeeFormatted: '₹ 2,10,000',
    originalFeeIndian: '₹ 8.4 Lakhs (Total B.Tech)',
    averagePackage: '₹ 23.9 LPA',
    averagePackageValue: 23.9,
    facultyCount: '650+ Members',
    description: "Located in the historic Hauz Khas region, IIT Delhi is one of India's oldest and most renowned centers of engineering research. Boasting highly competitive entry standards and a vast alumni network spanning world tech leaders.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcI5N3VeOmJ8yHQc4opy6gMBRiXIed_c0uk-78T1IMyA9gDRMQldso4cdWtf9U_lx-sGKDWLa6P2NV8TTUzSGysvJBAj7FKX4RJut2j5USAXEeLJwe5qY1s7vW9FifgOGclsTxGBuG-kgwIN3lf6biewnWwMHeA_On25927pufrY4H7ik9zVd4lImrAuQoQpUDZ9xe5-tsZBARpeR69LCSsKuC6Snynn_vZ0rvrobAuiruOMorevSCentvZF30UruXFfPMTDhVHhfx',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpKoqE4oF7AIjJgHXUf_EvXug3kSzAQ3M6JYnwk3dRPKECBXdIJqN8UDMn_gbTNE5LgSuIfFjN2fs2Z5-NisBfrRtvzsJdOyT0WBmsq9Gs6Mfm4NHSR29CJcoexSp3D5IjbsBlL1yJctZ2oLf36Oa_hkQuJO2bqLP7f9XkxkueVVjegt2UIgybmDV4CMB9mSaDrhdsVhB_RZoSLjy1SrGvmZYo8dfmkADJe1eDsB5L4GRgdKwLw0qU4MKhl3esDQGtlMzej6ga2Cx_',
    accredited: true,
    courseType: 'Full-Time',
    rankings: [
      { organization: 'NIRF (Overall)', rank: '#4' },
      { organization: 'NIRF (Engineering)', rank: '#2' },
      { organization: 'QS Global Ranking', rank: '#150' }
    ],
    placements: [
      { year: 2021, packageLpa: 17.8 },
      { year: 2022, packageLpa: 20.1 },
      { year: 2023, packageLpa: 22.5 },
      { year: 2024, packageLpa: 23.9 }
    ],
    sectorPlacements: [
      { sector: 'Software & IT', offers: 395, avgPackage: '₹ 27.8 LPA' },
      { sector: 'Core Engineering', offers: 300, avgPackage: '₹ 17.9 LPA' },
      { sector: 'Consulting', offers: 145, avgPackage: '₹ 21.0 LPA' },
      { sector: 'Analytics/Finance', offers: 110, avgPackage: '₹ 20.0 LPA' }
    ],
    similarColleges: ['iit-mumbai', 'iit-madras'],
    campusLocationName: 'Hauz Khas District',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6QFDKiOoVt_u3k4ZdaLXMWJXGVPoWGizQgyN8qvbNKnRo_r0AxJ-53joW0iH35dKQvytCpRcoNuUoK6FIAzw98J6zw0LuZnqn4niktGjxri3WPHbn-xNJf7Sdav8HFLUjiTz05zvCHOvbSz40E9xkP6rNkL7_cDnZ4MHoNk1wt5hWpkw39mA7j8bFtBCStlEHeAddBToHEjFUywLcoMABOfTobgO7JPV0LkfiXK-wqcW22NCs1Aq4HyJBkJyMXsyGaUzTSaFxVJGc'
  },
  {
    id: 'iit-madras',
    name: 'Indian Institute of Technology, Madras',
    location: 'Guindy National Park, Chennai, Tamil Nadu',
    city: 'Pune', // Map Pune or other for simplified multi-location search filter
    rating: 4.9,
    reviewsCount: 1410,
    badge: 'Accredited',
    badgeType: 'success',
    annualFee: 198000,
    annualFeeFormatted: '₹ 1,98,000',
    originalFeeIndian: '₹ 7.9 Lakhs (Total B.Tech)',
    averagePackage: '₹ 25.1 LPA',
    averagePackageValue: 25.1,
    facultyCount: '690+ Members',
    description: "Ranked #1 in NIRF Engineering for multiple consecutive years, IIT Madras is celebrated for its highly advanced incubation cell, cutting-edge science parks, and sprawling, woodsy national park campus environment.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUeUgoIccTjibDBqV813k9GiXnndD8v_gzgibszFk56zcC8d9b8XNOw65IjSi1C7wb4sH_jRieDWtbNJlGyWTtI345k7zG7s9DyCLLWzJRTgDIXlEw6WbOo0Ob4d-Kh1O_MGq-qKiwsTAtBX_5igG_fNd1kqq6O0cBd1osc-folmNn7Lm8XjtM53ZKzWaFoBfktS0G1Eg6TUAo9SfSk0m5oSfwjmNIi9yH5KhnPqGUAJJv1w5CiSnZzbiEd0Gqjy60AzI3gt7hgXhw',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqEHtyL90ogf5Vn5v-3btEs130XBTZXxHsq7oCclyRFNKCcUjP0oKa3nUATlh56uQ3Fzup0I2Q03OfLdt7GGmPMi6alISRkDzln9xfdTK0J2MxzCoiHLloL-adIC-tjbi6nrym-piyrb03Ut2369LThcbFnxn3TwhqN9Sk5HYD7Dfc6dFJp1W_w0J1HydNMeMLYnTMwnlIbJLMN9oWEtavBLpNHN44-wu7EaVqYaNWADna0cefDNYo-t_XL5reI09QRlfRfrKxyWLn',
    accredited: true,
    courseType: 'Full-Time',
    rankings: [
      { organization: 'NIRF (Overall)', rank: '#1' },
      { organization: 'NIRF (Engineering)', rank: '#1' },
      { organization: 'QS Global Ranking', rank: '#250' }
    ],
    placements: [
      { year: 2021, packageLpa: 18.1 },
      { year: 2022, packageLpa: 21.5 },
      { year: 2023, packageLpa: 24.1 },
      { year: 2024, packageLpa: 25.1 }
    ],
    sectorPlacements: [
      { sector: 'Software & IT', offers: 430, avgPackage: '₹ 29.0 LPA' },
      { sector: 'Core Engineering', offers: 340, avgPackage: '₹ 19.1 LPA' },
      { sector: 'Consulting', offers: 160, avgPackage: '₹ 23.0 LPA' },
      { sector: 'Analytics/Finance', offers: 130, avgPackage: '₹ 21.0 LPA' }
    ],
    similarColleges: ['iit-mumbai', 'iit-delhi'],
    campusLocationName: 'Guindy National Park Area',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0nwd-XQk6VFGMymZp76IqzY6dpB2x8nWLXVWpGQUKcx_IchEq0Xceq5x1jokC-BCwKodtZx_gRs3jhW4ekgwhghzvDBy-6lviXc4n6Gdr2owA551GJtXcJd8_gCebGECPyBGJqgfoMh_91oCQFxK1v9X9P71f3IhcSHYnW5c6iQw7kJSgG5RF82ydLxL5XA2ALN-N5M0c3HFFFGf4a_bHA8bozC_OfAUXnExAxkYe--PQ9mSQClKaooOXr4O_pPsewXfVNJDDDzEJ'
  }
];
