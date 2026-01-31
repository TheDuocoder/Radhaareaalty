import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Property } from "@/data/properties";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-urbanet urbanet-card-hover">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            {property.type}
          </span>
        </div>
        {property.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-urbanet-gold text-foreground text-xs font-semibold rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Price */}
        <div className="mb-2">
          <span className="text-2xl font-bold text-primary font-display">
            {formatPrice(property.price)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 text-muted-foreground mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-4" />

        {/* Features */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Bed className="w-4 h-4" />
              <span className="text-sm font-medium">
                {property.beds === 0 ? "Studio" : property.beds}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Bath className="w-4 h-4" />
              <span className="text-sm font-medium">{property.baths}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Square className="w-4 h-4" />
              <span className="text-sm font-medium">{property.area.toLocaleString()} ft²</span>
            </div>
          </div>
        </div>

        {/* View Details Button */}
        <Link to={`/properties/${property.id}`} className="block mt-4">
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
