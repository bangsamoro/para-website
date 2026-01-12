import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink, Star, GitBranch, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

/**
 * Design Philosophy: Modern Minimalist with Functional Clarity
 * - Clean GitHub integration interface
 * - OAuth login flow
 * - Repository browser with PARA organization insights
 */

export default function GitHub() {
  const [isConnected, setIsConnected] = useState(false);
  const [userRepos, setUserRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGitHubLogin = () => {
    // In a real implementation, this would redirect to GitHub OAuth
    // For now, we'll show a placeholder message
    alert("GitHub OAuth integration would redirect to: https://github.com/login/oauth/authorize");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-white z-50">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="font-bold text-lg text-primary">PARA</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/guide" className="text-sm text-foreground hover:text-accent transition-colors">
              Guide
            </Link>
            <Link href="/github" className="text-sm text-accent font-semibold">
              GitHub
            </Link>
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Github className="w-8 h-8 text-primary" />
              <h1 className="text-5xl font-bold text-primary font-poppins">
                GitHub Integration
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Connect your GitHub repositories and organize them using the PARA method. Visualize your projects, areas, and resources in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          {!isConnected ? (
            <div className="space-y-8">
              {/* Connection Card */}
              <Card className="p-12 border-border bg-gradient-to-br from-slate-50 to-white">
                <div className="text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Github className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-primary font-poppins mb-2">
                      Connect Your GitHub Account
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Securely connect your GitHub account to organize your repositories using PARA principles.
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white"
                    onClick={handleGitHubLogin}
                  >
                    <Github className="mr-2 w-5 h-5" />
                    Connect with GitHub
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    We only request read access to your public repositories. Your data is never stored.
                  </p>
                </div>
              </Card>

              {/* Benefits */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary font-poppins">What You Can Do</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-6 border-border">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GitBranch className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">View All Repositories</h4>
                        <p className="text-sm text-muted-foreground">
                          See all your public repositories in one organized dashboard.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-border">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Star className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">Categorize with PARA</h4>
                        <p className="text-sm text-muted-foreground">
                          Tag repositories as Projects, Areas, Resources, or Archives.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-border">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ExternalLink className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">Quick Access</h4>
                        <p className="text-sm text-muted-foreground">
                          Get direct links to your repositories organized by PARA category.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-border">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">Privacy First</h4>
                        <p className="text-sm text-muted-foreground">
                          No data is stored. Your organization exists only in your browser.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* How It Works */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary font-poppins">How It Works</h3>
                <div className="space-y-3">
                  {[
                    { step: 1, title: "Connect", desc: "Click the button above to securely connect your GitHub account." },
                    { step: 2, title: "View", desc: "See all your public repositories displayed in a clean interface." },
                    { step: 3, title: "Organize", desc: "Tag each repository with a PARA category (P, A, R, or Z)." },
                    { step: 4, title: "Access", desc: "Use your organized repository list as a dashboard for quick navigation." }
                  ].map((item) => (
                    <Card key={item.step} className="p-4 border-border flex gap-4">
                      <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <Card className="p-8 border-border bg-green-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-900">Connected to GitHub</h3>
                    <p className="text-sm text-green-700">Your repositories are ready to organize</p>
                  </div>
                </div>
              </Card>

              <div className="text-center py-12">
                <p className="text-muted-foreground">Repository organization interface coming soon...</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center space-y-6">
          <h2 className="text-4xl font-bold font-poppins">Ready to Organize Your Code?</h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Connect your GitHub account and start organizing your repositories with the PARA method.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-white text-primary hover:bg-slate-100">
              <Github className="mr-2 w-5 h-5" />
              Connect GitHub
            </Button>
            <Link href="/guide" className="inline-block">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn PARA Method
              </Button>
            </Link>
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
                <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link href="/guide" className="hover:text-accent transition-colors">Guide</Link></li>
                <li><Link href="/github" className="hover:text-accent transition-colors">GitHub</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-primary mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
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
