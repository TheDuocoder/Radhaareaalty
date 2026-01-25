import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Calendar,
  Car,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Check,
  ArrowLeft,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { properties } from "@/data/properties";

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find((p) => p.id === Number(id));
  const [currentImage, setCurrentImage] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Property Not Found
          </h1>
          <Link to="/properties">
            <Button>Back to Properties</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const similarProperties = properties
    .filter((p) => p.id !== property.id && p.type === property.type)
    .slice(0, 3);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <section className="pt-24 pb-4">
        <div className="container mx-auto px-4">
          <Link
            to="/properties"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Properties
          </Link>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[21/9]">
            <img
              src={property.images[currentImage]}
              alt={property.title}
              className="w-full h-full object-cover"
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full text-sm font-medium">
              {currentImage + 1} / {property.images.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentImage
                    ? "border-primary"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt={`${property.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Property Info */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    {property.type}
                  </span>
                  {property.featured && (
                    <span className="px-3 py-1 bg-urbanet-gold text-foreground text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
                  {property.title}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>{property.location}</span>
                </div>
              </div>

              {/* Price & Features */}
              <div className="flex flex-wrap items-center gap-8 p-6 bg-secondary rounded-2xl">
                <div>
                  <span className="text-sm text-muted-foreground">Price</span>
                  <div className="text-3xl font-bold text-primary font-display">
                    {formatPrice(property.price)}
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-muted-foreground" />
                    <span className="font-medium">
                      {property.beds === 0 ? "Studio" : `${property.beds} Beds`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-muted-foreground" />
                    <span className="font-medium">{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-5 h-5 text-muted-foreground" />
                    <span className="font-medium">
                      {property.area.toLocaleString()} ft²
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Description
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Property Details */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Property Details
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-secondary rounded-xl">
                    <Calendar className="w-5 h-5 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground block">
                      Year Built
                    </span>
                    <span className="font-semibold">{property.yearBuilt}</span>
                  </div>
                  <div className="p-4 bg-secondary rounded-xl">
                    <Car className="w-5 h-5 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground block">
                      Parking
                    </span>
                    <span className="font-semibold">
                      {property.parking} {property.parking === 1 ? "Space" : "Spaces"}
                    </span>
                  </div>
                  <div className="p-4 bg-secondary rounded-xl">
                    <Bed className="w-5 h-5 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground block">
                      Bedrooms
                    </span>
                    <span className="font-semibold">
                      {property.beds === 0 ? "Studio" : property.beds}
                    </span>
                  </div>
                  <div className="p-4 bg-secondary rounded-xl">
                    <Bath className="w-5 h-5 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground block">
                      Bathrooms
                    </span>
                    <span className="font-semibold">{property.baths}</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Features & Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 p-3 bg-secondary rounded-xl"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Agent Card */}
              <div className="bg-card rounded-2xl p-6 shadow-urbanet sticky top-24">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Listed by
                </h3>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {property.agent.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Real Estate Agent
                    </p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{property.agent.phone}</span>
                  </a>
                  <a
                    href={`mailto:${property.agent.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{property.agent.email}</span>
                  </a>
                </div>
                <Button className="w-full urbanet-gradient text-primary-foreground mb-3">
                  Book a Visit
                </Button>
                <Button variant="outline" className="w-full">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      {similarProperties.length > 0 && (
        <section className="py-16 urbanet-section">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold font-display text-foreground mb-8">
              Similar Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default PropertyDetails;
