import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, BookOpen, Briefcase, Home } from "lucide-react";
import { Link } from "wouter";

/**
 * Design Philosophy: Modern Minimalist with Functional Clarity
 * - Detailed examples organized in tabs for easy navigation
 * - Clear folder structures and file hierarchies
 * - Practical, actionable guidance for each scenario
 */

export default function Guide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-white z-50">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-lg text-primary">PARA</span>
            </a>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/">
              <a className="text-sm text-foreground hover:text-accent transition-colors">
                Home
              </a>
            </Link>
            <Link href="/guide">
              <a className="text-sm text-accent font-semibold">
                Guide
              </a>
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
            <h1 className="text-5xl font-bold text-primary font-poppins mb-4">
              Real-World PARA Examples
            </h1>
            <p className="text-xl text-muted-foreground">
              See how the PARA method works in practice across different life scenarios. Each example shows a complete folder structure and workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Examples Tabs */}
      <section className="py-20">
        <div className="container">
          <Tabs defaultValue="research" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="research" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Research Project</span>
                <span className="sm:hidden">Research</span>
              </TabsTrigger>
              <TabsTrigger value="freelance" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span className="hidden sm:inline">Freelance Work</span>
                <span className="sm:hidden">Freelance</span>
              </TabsTrigger>
              <TabsTrigger value="personal" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Personal Life</span>
                <span className="sm:hidden">Personal</span>
              </TabsTrigger>
            </TabsList>

            {/* Research Project Example */}
            <TabsContent value="research" className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary font-poppins">
                  Research Project: Climate Change Policy Analysis
                </h2>
                <p className="text-lg text-muted-foreground">
                  A graduate student is writing a thesis on climate change policy effectiveness. Here's how PARA organizes this complex project.
                </p>
              </div>

              {/* Scenario Overview */}
              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold text-primary mb-4 font-poppins">Scenario Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Duration</p>
                    <p className="font-semibold text-primary">6 months</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Key Deliverable</p>
                    <p className="font-semibold text-primary">50-page thesis</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Tools Used</p>
                    <p className="font-semibold text-primary">Notion, Google Drive</p>
                  </div>
                </div>
              </Card>

              {/* Folder Structure */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary font-poppins">Folder Structure</h3>
                
                <Card className="p-6 border-border bg-slate-50">
                  <div className="font-mono text-sm space-y-2 text-foreground">
                    <div>📁 <span className="font-bold">P - Climate Policy Thesis</span></div>
                    <div className="ml-6 space-y-2">
                      <div>📁 01_Research_Materials</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>📄 IPCC_2021_Report.pdf</div>
                        <div>📄 EU_Green_Deal_Analysis.pdf</div>
                        <div>📄 Research_Notes.md</div>
                        <div>📄 Literature_Review.docx</div>
                      </div>
                      <div>📁 02_Data_and_Analysis</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>📊 Policy_Effectiveness_Data.xlsx</div>
                        <div>📊 Carbon_Emissions_Trends.csv</div>
                        <div>📓 Data_Analysis_Notebook.ipynb</div>
                      </div>
                      <div>📁 03_Drafts_and_Outlines</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>📄 Thesis_Outline_v1.md</div>
                        <div>📄 Draft_Introduction_v2.docx</div>
                        <div>📄 Draft_Full_Thesis_v3.docx</div>
                      </div>
                      <div>📁 04_Final_Submission</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>📄 Climate_Policy_Thesis_Final.pdf</div>
                        <div>📄 Bibliography.bib</div>
                        <div>📄 Appendices.pdf</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* PARA Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary font-poppins">Projects</h3>
                  <Card className="p-6 border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>P - Climate Policy Thesis</strong> is the main project with a clear deadline (6 months) and specific deliverable (50-page thesis).
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Defined outcome: Complete thesis</li>
                      <li>✓ Clear deadline: End of semester</li>
                      <li>✓ Measurable progress: Draft completion</li>
                    </ul>
                  </Card>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary font-poppins">Areas</h3>
                  <Card className="p-6 border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>A - Graduate Studies</strong> is the broader area containing course materials, professor contact info, and academic calendar.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Ongoing responsibility</li>
                      <li>✓ No specific end date</li>
                      <li>✓ Maintains academic standards</li>
                    </ul>
                  </Card>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary font-poppins">Resources</h3>
                  <Card className="p-6 border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      Topics of interest stored separately from the active project.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ R - Climate Science</li>
                      <li>✓ R - Policy Analysis</li>
                      <li>✓ R - Environmental Economics</li>
                    </ul>
                  </Card>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary font-poppins">Archives</h3>
                  <Card className="p-6 border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      After thesis submission and grading, the entire project moves to archives.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Preserved for reference</li>
                      <li>✓ Out of active workspace</li>
                      <li>✓ Accessible if needed</li>
                    </ul>
                  </Card>
                </div>
              </div>

              {/* Workflow Timeline */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary font-poppins">Workflow Timeline</h3>
                <div className="space-y-4">
                  {[
                    { phase: "Week 1-2", title: "Research Phase", desc: "Collect sources, read papers, take notes in 01_Research_Materials" },
                    { phase: "Week 3-4", title: "Analysis Phase", desc: "Organize data, run analysis, store in 02_Data_and_Analysis" },
                    { phase: "Week 5-16", title: "Writing Phase", desc: "Create outlines and drafts in 03_Drafts_and_Outlines" },
                    { phase: "Week 17-20", title: "Revision Phase", desc: "Finalize and prepare submission in 04_Final_Submission" },
                    { phase: "Week 21", title: "Submission", desc: "Submit thesis, move entire project to Archives" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-24">
                        <p className="text-sm font-semibold text-accent">{item.phase}</p>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-primary">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Freelance Work Example */}
            <TabsContent value="freelance" className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary font-poppins">
                  Freelance Work: Web Design Agency
                </h2>
                <p className="text-lg text-muted-foreground">
                  A freelance web designer manages multiple client projects simultaneously. Here's how PARA keeps everything organized.
                </p>
              </div>

              {/* Scenario Overview */}
              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold text-primary mb-4 font-poppins">Scenario Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Typical Workload</p>
                    <p className="font-semibold text-primary">3-5 active projects</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Project Duration</p>
                    <p className="font-semibold text-primary">2-8 weeks each</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Tools Used</p>
                    <p className="font-semibold text-primary">Dropbox, Figma, Notion</p>
                  </div>
                </div>
              </Card>

              {/* Folder Structure */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary font-poppins">Folder Structure</h3>
                
                <Card className="p-6 border-border bg-slate-50">
                  <div className="font-mono text-sm space-y-2 text-foreground">
                    <div>📁 <span className="font-bold">Projects</span></div>
                    <div className="ml-6 space-y-2">
                      <div>📁 P - TechStartup Rebrand (Due: Feb 28)</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>📁 01_Client_Brief</div>
                        <div className="ml-4 text-xs">📄 Brand_Guidelines.pdf, Competitor_Analysis.pdf</div>
                        <div>📁 02_Design_Files</div>
                        <div className="ml-4 text-xs">🎨 Wireframes_v1.fig, Mockups_v2.fig, Final_Design.fig</div>
                        <div>📁 03_Assets</div>
                        <div className="ml-4 text-xs">🖼️ Logo_Files, Color_Palette, Typography</div>
                        <div>📁 04_Handoff</div>
                        <div className="ml-4 text-xs">📄 Design_Specs.pdf, Developer_Notes.md</div>
                      </div>
                      <div>📁 P - EcommerceSite (Due: Mar 15)</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>📁 01_Client_Brief</div>
                        <div>📁 02_Design_Files</div>
                        <div>📁 03_Assets</div>
                        <div>📁 04_Handoff</div>
                      </div>
                      <div>📁 P - Portfolio Update (Due: Mar 1)</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>📁 Case_Studies, Updated_Work_Samples</div>
                      </div>
                    </div>
                    <div>📁 <span className="font-bold">Areas</span></div>
                    <div className="ml-6 space-y-2">
                      <div>📁 A - Client Management</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>📄 Client_Contacts.md, Rate_Sheet.pdf, Contracts</div>
                      </div>
                      <div>📁 A - Business Operations</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>📄 Invoices, Taxes, Marketing_Materials</div>
                      </div>
                    </div>
                    <div>📁 <span className="font-bold">Resources</span></div>
                    <div className="ml-6 space-y-2">
                      <div>📁 R - Design Inspiration</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>🖼️ Website_Designs, Color_Schemes, Typography_Ideas</div>
                      </div>
                      <div>📁 R - Tools & Plugins</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>📄 Figma_Plugins, Useful_Resources, Tutorials</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6 border-border">
                  <h3 className="font-bold text-primary mb-4 font-poppins">Client Clarity</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Each project folder contains everything a client needs, making handoffs and revisions seamless.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ All assets in one place</li>
                    <li>✓ Easy to share with clients</li>
                    <li>✓ Clear version control</li>
                  </ul>
                </Card>

                <Card className="p-6 border-border">
                  <h3 className="font-bold text-primary mb-4 font-poppins">Time Management</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Seeing all projects with deadlines helps prioritize work and manage multiple timelines.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Deadline visibility</li>
                    <li>✓ Priority management</li>
                    <li>✓ Progress tracking</li>
                  </ul>
                </Card>

                <Card className="p-6 border-border">
                  <h3 className="font-bold text-primary mb-4 font-poppins">Business Growth</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Areas folder maintains business operations and client relationships independently of projects.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Client database</li>
                    <li>✓ Contracts & rates</li>
                    <li>✓ Business continuity</li>
                  </ul>
                </Card>

                <Card className="p-6 border-border">
                  <h3 className="font-bold text-primary mb-4 font-poppins">Continuous Learning</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Resources folder captures design inspiration and tools for ongoing professional development.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Design trends</li>
                    <li>✓ New tools</li>
                    <li>✓ Skill development</li>
                  </ul>
                </Card>
              </div>
            </TabsContent>

            {/* Personal Life Example */}
            <TabsContent value="personal" className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary font-poppins">
                  Personal Life: Balanced Living
                </h2>
                <p className="text-lg text-muted-foreground">
                  A working parent balances career, family, health, and personal interests. Here's how PARA creates harmony across life domains.
                </p>
              </div>

              {/* Scenario Overview */}
              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold text-primary mb-4 font-poppins">Scenario Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Life Domains</p>
                    <p className="font-semibold text-primary">Work, Family, Health</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Active Projects</p>
                    <p className="font-semibold text-primary">8-12 at any time</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Tools Used</p>
                    <p className="font-semibold text-primary">Notion, Google Drive</p>
                  </div>
                </div>
              </Card>

              {/* Folder Structure */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary font-poppins">Folder Structure</h3>
                
                <Card className="p-6 border-border bg-slate-50">
                  <div className="font-mono text-sm space-y-2 text-foreground">
                    <div>📁 <span className="font-bold">Projects</span></div>
                    <div className="ml-6 space-y-2">
                      <div className="text-muted-foreground">💼 Work Projects</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>📁 P - Q1 Marketing Campaign (Due: Mar 31)</div>
                        <div>📁 P - Team Offsite Planning (Due: Feb 15)</div>
                      </div>
                      <div className="text-muted-foreground">👨‍👩‍👧‍👦 Family Projects</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>📁 P - Summer Vacation Planning (Due: May 1)</div>
                        <div>📁 P - Home Renovation Phase 2 (Due: Jun 30)</div>
                      </div>
                      <div className="text-muted-foreground">💪 Personal Projects</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>📁 P - Marathon Training (Due: Oct 15)</div>
                        <div>📁 P - Learn Spanish (Due: Dec 31)</div>
                      </div>
                    </div>
                    <div>📁 <span className="font-bold">Areas</span></div>
                    <div className="ml-6 space-y-2">
                      <div>📁 A - Health & Fitness</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>📄 Workout_Logs, Meal_Plans, Medical_Records</div>
                      </div>
                      <div>📁 A - Finances</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>📄 Budget, Investments, Tax_Documents</div>
                      </div>
                      <div>📁 A - Home & Family</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>📄 Kids_Info, Home_Maintenance, Family_Calendar</div>
                      </div>
                      <div>📁 A - Career Development</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>📄 Resume, Skills_Log, Certifications</div>
                      </div>
                    </div>
                    <div>📁 <span className="font-bold">Resources</span></div>
                    <div className="ml-6 space-y-2">
                      <div>📁 R - Recipes & Cooking</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>🍳 Favorite_Recipes, Meal_Ideas, Kitchen_Tips</div>
                      </div>
                      <div>📁 R - Parenting</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>📄 Articles, Tips, Resources</div>
                      </div>
                      <div>📁 R - Personal Development</div>
                      <div className="ml-6 space-y-1 text-muted-foreground">
                        <div>📚 Books, Podcasts, Learning_Materials</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Life Balance Matrix */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary font-poppins">Life Balance Matrix</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 border-border">
                    <h4 className="font-bold text-primary mb-3 font-poppins">Work Domain</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-primary">Projects</p>
                        <p className="text-muted-foreground">Campaign, team events, professional development</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Area</p>
                        <p className="text-muted-foreground">Career development, ongoing responsibilities</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Resources</p>
                        <p className="text-muted-foreground">Industry news, professional articles</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-border">
                    <h4 className="font-bold text-primary mb-3 font-poppins">Family Domain</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-primary">Projects</p>
                        <p className="text-muted-foreground">Vacations, home projects, family events</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Area</p>
                        <p className="text-muted-foreground">Home maintenance, family care, schedules</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Resources</p>
                        <p className="text-muted-foreground">Parenting tips, recipes, family ideas</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-border">
                    <h4 className="font-bold text-primary mb-3 font-poppins">Health Domain</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-primary">Projects</p>
                        <p className="text-muted-foreground">Marathon training, fitness challenges</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Area</p>
                        <p className="text-muted-foreground">Fitness routine, nutrition, medical care</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Resources</p>
                        <p className="text-muted-foreground">Workout guides, nutrition info, wellness</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-border">
                    <h4 className="font-bold text-primary mb-3 font-poppins">Personal Growth Domain</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-primary">Projects</p>
                        <p className="text-muted-foreground">Language learning, hobby projects</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Area</p>
                        <p className="text-muted-foreground">Hobbies, interests, continuous learning</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Resources</p>
                        <p className="text-muted-foreground">Books, courses, inspiration</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Key Insights */}
              <Card className="p-8 border-border bg-accent/5">
                <h3 className="text-xl font-bold text-primary mb-4 font-poppins">Key Insights for Personal PARA</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-primary">Separation of concerns:</strong> Projects are time-bound and goal-oriented, while Areas represent ongoing responsibilities. This distinction prevents burnout by showing that not everything is urgent.
                  </p>
                  <p>
                    <strong className="text-primary">Holistic view:</strong> Having all four PARA categories across all life domains ensures nothing falls through the cracks. You can see your complete life at a glance.
                  </p>
                  <p>
                    <strong className="text-primary">Flexibility:</strong> As priorities shift (career advancement, family needs, health focus), projects move between domains, but the Areas remain stable, providing continuity.
                  </p>
                  <p>
                    <strong className="text-primary">Growth mindset:</strong> The Resources folder captures learning and inspiration across all domains, supporting continuous personal development.
                  </p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Common Patterns Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary font-poppins mb-12 text-center">
            Common Patterns Across Examples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border-border">
              <h3 className="font-bold text-primary mb-4 font-poppins">Numbered Subfolders</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Within project folders, using numbered prefixes (01_, 02_, 03_) creates natural sorting and guides workflow progression.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Example: 01_Research → 02_Analysis → 03_Writing → 04_Submission
              </p>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="font-bold text-primary mb-4 font-poppins">Deadline Visibility</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Including deadlines in project folder names (e.g., "P - Project Name (Due: Date)") keeps urgency visible at a glance.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Example: P - Thesis (Due: May 15)
              </p>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="font-bold text-primary mb-4 font-poppins">Consistent Prefixes</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Using P, A, R, Z prefixes makes categories instantly recognizable and helps with alphabetical sorting.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Example: P - Projects, A - Areas, R - Resources, Z - Archives
              </p>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="font-bold text-primary mb-4 font-poppins">Lazy Creation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Don't create all Areas and Resources upfront. Create them only when you have information to file, avoiding empty folders.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Example: Create R - Design Inspiration only when you find your first design to save
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center space-y-6">
          <h2 className="text-4xl font-bold font-poppins">Ready to Implement PARA?</h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Start with one of these examples that matches your situation, then adapt it to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-white text-primary hover:bg-slate-100">
              Get Started Now
            </Button>
            <Link href="/">
              <a>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Back to Home
                </Button>
              </a>
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
                <li><Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link></li>
                <li><Link href="/guide"><a className="hover:text-accent transition-colors">Guide</a></Link></li>
                <li><a href="#" className="hover:text-accent transition-colors">Examples</a></li>
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
