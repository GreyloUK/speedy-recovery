type NavLink = {
  label: string;
  href: string;
};

type PrimaryItem = NavLink & {
  children?: readonly NavLink[];
};

const servicesChildren: readonly NavLink[] = [
  { label: "Car Recovery", href: "/services/car-recovery/" },
  { label: "Accident Recovery", href: "/services/accident-recovery/" },
  { label: "Police Pound Release", href: "/services/police-pound-release/" },
  { label: "Specialist Recovery", href: "/services/specialist-recovery/" },
  { label: "Vehicle Storage", href: "/services/vehicle-storage/" },
];

const areasChildren: readonly NavLink[] = [
  { label: "Harrow", href: "/areas/harrow/" },
  { label: "Perivale", href: "/areas/perivale/" },
  { label: "Greenford", href: "/areas/greenford/" },
  { label: "Ealing", href: "/areas/ealing/" },
  { label: "Hayes", href: "/areas/hayes/" },
];

export const navigation = {
  primary: [
    { label: "Services", href: "/services/", children: servicesChildren },
    { label: "Areas", href: "/areas/", children: areasChildren },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ] as readonly PrimaryItem[],
  footer: [
    { heading: "Services", links: servicesChildren },
    { heading: "Areas", links: areasChildren },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about/" },
        { label: "Contact", href: "/contact/" },
        { label: "Metropolitan Police Pound Guide", href: "/resources/metropolitan-police-pound-release-guide/" },
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
