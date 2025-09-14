import Header from "@/components/Header";
import { useEffect } from "react";

const BookSession = () => {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="animate-fade-in">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Book a <span className="text-gradient">Free Session</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to transform your digital marketing? Schedule a complimentary consultation with our experts and discover how data-driven strategies can accelerate your growth.
              </p>
            </div>

            {/* Booking Calendar */}
            <div className="bg-card rounded-lg border shadow-lg p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  Choose Your Preferred Time
                </h2>
                <p className="text-muted-foreground">
                  Select a time that works best for you. Our team will reach out to confirm your appointment and prepare a customized analysis for your business.
                </p>
              </div>
              
              {/* Calendar Iframe */}
              <div className="w-full min-h-[600px] rounded-lg overflow-hidden">
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/2mK3XCWLzxTd4dLRlbI6" 
                  style={{ 
                    width: '100%',
                    border: 'none',
                    overflow: 'hidden',
                    minHeight: '600px'
                  }} 
                  scrolling="no" 
                  id="2mK3XCWLzxTd4dLRlbI6_1757856599489"
                  title="Book a Free Session Calendar"
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-card/50 rounded-lg border">
                <h3 className="text-xl font-semibold text-foreground mb-3">30-Minute Consultation</h3>
                <p className="text-muted-foreground">Get personalized insights and recommendations for your business in just 30 minutes.</p>
              </div>
              <div className="text-center p-6 bg-card/50 rounded-lg border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Expert Analysis</h3>
                <p className="text-muted-foreground">Our team will review your current marketing efforts and identify growth opportunities.</p>
              </div>
              <div className="text-center p-6 bg-card/50 rounded-lg border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Custom Strategy</h3>
                <p className="text-muted-foreground">Receive a tailored action plan designed specifically for your business goals.</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Have Questions?
              </h3>
              <p className="text-muted-foreground mb-4">
                If you need assistance with booking or have any questions about our services, don't hesitate to reach out.
              </p>
              <a 
                href="mailto:contact@estimatemarketing.com" 
                className="text-primary hover:text-primary/80 transition-colors font-medium text-lg"
              >
                contact@estimatemarketing.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookSession;