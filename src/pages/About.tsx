import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="animate-fade-in">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                About <span className="text-gradient">Us</span>
              </h1>
            </div>

            {/* Content Sections */}
            <div className="space-y-12 text-lg leading-relaxed">
              {/* Welcome Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Welcome to Estimate Marketing
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At Estimate Marketing, we believe data-driven strategies are the key to real business growth. We combine cutting-edge web analytics, multi-platform media promotion, and targeted campaign strategies to help brands connect with their ideal audience and drive measurable results.
                  </p>
                  <p>
                    Our approach is built on transparency, performance, and a deep understanding of digital marketing trends. Every decision we make is backed by real-time tracking and in-depth analysis, allowing us to fine-tune strategies and maximize your return on investment.
                  </p>
                </div>
              </section>

              {/* Commitment Section */}
              <section className="bg-card rounded-lg p-8 border">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our Commitment to You
                </h2>
                <p className="text-muted-foreground">
                  We are committed to maintaining the highest standards of privacy and compliance. Your trust is important to us — and we protect your information with strict policies that ensure no mobile information is ever shared with third parties or affiliates for marketing or promotional purposes. Your data is used solely to deliver the services you sign up for, and all text messaging originator opt-in data and consent are kept secure and private, except when working with authorized service providers necessary for delivering our services.
                </p>
              </section>

              {/* Why Choose Us Section */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Why Estimate Marketing?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-6 bg-card/50 rounded-lg border">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Advanced Analytics</h3>
                      <p className="text-muted-foreground">We leverage powerful insights to craft strategies that perform.</p>
                    </div>
                    <div className="p-6 bg-card/50 rounded-lg border">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Cross-Platform Expertise</h3>
                      <p className="text-muted-foreground">From social media to SMS marketing, we help you engage across every platform.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-6 bg-card/50 rounded-lg border">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Transparency</h3>
                      <p className="text-muted-foreground">No hidden tactics — just clear, trackable results and honest communication.</p>
                    </div>
                    <div className="p-6 bg-card/50 rounded-lg border">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Customer-First</h3>
                      <p className="text-muted-foreground">Your success is our mission. We customize every strategy to match your goals and audience.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Get Ready Section */}
              <section className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Get Ready to Grow
                </h2>
                <p className="text-muted-foreground mb-6">
                  Whether you're just starting or scaling to the next level, Estimate Marketing is here to make sure you reach — and exceed — your growth goals.
                </p>
                <p className="text-muted-foreground">
                  If you have any questions about our services or policies, feel free to reach out to us at{" "}
                  <a href="mailto:contact@estimatemarketing.com" className="text-primary hover:text-primary/80 transition-colors font-medium">
                    contact@estimatemarketing.com
                  </a>. We're here to help!
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;