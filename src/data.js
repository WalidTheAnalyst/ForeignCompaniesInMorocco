export const companies = [
  { name:"TotalEnergies",    flag:"🇫🇷", origin:"France",        sector:"Energy",      tag:"energy",     region:"Casablanca",  invest:"$980M",  status:"confirmed",   statusLabel:"Confirmed",   date:"Jan 2026" },
  { name:"Amazon Web Svc",   flag:"🇺🇸", origin:"USA",           sector:"Tech",        tag:"tech",       region:"Rabat",       invest:"$650M",  status:"planned",     statusLabel:"Planned",     date:"Q2 2026"  },
  { name:"Stellantis",       flag:"🇫🇷", origin:"France/Italy",  sector:"Automotive",  tag:"automotive", region:"Kénitra",     invest:"$1.2B",  status:"confirmed",   statusLabel:"Confirmed",   date:"Dec 2025" },
  { name:"HSBC",             flag:"🇬🇧", origin:"UK",            sector:"Finance",     tag:"finance",    region:"Casablanca",  invest:"$340M",  status:"expansion",   statusLabel:"Expansion",   date:"Feb 2026" },
  { name:"DP World",         flag:"🇦🇪", origin:"UAE",           sector:"Logistics",   tag:"logistics",  region:"Tanger Med",  invest:"$2.1B",  status:"confirmed",   statusLabel:"Confirmed",   date:"Nov 2025" },
  { name:"Saudi Aramco",     flag:"🇸🇦", origin:"Saudi Arabia",  sector:"Energy",      tag:"energy",     region:"Souss",       invest:"$800M",  status:"negotiating", statusLabel:"Negotiating", date:"Q3 2026"  },
  { name:"Siemens Energy",   flag:"🇩🇪", origin:"Germany",       sector:"Energy",      tag:"energy",     region:"Laâyoune",    invest:"$420M",  status:"planned",     statusLabel:"Planned",     date:"Q2 2026"  },
  { name:"Accor Group",      flag:"🇫🇷", origin:"France",        sector:"Tourism",     tag:"tourism",    region:"Marrakech",   invest:"$190M",  status:"confirmed",   statusLabel:"Confirmed",   date:"Mar 2026" },
  { name:"Bayer AG",         flag:"🇩🇪", origin:"Germany",       sector:"Pharma",      tag:"pharma",     region:"Casablanca",  invest:"$120M",  status:"planned",     statusLabel:"Planned",     date:"Q3 2026"  },
  { name:"Emaar Properties", flag:"🇦🇪", origin:"UAE",           sector:"Real Estate", tag:"real-estate",region:"Rabat",       invest:"$560M",  status:"rumored",     statusLabel:"Rumored",     date:"Q4 2026"  },
  { name:"CMA CGM",          flag:"🇫🇷", origin:"France",        sector:"Logistics",   tag:"logistics",  region:"Tanger Med",  invest:"$310M",  status:"confirmed",   statusLabel:"Confirmed",   date:"Jan 2026" },
  { name:"BNP Paribas",      flag:"🇫🇷", origin:"France",        sector:"Finance",     tag:"finance",    region:"Casablanca",  invest:"$280M",  status:"expansion",   statusLabel:"Expansion",   date:"Feb 2026" },
  { name:"Huawei",           flag:"🇨🇳", origin:"China",         sector:"Tech",        tag:"tech",       region:"Rabat",       invest:"$400M",  status:"negotiating", statusLabel:"Negotiating", date:"Q2 2026"  },
  { name:"Masdar",           flag:"🇦🇪", origin:"UAE",           sector:"Energy",      tag:"energy",     region:"Ouarzazate",  invest:"$1.5B",  status:"planned",     statusLabel:"Planned",     date:"Q3 2026"  },
  { name:"Renault Group",    flag:"🇫🇷", origin:"France",        sector:"Automotive",  tag:"automotive", region:"Tanger",      invest:"$900M",  status:"confirmed",   statusLabel:"Confirmed",   date:"Oct 2025" },
];

export const regions = [
  { name:"Casablanca-Settat", count:14, pct:90 },
  { name:"Tanger-Tétouan",    count:11, pct:71 },
  { name:"Rabat-Salé",        count:9,  pct:58 },
  { name:"Kénitra",           count:6,  pct:39 },
  { name:"Souss-Massa",       count:4,  pct:26 },
  { name:"Laâyoune",          count:3,  pct:19 },
];

export const sectors = [
  { name:"Energy",      count:12, color:"#ffc107" },
  { name:"Logistics",   count:9,  color:"#2ec4b6" },
  { name:"Finance",     count:8,  color:"#7db3ff" },
  { name:"Tech",        count:7,  color:"#c4b5fd" },
  { name:"Automotive",  count:5,  color:"#cbd5e1" },
  { name:"Real Estate", count:4,  color:"#fde68a" },
  { name:"Tourism",     count:4,  color:"#86efac" },
  { name:"Pharma",      count:3,  color:"#f5d0fe" },
];

export const timelineItems = [
  { dot:"gold",  date:"Mar 2026", text:"Accor inaugurates 3-property Marrakech portfolio.",              bold:"Accor" },
  { dot:"teal",  date:"Q2 2026",  text:"Amazon Web Services data center groundbreaking, Rabat.",         bold:"Amazon Web Services" },
  { dot:"terra", date:"Q2 2026",  text:"Siemens Energy green hydrogen MoU with MASEN signed.",           bold:"Siemens Energy" },
  { dot:"blue",  date:"Q3 2026",  text:"Saudi Aramco refinery feasibility study concludes.",             bold:"Saudi Aramco" },
  { dot:"gold",  date:"Q3 2026",  text:"Masdar 1.5GW solar farm construction begins, Ouarzazate.",      bold:"Masdar" },
  { dot:"terra", date:"Q4 2026",  text:"Emaar urban project MoU expected with Ministry of Housing.",    bold:"Emaar" },
];

export const alerts = [
  { icon:"🔴", msg:"Emaar Properties delegation visited Ministry of Housing — site acquisition rumored.", bold:"Emaar Properties", time:"2h ago" },
  { icon:"🟡", msg:"Huawei in advanced talks with Maroc Telecom for 5G infrastructure roll-out.",         bold:"Huawei",           time:"6h ago" },
  { icon:"🟠", msg:"New Gulf SWF exploring Casablanca Finance City anchor tenancy — identity undisclosed.",bold:null,               time:"1d ago" },
  { icon:"🟢", msg:"Renault capacity expansion confirmed for Tanger factory — 40,000 units/yr added.",    bold:"Renault",          time:"2d ago" },
  { icon:"🔵", msg:"Germany's Bayer AG submitted pharma license application to AMIP.",                    bold:"Bayer AG",         time:"3d ago" },
];

export const origins = [
  { label:"European Union", value:18, color:"#5b9cf6" },
  { label:"GCC / MENA",     value:14, color:"#c9a84c" },
  { label:"North America",  value:7,  color:"#2ec4b6" },
  { label:"East Asia",      value:5,  color:"#c4b5fd" },
  { label:"Other",          value:3,  color:"#cbd5e1" },
];
