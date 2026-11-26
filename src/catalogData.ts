import { assetUrl } from './assets';

export interface AeratorItem {
  id: string;
  series: string;
  name: string;
  desc: string;
  image: string;
  alt: string;
  chips: [string, string, string];
  specs: {
    power: string;
    configuration: string;
    floats: string;
    supply: string;
    coverage: string;
    otr: string;
    frame: string;
    warranty: string;
  };
}

export type ProbioticIconKey = 'shield' | 'sparkles' | 'trending' | 'layers' | 'zap' | 'droplets' | 'heart';

export interface ProbioticHighlight {
  icon: ProbioticIconKey;
  line1: string;
  line2: string;
}

export interface ProbioticItem {
  code: string;
  id: string;
  series: string;
  name: string;
  subtitle: string;
  image: string;
  description: string;
  benefits: string[];
  highlights: [ProbioticHighlight, ProbioticHighlight, ProbioticHighlight];
  dosage: string;
  shortDosage: string;
  ingredients: string;
  shortIngredients: string;
  specsLine?: string;
  packageSize: string;
  chips: [string, string, string];
}

export interface SpareEquipmentItem {
  id: string;
  tag: string;
  name: string;
  desc: string;
  image: string;
  alt: string;
  chips: [string, string, string];
  specs: {
    category: string;
    capacity: string;
    build: string;
    compatibility: string;
    power: string;
    warranty: string;
  };
}

export const spareEquipmentProducts: SpareEquipmentItem[] = [
  {
    id: 'automatic-feeder',
    tag: 'AUTOMATIC FEEDING',
    name: 'Automatic Feeder',
    desc: 'Timer-controlled broadcast feeder for consistent, labour-free feeding schedules.',
    image: assetUrl('/images/spare-feeder.png'),
    alt: 'Stainless steel cylindrical aquaculture automatic broadcast feeder drum',
    chips: ['SS Hopper', 'Digital Timer', 'Even Spread'],
    specs: {
      category: 'Pond Feeding Automation',
      capacity: '80–120 kg Hopper Volume',
      build: 'Weather-Sealed Stainless Steel Drum',
      compatibility: 'Pellet & Crumble Shrimp/Fish Feed',
      power: '230V / Solar Timer Compatible',
      warranty: '12 Months'
    }
  },
  {
    id: 'water-pumps',
    tag: 'WATER PUMPS',
    name: 'Centrifugal Pump',
    desc: 'High-flow pumps for pond filling, water exchange, and harvesting operations.',
    image: assetUrl('/images/pump.webp'),
    alt: 'High-flow electric centrifugal aquaculture water pump',
    chips: ['High Flow', 'Heavy Duty', 'Corrosion Proof'],
    specs: {
      category: 'Water Transfer & Exchange',
      capacity: 'High-Discharge Head & Flow',
      build: 'Heavy Cast Housing & Copper Winding',
      compatibility: 'Brackish & Freshwater Ponds',
      power: '3-Phase 415V / Single-Phase 230V',
      warranty: '24 Months'
    }
  },
  {
    id: 'water-cooled-motor',
    tag: 'MOTOR & GEARBOX',
    name: 'Water Cooled Motor',
    desc: 'Stainless-jacket water-cooled motor with direct right-angle gearbox assembly.',
    image: assetUrl('/images/spare-motor.png'),
    alt: 'Stainless-jacket water-cooled aerator motor with cast-iron gearbox assembly',
    chips: ['SS-304 Jacket', 'Direct Drive', 'IP55 Sealed'],
    specs: {
      category: 'Aerator Motor & Gearbox Assembly',
      capacity: '1.0 HP / 2.0 HP / 3.0 HP Options',
      build: 'SS-304 Cooling Jacket & Cast Gearbox',
      compatibility: '2, 4, 6 & 8-Paddle Wheel Aerators',
      power: '3-Phase 415V / 50Hz',
      warranty: '24 Months'
    }
  },
  {
    id: 'diesel-engine-set',
    tag: 'OFF-GRID DRIVE',
    name: 'Diesel Engine Set',
    desc: 'Diesel-engine operated aerator drive for off-grid and back-up power ponds.',
    image: assetUrl('/images/spare-diesel.png'),
    alt: 'Compact single-cylinder diesel engine drive set for pond aerators',
    chips: ['Off-Grid Ready', 'High Torque', 'Backup Power'],
    specs: {
      category: 'Mechanical Pond Aerator Drive',
      capacity: '5.0–7.5 HP Continuous Output',
      build: 'Heavy-Duty Frame & Pulley Drive',
      compatibility: 'Long-Arm & Multi-Paddle Aerators',
      power: 'Air-Cooled Diesel Engine',
      warranty: '12 Months'
    }
  }
];

export const aeratorProducts: AeratorItem[] = [
  {
    id: 'paddle-wheel',
    series: 'STANDARD SERIES',
    name: 'Pro-4 Paddle Wheel Aerator',
    desc: 'Four-paddle surface aerator with a weather-sealed blue drive hood for steady 24/7 dissolved oxygen balance.',
    image: assetUrl('/images/aerator-4paddle-real.png'),
    alt: 'Pro-4 four-paddle wheel aerator with sealed blue drive hood and three virgin HDPE floats',
    chips: ['2.0 HP 3PH', '4 Impellers', '2.4 kg O₂/hr'],
    specs: {
      power: '2.0 HP / 1.5 kW',
      configuration: '4-Paddle Surface Wheel',
      floats: '3 Virgin HDPE Floats',
      supply: '3-Phase / 415V / 50Hz',
      coverage: 'Up to 1.2 Hectares',
      otr: '2.4 kg O₂/hr (SOTR)',
      frame: 'SS-304 Frame & Sealed Drive Hood',
      warranty: '24 Months'
    }
  },
  {
    id: 'compact-aerator',
    series: 'COMPACT SERIES',
    name: 'Turbo-2 Compact Aerator',
    desc: 'Twin-paddle surface aerator engineered for nursery ponds, biofloc tanks, and flexible corner circulation.',
    image: assetUrl('/images/aerator-2paddle-real.png'),
    alt: 'Turbo-2 compact two-paddle wheel aerator with twin blue floats and yellow impellers',
    chips: ['1.0 HP 1/3PH', '2 HDPE Floats', '1.6 kg O₂/hr'],
    specs: {
      power: '1.0 HP / 0.75 kW',
      configuration: '2-Paddle Compact Wheel',
      floats: '2 Virgin HDPE Floats',
      supply: '1-Phase 230V / 3-Phase 415V',
      coverage: 'Up to 0.6 Hectares',
      otr: '1.6 kg O₂/hr',
      frame: 'SS-304 Shaft & IP55 Motor',
      warranty: '24 Months'
    }
  },
  {
    id: 'pro-6-paddle',
    series: 'HEAVY DUTY SERIES',
    name: 'Pro-6 Heavy-Duty Aerator',
    desc: 'Six perforated yellow paddle wheels driven by a central vertical gearbox for demanding high-stocking ponds.',
    image: assetUrl('/images/aerator-6paddle-real.png'),
    alt: 'Pro-6 six-paddle wheel aerator with central gearbox motor and four blue floats',
    chips: ['3.0 HP 3PH', '6 PP Impellers', '3.2 kg O₂/hr'],
    specs: {
      power: '3.0 HP / 2.2 kW',
      configuration: '6-Paddle Central Drive',
      floats: '4 Virgin HDPE Floats',
      supply: '3-Phase / 415V / 50Hz',
      coverage: 'Up to 1.8 Hectares',
      otr: '3.2 kg O₂/hr',
      frame: 'SS-304 Twin Rail & Spline Coupling',
      warranty: '24 Months'
    }
  },
  {
    id: 'max-8-paddle',
    series: 'POWER SAVER SERIES',
    name: 'Max-8 Long-Arm Aerator',
    desc: 'Extended eight-paddle span across five pontoons to sustain uniform currents and lower power draw across large ponds.',
    image: assetUrl('/images/aerator-8paddle-real.png'),
    alt: 'Max-8 eight-paddle long-arm commercial aerator with five blue floats',
    chips: ['3.0–5.0 HP', '5 HDPE Floats', '4.1 kg O₂/hr'],
    specs: {
      power: '3.0–5.0 HP',
      configuration: '8-Paddle Long-Arm Span',
      floats: '5 Virgin HDPE Floats',
      supply: '3-Phase / 415V / 50Hz',
      coverage: 'Up to 2.5 Hectares',
      otr: '4.1 kg O₂/hr',
      frame: 'Reinforced SS-304 Long Frame',
      warranty: '24 Months'
    }
  },
  {
    id: 'spiral-impeller',
    series: 'SUBSURFACE SERIES',
    name: 'Surge Floating Impeller Aerator',
    desc: 'Subsurface upwelling pump aerator that lifts bottom anaerobic water, breaks thermal layers, and oxygenates the pond floor.',
    image: assetUrl('/images/aerator-impeller-real.png'),
    alt: 'Floating impeller aerator with circular blue HDPE ring and stainless steel intake strainer',
    chips: ['2.0 HP 3PH', 'SS Strainer', '98.4% Bottom O₂'],
    specs: {
      power: '2.0 HP / 1.5 kW',
      configuration: 'Subsurface Upwelling Impeller',
      floats: 'Circular HDPE Float Ring',
      supply: '3-Phase / 415V / 50Hz',
      coverage: 'Up to 1.5 Hectares',
      otr: '98.4% Bottom Zone Velocity',
      frame: 'SS Perforated Strainer & Sealed Motor',
      warranty: '36 Months'
    }
  },
  {
    id: 'roots-blower',
    series: 'DIFFUSED SERIES',
    name: 'Roots Blower Diffused Aerator',
    desc: 'Complete bottom-aeration package with heavy-duty blower, buffering air cylinder, pressure gauge, main pipe, and diffuser discs.',
    image: assetUrl('/images/aerator-rootblower-real.png'),
    alt: 'Roots blower diffused aeration system with motor, intake muffler, buffering pipe, and aeration discs',
    chips: ['3.0–7.5 HP', 'Fine Bubble', 'Deep Pond O₂'],
    specs: {
      power: '3.0–7.5 HP Copper Motor',
      configuration: 'Roots Blower + Disc Diffusers',
      floats: 'Base Frame + Aeration Grid',
      supply: '3-Phase / 415V / 50Hz',
      coverage: 'Up to 2.0+ Hectares (Deep Ponds)',
      otr: 'High Bottom-to-Top Micro-Bubbles',
      frame: 'Cast Iron Blower & Protecting Cover',
      warranty: '24 Months'
    }
  }
];

export const probioticProducts: ProbioticItem[] = [
  {
    code: 'P1',
    id: 'ebi-gut-fix',
    series: 'GUT IMMUNITY LIQUID',
    name: 'EBI GUT FIX',
    subtitle: 'Hepatopancreas Protection & Gut Flora Enhancer',
    image: assetUrl('/images/probiotics/p1.png'),
    description:
      'Inhibits pathogens in the hepatopancreas of prawns and strengthens immune modulation through macrophage elicitation and pathogen expulsion from the digestive tract. Maintains balanced gut flora, inhibits Vibrio parahaemolyticus and EMS bacteria, reduces white gut and white feces, and replaces antibiotics to improve FCR and growth rate.',
    benefits: [
      'Maintains healthy hepatopancreas & balanced gut flora',
      'Inhibits Vibrio parahaemolyticus & EMS-associated bacteria',
      'Reduces incidence of white gut & white feces',
      'Improves productivity, FCR, growth rate & water quality'
    ],
    highlights: [
      { icon: 'shield', line1: 'Gut', line2: 'Protection' },
      { icon: 'sparkles', line1: 'Balances', line2: 'Gut Flora' },
      { icon: 'trending', line1: 'Improves', line2: 'FCR' }
    ],
    dosage: '1 ltr or 2 ltr (depends upon bio burden in pond), mix in 100 ltr of water and spray on 1 acre of pond.',
    shortDosage: '1–2 Ltr in 100 Ltr of water (1 acre pond)',
    ingredients:
      'Mix of microorganisms, enzymes & organic acids like Amylase, Pepsin, Amino acid, Cellulase, Pectinase, Lactobacillus spp., Streptomyces spp., Lipase, Xylanase, Cellulose & Hemicellulose.',
    shortIngredients: 'Amylase, Pepsin, Cellulase, Lactobacillus spp. & more',
    packageSize: '1 ltr, 2 ltr, 5 ltr',
    chips: ['Gut Immunity', 'Anti-Vibrio', '1–5 Ltr Pack']
  },
  {
    code: 'P2',
    id: 'ebi-paratreat',
    series: 'EHP CONTROL LIQUID',
    name: 'EBI PARATREAT',
    subtitle: 'EHP Spore Control & Hepatopancreas Repair',
    image: assetUrl('/images/probiotics/p2.png'),
    description:
      'EHP control liquid solution that reduces or kills free spores outside the cell. Formulated with high units of Vitamin B group, probiotics, metabolites, and taurine to support digestive function, help microvilli grow, and repair hepatopancreas tissue from EHP damage.',
    benefits: [
      'Reduces and kills free EHP spores outside the cell',
      'Promotes microvilli regeneration & digestion',
      'Supports hepatopancreas recovery after EHP damage',
      'Antibiotic-free biological defense'
    ],
    highlights: [
      { icon: 'sparkles', line1: 'Reduces', line2: 'EHP Spores' },
      { icon: 'shield', line1: 'Supports', line2: 'Liver Health' },
      { icon: 'layers', line1: 'Repairs', line2: 'Tissue' }
    ],
    dosage:
      'Mix 1–2 ltr (depends upon bio burden) in 100 ltr water sprayed on 1 acre pond. After 24 hrs spray water probiotics. Observe 10–14 days and repeat if symptoms persist.',
    shortDosage: 'Mix 1–2 Ltr in 100 Ltr of water (1 acre pond)',
    ingredients:
      'Bacillus spp., Serum, Saccharomyces, Vitamin C, Pepsin, Lactobacillus species, blend of multiple organic acids & digestive enzymes.',
    shortIngredients: 'Bacillus spp., Vitamin C, Taurine, Probiotics & more',
    specsLine: 'Storage: Cool & dry place, protect from direct sunlight.',
    packageSize: '1 ltr, 2 ltr, 5 ltr',
    chips: ['EHP Control', 'Microvilli Repair', '1–5 Ltr Pack']
  },
  {
    code: 'P3',
    id: 'rego-immuno',
    series: 'FEED IMMUNO SUPPLEMENT',
    name: 'REGO IMMUNO',
    subtitle: 'All-Natural Nutrient, Moulting & Immunity Booster',
    image: assetUrl('/images/probiotics/p3.png'),
    description:
      'Increases shrimp health, survival, and immunity by reducing pathogen exposure through competitive exclusion. Improves Feed Conversion Rates (FCR), nutrient digestion, metabolic function, and shrimp body weight while preventing stress, white muscle, and cramps.',
    benefits: [
      'Free moulting enhancer; reduces white muscles & cramps',
      'Consistent stress-free growth across the pond',
      'Builds strong muscles for active swimming',
      'Boosts disease resistance and survival rate'
    ],
    highlights: [
      { icon: 'heart', line1: 'Improves', line2: 'Shrimp Health' },
      { icon: 'shield', line1: 'Boosts', line2: 'Immunity' },
      { icon: 'zap', line1: 'Reduces', line2: 'Stress' }
    ],
    dosage: '10–20 gms / 1 kg of shrimp feed (to be mixed in aquaculture feed only) or as advised by aquaculture consultant.',
    shortDosage: '10–20 gms per 1 kg shrimp feed',
    ingredients: 'Amino Acids, Multi Vitamins, Protein & Minerals.',
    shortIngredients: 'Amino Acids, Multi Vitamins, Protein & Minerals',
    packageSize: '1 kg, 5 kg, 25 kg',
    chips: ['10–20 g/kg Feed', 'Moulting Support', '1–25 kg Pack']
  },
  {
    code: 'P4',
    id: 'rego-gut-pro',
    series: 'FEED PROBIOTIC POWDER',
    name: 'REGO GUT PRO',
    subtitle: '12 Billion CFU/g Synergistic Feed Probiotic',
    image: assetUrl('/images/probiotics/p4.png'),
    description:
      'Developed specifically for feed application across freshwater, brackish, and saltwater conditions. Contains 12 billion cfu/g synergistic bacteria and enzymes on a soluble carrier to evict pathogens from HPS, inhibit Vibrio sp., reduce white gut and white feces, and improve FCR and growth rate.',
    benefits: [
      '12.0 billion cfu/gm (6B waste-consuming + 6B probiotic)',
      'Inhibits Vibrio parahaemolyticus & EMS pathogens',
      'Reduces white gut & white feces in feed programs',
      'Enables higher grow-out density & shrimp size'
    ],
    highlights: [
      { icon: 'sparkles', line1: '12B CFU/g', line2: 'Probiotic' },
      { icon: 'shield', line1: 'Inhibits', line2: 'Vibrio & EMS' },
      { icon: 'trending', line1: 'Improves', line2: 'Growth & FCR' }
    ],
    dosage: '5–10 gms / 1 kg of shrimp feed for 2 or 3 meals per day with a good binder.',
    shortDosage: '5–10 gms per 1 kg feed (2–3 meals/day)',
    ingredients: 'Lipase, Amylase, Citric Acid & Lactic Bacteria.',
    shortIngredients: 'Lipase, Amylase, Citric Acid & Lactic Bacteria',
    specsLine: 'White ash powder · Neutral pH · Effective pH 5.8–10.5 · Temp 10°–38°C · Shelf life 3 years.',
    packageSize: '1 kg, 5 kg, 25 kg',
    chips: ['12B CFU/gm', '5–10 g/kg Feed', '3 Yr Shelf Life']
  },
  {
    code: 'P5',
    id: 'rego-probiotic-ws',
    series: 'WATER & SOIL PROBIOTIC',
    name: 'REGO PROBIOTIC W&S',
    subtitle: '14 Billion CFU/g Multi-Enzyme Water & Soil Probiotic',
    image: assetUrl('/images/probiotics/p5.png'),
    description:
      'Multi-enzyme pre- and post-probiotic blend (14 billion cfu/g) that neutralizes nitrogenous waste, sulphate, phosphorus, and ammonia nitrogen. Clarifies pond water in 24–48 hours, reduces bottom sludge, and maintains soil parameters for higher grow-out density.',
    benefits: [
      '14.0 billion cfu/gm (7B waste-consuming + 7B probiotic)',
      'Cleans and clarifies water; removes dissolved pollutants',
      'Breaks down organic matter & reduces pond bottom sludge',
      'Enables higher grow-out density & shrimp yield'
    ],
    highlights: [
      { icon: 'sparkles', line1: '14B CFU/g', line2: 'Multi-Enzyme' },
      { icon: 'droplets', line1: 'Clarifies', line2: 'Pond Water' },
      { icon: 'layers', line1: 'Reduces', line2: 'Bottom Sludge' }
    ],
    dosage:
      'Mix 500 gms to 1 kg/hectare with water, jaggery (500 gm) + 3 days old curd, leave 24 hrs, spray evenly on pond and start aerator.',
    shortDosage: '500g–1kg/ha with jaggery & curd (24 hrs)',
    ingredients: 'Lipase, Amylase, Citric Acid & Lactic Bacteria.',
    shortIngredients: 'Lipase, Amylase, Citric Acid & Lactic Bacteria',
    specsLine: 'White ash powder · Neutral pH · Effective pH 5.8–10.5 · Temp 10°–38°C · Shelf life 3 years.',
    packageSize: '1 kg, 5 kg, 25 kg',
    chips: ['14B CFU/gm', 'Water & Soil', '500g–1kg/ha']
  },
  {
    code: 'P6',
    id: 'mag-o',
    series: 'IONIC MAGNESIUM SUPPLEMENT',
    name: 'MAG O',
    subtitle: 'Natural Premium Ionic Mineral & Feed Supplement',
    image: assetUrl('/images/probiotics/p6.png'),
    description:
      'Treats magnesium deficiency in pond water and aquatic animals. Essential for shrimp metabolism, digestive tract cleansing, stool softening, detoxification, and releasing oxygen along the gut. Water-soluble formula requires no gel binder.',
    benefits: [
      'Treats & prevents magnesium deficiency in shrimp & water',
      'Cleanses digestive tract, relieves constipation & detoxifies',
      'Water-soluble — no gel binder required for feed coating',
      'Supports healthy probiotic gut environment'
    ],
    highlights: [
      { icon: 'zap', line1: '36–42%', line2: 'Ionic MgO' },
      { icon: 'droplets', line1: 'No Binder', line2: 'Water Soluble' },
      { icon: 'shield', line1: 'Detoxifies', line2: '& Cleanses Gut' }
    ],
    dosage: 'In Feed: 30 g/kg feed (spray with water & air-dry 30 min) | In Water: 10–15 kg per acre (4 ft water depth).',
    shortDosage: 'Feed: 30 g/kg | Water: 10–15 kg/acre (4 ft)',
    ingredients: 'Magnesium Oxide (MgO) 36–42%, Magnesium (Mg) 18–23%, Silica (SiO₂) 35–40%, Alumina, Calcium, Sodium & Potassium.',
    shortIngredients: 'MgO 36–42%, Mg 18–23%, Silica 35–40% & more',
    packageSize: '1 kg, 5 kg, 25 kg',
    chips: ['36–42% MgO', 'No Binder Needed', '10–15 kg/acre']
  },
  {
    code: 'P7',
    id: 'tierrapond',
    series: '60+ IONIC MINERALS',
    name: 'TIERRAPOND',
    subtitle: 'Ionic Minerals & Trace Elements for Soil & Water',
    image: assetUrl('/images/probiotics/p7.png'),
    description:
      'Natural source of over 60 ionic minerals and trace elements (Al₂[(OH)₂|Si₄O₁₀]·nH₂O) to increase the potential of depleted pond soils and waters. Improves primary phytoplankton and zooplankton production while removing toxins and bad bacteria.',
    benefits: [
      'Over 60 natural minerals & trace elements',
      'Boosts primary phytoplankton & zooplankton production',
      'Maintains stable, healthier algal blooms',
      'Removes toxins, pathogens & bad bacteria'
    ],
    highlights: [
      { icon: 'layers', line1: '60+ Ionic', line2: 'Minerals' },
      { icon: 'sparkles', line1: 'Boosts', line2: 'Plankton' },
      { icon: 'shield', line1: 'Removes', line2: 'Toxins' }
    ],
    dosage: 'Soil treatment: 50–100 kg/ha | Pond water: 20–45 kg/ha in 1 meter water level every 7 to 10 days.',
    shortDosage: 'Soil: 50–100 kg/ha | Water: 20–45 kg/ha',
    ingredients:
      'Hydrated Calcium Alumino-Silicate Hydroxide (Silica 55–60%, MgO 22–24%, Alumina 18–22%, Calcium 80,030 mg/kg, Iron 34,073 mg/kg, Potassium, Manganese, Phosphorus, Copper, Zinc & Sodium).',
    shortIngredients: 'Silica 55–60%, MgO 22–24%, Alumina, Ca, Fe & more',
    packageSize: '1 kg, 5 kg, 25 kg',
    chips: ['60+ Minerals', 'Algal & Plankton', '20–45 kg/ha']
  },
  {
    code: 'P8',
    id: 'rego-sludge-treat',
    series: 'SLUDGE & AMMONIA REDUCER',
    name: 'REGO SLUDGE TREAT',
    subtitle: 'Ammonia Nitrogen Reducer & Bioremediation Liquid',
    image: assetUrl('/images/probiotics/p8.png'),
    description:
      'Blend of beneficial microbes and active enzymes that degrade organic pollutants, lowering COD, BOD, ammoniacal nitrogen, and pond bottom sludge while enhancing Dissolved Oxygen (DO) and eliminating pathogen habitats.',
    benefits: [
      'Eliminates bottom sludge & pathogen habitats',
      'Lowers toxic ammonia & nitrogen levels during culture',
      'Reduces COD, BOD & raises Dissolved Oxygen (DO)',
      'Cuts post-harvest clean-up time and effort'
    ],
    highlights: [
      { icon: 'layers', line1: 'Eliminates', line2: 'Bottom Sludge' },
      { icon: 'droplets', line1: 'Lowers', line2: 'Ammonia' },
      { icon: 'trending', line1: 'Enhances', line2: 'Pond DO' }
    ],
    dosage:
      'To repair sludge: Mix 1 ltr in 100 ltr water and spray per acre | Reduce water ammonia & nitrogen: Mix 1 ltr in 10 ltr water + 20 kg sand and spread evenly in 1 acre.',
    shortDosage: '1 Ltr in 100 Ltr water or + 20 kg sand/acre',
    ingredients: 'Azotobacter, Rhizobium spp., soil remediation multi-strain microbes & active enzymes.',
    shortIngredients: 'Azotobacter, Rhizobium spp., Microbes & Enzymes',
    packageSize: '1 ltr, 2 ltr, 5 ltr',
    chips: ['Sludge Remover', 'Ammonia Control', '1 Ltr/acre']
  },
  {
    code: 'P9',
    id: 'rego-san-t9',
    series: 'WATER DISINFECTANT',
    name: 'REGO SAN T9',
    subtitle: 'Cold Water Disinfectant & Algae Eliminator (27% H₂O₂)',
    image: assetUrl('/images/probiotics/p9.png'),
    description:
      'Clear, colorless, odorless cold disinfectant based on specially treated 27% food-grade hydrogen peroxide with aloe vera and plant extract gel. Delivers bactericidal, algicidal, fungicidal, sporicidal, and virucidal efficacy—breaking down into water and oxygen with zero residue.',
    benefits: [
      'Increases Dissolved Oxygen (DO) & reduces water acidity',
      'Broad-spectrum bactericidal, algicidal, fungicidal & virucidal action',
      'Breaks down completely into water & oxygen — zero residue',
      'Miscible with water in all ratios with no pathogen resistance'
    ],
    highlights: [
      { icon: 'shield', line1: 'Kills', line2: 'Pathogens' },
      { icon: 'droplets', line1: 'Boosts', line2: 'DO Level' },
      { icon: 'sparkles', line1: 'Zero', line2: 'Residue' }
    ],
    dosage: 'Take 1 ltr of REGO SAN T9 in 100 ltr of water, spray on the pond water, and run aerators for 60 minutes.',
    shortDosage: '1 Ltr in 100 Ltr water, spray & aerate 60 min',
    ingredients: 'Food-grade 27% Hydrogen Peroxide, Aloe Vera & Plant extract gel.',
    shortIngredients: '27% Food-Grade H₂O₂, Aloe Vera & Plant Extract',
    packageSize: '1 ltr, 2 ltr, 5 ltr',
    chips: ['27% Food-Grade H₂O₂', 'Zero Residue', 'DO Booster']
  }
];
