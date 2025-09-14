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

              {/* Privacy Policy Section */}
              <section className="border-t pt-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Privacy Policy
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    Estimate Marketing is committed to protecting your privacy. This privacy policy explains how we collect, use, and safeguard your information when you use our SMS services.
                  </p>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Information We Collect:</h3>
                    <p>We collect information you voluntarily provide when opting into our SMS program, such as your mobile phone number.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Use of Information:</h3>
                    <p>We use your information to deliver marketing messages, updates, and other communications relevant to your interests.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Sharing of Information:</h3>
                    <p>No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Data Security:</h3>
                    <p>We implement security measures designed to protect your information from unauthorized access.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Your Choices:</h3>
                    <p>You may opt out at any time by texting "STOP" to the shortcode. To rejoin, simply opt in again through the signup process.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Changes to This Policy:</h3>
                    <p>We may update this policy from time to time. Changes will be effective upon posting to our site.</p>
                  </div>

                  <p className="pt-4">
                    For any questions or privacy-related inquiries, please contact us at{" "}
                    <a href="mailto:contact@estimatemarketing.com" className="text-primary hover:text-primary/80 transition-colors font-medium">
                      contact@estimatemarketing.com
                    </a>
                  </p>
                </div>
              </section>

              {/* Terms of Service Section */}
              <section className="border-t pt-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Terms of Service
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Estimate Marketing SMS Program</h3>
                    <p>
                      Estimate Marketing's SMS program provides updates, promotional offers, reminders, and other marketing communications. By opting in, you can expect messages related to new services, special promotions, important updates, and personalized marketing alerts.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p>
                      You can cancel the SMS service at any time. Simply text "STOP" to the shortcode. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.
                    </p>

                    <p>
                      If you experience issues with the messaging program, reply with the keyword HELP for more assistance, or reach out directly to{" "}
                      <a href="mailto:contact@estimatemarketing.com" className="text-primary hover:text-primary/80 transition-colors font-medium">
                        contact@estimatemarketing.com
                      </a>
                    </p>

                    <p>Carriers are not liable for delayed or undelivered messages.</p>

                    <p>
                      As always, message and data rates may apply for messages sent to you from us and to us from you. Message frequency may vary. For questions about your text plan or data plan, contact your wireless provider.
                    </p>

                    <p>
                      By participating, you acknowledge that you are agreeing to receive recurring marketing messages and confirm that you are the account holder or have the account holder's permission. All services are compliant with industry standards and applicable laws, including the Telephone Consumer Protection Act (TCPA).
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;