type NavLink = {
  label: string;
  href: string;
};

type PrimaryItem = NavLink & {
  children?: readonly NavLink[];
};

const servicesChildren: readonly NavLink[] = [
  { label: "Car, Van & Motorcycle Recovery", href: "/services/car-recovery/" },
  { label: "Accident Recovery", href: "/services/accident-recovery/" },
  { label: "Police Pound Release", href: "/services/police-pound-release/" },
  { label: "Specialist Recovery", href: "/services/specialist-recovery/" },
  { label: "Vehicle Repossession", href: "/services/vehicle-repossession/" },
  { label: "Supercar & Classic Car Transportation", href: "/services/supercar-classic-car-transportation/" },
  { label: "Vehicle Storage", href: "/services/vehicle-storage/" },
];

const areasChildren: readonly NavLink[] = [
  { label: "Harrow", href: "/areas/harrow/" },
  { label: "Perivale", href: "/areas/perivale/" },
  { label: "Greenford", href: "/areas/greenford/" },
  { label: "Ealing", href: "/areas/ealing/" },
  { label: "Hayes", href: "/areas/hayes/" },
  { label: "Southall", href: "/areas/southall/" },
];

export const navigation = {
  primary: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/", children: servicesChildren },
    { label: "Areas", href: "/areas/", children: areasChildren },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ] as readonly PrimaryItem[],
  footer: [
    { heading: "Services", links: servicesChildren },
    { heading: "Areas", links: areasChildren },
    {
      heading: "Resources",
      links: [
        { label: "Perivale Car Pound", href: "/resources/perivale-car-pound/" },
        { label: "Charlton Car Pound", href: "/resources/charlton-car-pound/" },
        { label: "Met Pound Release Guide", href: "/resources/metropolitan-police-pound-release-guide/" },
        { label: "All Resources", href: "/resources/" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about/" },
        { label: "Contact", href: "/contact/" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy", href: "/privacy/" },
        { label: "Terms", href: "/terms/" },
      ],
    },
  ],
} as const;
