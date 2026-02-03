import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import SearchBar from "./SearchBar";

const Hero = () => {
  const navigate = useNavigate();
  const [counters, setCounters] = useState({ properties: 0, customers: 0, agents: 0 });
  const statsRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounters();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { properties: 2400, customers: 1500, agents: 5 };
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters({
        properties: Math.floor(targets.properties * progress),
        customers: Math.floor(targets.customers * progress),
        agents: Math.floor(targets.agents * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  const handleSearch = (filters: {
    location: string;
    type: string;
    priceRange: { min: number; max: number };
  }) => {
    const params = new URLSearchParams();
    if (filters.location !== "All Locations") {
      params.set("location", filters.location);
    }
    if (filters.type !== "All Types") {
      params.set("type", filters.type);
    }
    if (filters.priceRange.min > 0) {
      params.set("minPrice", filters.priceRange.min.toString());
    }
    if (filters.priceRange.max < Infinity) {
      params.set("maxPrice", filters.priceRange.max.toString());
    }
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/landing_page/landingpageimage.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 urbanet-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full border border-background/20 animate-fade-in" style={{
            perspective: "1000px",
            transform: "rotateX(8deg) rotateZ(0deg)",
            boxShadow: `
              0 4px 6px rgba(0,0,0,0.1),
              0 8px 12px rgba(0,0,0,0.15),
              0 12px 20px rgba(0,0,0,0.2),
              inset 0 1px 0 rgba(255,255,255,0.3)
            `,
            transition: "transform 0.3s ease"
          }}>
            <span className="text-sm font-medium text-background" style={{
              textShadow: `
                1px 1px 2px rgba(0,0,0,0.2),
                2px 2px 4px rgba(0,0,0,0.15)
              `,
              letterSpacing: "0.5px"
            }}>
              ✨ Over 2,000+ Properties Bhubaneswar
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-background leading-tight"
            style={{
              animation: "fadeUp 1s ease forwards",
              opacity: 0,
              animationDelay: "0.1s",
              perspective: "1000px",
              transform: "rotateX(5deg) rotateY(-5deg)",
              textShadow: `
                2px 2px 4px rgba(0,0,0,0.3),
                4px 4px 8px rgba(0,0,0,0.2),
                6px 6px 12px rgba(0,0,0,0.15),
                -1px -1px 2px rgba(255,255,255,0.2)
              `,
              letterSpacing: "0.02em"
            }}
          >
            Find Your{" "}
            <span style={{ 
              color: "#859a2e",
              textShadow: `
                2px 2px 4px rgba(0,0,0,0.3),
                4px 4px 8px rgba(0,0,0,0.2),
                6px 6px 12px rgba(0,0,0,0.15),
                0px 0px 20px rgba(132, 154, 46, 0.4)
              `
            }}>Dream Home</span>
            <br />
            With Radhaareaalty
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Discover the perfect property that matches your lifestyle. From luxury
            villas to modern apartments, we have it all.
          </p>

          {/* Search Bar */}
          <div
            className="mt-12 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center" style={{
              boxShadow: `
                0 4px 8px rgba(0,0,0,0.15),
                0 8px 16px rgba(0,0,0,0.2),
                0 12px 24px rgba(0,0,0,0.25),
                inset 0 1px 0 rgba(255,255,255,0.2)
              `,
              borderRadius: "12px",
              padding: "16px",
              transition: "all 0.3s ease"
            }}>
              <div className="text-3xl md:text-4xl font-bold text-background font-display" style={{
                textShadow: `
                  2px 2px 4px rgba(0,0,0,0.2),
                  4px 4px 8px rgba(0,0,0,0.15)
                `,
                letterSpacing: "0.05em"
              }}>
                {counters.properties.toLocaleString()}+
              </div>
              <div className="text-sm text-background/70 mt-1" style={{
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
              }}>
                Properties Listed
              </div>
            </div>
            <div className="text-center" style={{
              boxShadow: `
                0 4px 8px rgba(0,0,0,0.15),
                0 8px 16px rgba(0,0,0,0.2),
                0 12px 24px rgba(0,0,0,0.25),
                inset 0 1px 0 rgba(255,255,255,0.2)
              `,
              borderRadius: "12px",
              padding: "16px",
              transition: "all 0.3s ease"
            }}>
              <div className="text-3xl md:text-4xl font-bold text-background font-display" style={{
                textShadow: `
                  2px 2px 4px rgba(0,0,0,0.2),
                  4px 4px 8px rgba(0,0,0,0.15)
                `,
                letterSpacing: "0.05em"
              }}>
                {counters.customers.toLocaleString()}+
              </div>
              <div className="text-sm text-background/70 mt-1" style={{
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
              }}>
                Happy Customers
              </div>
            </div>
            <div className="text-center" style={{
              boxShadow: `
                0 4px 8px rgba(0,0,0,0.15),
                0 8px 16px rgba(0,0,0,0.2),
                0 12px 24px rgba(0,0,0,0.25),
                inset 0 1px 0 rgba(255,255,255,0.2)
              `,
              borderRadius: "12px",
              padding: "16px",
              transition: "all 0.3s ease"
            }}>
              <div className="text-3xl md:text-4xl font-bold text-background font-display" style={{
                textShadow: `
                  2px 2px 4px rgba(0,0,0,0.2),
                  4px 4px 8px rgba(0,0,0,0.15)
                `,
                letterSpacing: "0.05em"
              }}>
                {counters.agents.toLocaleString()}+
              </div>
              <div className="text-sm text-background/70 mt-1" style={{
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
              }}>
                Expert Agents
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
