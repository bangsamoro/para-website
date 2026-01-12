import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Folder, Archive, Lightbulb, Target } from "lucide-react";
import { Link } from "wouter";

/**
 * Design Philosophy: Modern Minimalist with Functional Clarity
 * - Clean, grid-based layouts with generous whitespace
 * - Emphasis on typography hierarchy and functional clarity
 * - Neutral color palette with strategic accent colors (slate blue + teal)
 * - Asymmetric layouts with content on left, visual elements on right
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="font-bold text-lg text-primary">PARA</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#categories" className="text-sm text-foreground hover:text-accent transition-colors">
              Categories
            </a>
            <a href="#implementation" className="text-sm text-foreground hover:text-accent transition-colors">
              Implementation
            </a>
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight font-poppins">
                  Organize Your Digital Life in Seconds
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The PARA Method is a simple, flexible system for organizing any type of digital information. Learn how to master your files, notes, and projects.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Learn PARA <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-border">
                  View Examples
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-2xl font-bold text-primary">4</div>
                  <p className="text-sm text-muted-foreground">Simple Categories</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">∞</div>
                  <p className="text-sm text-muted-foreground">Universal System</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">0</div>
                  <p className="text-sm text-muted-foreground">Learning Curve</p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="/images/hero-workspace.jpg"
                alt="PARA Method Workspace"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-primary font-poppins">What is PARA?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              PARA stands for <strong>Projects, Areas, Resources, and Archives</strong>. It's a framework developed by Tiago Forte that provides a universal system for organizing any type of digital information across any platform. Instead of organizing by broad subjects, PARA organizes by actionability—ensuring you can find what you need right when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary font-poppins mb-16 text-center">The Four Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Projects */}
            <Card className="p-8 border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2 font-poppins">Projects</h3>
                  <p className="text-muted-foreground mb-4">
                    Short-term efforts with a defined goal and deadline. These are the things you're actively working on right now.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Write research paper</li>
                    <li>✓ Plan vacation</li>
                    <li>✓ Launch website</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Areas */}
            <Card className="p-8 border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Folder className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2 font-poppins">Areas</h3>
                  <p className="text-muted-foreground mb-4">
                    Long-term responsibilities with a standard to maintain. These are ongoing parts of your life.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Health & Fitness</li>
                    <li>✓ Finances</li>
                    <li>✓ Work</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Resources */}
            <Card className="p-8 border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2 font-poppins">Resources</h3>
                  <p className="text-muted-foreground mb-4">
                    Topics of interest and ongoing learning. Information you want to reference later.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Photography tips</li>
                    <li>✓ Design inspiration</li>
                    <li>✓ Learning resources</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Archives */}
            <Card className="p-8 border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Archive className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2 font-poppins">Archives</h3>
                  <p className="text-muted-foreground mb-4">
                    Inactive items from other categories. Safely stored for future reference.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Completed projects</li>
                    <li>✓ Inactive areas</li>
                    <li>✓ Old resources</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual Diagram Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary font-poppins mb-12 text-center">How PARA Works</h2>
            <img
              src="/images/folder-system.jpg"
              alt="PARA System Structure"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section id="implementation" className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="hidden lg:block">
              <img
                src="/images/organization-concept.jpg"
                alt="Digital Organization"
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-primary font-poppins mb-4">Getting Started is Simple</h2>
                <p className="text-lg text-muted-foreground">
                  You don't need to overhaul your entire system overnight. Start with these simple steps.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Create Four Folders</h3>
                    <p className="text-muted-foreground">
                      Set up Projects, Areas, Resources, and Archives in your file system or note-taking app.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Start with Projects</h3>
                    <p className="text-muted-foreground">
                      List your active projects and create a subfolder for each one. This is the most actionable category.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Build as You Go</h3>
                    <p className="text-muted-foreground">
                      Create Areas and Resources on demand as you encounter information that needs organizing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Archive Regularly</h3>
                    <p className="text-muted-foreground">
                      Move completed projects to Archives to keep your active workspace clean and focused.
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Read Full Guide <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center space-y-6">
          <h2 className="text-4xl font-bold font-poppins">Ready to Organize Your Digital Life?</h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Start using the PARA method today and experience the clarity of a well-organized digital workspace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-white text-primary hover:bg-slate-100">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">P</span>
                </div>
                <span className="font-bold text-primary">PARA</span>
              </div>
              <p className="text-sm text-muted-foreground">
                A simple system for organizing your digital life.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-primary mb-4">Learn</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">About PARA</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Categories</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Examples</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-primary mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Guide</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-primary mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 PARA Method. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Privacy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms</a>
              <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
