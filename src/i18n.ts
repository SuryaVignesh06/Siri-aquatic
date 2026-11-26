import React, { createContext, useContext, useEffect, useState } from 'react';

export type Lang = 'en' | 'te';

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextValue>({ lang: 'en', setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('siri-lang');
    return saved === 'te' ? 'te' : 'en';
  });

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem('siri-lang', next);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return React.createElement(LangContext.Provider, { value: { lang, setLang } }, children);
}

export function useSiteLang() {
  return useContext(LangContext);
}

export const siteText = {
  en: {
    nav: {
      home: 'Home',
      aerators: 'Aerators',
      spares: 'Spares',
      probiotics: 'Probiotics',
      story: 'Our story',
      quote: 'Quote',
      searchAria: 'Search',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      skip: 'Skip to content'
    },
    hero: {
      eyebrow: 'QUALITY COMES FIRST',
      taglineLead: 'Aquaculture equipment.',
      taglineSub: 'Thoughtful pond solutions.',
      pause: 'Pause',
      play: 'Play',
      productsWord: 'products',
      carouselNames: ['Pro-4 Paddle Wheel Aerator', 'Turbo-2 Compact Aerator', 'Surge Floating Impeller']
    },
    principles: {
      p1: 'Equipment for aquaculture',
      p2: 'Guidance for your requirements',
      p3: 'A pond-first perspective',
      badge: 'Active Aeration',
      tag: 'QUALITY COMES FIRST'
    },
    range: {
      eyebrow: '01 / THE RIGHT START',
      h2a: 'Find the equipment',
      h2b: 'you need.',
      intro: 'Different ponds. Different needs. Explore aerators, spares, and probiotics in dedicated sections below.',
      exploreAllAerators: 'Explore all aerators',
      sub1Eyebrow: '01 · AERATION SYSTEMS',
      sub1Title: 'Aerators',
      sub1Link: 'View all aerators & specs',
      sub2Eyebrow: '02 · EQUIPMENT & SPARES',
      sub2Title: 'Feeders, pumps & spare parts',
      sub2Link: 'Explore spares',
      sub3Eyebrow: '03 · BIOLOGICAL POND CARE',
      sub3Title: 'Probiotics & pond care',
      sub3Link: 'Explore all 9 probiotics'
    },
    showcase: {
      eyebrowPrefix: 'IN OUR ELEMENT',
      closerLook: 'A closer look',
      exploreEquipment: 'Explore the equipment',
      talkPond: 'Talk about your pond',
      findFlow: 'Find your flow',
      qualityCaption: 'Quality comes first. In every detail.',
      theDetails: 'The details',
      specLabels: {
        type: 'Type',
        coverage: 'Coverage',
        powerSupply: 'Power supply',
        operatingMode: 'Operating mode',
        weight: 'Weight',
        power: 'Power',
        warranty: 'Warranty'
      },
      units: ['4-Paddle', '2-Paddle', 'Impeller', '6-Paddle', '8-Paddle'],
      headlines: [
        ['Every ripple.', 'New possibility.'],
        ['Small footprint.', 'Room to grow.'],
        ['Go deeper.', 'Keep things moving.'],
        ['Built wider.', 'Stronger flow.'],
        ['Maximum reach.', 'Calm control.']
      ],
      captions: [
        'Four-paddle surface aeration with a sealed protective drive cover, thoughtfully configured around your pond.',
        'Compact twin-paddle aeration for nursery ponds, smaller spaces and flexible circulation layouts.',
        'Floating impeller circulation that lifts deep bottom water, reduces stratification and refreshes the pond floor.',
        'Six high-efficiency perforated paddles on a central gearbox shaft for demanding high-stocking ponds.',
        'Eight-paddle long-span surface aerator built across five floats to sustain oxygen across large ponds.'
      ],
      taglines: [
        'Oxygen, delivered.',
        'Power in every pulse.',
        'Deep water renewed.',
        'Built wider. Stronger flow.',
        'Maximum reach. Calm control.'
      ]
    },
    trust: {
      eyebrow: 'THE SIRI STANDARD',
      title: 'Built for the long run.',
      sub: 'From the first installation to everyday pond care.',
      quality: 'Quality comes first',
      stats: [
        { value: '15+', label: 'Years in aquaculture', sub: 'Coastal farming engineering since 2011' },
        { value: '12,000+', label: 'Ponds aerated', sub: 'Shrimp & fish farms across India' },
        { value: '8+', label: 'Coastal states served', sub: 'AP, TN, Gujarat, Odisha, WB & Kerala' },
        { value: '100%', label: 'Tested before dispatch', sub: 'Submerged run & power consumption test' }
      ],
      assurances: ['Quality management', 'Tested motors & gears', 'UV-stabilized floats', 'Factory support']
    },
    aeratorsPage: {
      breadcrumb: 'Aerators',
      eyebrow: 'AERATION SYSTEMS',
      h1a: 'Aerators built for',
      h1b: 'every pond.',
      lead: 'Explore our complete range of paddle wheel, compact, impeller, and diffused aeration systems with key specifications below.',
      specsEyebrow: 'TECHNICAL SPECIFICATIONS',
      specsTitle: 'Specifications at a glance.',
      specsLead: 'Compare motor ratings, float configurations, power supply, and pond coverage across every aerator model.',
      quoteBtn: 'Quote',
      labels: {
        power: 'Motor / Power',
        configuration: 'Configuration',
        floats: 'Floats / Assembly',
        supply: 'Power Supply',
        coverage: 'Pond Coverage',
        otr: 'Oxygen Transfer',
        frame: 'Frame & Build',
        warranty: 'Warranty'
      }
    },
    sparesPage: {
      breadcrumb: 'Spares',
      eyebrow: 'EQUIPMENT & SPARES',
      h1a: 'Feeders, pumps &',
      h1b: 'every spare part.',
      lead: 'Beyond aeration, Siri Aquatic supplies the full pond ecosystem — automatic feeders, engines, pumps, gearboxes, control panels and genuine replacement parts.',
      specsEyebrow: 'TECHNICAL SPECIFICATIONS',
      specsTitle: 'Spares & equipment details.',
      specsLead: 'Compare capacity, construction, compatibility, and drive ratings across our spare-parts range.',
      quoteBtn: 'Quote',
      labels: {
        category: 'Category',
        capacity: 'Capacity / Rating',
        build: 'Build',
        compatibility: 'Compatibility',
        power: 'Power / Drive',
        warranty: 'Warranty'
      }
    },
    probioticsPage: {
      breadcrumb: 'Probiotics',
      eyebrow: 'DB BIO-ORGANICS · ANTIBIOTIC-FREE AQUACULTURE',
      h1a: 'Biological pond care',
      h1b: '& shrimp probiotics.',
      lead: 'Enzyme-rich probiotics, gut-health liquids, and ionic minerals from our brochure — protecting shrimp immunity, reducing ammonia & sludge, and keeping pond water naturally balanced.',
      dosage: 'DOSAGE',
      ingredients: 'INGREDIENTS'
    },
    detailPage: {
      intro: 'Tell us about your pond requirements to discuss configurations, dosing, and current pricing.',
      prepare: 'Prepare an enquiry',
      specsHeading: 'Details that matter.',
      specsSub: 'Technical specifications and application details.'
    },
    aboutPage: {
      story: 'Our story',
      quality: 'Quality',
      solutions: 'Solutions',
      eyebrow: 'SIRI AQUATIC SOLUTIONS PVT. LTD.',
      h1SolA: 'One pond.',
      h1SolB: 'Connected needs.',
      h1StoryA: 'Quality comes first.',
      h1StoryB: 'Always the intention.',
      lead: 'Aquaculture starts with understanding the water, the equipment and the people who work with both.',
      p1: 'Siri Aquatic brings equipment and pond-solution conversations together. Explore aeration, machinery and spares, and pond-care categories with your requirements in mind.',
      p2: 'Our guiding principle is simple: Quality Comes First. Before selecting equipment, ask for approved specifications, current documentation and clear support terms.',
      cta: 'Start a conversation',
      badge: 'QUALITY COMES FIRST'
    },
    quotePage: {
      breadcrumb: 'Quote',
      eyebrow: 'EVERY POND HAS A STORY',
      h1a: "Let's start",
      h1b: 'with yours.',
      lead: 'Share a few pond details and send your enquiry directly to our WhatsApp team.',
      steps: [
        ['01', "Tell us what you're looking for"],
        ['02', 'Fill in your phone & pond details'],
        ['03', 'Send directly on WhatsApp (+91 98857 17986)']
      ],
      notice:
        'Submitting this form opens WhatsApp directly with your enquiry formatted cleanly for our team at +91 98857 17986.'
    },
    cta: {
      eyebrow: "LET'S TALK ABOUT YOUR POND",
      h2a: 'Good things start',
      h2b: 'with a conversation.',
      btn: 'Find your solution'
    },
    footer: {
      tag: 'A little care. A better tomorrow.',
      quality: 'Quality Comes First.',
      ripples: 'Let’s make ripples.',
      explore: 'EXPLORE',
      connect: "LET'S CONNECT",
      requestQuote: 'Request a quote',
      approachQuality: 'Our approach to quality',
      contactInfo: 'Contact information',
      previewTitle: 'A THOUGHTFUL PREVIEW',
      previewBody1: 'Created around the Siri vision.',
      previewBody2: 'Verified product and company details',
      previewBody3: 'will complete the story.',
      credits: 'Image credits',
      privacy: 'Privacy',
      terms: 'Site information',
      a11y: 'Accessibility',
      enableAnim: 'Enable',
      reduceAnim: 'Reduce',
      animations: 'animations'
    },
    search: {
      title: 'What brings you here?',
      placeholder: 'Search aerators, spares, probiotics…',
      note: 'Search aerators, spares, probiotics and quote options.',
      aeratorsCat: 'Aerators catalogue',
      sparesCat: 'Equipment & spares',
      probioticsCat: 'Probiotics & pond care',
      quoteCat: 'Request a quote'
    },
    common: {
      home: 'Home'
    }
  },
  te: {
    nav: {
      home: 'హోమ్',
      aerators: 'ఏరేటర్లు',
      spares: 'స్పేర్స్',
      probiotics: 'ప్రోబయోటిక్స్',
      story: 'మా కథ',
      quote: 'కొటేషన్',
      searchAria: 'వెతకండి',
      openMenu: 'మెనూ తెరవండి',
      closeMenu: 'మెనూ మూసివేయండి',
      skip: 'కంటెంట్‌కు వెళ్ళండి'
    },
    hero: {
      eyebrow: 'నాణ్యతే మా ప్రథమ ప్రాధాన్యత',
      taglineLead: 'ఆక్వాకల్చర్ పరికరాలు.',
      taglineSub: 'చెరువుకు సరైన పరిష్కారాలు.',
      pause: 'ఆపండి',
      play: 'ప్లే చేయండి',
      productsWord: 'పరికరాలు',
      carouselNames: ['ప్రో-4 ప్యాడిల్ వీల్ ఏరేటర్', 'టర్బో-2 కాంపాక్ట్ ఏరేటర్', 'సర్జ్ ఫ్లోటింగ్ ఇంపెల్లర్']
    },
    principles: {
      p1: 'ఆక్వాకల్చర్ కోసం నాణ్యమైన పరికరాలు',
      p2: 'మీ అవసరాలకు తగిన సాంకేతిక సలహా',
      p3: 'చెరువు ఆరోగ్యానికి ప్రథమ ప్రాధాన్యత',
      badge: 'సక్రియ ఏరేషన్',
      tag: 'నాణ్యతే ప్రథమం'
    },
    range: {
      eyebrow: '01 / సరైన ప్రారంభం',
      h2a: 'మీ చెరువుకు కావలసిన',
      h2b: 'పరికరాలను ఎంచుకోండి.',
      intro: 'వేర్వేరు చెరువులకు వేర్వేరు అవసరాలు ఉంటాయి. దిగువన ఏరేటర్లు, స్పేర్స్ మరియు ప్రోబయోటిక్స్ విభాగాలను చూడండి.',
      exploreAllAerators: 'అన్ని ఏరేటర్లు చూడండి',
      sub1Eyebrow: '01 · ఏరేషన్ సిస్టమ్స్',
      sub1Title: 'ఏరేటర్లు (Aerators)',
      sub1Link: 'అన్ని ఏరేటర్లు & వివరాలు',
      sub2Eyebrow: '02 · పరికరాలు & స్పేర్స్',
      sub2Title: 'ఫీడర్లు, పంపులు & స్పేర్ పార్ట్స్',
      sub2Link: 'స్పేర్స్ అన్నీ చూడండి',
      sub3Eyebrow: '03 · జీవసంబంధ చెరువు సంరక్షణ',
      sub3Title: 'ప్రోబయోటిక్స్ & చెరువు సంరక్షణ',
      sub3Link: '9 ప్రోబయోటిక్స్ అన్నీ చూడండి'
    },
    showcase: {
      eyebrowPrefix: 'మా ప్రత్యేకత',
      closerLook: 'ప్రత్యేకత',
      exploreEquipment: 'పరికరం వివరాలు చూడండి',
      talkPond: 'మీ చెరువు గురించి మాట్లాడండి',
      findFlow: 'సరైన మోడల్ ఎంచుకోండి',
      qualityCaption: 'ప్రతి భాగంలో నాణ్యతే ప్రథమం.',
      theDetails: 'ప్రధాన వివరాలు',
      specLabels: {
        type: 'రకం',
        coverage: 'కవరేజ్',
        powerSupply: 'విద్యుత్ సరఫరా',
        operatingMode: 'పనిచేసే విధానం',
        weight: 'బరువు',
        power: 'మోటార్ శక్తి',
        warranty: 'వారంటీ'
      },
      units: ['4-ప్యాడిల్', '2-ప్యాడిల్', 'ఇంపెల్లర్', '6-ప్యాడిల్', '8-ప్యాడిల్'],
      headlines: [
        ['ప్రతి అల.', 'కొత్త శక్తి.'],
        ['చిన్న పరిమాణం.', 'మెరుగైన వృద్ధి.'],
        ['లోతైన నీరు.', 'నిరంతర ప్రవాహం.'],
        ['విస్తృత పరిధి.', 'బలమైన ప్రవాహం.'],
        ['గరిష్ట సామర్థ్యం.', 'నిశ్శబ్ద పనితీరు.']
      ],
      captions: [
        'సీల్డ్ డ్రైవ్ కవర్‌తో కూడిన 4-ప్యాడిల్ సర్ఫేస్ ఏరేటర్ — మీ చెరువు ఆక్సిజన్ సమతుల్యత కోసం.',
        'నర్సరీ చెరువులు మరియు చిన్న ట్యాంకుల కోసం కాంపాక్ట్ 2-ప్యాడిల్ ఏరేటర్.',
        'చెరువు అడుగు భాగం నుండి నీటిని పైకి తెచ్చి ఆక్సిజన్ పెంచే ఫ్లోటింగ్ ఇంపెల్లర్ ఏరేటర్.',
        'అధిక సాంద్రత గల చెరువుల కోసం మధ్య గేర్‌బాక్స్‌తో 6-ప్యాడిల్ హెవీ డ్యూటీ ఏరేటర్.',
        'పెద్ద చెరువుల్లో పూర్తి స్థాయి ప్రవాహం కోసం 5 ఫ్లోట్లపై 8-ప్యాడిల్ కమర్షియల్ ఏరేటర్.'
      ],
      taglines: [
        'సంపూర్ణ ఆక్సిజన్.',
        'ప్రతి క్షణం శక్తి.',
        'లోతైన నీటి శుద్ధి.',
        'బలమైన నీటి ప్రవాహం.',
        'గరిష్ట విస్తరణ & నియంత్రణ.'
      ]
    },
    trust: {
      eyebrow: 'సిరి ప్రమాణం',
      title: 'దీర్ఘకాలం మన్నికైన నాణ్యత.',
      sub: 'మొదటి ఇన్‌స్టాలేషన్ నుండి రోజువారీ చెరువు సంరక్షణ వరకు.',
      quality: 'నాణ్యతే ప్రథమం',
      stats: [
        { value: '15+', label: 'సంవత్సరాల ఆక్వా అనుభవం', sub: '2011 నుండి తీరప్రాంత ఆక్వా ఇంజనీరింగ్' },
        { value: '12,000+', label: 'చెరువులకు ఏరేషన్', sub: 'భారతదేశవ్యాప్తంగా రొయ్యలు & చేపల చెరువులు' },
        { value: '8+', label: 'తీరప్రాంత రాష్ట్రాల్లో సేవలు', sub: 'ఆంధ్రప్రదేశ్, తమిళనాడు, గుజరాత్, ఒడిశా, కేరళ' },
        { value: '100%', label: 'డెలివరీ ముందు పరీక్ష', sub: 'నీటిలో పూర్తి టెస్టింగ్ & విద్యుత్ సామర్థ్య తనిఖీ' }
      ],
      assurances: ['నాణ్యత నిర్వహణ', 'పరీక్షించిన మోటార్లు & గేర్లు', 'UV-స్టెబిలైజ్డ్ ఫ్లోట్లు', 'ఫ్యాక్టరీ సపోర్ట్']
    },
    aeratorsPage: {
      breadcrumb: 'ఏరేటర్లు',
      eyebrow: 'ఏరేషన్ సిస్టమ్స్',
      h1a: 'ప్రతి చెరువు కోసం',
      h1b: 'నిర్మించిన ఏరేటర్లు.',
      lead: 'ప్యాడిల్ వీల్, కాంపాక్ట్, ఇంపెల్లర్ మరియు డిఫ్యూజ్డ్ ఏరేషన్ సిస్టమ్స్ మరియు వాటి పూర్తి వివరాలను దిగువన చూడండి.',
      specsEyebrow: 'సాంకేతిక వివరాలు',
      specsTitle: 'ప్రతి ఏరేటర్ వివరాలు.',
      specsLead: 'అన్ని ఏరేటర్ మోడళ్ల మోటార్ శక్తి, ఫ్లోట్లు, విద్యుత్ సరఫరా మరియు కవరేజ్ పోల్చి చూడండి.',
      quoteBtn: 'కొటేషన్',
      labels: {
        power: 'మోటార్ / శక్తి',
        configuration: 'నిర్మాణం',
        floats: 'ఫ్లోట్లు / అసెంబ్లీ',
        supply: 'విద్యుత్ సరఫరా',
        coverage: 'చెరువు విస్తీర్ణం',
        otr: 'ఆక్సిజన్ సామర్థ్యం',
        frame: 'ఫ్రేమ్ & నిర్మాణం',
        warranty: 'వారంటీ'
      }
    },
    sparesPage: {
      breadcrumb: 'స్పేర్స్',
      eyebrow: 'పరికరాలు & స్పేర్స్',
      h1a: 'ఫీడర్లు, పంపులు &',
      h1b: 'ప్రతి స్పేర్ పార్ట్.',
      lead: 'ఏరేషన్‌తో పాటు సిరి ఆక్వాటిక్ ఆటోమేటిక్ ఫీడర్లు, డీజిల్ ఇంజిన్లు, వాటర్ పంపులు, గేర్‌బాక్స్‌లు మరియు అసలైన స్పేర్ పార్ట్స్ అందిస్తుంది.',
      specsEyebrow: 'సాంకేతిక వివరాలు',
      specsTitle: 'స్పేర్స్ & పరికరాల వివరాలు.',
      specsLead: 'మా స్పేర్ పార్ట్స్ మరియు పరికరాల సామర్థ్యం, నిర్మాణం మరియు వారంటీ వివరాలను చూడండి.',
      quoteBtn: 'కొటేషన్',
      labels: {
        category: 'విభాగం',
        capacity: 'సామర్థ్యం / రేటింగ్',
        build: 'నిర్మాణం',
        compatibility: 'అనుకూలత',
        power: 'పవర్ / డ్రైవ్',
        warranty: 'వారంటీ'
      }
    },
    probioticsPage: {
      breadcrumb: 'ప్రోబయోటిక్స్',
      eyebrow: 'DB బయో-ఆర్గానిక్స్ · యాంటీబయోటిక్ రహిత ఆక్వాకల్చర్',
      h1a: 'జీవసంబంధ చెరువు సంరక్షణ',
      h1b: '& రొయ్యల ప్రోబయోటిక్స్.',
      lead: 'రొయ్యల రోగనిరోధక శక్తిని పెంచి, అమ్మోనియా మరియు బురదను తగ్గించి చెరువు నీటిని సమతుల్యంగా ఉంచే నాణ్యమైన ప్రోబయోటిక్స్ మరియు ఖనిజాలు.',
      dosage: 'మోతాదు (DOSAGE)',
      ingredients: 'పదార్థాలు (INGREDIENTS)'
    },
    detailPage: {
      intro: 'ధర మరియు పూర్తి వివరాల కోసం మీ చెరువు వివరాలను మాకు పంపండి.',
      prepare: 'కొటేషన్ పొందండి',
      specsHeading: 'ముఖ్యమైన వివరాలు.',
      specsSub: 'సాంకేతిక వివరాలు మరియు వాడే విధానం.'
    },
    aboutPage: {
      story: 'మా కథ',
      quality: 'నాణ్యత',
      solutions: 'పరిష్కారాలు',
      eyebrow: 'సిరి ఆక్వాటిక్ సొల్యూషన్స్ ప్రై. లి.',
      h1SolA: 'ఒకే చెరువు.',
      h1SolB: 'సమగ్ర అవసరాలు.',
      h1StoryA: 'నాణ్యతే ప్రథమం.',
      h1StoryB: 'అదే మా సంకల్పం.',
      lead: 'చెరువు నీటిని, పరికరాలను మరియు రైతుల అవసరాలను అర్థం చేసుకోవడంతో ఆక్వాకల్చర్ ప్రారంభమవుతుంది.',
      p1: 'సిరి ఆక్వాటిక్ నాణ్యమైన ఏరేషన్, స్పేర్స్ మరియు చెరువు సంరక్షణ పరిష్కారాలను ఒకే చోట అందిస్తుంది.',
      p2: 'మా ప్రధాన సిద్ధాంతం: నాణ్యతే ప్రథమం (Quality Comes First). ప్రతి పరికరానికి స్పష్టమైన వివరాలు మరియు నమ్మకమైన సపోర్ట్ అందిస్తాము.',
      cta: 'మాతో మాట్లాడండి',
      badge: 'నాణ్యతే ప్రథమం'
    },
    quotePage: {
      breadcrumb: 'కొటేషన్',
      eyebrow: 'ప్రతి చెరువుకు ఒక కథ ఉంటుంది',
      h1a: 'మీ చెరువుతో',
      h1b: 'ప్రారంభిద్దాం.',
      lead: 'మీ చెరువు వివరాలు నమోదు చేసి నేరుగా వాట్సాప్ ద్వారా మా బృందానికి పంపండి.',
      steps: [
        ['01', 'మీకు కావలసిన ఏరేటర్లు, స్పేర్స్ లేదా ప్రోబయోటిక్స్ ఎంచుకోండి'],
        ['02', 'మీ ఫోన్ నంబర్ మరియు చెరువు వివరాలు నమోదు చేయండి'],
        ['03', 'నేరుగా వాట్సాప్ (+91 98857 17986) కు పంపండి']
      ],
      notice:
        'ఈ ఫారమ్ సబ్మిట్ చేసిన వెంటనే మీ వివరాలతో వాట్సాప్ (+91 98857 17986) నేరుగా ఓపెన్ అవుతుంది.'
    },
    cta: {
      eyebrow: 'మీ చెరువు గురించి మాట్లాడుదాం',
      h2a: 'మంచి ఫలితాలు',
      h2b: 'ఒక సంభాషణతో మొదలవుతాయి.',
      btn: 'మీ పరిష్కారం పొందండి'
    },
    footer: {
      tag: 'చిన్న శ్రద్ధ. మెరుగైన రేపు.',
      quality: 'నాణ్యతే ప్రథమం.',
      ripples: 'కలిసి ముందుకు సాగుదాం.',
      explore: 'విభాగాలు',
      connect: 'సంప్రదించండి',
      requestQuote: 'కొటేషన్ పొందండి',
      approachQuality: 'నాణ్యతపై మా దృక్పథం',
      contactInfo: 'సంప్రదింపు వివరాలు',
      previewTitle: 'సిరి ఆక్వాటిక్ విజన్',
      previewBody1: 'రైతుల నమ్మకంతో నిర్మించబడింది.',
      previewBody2: 'నాణ్యమైన పరికరాలు & ప్రోబయోటిక్స్',
      previewBody3: 'మీ ఆక్వా సాగుకు అండగా ఉంటాయి.',
      credits: 'చిత్రాల క్రెడిట్స్',
      privacy: 'గోప్యత',
      terms: 'సైట్ వివరాలు',
      a11y: 'యాక్సెసిబిలిటీ',
      enableAnim: 'ఆన్ చేయండి',
      reduceAnim: 'తగ్గించండి',
      animations: 'యానిమేషన్లు'
    },
    search: {
      title: 'మీరు ఏమి వెతుకుతున్నారు?',
      placeholder: 'ఏరేటర్లు, స్పేర్స్, ప్రోబయోటిక్స్ వెతకండి…',
      note: 'ఏరేటర్లు, స్పేర్స్, ప్రోబయోటిక్స్ లేదా కొటేషన్ కోసం వెతకండి.',
      aeratorsCat: 'ఏరేటర్ల జాబితా',
      sparesCat: 'పరికరాలు & స్పేర్స్',
      probioticsCat: 'ప్రోబయోటిక్స్ & చెరువు సంరక్షణ',
      quoteCat: 'కొటేషన్ పొందండి'
    },
    common: {
      home: 'హోమ్'
    }
  }
} as const;

export const aeratorTeluguMap: Record<
  string,
  { series: string; name: string; desc: string; chips: [string, string, string] }
> = {
  'paddle-wheel': {
    series: 'స్టాండర్డ్ సిరీస్',
    name: 'ప్రో-4 ప్యాడిల్ వీల్ ఏరేటర్',
    desc: 'సీల్డ్ బ్లూ డ్రైవ్ కవర్‌తో 24/7 స్థిరమైన ఆక్సిజన్ అందించే 4-ప్యాడిల్ సర్ఫేస్ ఏరేటర్.',
    chips: ['2.0 HP 3PH', '4 ఇంపెల్లర్లు', '2.4 kg O₂/hr']
  },
  'compact-aerator': {
    series: 'కాంపాక్ట్ సిరీస్',
    name: 'టర్బో-2 కాంపాక్ట్ ఏరేటర్',
    desc: 'నర్సరీ చెరువులు మరియు బయోఫ్లాక్ ట్యాంకుల కోసం రూపొందించిన 2-ప్యాడిల్ ఏరేటర్.',
    chips: ['1.0 HP 1/3PH', '2 HDPE ఫ్లోట్లు', '1.6 kg O₂/hr']
  },
  'pro-6-paddle': {
    series: 'హెవీ డ్యూటీ సిరీస్',
    name: 'ప్రో-6 హెవీ డ్యూటీ ఏరేటర్',
    desc: 'అధిక సాంద్రత చెరువుల కోసం మధ్య గేర్‌బాక్స్‌తో కూడిన 6-ప్యాడిల్ ఏరేటర్.',
    chips: ['3.0 HP 3PH', '6 PP ఇంపెల్లర్లు', '3.2 kg O₂/hr']
  },
  'max-8-paddle': {
    series: 'పవర్ సేవర్ సిరీస్',
    name: 'మ్యాక్స్-8 లాంగ్-ఆర్మ్ ఏరేటర్',
    desc: 'పెద్ద చెరువుల్లో తక్కువ విద్యుత్ ఖర్చుతో విస్తృత ప్రవాహాన్ని ఇచ్చే 8-ప్యాడిల్ ఏరేటర్.',
    chips: ['3.0–5.0 HP', '5 HDPE ఫ్లోట్లు', '4.1 kg O₂/hr']
  },
  'spiral-impeller': {
    series: 'సబ్‌సర్ఫేస్ సిరీస్',
    name: 'సర్జ్ ఫ్లోటింగ్ ఇంపెల్లర్ ఏరేటర్',
    desc: 'చెరువు అడుగు నీటిని పైకి తెచ్చి ఆక్సిజన్ పెంచే ఫ్లోటింగ్ ఇంపెల్లర్ పంపు ఏరేటర్.',
    chips: ['2.0 HP 3PH', 'SS స్ట్రైనర్', '98.4% లోతైన O₂']
  },
  'roots-blower': {
    series: 'డిఫ్యూజ్డ్ సిరీస్',
    name: 'రూట్స్ బ్లోయర్ డిఫ్యూజ్డ్ ఏరేటర్',
    desc: 'లోతైన చెరువుల అడుగు భాగానికి సూక్ష్మ గాలి బుడగలు పంపే పూర్తి బ్లోయర్ & డిఫ్యూజర్ సిస్టమ్.',
    chips: ['3.0–7.5 HP', 'సూక్ష్మ బుడగలు', 'లోతైన O₂']
  }
};

export const spareTeluguMap: Record<
  string,
  { tag: string; name: string; desc: string; chips: [string, string, string] }
> = {
  'automatic-feeder': {
    tag: 'ఆటోమేటిక్ ఫీడింగ్',
    name: 'ఆటోమేటిక్ ఫీడర్',
    desc: 'సమయానుసారం ఖచ్చితంగా మేత చల్లే స్టెయిన్‌లెస్ స్టీల్ టైమర్ ఫీడర్.',
    chips: ['SS హాపర్', 'డిజిటల్ టైమర్', 'సమాన విస్తరణ']
  },
  'water-pumps': {
    tag: 'వాటర్ పంపులు',
    name: 'సెంట్రిఫ్యూగల్ పంపు',
    desc: 'చెరువు నింపడానికి, నీరు మార్చడానికి మరియు పట్టుబడికి అధిక ప్రవాహ పంపులు.',
    chips: ['అధిక ప్రవాహం', 'హెవీ డ్యూటీ', 'తుప్పు పట్టదు']
  },
  'water-cooled-motor': {
    tag: 'మోటార్ & గేర్‌బాక్స్',
    name: 'వాటర్ కూల్డ్ మోటార్',
    desc: 'డైరెక్ట్ గేర్‌బాక్స్ అసెంబ్లీతో కూడిన స్టెయిన్‌లెస్ జాకెట్ వాటర్-కూల్డ్ మోటార్.',
    chips: ['SS-304 జాకెట్', 'డైరెక్ట్ డ్రైవ్', 'IP55 సీల్డ్']
  },
  'diesel-engine-set': {
    tag: 'ఆఫ్-గ్రిడ్ డ్రైవ్',
    name: 'డీజిల్ ఇంజిన్ సెట్',
    desc: 'విద్యుత్ లేని సమయాల్లో మరియు బ్యాకప్ కోసం ఉపయోగించే డీజిల్ ఏరేటర్ డ్రైవ్.',
    chips: ['ఆఫ్-గ్రిడ్ సిద్ధం', 'అధిక టార్క్', 'బ్యాకప్ పవర్']
  }
};

export const probioticTeluguMap: Record<
  string,
  {
    series: string;
    subtitle: string;
    highlights: [string, string, string, string, string, string];
    shortDosage: string;
    shortIngredients: string;
    chips: [string, string, string];
  }
> = {
  'ebi-gut-fix': {
    series: 'గట్ ఇమ్యూనిటీ లిక్విడ్',
    subtitle: 'హెపాటోపాంక్రియాస్ రక్షణ & గట్ ఫ్లోరా వృద్ధి',
    highlights: ['గట్', 'రక్షణ', 'మంచి', 'బ్యాక్టీరియా', 'మెరుగైన', 'FCR'],
    shortDosage: 'ఎకరాకు 1–2 లీటర్లు 100 లీటర్ల నీటిలో కలిపి చల్లాలి',
    shortIngredients: 'అమైలేస్, పెప్సిన్, సెల్యులేస్, లాక్టోబాసిల్లస్ & మరిన్ని',
    chips: ['గట్ రక్షణ', 'యాంటీ-విబ్రియో', '1–5 లీటర్లు']
  },
  'ebi-paratreat': {
    series: 'EHP నియంత్రణ లిక్విడ్',
    subtitle: 'EHP బీజాంశ నియంత్రణ & హెపాటోపాంక్రియాస్ మరమ్మత్తు',
    highlights: ['EHP', 'తగ్గింపు', 'కాలేయ', 'ఆరోగ్యం', 'కణజాల', 'పునరుద్ధరణ'],
    shortDosage: 'ఎకరాకు 1–2 లీటర్లు 100 లీటర్ల నీటిలో కలిపి చల్లాలి',
    shortIngredients: 'బాసిల్లస్, విటమిన్ C, టౌరిన్, ప్రోబయోటిక్స్ & మరిన్ని',
    chips: ['EHP నియంత్రణ', 'టిష్యూ రిపేర్', '1–5 లీటర్లు']
  },
  'rego-immuno': {
    series: 'ఫీడ్ ఇమ్యూనో సప్లిమెంట్',
    subtitle: 'సహజ పోషకాలు, మౌల్టింగ్ & రోగనిరోధక శక్తి పెంపు',
    highlights: ['రొయ్యల', 'ఆరోగ్యం', 'రోగనిరోధక', 'శక్తి', 'ఒత్తిడి', 'తగ్గింపు'],
    shortDosage: 'కిలో మేతకు 10–20 గ్రాములు కలిపి ఇవ్వాలి',
    shortIngredients: 'అమైనో యాసిడ్స్, మల్టీ విటమిన్లు, ప్రోటీన్ & ఖనిజాలు',
    chips: ['10–20 గం/కిలో మేత', 'మౌల్టింగ్ సపోర్ట్', '1–25 కిలోలు']
  },
  'rego-gut-pro': {
    series: 'ఫీడ్ ప్రోబయోటిక్ పౌడర్',
    subtitle: '12 బిలియన్ CFU/g ఫీడ్ ప్రోబయోటిక్ & ఎంజైమ్ మిశ్రమం',
    highlights: ['12B CFU/g', 'ప్రోబయోటిక్', 'విబ్రియో', 'నియంత్రణ', 'మెరుగైన', 'వృద్ధి & FCR'],
    shortDosage: 'కిలో మేతకు 5–10 గ్రాములు రోజుకు 2–3 సార్లు',
    shortIngredients: 'లైపేస్, అమైలేస్, సిట్రిక్ యాసిడ్ & లాక్టిక్ బ్యాక్టీరియా',
    chips: ['12B CFU/gm', '5–10 గం/కిలో మేత', '3 ఏళ్ల మన్నిక']
  },
  'rego-probiotic-ws': {
    series: 'నీరు & మట్టి ప్రోబయోటిక్',
    subtitle: '14 బిలియన్ CFU/g మల్టీ-ఎంజైమ్ వాటర్ & సాయిల్ ప్రోబయోటిక్',
    highlights: ['14B CFU/g', 'మల్టీ-ఎంజైమ్', 'చెరువు నీరు', 'శుభ్రత', 'అడుగు బురద', 'తగ్గింపు'],
    shortDosage: 'హెక్టారుకు 500 గం–1 కిలో బెల్లం & మజ్జిగతో 24 గం నానబెట్టి చల్లాలి',
    shortIngredients: 'లైపేస్, అమైలేస్, సిట్రిక్ యాసిడ్ & లాక్టిక్ బ్యాక్టీరియా',
    chips: ['14B CFU/gm', 'నీరు & మట్టి', '500గం–1కిలో/హెక్టారు']
  },
  'mag-o': {
    series: 'అయానిక్ మెగ్నీషియం సప్లిమెంట్',
    subtitle: 'సహజ అయానిక్ ఖనిజం & ఫీడ్ సప్లిమెంట్',
    highlights: ['36–42%', 'అయానిక్ MgO', 'బైండర్', 'అవసరం లేదు', 'జీర్ణవ్యవస్థ', 'శుభ్రత'],
    shortDosage: 'మేతలో: 30 గం/కిలో | నీటిలో: ఎకరాకు 10–15 కిలోలు (4 అడుగుల లోతు)',
    shortIngredients: 'మెగ్నీషియం ఆక్సైడ్ 36–42%, Mg 18–23%, సిలికా 35–40%',
    chips: ['36–42% MgO', 'బైండర్ అక్కర్లేదు', '10–15 కిలోలు/ఎకరం']
  },
  tierrapond: {
    series: '60+ అయానిక్ ఖనిజాలు',
    subtitle: 'చెరువు మట్టి & నీటి కోసం 60+ సహజ ఖనిజాలు',
    highlights: ['60+ అయానిక్', 'ఖనిజాలు', 'ప్లాంక్టన్', 'పెరుగుదల', 'విషతుల్యాల', 'తొలగింపు'],
    shortDosage: 'మట్టికి: 50–100 కిలోలు/హెక్టారు | నీటికి: 20–45 కిలోలు/హెక్టారు',
    shortIngredients: 'సిలికా 55–60%, MgO 22–24%, అల్యూమినా, కాల్షియం, ఐరన్ & మరిన్ని',
    chips: ['60+ ఖనిజాలు', 'ఆల్గే & ప్లాంక్టన్', '20–45 కిలోలు/హెక్టారు']
  },
  'rego-sludge-treat': {
    series: 'బురద & అమ్మోనియా నియంత్రణ',
    subtitle: 'అమ్మోనియా నైట్రోజన్ తగ్గింపు & బయో-రిమిడియేషన్ లిక్విడ్',
    highlights: ['అడుగు బురద', 'నిర్మూలన', 'అమ్మోనియా', 'తగ్గింపు', 'నీటిలో DO', 'పెంపు'],
    shortDosage: 'ఎకరాకు 1 లీటరు 100 లీటర్ల నీటితో లేదా 20 కిలోల ఇసుకతో కలపాలి',
    shortIngredients: 'అజోటోబాక్టర్, రైజోబియం, మల్టీ-స్ట్రెయిన్ సూక్ష్మజీవులు & ఎంజైమ్‌లు',
    chips: ['బురద నివారణ', 'అమ్మోనియా కంట్రోల్', '1 లీటరు/ఎకరం']
  },
  'rego-san-t9': {
    series: 'నీటి శుద్ధి & ఆల్గే నివారణ',
    subtitle: 'కోల్డ్ వాటర్ డిస్‌ఇన్ఫెక్టెంట్ & ఆల్గే ఎలిమినేటర్ (27% H₂O₂)',
    highlights: ['వ్యాధి కారకాల', 'నాశనం', 'DO స్థాయి', 'పెంపు', 'అవశేషాలు', 'లేని శుభ్రత'],
    shortDosage: '1 లీటరు 100 లీటర్ల నీటిలో కలిపి చల్లి 60 ని. ఏరేటర్ నడపాలి',
    shortIngredients: 'ఫుడ్-గ్రేడ్ 27% హైడ్రోజన్ పెరాక్సైడ్, అలోవెరా & ప్లాంట్ ఎక్స్‌ట్రాక్ట్',
    chips: ['27% H₂O₂', 'జీరో రెసిడ్యూ', 'DO బూస్టర్']
  }
};
