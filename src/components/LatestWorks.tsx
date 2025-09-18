import { Card } from "@/components/ui/card";
const LatestWorks = () => {
  const projects = [{
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
  }, {
    id: 2,
    title: "Brand Identity",
    category: "Design",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop"
  }, {
    id: 3,
    title: "Mobile App",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
  }, {
    id: 4,
    title: "Digital Campaign",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
  }, {
    id: 5,
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
  }];
  return <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What we do</h2>
          <div className="flex items-center space-x-2 text-muted-foreground animate-bounce">
            <span className="text-sm">View All</span>
            <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {projects.map((project, index) => <Card key={project.id} className="group overflow-hidden bg-card border-border hover-glow cursor-pointer" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-4">
                <p className="text-xs text-primary font-medium mb-1">
                  {project.category}
                </p>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
            </Card>)}
        </div>

        {/* Infinite Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => <div key={i} className="w-2 h-2 bg-primary/30 rounded-full animate-pulse" style={{
            animationDelay: `${i * 200}ms`
          }}></div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default LatestWorks;