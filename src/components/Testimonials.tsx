import { Card } from "@/components/ui/card";
import testimonial1 from "@/assets/testimonials/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonials/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonials/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonials/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonials/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonials/testimonial-6.jpg";
import testimonial7 from "@/assets/testimonials/testimonial-7.jpg";
import testimonial8 from "@/assets/testimonials/testimonial-8.jpg";
import testimonial9 from "@/assets/testimonials/testimonial-9.jpg";

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
}

const Testimonials = ({ 
  title = "Success Stories", 
  subtitle = "Real results from real clients",
  showHeader = true 
}: TestimonialsProps) => {
  const testimonials = [
    { id: 1, image: testimonial1, alt: "Client testimonial showing instant ROI results" },
    { id: 2, image: testimonial2, alt: "Client testimonial showing multiple job bookings" },
    { id: 3, image: testimonial3, alt: "Client testimonial showing successful project closure" },
    { id: 4, image: testimonial4, alt: "Client testimonial showing $16,000 contract success" },
    { id: 5, image: testimonial5, alt: "Client testimonial showing multiple deal closures" },
    { id: 6, image: testimonial6, alt: "Client testimonial showing high ROI results" },
    { id: 7, image: testimonial7, alt: "Client testimonial showing lead generation success" },
    { id: 8, image: testimonial8, alt: "Client testimonial showing successful project completion" },
    { id: 9, image: testimonial9, alt: "Client testimonial showing exceptional ROI results" }
  ];

  return (
    <section className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
        {showHeader && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="group overflow-hidden bg-card border-border hover-glow cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Join hundreds of successful contractors who have transformed their businesses
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;