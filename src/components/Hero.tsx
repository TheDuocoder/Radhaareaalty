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
    const targets = { properties: 2500, customers: 1800, agents: 150 };
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
          <div className="inline-flex items-center px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full border border-background/20 animate-fade-in">
            <span className="text-sm font-medium text-background">
              ✨ Over 2,000+ Properties Bhubaneswar
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-background leading-tight"
            style={{
              animation: "fadeUp 1s ease forwards",
              opacity: 0,
              animationDelay: "0.1s"
            }}
          >
            Find Your{" "}
            <span style={{ color: "#859a2e" }}>Dream Home</span>
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
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-background font-display">
                {counters.properties.toLocaleString()}+
              </div>
              <div className="text-sm text-background/70 mt-1">
                Properties Listed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-background font-display">
                {counters.customers.toLocaleString()}+
              </div>
              <div className="text-sm text-background/70 mt-1">
                Happy Customers
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-background font-display">
                {counters.agents.toLocaleString()}+
              </div>
              <div className="text-sm text-background/70 mt-1">
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
