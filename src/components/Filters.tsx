import { MapPin, Home, IndianRupee, Bed } from "lucide-react";
import { locations, propertyTypes, priceRanges, bedroomOptions } from "@/data/properties";
import { Button } from "@/components/ui/button";

interface FiltersProps {
  filters: {
    location: string;
    type: string;
    priceIndex: number;
    bedrooms: string;
  };
  onFilterChange: (key: string, value: string | number) => void;
  onReset: () => void;
}

const Filters = ({ filters, onFilterChange, onReset }: FiltersProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-urbanet sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Filters</h3>
        <button
          onClick={onReset}
          className="text-sm text-primary hover:underline"
        >
          Reset All
        </button>
      </div>

      <div className="space-y-6">
        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            <MapPin className="w-4 h-4 inline mr-2" />
            Location
          </label>
          <select
            value={filters.location}
            onChange={(e) => onFilterChange("location", e.target.value)}
            className="w-full px-4 py-3 bg-secondary rounded-xl border-0 text-sm font-medium text-foreground appearance-none cursor-pointer focus:ring-2 focus:ring-primary focus:outline-none"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            <Home className="w-4 h-4 inline mr-2" />
            Property Type
          </label>
          <select
            value={filters.type}
            onChange={(e) => onFilterChange("type", e.target.value)}
            className="w-full px-4 py-3 bg-secondary rounded-xl border-0 text-sm font-medium text-foreground appearance-none cursor-pointer focus:ring-2 focus:ring-primary focus:outline-none"
          >
            {propertyTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            <IndianRupee className="w-4 h-4 inline mr-2" />
            Price Range
          </label>
          <select
            value={filters.priceIndex}
            onChange={(e) => onFilterChange("priceIndex", Number(e.target.value))}
            className="w-full px-4 py-3 bg-secondary rounded-xl border-0 text-sm font-medium text-foreground appearance-none cursor-pointer focus:ring-2 focus:ring-primary focus:outline-none"
          >
            {priceRanges.map((range, index) => (
              <option key={range.label} value={index}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            <Bed className="w-4 h-4 inline mr-2" />
            Bedrooms
          </label>
          <div className="grid grid-cols-4 gap-2">
            {bedroomOptions.slice(0, 4).map((option) => (
              <button
                key={option}
                onClick={() => onFilterChange("bedrooms", option)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  filters.bedrooms === option
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {bedroomOptions.slice(4).map((option) => (
              <button
                key={option}
                onClick={() => onFilterChange("bedrooms", option)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  filters.bedrooms === option
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Apply Button (Mobile) */}
        <Button className="w-full urbanet-gradient text-primary-foreground lg:hidden">
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default Filters;
