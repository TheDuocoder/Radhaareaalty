import { Users, Award, Building, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { icon: Building, value: "2,500+", label: "Properties Sold" },
  { icon: Users, value: "1,800+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Globe, value: "50+", label: "Cities Covered" },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    bio: "With over 20 years in real estate, Sarah founded Urbanet to transform the property buying experience.",
  },
  {
    name: "Michael Chen",
    role: "Head of Sales",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Michael leads our sales team with a focus on client satisfaction and market expertise.",
  },
  {
    name: "Isabella Martinez",
    role: "Lead Agent",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Isabella specializes in luxury properties and has helped hundreds of families find their dream homes.",
  },
  {
    name: "David Thompson",
    role: "Property Consultant",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "David brings deep market knowledge and a personalized approach to every client interaction.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-20 urbanet-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mt-4 mb-6">
              We Help You Find The Perfect Place
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Urbanet, we believe everyone deserves to find their perfect home.
              Our team of dedicated professionals works tirelessly to match you
              with properties that fit your lifestyle, needs, and dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-4 mb-6">
                Building Dreams Since 2008
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Urbanet was founded with a simple mission: to make property
                  buying and selling transparent, efficient, and enjoyable. What
                  started as a small agency has grown into a trusted name in real
                  estate.
                </p>
                <p>
                  Over the years, we've helped thousands of families find their
                  perfect homes, from first-time buyers to luxury property
                  investors. Our success is built on trust, expertise, and an
                  unwavering commitment to our clients.
                </p>
                <p>
                  Today, we continue to innovate and lead the industry, combining
                  traditional values with modern technology to deliver
                  exceptional results.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Modern home interior"
                className="rounded-2xl shadow-urbanet-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl">
                <div className="text-4xl font-bold font-display">15+</div>
                <div className="text-sm opacity-80">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 urbanet-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-8 bg-card rounded-2xl shadow-urbanet animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl urbanet-gradient flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold font-display text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-4 mb-4">
              Meet The Experts
            </h2>
            <p className="text-muted-foreground">
              Our team of experienced professionals is dedicated to helping you
              achieve your real estate goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group bg-card rounded-2xl overflow-hidden shadow-urbanet urbanet-card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 urbanet-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-card p-8 rounded-2xl shadow-urbanet">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground">
                  To provide exceptional real estate services that exceed
                  expectations, making property transactions seamless and
                  rewarding for every client we serve.
                </p>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-urbanet">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground">
                  To be the most trusted and innovative real estate company,
                  setting new standards in customer service and property
                  solutions worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
