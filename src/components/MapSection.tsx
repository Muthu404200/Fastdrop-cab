interface MapSectionProps {
  from: string;
  to: string;
  distance: number;
}

export default function MapSection({ from, to, distance }: MapSectionProps) {
  // We use a simple free Google Maps iframe query string.
  // It searches for the route from "CityA to CityB".
  // Note: For actual routing lines, a Google Maps embed API key with Directions mode is required.
  // This free fallback just shows the general map search for the query.
  const query = encodeURIComponent(`${from} to ${to}`);
  const mapUrl = `https://maps.google.com/maps?q=${query}&t=&z=7&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="w-full bg-[#131A22] border border-white/10 rounded-3xl overflow-hidden shadow-lg mb-12">
      <div className="p-6 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Route Map</h2>
          <p className="text-gray-400 mt-1">
            {from} <span className="text-[#FFC107]">→</span> {to}
          </p>
        </div>
        <div className="bg-[#0B0F14] px-6 py-3 rounded-xl border border-white/5">
          <span className="text-gray-400 text-sm block">Distance</span>
          <span className="text-xl font-bold text-[#FFC107]">{distance} km</span>
        </div>
      </div>
      
      <div className="w-full h-[300px] md:h-[450px] relative">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-screen"
        ></iframe>
        {/* Overlay to give the map a darker tint to match our theme */}
        <div className="absolute inset-0 pointer-events-none bg-[#0B0F14]/20"></div>
      </div>
    </div>
  );
}
