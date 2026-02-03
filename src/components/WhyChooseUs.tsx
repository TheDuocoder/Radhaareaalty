import { Shield, CheckCircle, Wallet, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Developer",
    description:
      "Work with verified, experienced developers who prioritize your needs and goals.",
  },
  {
    icon: CheckCircle,
    title: "100% Verified Properties",
    description:
      "Every listing is thoroughly vetted to ensure accuracy and transparency.",
  },
  {
    icon: Wallet,
    title: "Best Prices",
    description:
      "Competitive pricing with no hidden fees. Get the best value for your investment.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our dedicated team is available around the clock to assist you whenever needed.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-4 mb-4">
            The Best Real Estate Partner
          </h2>
          <p className="text-muted-foreground">
            We're committed to providing exceptional service and helping you find
            the perfect property that fits your lifestyle and budget.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center p-8 rounded-2xl bg-card shadow-urbanet urbanet-card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl urbanet-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
