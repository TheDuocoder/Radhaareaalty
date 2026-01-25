import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Hero = () => {
  const navigate = useNavigate();

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
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')",
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
              ✨ Over 2,000+ Properties Worldwide
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-background leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Find Your{" "}
            <span className="text-primary">Dream Home</span>
            <br />
            With Ease
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
            className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-background font-display">
                2,500+
              </div>
              <div className="text-sm text-background/70 mt-1">
                Properties Listed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-background font-display">
                1,800+
              </div>
              <div className="text-sm text-background/70 mt-1">
                Happy Customers
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-background font-display">
                150+
              </div>
              <div className="text-sm text-background/70 mt-1">
                Expert Agents
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
