import { Search, Bell, Plus, ChevronDown, Code, GitBranch, GitPullRequest, PlayCircle, LayoutGrid, BookOpen, Shield, BarChart3, Settings, Star, GitFork, Eye, FileText, Folder, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("code");

  const fileStructure = [
    { type: "folder", name: ".github", updated: "2 days ago" },
    { type: "folder", name: "src", updated: "3 hours ago" },
    { type: "folder", name: "public", updated: "1 week ago" },
    { type: "file", name: ".gitignore", updated: "1 month ago" },
    { type: "file", name: "README.md", updated: "3 hours ago" },
    { type: "file", name: "package.json", updated: "5 days ago" },
    { type: "file", name: "tsconfig.json", updated: "2 weeks ago" },
    { type: "file", name: "vite.config.ts", updated: "2 weeks ago" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0d1117", color: "#c9d1d9" }}>
      <header className="border-b" style={{ backgroundColor: "#161b22", borderColor: "#30363d" }}>
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4 flex-1">
            <div className="flex items-center gap-2">
              <svg height="32" width="32" viewBox="0 0 16 16" fill="white">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </div>

            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#8b949e" }} />
              <Input
                placeholder="Search or jump to..."
                className="pl-10 border-0 focus-visible:ring-1"
                style={{
                  backgroundColor: "#0d1117",
                  borderColor: "#30363d",
                  color: "#c9d1d9",
                }}
              />
            </div>

            <nav className="hidden lg:flex items-center gap-4 text-sm font-semibold">
              <a href="#" className="hover:text-white transition-colors">Pull requests</a>
              <a href="#" className="hover:text-white transition-colors">Issues</a>
              <a href="#" className="hover:text-white transition-colors">Codespaces</a>
              <a href="#" className="hover:text-white transition-colors">Marketplace</a>
              <a href="#" className="hover:text-white transition-colors">Explore</a>
            </nav>
          </div>

          <div className="flex items-center gap-2 ml-4">
            <Button size="icon" variant="ghost" className="hover:bg-[#30363d]">
              <Bell className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="ghost" className="hover:bg-[#30363d]">
              <Plus className="w-4 h-4" />
            </Button>
            <Button variant="ghost" className="flex items-center gap-2 hover:bg-[#30363d] px-2">
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#58a6ff" }}></div>
              <ChevronDown className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </header>

      <div className="border-b" style={{ backgroundColor: "#0d1117", borderColor: "#21262d" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <a href="#" className="hover:underline" style={{ color: "#58a6ff" }}>username</a>
                <span style={{ color: "#8b949e" }}>/</span>
                <a href="#" className="font-semibold hover:underline" style={{ color: "#58a6ff" }}>repository-name</a>
                <Badge 
                  variant="outline" 
                  className="ml-2 border rounded-full px-2 py-0.5 text-xs"
                  style={{ borderColor: "#30363d", color: "#8b949e" }}
                >
                  Public
                </Badge>
              </div>

              <div className="flex items-center gap-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="gap-1 border rounded-md hover:bg-[#30363d]"
                  style={{ borderColor: "#30363d", backgroundColor: "transparent" }}
                >
                  <Eye className="w-4 h-4" />
                  Watch
                  <Badge 
                    className="ml-1 rounded-full px-1.5 text-xs"
                    style={{ backgroundColor: "#30363d", color: "#c9d1d9" }}
                  >
                    12
                  </Badge>
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="gap-1 border rounded-md hover:bg-[#30363d]"
                  style={{ borderColor: "#30363d", backgroundColor: "transparent" }}
                >
                  <GitFork className="w-4 h-4" />
                  Fork
                  <Badge 
                    className="ml-1 rounded-full px-1.5 text-xs"
                    style={{ backgroundColor: "#30363d", color: "#c9d1d9" }}
                  >
                    245
                  </Badge>
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="gap-1 border rounded-md hover:bg-[#30363d]"
                  style={{ borderColor: "#30363d", backgroundColor: "transparent" }}
                >
                  <Star className="w-4 h-4" />
                  Star
                  <Badge 
                    className="ml-1 rounded-full px-1.5 text-xs"
                    style={{ backgroundColor: "#30363d", color: "#c9d1d9" }}
                  >
                    1.2k
                  </Badge>
                </Button>
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-4 text-sm overflow-x-auto">
            {[
              { id: "code", icon: Code, label: "Code" },
              { id: "issues", icon: GitBranch, label: "Issues", badge: "34" },
              { id: "pull-requests", icon: GitPullRequest, label: "Pull requests", badge: "8" },
              { id: "actions", icon: PlayCircle, label: "Actions" },
              { id: "projects", icon: LayoutGrid, label: "Projects" },
              { id: "wiki", icon: BookOpen, label: "Wiki" },
              { id: "security", icon: Shield, label: "Security" },
              { id: "insights", icon: BarChart3, label: "Insights" },
              { id: "settings", icon: Settings, label: "Settings" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-1.5 py-3 px-2 border-b-2 transition-colors whitespace-nowrap"
                style={{
                  borderColor: activeTab === tab.id ? "#fd8c73" : "transparent",
                  color: activeTab === tab.id ? "#c9d1d9" : "#8b949e",
                }}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {tab.badge && (
                  <Badge 
                    className="ml-1 rounded-full px-1.5 text-xs"
                    style={{ backgroundColor: "#30363d", color: "#c9d1d9" }}
                  >
                    {tab.badge}
                  </Badge>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid gap-6">
          <div className="border rounded-md" style={{ backgroundColor: "#0d1117", borderColor: "#30363d" }}>
            <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "#21262d" }}>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "#58a6ff" }}></div>
                <span className="font-semibold">username</span>
                <span style={{ color: "#8b949e" }}>updated README.md</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "#8b949e" }}>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  3 hours ago
                </span>
                <span className="flex items-center gap-1">
                  <GitBranch className="w-4 h-4" />
                  main
                </span>
                <span>8f3a2b1</span>
              </div>
            </div>

            <div className="divide-y" style={{ borderColor: "#21262d" }}>
              {fileStructure.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between px-4 py-2 hover:bg-[#161b22] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    {item.type === "folder" ? (
                      <Folder className="w-4 h-4" style={{ color: "#58a6ff" }} />
                    ) : (
                      <FileText className="w-4 h-4" style={{ color: "#8b949e" }} />
                    )}
                    <span className="font-mono text-sm">{item.name}</span>
                  </div>
                  <span className="text-xs" style={{ color: "#8b949e" }}>{item.updated}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border rounded-md p-6" style={{ backgroundColor: "#0d1117", borderColor: "#30363d" }}>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5" />
              <h2 className="text-xl font-semibold">README.md</h2>
            </div>
            <div className="prose prose-invert max-w-none" style={{ color: "#c9d1d9" }}>
              <h1 className="text-2xl font-bold mb-4">Repository Name</h1>
              <p className="mb-4">
                A modern, feature-rich application built with the latest web technologies. 
                This project demonstrates best practices in full-stack development.
              </p>
              <h2 className="text-xl font-semibold mb-3 mt-6">Features</h2>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Clean, modern UI with responsive design</li>
                <li>Type-safe development with TypeScript</li>
                <li>Server-side rendering and API routes</li>
                <li>Comprehensive testing suite</li>
                <li>CI/CD integration</li>
              </ul>
              <h2 className="text-xl font-semibold mb-3 mt-6">Getting Started</h2>
              <div 
                className="p-4 rounded-md font-mono text-sm mb-4"
                style={{ backgroundColor: "#161b22" }}
              >
                <code>npm install</code><br />
                <code>npm run dev</code>
              </div>
              <h2 className="text-xl font-semibold mb-3 mt-6">Tech Stack</h2>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>React 18 with TypeScript</li>
                <li>Vite for blazing fast development</li>
                <li>TailwindCSS for styling</li>
                <li>Hono for API routes</li>
                <li>Drizzle ORM for database management</li>
              </ul>
              <h2 className="text-xl font-semibold mb-3 mt-6">Contributing</h2>
              <p className="mb-4">
                Contributions are welcome! Please feel free to submit a Pull Request.
              </p>
              <h2 className="text-xl font-semibold mb-3 mt-6">License</h2>
              <p>MIT License - see LICENSE file for details</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-12 border-t py-8" style={{ borderColor: "#21262d" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-between gap-6 text-xs" style={{ color: "#8b949e" }}>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#58a6ff] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#58a6ff] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#58a6ff] transition-colors">Security</a>
              <a href="#" className="hover:text-[#58a6ff] transition-colors">Status</a>
              <a href="#" className="hover:text-[#58a6ff] transition-colors">Docs</a>
              <a href="#" className="hover:text-[#58a6ff] transition-colors">Contact GitHub</a>
            </div>
            <div>© 2024 GitHub, Inc.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
