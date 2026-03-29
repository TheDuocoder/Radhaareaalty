import React from "react";

const partners = [
  {
    name: "Tata Housing",
    logo: "/images/partners/tata-housing.jpg", // Updated to .jpg
  },
  {
    name: "Metro Group",
    logo: "/images/partners/metro-group.jpg",
  },
  {
    name: "DN Homes",
    logo: "/images/partners/dn-homes.jpg",
  },
  {
    name: "Chandrama",
    logo: "/images/partners/chandrama.jpg",
  },
  {
    name: "Urban Developers & Builders",
    logo: "/images/partners/urban-developers.png",
  },
  {
    name: "Urban Majestic",
    logo: "/images/partners/urban-majestic.png",
  },
  {
    name: "Sai Krishna Homes",
    logo: "/images/partners/sai-krishna-homes.png",
  },
  {
    name: "SJ Developers",
    logo: "/images/partners/sj-developers-logo.jpg",
  },
];

const OurPartners = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-4 mb-4">
            Trusted by the Best
          </h2>
          <p className="text-muted-foreground">
            We collaborate with industry leaders to bring you the finest real estate opportunities.
          </p>
        </div>

        {/* Partners Marquee */}
        <div className="relative flex overflow-hidden group w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-muted/30 before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-10 after:bg-gradient-to-l after:from-muted/30 after:to-transparent after:content-[''] mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)">
          <div className="flex flex-nowrap min-w-full animate-marquee hover:[animation-play-state:paused] gap-8 md:gap-16 pr-8 md:pr-16">
            {/* Duplicate partners multiple times for infinite scroll effect */}
            {[...partners, ...partners, ...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="transition-all duration-300 transform hover:scale-105 shrink-0"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-48 h-24 flex items-center justify-center bg-white rounded-lg shadow-sm p-4 border border-border/50">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement!.innerHTML = `<span class="font-semibold text-lg text-foreground text-center">${partner.name}</span>`;
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
