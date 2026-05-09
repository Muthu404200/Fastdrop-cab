export interface RouteData {
  slug: string;
  from: string;
  to: string;
  distance: number;
  prices: {
    sedan: number;
    etios: number;
    suv: number;
    innova: number;
  };
}

export const routes: RouteData[] = [
{
  slug: "tanjavur-to-bangalore",
  from: "Tanjavur",
  to: "Bangalore",
  distance: 350,
  prices: { sedan: 5748, etios: 6000, suv: 7800, innova: 8500 }
},
{
  slug: "tanjavur-to-trichy",
  from: "Tanjavur",
  to: "Trichy",
  distance: 60,
  prices: { sedan: 1400, etios: 1600, suv: 2200, innova: 2500 }
},
{
  slug: "tanjavur-to-coimbatore",
  from: "Tanjavur",
  to: "Coimbatore",
  distance: 280,
  prices: { sedan: 4200, etios: 4500, suv: 6200, innova: 6800 }
},
{
  slug: "tanjavur-to-pondicherry",
  from: "Tanjavur",
  to: "Pondicherry",
  distance: 170,
  prices: { sedan: 3000, etios: 3300, suv: 4700, innova: 5200 }
},
{
  slug: "tanjavur-to-madurai",
  from: "Tanjavur",
  to: "Madurai",
  distance: 190,
  prices: { sedan: 3200, etios: 3500, suv: 5000, innova: 5500 }
},
{
  slug: "tanjavur-to-cuddalore",
  from: "Tanjavur",
  to: "Cuddalore",
  distance: 150,
  prices: { sedan: 2800, etios: 3100, suv: 4500, innova: 4900 }
},
{
  slug: "tanjavur-to-chennai",
  from: "Tanjavur",
  to: "Chennai",
  distance: 340,
  prices: { sedan: 5200, etios: 5500, suv: 7600, innova: 8200 }
},
{
  slug: "tanjavur-to-kumbakonam",
  from: "Tanjavur",
  to: "Kumbakonam",
  distance: 40,
  prices: { sedan: 1200, etios: 1400, suv: 2000, innova: 2300 }
},

{
  slug: "kumbakonam-to-bangalore",
  from: "Kumbakonam",
  to: "Bangalore",
  distance: 380,
  prices: { sedan: 5900, etios: 6200, suv: 8200, innova: 8900 }
},
{
  slug: "kumbakonam-to-trichy",
  from: "Kumbakonam",
  to: "Trichy",
  distance: 95,
  prices: { sedan: 1800, etios: 2000, suv: 2800, innova: 3200 }
},
{
  slug: "kumbakonam-to-coimbatore",
  from: "Kumbakonam",
  to: "Coimbatore",
  distance: 310,
  prices: { sedan: 4500, etios: 4800, suv: 6600, innova: 7200 }
},
{
  slug: "kumbakonam-to-pondicherry",
  from: "Kumbakonam",
  to: "Pondicherry",
  distance: 140,
  prices: { sedan: 2600, etios: 2900, suv: 4200, innova: 4700 }
},
{
  slug: "kumbakonam-to-madurai",
  from: "Kumbakonam",
  to: "Madurai",
  distance: 220,
  prices: { sedan: 3600, etios: 3900, suv: 5600, innova: 6100 }
},
{
  slug: "kumbakonam-to-chennai",
  from: "Kumbakonam",
  to: "Chennai",
  distance: 290,
  prices: { sedan: 4700, etios: 5000, suv: 7000, innova: 7600 }
},
{
  slug: "kumbakonam-to-thanjavur",
  from: "Kumbakonam",
  to: "Thanjavur",
  distance: 40,
  prices: { sedan: 1200, etios: 1400, suv: 2000, innova: 2300 }
},
{
  slug: "kumbakonam-to-kanyakumari",
  from: "Kumbakonam",
  to: "Kanyakumari",
  distance: 390,
  prices: { sedan: 6200, etios: 6500, suv: 8600, innova: 9300 }
},

{
  slug: "chennai-to-bangalore",
  from: "Chennai",
  to: "Bangalore",
  distance: 350,
  prices: { sedan: 5500, etios: 5800, suv: 7600, innova: 8300 }
},
{
  slug: "chennai-to-trichy",
  from: "Chennai",
  to: "Trichy",
  distance: 330,
  prices: { sedan: 5000, etios: 5300, suv: 7300, innova: 7900 }
},
{
  slug: "chennai-to-coimbatore",
  from: "Chennai",
  to: "Coimbatore",
  distance: 500,
  prices: { sedan: 7200, etios: 7600, suv: 9800, innova: 10500 }
},
{
  slug: "chennai-to-pondicherry",
  from: "Chennai",
  to: "Pondicherry",
  distance: 160,
  prices: { sedan: 2800, etios: 3100, suv: 4500, innova: 5000 }
},
{
  slug: "chennai-to-madurai",
  from: "Chennai",
  to: "Madurai",
  distance: 460,
  prices: { sedan: 6900, etios: 7200, suv: 9500, innova: 10200 }
},
{
  slug: "chennai-to-cuddalore",
  from: "Chennai",
  to: "Cuddalore",
  distance: 180,
  prices: { sedan: 3000, etios: 3300, suv: 4700, innova: 5200 }
},
{
  slug: "chennai-to-thanjavur",
  from: "Chennai",
  to: "Thanjavur",
  distance: 340,
  prices: { sedan: 5200, etios: 5500, suv: 7600, innova: 8200 }
},
{
  slug: "chennai-to-kumbakonam",
  from: "Chennai",
  to: "Kumbakonam",
  distance: 290,
  prices: { sedan: 4700, etios: 5000, suv: 7000, innova: 7600 }
},

{
  slug: "cuddalore-to-chennai",
  from: "Cuddalore",
  to: "Chennai",
  distance: 180,
  prices: { sedan: 3000, etios: 3300, suv: 4700, innova: 5200 }
},
{
  slug: "cuddalore-to-coimbatore",
  from: "Cuddalore",
  to: "Coimbatore",
  distance: 330,
  prices: { sedan: 5200, etios: 5500, suv: 7600, innova: 8200 }
},
{
  slug: "cuddalore-to-trichy",
  from: "Cuddalore",
  to: "Trichy",
  distance: 200,
  prices: { sedan: 3400, etios: 3700, suv: 5200, innova: 5800 }
},
{
  slug: "cuddalore-to-tirunelveli",
  from: "Cuddalore",
  to: "Tirunelveli",
  distance: 500,
  prices: { sedan: 7400, etios: 7800, suv: 10200, innova: 10800 }
},
{
  slug: "cuddalore-to-kanyakumari",
  from: "Cuddalore",
  to: "Kanyakumari",
  distance: 620,
  prices: { sedan: 9200, etios: 9600, suv: 12400, innova: 13200 }
},
{
  slug: "cuddalore-to-velankanni",
  from: "Cuddalore",
  to: "Velankanni",
  distance: 140,
  prices: { sedan: 2500, etios: 2800, suv: 4200, innova: 4700 }
},

{
  slug: "coimbatore-to-chennai",
  from: "Coimbatore",
  to: "Chennai",
  distance: 500,
  prices: { sedan: 7200, etios: 7600, suv: 9800, innova: 10500 }
},
{
  slug: "coimbatore-to-trichy",
  from: "Coimbatore",
  to: "Trichy",
  distance: 220,
  prices: { sedan: 3600, etios: 3900, suv: 5600, innova: 6200 }
},
{
  slug: "coimbatore-to-bangalore",
  from: "Coimbatore",
  to: "Bangalore",
  distance: 360,
  prices: { sedan: 5600, etios: 5900, suv: 7800, innova: 8400 }
},
{
  slug: "coimbatore-to-madurai",
  from: "Coimbatore",
  to: "Madurai",
  distance: 215,
  prices: { sedan: 3500, etios: 3800, suv: 5400, innova: 5900 }
},
{
  slug: "coimbatore-to-tirunelveli",
  from: "Coimbatore",
  to: "Tirunelveli",
  distance: 410,
  prices: { sedan: 6200, etios: 6500, suv: 8600, innova: 9200 }
},
{
  slug: "coimbatore-to-vellore",
  from: "Coimbatore",
  to: "Vellore",
  distance: 330,
  prices: { sedan: 5200, etios: 5500, suv: 7600, innova: 8200 }
},

{
  slug: "trichy-to-bangalore",
  from: "Trichy",
  to: "Bangalore",
  distance: 340,
  prices: { sedan: 4700, etios: 5000, suv: 6300, innova: 6800 }
},
{
  slug: "trichy-to-chennai",
  from: "Trichy",
  to: "Chennai",
  distance: 330,
  prices: { sedan: 5000, etios: 5300, suv: 7300, innova: 7900 }
},
{
  slug: "trichy-to-coimbatore",
  from: "Trichy",
  to: "Coimbatore",
  distance: 220,
  prices: { sedan: 3600, etios: 3900, suv: 5600, innova: 6200 }
},
{
  slug: "trichy-to-cuddalore",
  from: "Trichy",
  to: "Cuddalore",
  distance: 200,
  prices: { sedan: 3400, etios: 3700, suv: 5200, innova: 5800 }
},
{
  slug: "trichy-to-salem",
  from: "Trichy",
  to: "Salem",
  distance: 160,
  prices: { sedan: 2800, etios: 3100, suv: 4500, innova: 5000 }
},
{
  slug: "trichy-to-pondicherry",
  from: "Trichy",
  to: "Pondicherry",
  distance: 200,
  prices: { sedan: 3300, etios: 3600, suv: 5200, innova: 5700 }
}
];

export const getRouteBySlug = (slug: string): RouteData | undefined => {
  return routes.find((route) => route.slug === slug);
};
