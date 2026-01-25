import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, Grid, List } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import Filters from "@/components/Filters";
import { Button } from "@/components/ui/button";
import { properties, priceRanges } from "@/data/properties";

const ITEMS_PER_PAGE = 6;

const Properties = () => {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    location: searchParams.get("location") || "All Locations",
    type: searchParams.get("type") || "All Types",
    priceIndex: 0,
    bedrooms: "Any",
  });

  // Update filters from URL params
  useEffect(() => {
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    
    if (minPrice || maxPrice) {
      const min = Number(minPrice) || 0;
      const max = Number(maxPrice) || Infinity;
      const index = priceRanges.findIndex(
        (r) => r.min === min && r.max === max
      );
      if (index !== -1) {
        setFilters((prev) => ({ ...prev, priceIndex: index }));
      }
    }
  }, [searchParams]);

  const handleFilterChange = (key: string, value: string | number) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handleReset = () => {
    setFilters({
      location: "All Locations",
      type: "All Types",
      priceIndex: 0,
      bedrooms: "Any",
    });
    setCurrentPage(1);
  };

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Location filter
      if (filters.location !== "All Locations") {
        if (!property.city.includes(filters.location) && !property.location.includes(filters.location)) {
          return false;
        }
      }

      // Type filter
      if (filters.type !== "All Types" && property.type !== filters.type) {
        return false;
      }

      // Price filter
      const priceRange = priceRanges[filters.priceIndex];
      if (property.price < priceRange.min || property.price > priceRange.max) {
        return false;
      }

      // Bedrooms filter
      if (filters.bedrooms !== "Any") {
        if (filters.bedrooms === "Studio" && property.beds !== 0) {
          return false;
        }
        const minBeds = parseInt(filters.bedrooms);
        if (!isNaN(minBeds) && property.beds < minBeds) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-12 urbanet-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              Find Your Perfect Property
            </h1>
            <p className="text-muted-foreground">
              Browse our extensive collection of premium properties. Use filters to
              narrow down your search.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-80 flex-shrink-0">
              <Filters
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleReset}
              />
            </aside>

            {/* Mobile Filter Button */}
            <div className="lg:hidden flex justify-between items-center mb-4">
              <p className="text-muted-foreground">
                {filteredProperties.length} properties found
              </p>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mb-6">
                <Filters
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onReset={handleReset}
                />
              </div>
            )}

            {/* Properties Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="hidden lg:flex justify-between items-center mb-8">
                <p className="text-muted-foreground">
                  Showing {paginatedProperties.length} of {filteredProperties.length} properties
                </p>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-primary">
                    <Grid className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <List className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Properties */}
              {paginatedProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {paginatedProperties.map((property, index) => (
                    <div
                      key={property.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <PropertyCard property={property} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-xl text-muted-foreground">
                    No properties match your criteria
                  </p>
                  <Button onClick={handleReset} className="mt-4">
                    Reset Filters
                  </Button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-12">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  {[...Array(totalPages)].map((_, i) => (
                    <Button
                      key={i}
                      variant={currentPage === i + 1 ? "default" : "outline"}
                      onClick={() => setCurrentPage(i + 1)}
                      className="w-10 h-10"
                    >
                      {i + 1}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;
