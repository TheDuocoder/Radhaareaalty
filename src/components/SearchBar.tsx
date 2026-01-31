import { useState } from "react";
import { Search, MapPin, Home, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { locations, propertyTypes, priceRanges } from "@/data/properties";

interface SearchBarProps {
  onSearch: (filters: {
    location: string;
    type: string;
    priceRange: { min: number; max: number };
  }) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [location, setLocation] = useState("All Locations");
  const [type, setType] = useState("All Types");
  const [priceIndex, setPriceIndex] = useState(0);

  const handleSearch = () => {
    onSearch({
      location,
      type,
      priceRange: priceRanges[priceIndex],
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-card rounded-2xl shadow-urbanet-xl p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Location */}
        <div className="relative">
          <label className="block text-xs font-medium text-muted-foreground mb-2">
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-secondary rounded-xl border-0 text-sm font-medium text-foreground appearance-none cursor-pointer focus:ring-2 focus:ring-primary focus:outline-none"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Property Type */}
        <div className="relative">
          <label className="block text-xs font-medium text-muted-foreground mb-2">
            Property Type
          </label>
          <div className="relative">
            <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-secondary rounded-xl border-0 text-sm font-medium text-foreground appearance-none cursor-pointer focus:ring-2 focus:ring-primary focus:outline-none"
            >
              {propertyTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Price Range */}
        <div className="relative">
          <label className="block text-xs font-medium text-muted-foreground mb-2">
            Price Range
          </label>
          <div className="relative">
            <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <select
              value={priceIndex}
              onChange={(e) => setPriceIndex(Number(e.target.value))}
              className="w-full pl-10 pr-4 py-3 bg-secondary rounded-xl border-0 text-sm font-medium text-foreground appearance-none cursor-pointer focus:ring-2 focus:ring-primary focus:outline-none"
            >
              {priceRanges.map((range, index) => (
                <option key={range.label} value={index}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <Button
            onClick={handleSearch}
            style={{ backgroundColor: "#7BC878", color: "#000000" }}
            className="w-full h-12 hover:opacity-90 transition-opacity rounded-xl font-semibold"
          >
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
