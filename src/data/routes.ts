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
    distance: 410,
    prices: {
      sedan: 5748,
      etios: 6130,
      suv: 7658,
      innova: 8040,
    },
  },
  {
    slug: "chennai-to-bangalore",
    from: "Chennai",
    to: "Bangalore",
    distance: 345,
    prices: {
      sedan: 4800,
      etios: 5100,
      suv: 6500,
      innova: 6900,
    },
  },
  {
    slug: "chennai-to-coimbatore",
    from: "Chennai",
    to: "Coimbatore",
    distance: 510,
    prices: {
      sedan: 7100,
      etios: 7500,
      suv: 9500,
      innova: 10000,
    },
  },
  {
    slug: "chennai-to-trichy",
    from: "Chennai",
    to: "Trichy",
    distance: 330,
    prices: {
      sedan: 4600,
      etios: 4900,
      suv: 6100,
      innova: 6500,
    },
  },
  {
    slug: "chennai-to-madurai",
    from: "Chennai",
    to: "Madurai",
    distance: 460,
    prices: {
      sedan: 6400,
      etios: 6800,
      suv: 8500,
      innova: 9000,
    },
  },
  {
    slug: "coimbatore-to-bangalore",
    from: "Coimbatore",
    to: "Bangalore",
    distance: 360,
    prices: {
      sedan: 5000,
      etios: 5300,
      suv: 6700,
      innova: 7200,
    },
  },
  {
    slug: "madurai-to-chennai",
    from: "Madurai",
    to: "Chennai",
    distance: 460,
    prices: {
      sedan: 6400,
      etios: 6800,
      suv: 8500,
      innova: 9000,
    },
  },
  {
    slug: "trichy-to-bangalore",
    from: "Trichy",
    to: "Bangalore",
    distance: 340,
    prices: {
      sedan: 4700,
      etios: 5000,
      suv: 6300,
      innova: 6800,
    },
  }
];

export const getRouteBySlug = (slug: string): RouteData | undefined => {
  return routes.find((route) => route.slug === slug);
};
