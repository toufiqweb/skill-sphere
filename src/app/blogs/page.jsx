import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  BookOpen, 
  Clock, 
  User, 
  ArrowRight, 
  Search, 
  TrendingUp, 
  Calendar,
  ChevronRight,
  Mail
} from "lucide-react";

// Mock dataset structured around a modern web development & learning platform
const MOCK_CATEGORIES = [
  { name: "All Engineering", count: 24 },
  { name: "Next.js & React", count: 12 },
  { name: "Tailwind & UI Architecture", count: 8 },
  { name: "Database Engineering", count: 4 },
];

const MOCK_POSTS = [
  {
    id: "1",
    title: "Mastering Server Component Architecture in Next.js 15",
    excerpt: "Dive deep into modern stream parsing, state hydration parameters, and dynamic routing optimizations without sacrificing client response cycles.",
    category: "Next.js & React",
    author: "Alex Rivers",
    date: "May 2026",
    readTime: "6 min read",
    image: "https://i.pinimg.com/1200x/18/a3/3d/18a33d89164fb9f67360537922cf43c0.jpg",
  },
  {
    id: "2",
    title: "The Ultimate Guide to Advanced Cryptographic Tokens & Auth Flow",
    excerpt: "An in-depth structural review of decentralized access management, multi-factor credential verification workflows, and secure token storage.",
    category: "Database Engineering",
    author: "Sarah Chen",
    date: "May 2026",
    readTime: "8 min read",
    image: "https://i.pinimg.com/736x/d5/b2/75/d5b2759e6d562a4ea5f5dde382b6a130.jpg",
  },
  {
    id: "3",
    title: "Building Fluid Glassmorphism Frameworks with Custom Variable APIs",
    excerpt: "Unlock structural responsive design strategies using unified variable systems to balance theme synchronization between dark and light modes.",
    category: "Tailwind & UI Architecture",
    author: "Marcus Vance",
    date: "Apr 2026",
    readTime: "5 min read",
    image: "https://i.pinimg.com/736x/76/4e/79/764e79916817cf84a8bca7fdc2f7dd48.jpg",
  },
];

const BlogPage = () => {
  const featuredPost = MOCK_POSTS[0];
  const regularPosts = MOCK_POSTS.slice(1);

  return (
    <div className="hero-bg min-h-screen py-12 pt-28 lg:pt-36 px-4 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* =========================================================
            SECTION 1: Dynamic Page Header Context
            ========================================================= */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--glass-border)] bg-[var(--card-bg)]/30 text-xs font-bold tracking-widest uppercase text-[var(--brand-purple)]">
            <BookOpen className="w-3.5 h-3.5" /> Platform Knowledge Base
          </div>

          <h2 className="text-3xl font-bold text-primary sm:text-4xl lg:text-6xl tracking-tight">
            Insights, Tutorials &
            <span className="text-main-gradient"> Structural Guides</span>
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            Stay synchronous with newly deployed technological parameters, learning methodologies, and advanced web development patterns.
          </p>
        </div>

        {/* =========================================================
            SECTION 2: Featured Showcase Blueprint (Hero Layout)
            ========================================================= */}
        {featuredPost && (
          <div className="glass-card rounded-3xl border border-[var(--glass-border)] overflow-hidden shadow-xl grid lg:grid-cols-12 items-center gap-0 group">
            
            {/* Featured Image Frame */}
            <div className="lg:col-span-7 h-64 sm:h-96 w-full relative overflow-hidden bg-[var(--card-bg)]/40">
              <div className="absolute inset-0 bg-main-gradient opacity-10 mix-blend-overlay z-10 pointer-events-none" />
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Featured Card Content */}
            <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
              <span className="inline-block px-3 py-1 rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)] font-bold text-xs uppercase tracking-wide">
                {featuredPost.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-primary tracking-tight leading-tight group-hover:text-[var(--brand-purple)] transition-colors">
                <Link href={`/blog/${featuredPost.id}`}>
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="text-secondary text-sm leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs text-muted pt-2 border-t border-[var(--glass-border)]">
                <span className="flex items-center gap-1 font-semibold">
                  <User className="w-3.5 h-3.5" /> {featuredPost.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                </span>
              </div>

              <div className="pt-4">
                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="bg-main-gradient text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-md hover:translate-y-[-1px] transition-all"
                >
                  Read Featured Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            SECTION 3: Multi-Column Main Workspace Matrix Split
            ========================================================= */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SUBGRID: Main Article Stream Feed */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {regularPosts.map((post) => (
              <div
                key={post.id}
                className="glass-card rounded-3xl border border-[var(--glass-border)] overflow-hidden shadow-md flex flex-col justify-between group hover:shadow-lg transition-all"
              >
                <div>
                  {/* Article Stream Image Box */}
                  <div className="h-48 w-full relative overflow-hidden bg-[var(--card-bg)]/40">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-extrabold tracking-wider uppercase text-[var(--brand-indigo)]">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-primary tracking-tight leading-snug group-hover:text-[var(--brand-purple)] transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-secondary text-xs sm:text-sm line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <div className="flex items-center justify-between text-[11px] text-muted pb-4 border-b border-[var(--glass-border)]">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--brand-purple)] pt-4 tracking-wide uppercase group-hover:gap-2 transition-all"
                  >
                    Explore Article <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SUBGRID: Sidebar Widgets */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Widget 1: Search */}
            <div className="glass-card rounded-3xl p-6 border border-[var(--glass-border)] space-y-3">
              <h4 className="text-sm font-black text-primary tracking-wider uppercase flex items-center gap-2">
                <Search className="w-4 h-4 text-[var(--brand-purple)]" /> Search Articles
              </h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Query key concepts..."
                  className="w-full pl-4 pr-10 py-3 rounded-xl bg-[var(--card-bg)] border border-[var(--glass-border)] text-primary placeholder:text-muted focus:border-[var(--brand-purple)] focus:ring-2 focus:ring-[var(--brand-purple)]/10 outline-none transition-all text-xs"
                />
                <Search className="w-4 h-4 text-muted absolute right-3.5 top-3.5" />
              </div>
            </div>

            {/* Widget 2: Categories */}
            <div className="glass-card rounded-3xl p-6 border border-[var(--glass-border)] space-y-4">
              <h4 className="text-sm font-black text-primary tracking-wider uppercase flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[var(--brand-indigo)]" /> Taxonomy Categories
              </h4>
              <div className="space-y-2">
                {MOCK_CATEGORIES.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-xl border border-[var(--glass-border)] bg-[var(--card-bg)]/40 hover:bg-[var(--glass-border)] transition-colors cursor-pointer group"
                  >
                    <span className="text-xs font-bold text-secondary group-hover:text-primary transition-colors">
                      {category.name}
                    </span>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-[var(--card-bg)] border border-[var(--glass-border)] text-muted">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 3: Newsletter */}
            <div className="glass-card rounded-3xl p-6 border border-[var(--glass-border)] bg-gradient-to-b from-[var(--card-bg)]/40 to-[var(--brand-purple)]/5 relative overflow-hidden space-y-4">
              <div className="w-8 h-8 rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)] flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-black text-primary tracking-tight">
                  Join the Engineering Dispatch
                </h4>
                <p className="text-muted text-xs leading-relaxed">
                  Get compiled core architecture updates delivered directly to your profile workspace inbox.
                </p>
              </div>
              <div className="space-y-2 pt-1">
                <input
                  type="email"
                  placeholder="secure@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] border border-[var(--glass-border)] text-primary placeholder:text-muted focus:border-[var(--brand-purple)] focus:ring-2 focus:ring-[var(--brand-purple)]/10 outline-none transition-all text-xs"
                  required
                />
                <button className="w-full bg-main-gradient text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer">
                  Subscribe Setup
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogPage;