import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCard from "@/components/TestimonialCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { properties, testimonials } from "@/data/properties";

const Home = () => {
  const featuredProperties = properties.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Featured Properties Section */}
      <section className="py-20 urbanet-section">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Featured Properties
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-4">
                Discover Our Best Listings
              </h2>
            </div>
            <Link to="/properties" className="mt-4 md:mt-0">
              <Button variant="outline" className="group">
                View All Properties
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <div
                key={property.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <section className="py-20 urbanet-section">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-4 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground">
              Don't just take our word for it. Here's what our satisfied customers
              have to say about their experience with Radhaareaalty.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl urbanet-gradient p-12 md:p-16 text-center">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground mb-4">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Join thousands of happy homeowners who found their perfect property
                with Radhaareaalty. Start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/properties">
                  <Button
                    size="lg"
                    className="bg-background text-foreground hover:bg-background/90"
                  >
                    Browse Properties
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    style={{ backgroundColor: "#ffffff", color: "#000000" }}
                    className="font-semibold hover:opacity-90"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-background/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-background/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
