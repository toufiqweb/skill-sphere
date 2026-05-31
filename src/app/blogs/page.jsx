"use client";

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
    <div className="relative min-h-screen bg-[#05041a] py-12 pt-28 lg:pt-36 px-4 transition-colors duration-300 overflow-hidden">
      
      {/* Background Graphic Curves & Neon Spot Highlights */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-7xl relative z-10">
        
        {/* =========================================================
            SECTION 1: Dynamic Page Header Context
            ========================================================= */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-bold tracking-wider uppercase text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
            <BookOpen className="w-3.5 h-3.5 text-[#8b7eff]" /> Platform Knowledge Base
          </div>

          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-6xl tracking-tight leading-tight">
            Insights, Tutorials &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5643ff] to-[#8b7eff]"> Structural Guides</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto">
            Stay synchronous with newly deployed technological parameters, learning methodologies, and advanced web development patterns.
          </p>
        </div>

        {/* =========================================================
            SECTION 2: Featured Showcase Blueprint (Hero Layout)
            ========================================================= */}
        {featuredPost && (
          <div className="bg-[#0b0826]/60 backdrop-blur-2xl rounded-[32px] border border-white/5 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.4)] grid lg:grid-cols-12 items-center gap-0 group">
            
            {/* Featured Image Frame */}
            <div className="lg:col-span-7 h-64 sm:h-96 w-full relative overflow-hidden bg-[#06041a]/60">
              <div className="absolute inset-0 bg-gradient-to-t from-[#05041a] via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
            </div>

            {/* Featured Card Content */}
            <div className="lg:col-span-5 p-8 sm:p-10 space-y-5">
              <span className="inline-block px-3 py-1 rounded-xl bg-purple-500/10 border border-purple-500/20 text-[#8b7eff] font-bold text-[11px] uppercase tracking-wider">
                {featuredPost.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight group-hover:text-[#8b7eff] transition-colors duration-200">
                <Link href={`/blog/${featuredPost.id}`}>
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-4 text-[11px] text-slate-500 pt-3 border-t border-white/5">
                <span className="flex items-center gap-1 font-bold text-slate-400">
                  <User className="w-3.5 h-3.5 text-indigo-400" /> {featuredPost.author}
                </span>
                <span className="flex items-center gap-1 font-semibold">
                  <Calendar className="w-3.5 h-3.5" /> {featuredPost.date}
                </span>
                <span className="flex items-center gap-1 font-semibold">
                  <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                </span>
              </div>

              <div className="pt-2">
                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="bg-gradient-to-r from-[#5643ff] to-[#6d5dfc] text-white px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-md shadow-indigo-600/10 hover:brightness-110 hover:scale-[1.02] transition-all duration-200"
                >
                  <span>Read Featured Article</span> <ArrowRight className="w-3.5 h-3.5" />
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
                className="bg-[#0b0826]/60 backdrop-blur-2xl rounded-[28px] border border-white/5 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(109,93,252,0.15)] transition-all duration-300"
              >
                <div>
                  {/* Article Stream Image Box */}
                  <div className="h-48 w-full relative overflow-hidden bg-[#06041a]/60">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0826] via-transparent to-transparent opacity-40" />
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-black tracking-wider uppercase text-purple-400">
                      {post.category}
                    </span>
                    <h3 className="text-base sm:text-17px font-black text-white tracking-tight leading-snug group-hover:text-[#8b7eff] transition-colors duration-200">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-slate-400 text-xs font-medium line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pb-4 border-b border-white/5">
                    <span className="flex items-center gap-1 font-bold text-slate-400">
                      <User className="w-3.5 h-3.5 text-indigo-400" /> {post.author}
                    </span>
                    <span className="flex items-center gap-1 font-semibold">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#8b7eff] pt-4 tracking-wide uppercase group-hover:gap-2 transition-all"
                  >
                    <span>Explore Article</span> <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SUBGRID: Sidebar Widgets */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Widget 1: Search */}
            <div className="bg-[#0b0826]/60 backdrop-blur-2xl rounded-3xl p-6 border border-white/5 space-y-4">
              <h4 className="text-xs font-black text-white tracking-widest uppercase flex items-center gap-2">
                <Search className="w-4 h-4 text-[#8b7eff]" /> Search Articles
              </h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Query key concepts..."
                  className="w-full pl-4 pr-10 py-3.5 rounded-xl bg-[#06041a]/60 border border-white/5 text-xs text-white placeholder:text-slate-600 focus:border-indigo-500 focus:bg-[#06041a] outline-none transition-all duration-200"
                />
                <Search className="w-4 h-4 text-slate-600 absolute right-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Widget 2: Categories */}
            <div className="bg-[#0b0826]/60 backdrop-blur-2xl rounded-3xl p-6 border border-white/5 space-y-4">
              <h4 className="text-xs font-black text-white tracking-widest uppercase flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-indigo-400" /> Taxonomy Categories
              </h4>
              <div className="space-y-2">
                {MOCK_CATEGORIES.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-[#06041a]/30 hover:bg-white/5 transition-all duration-200 cursor-pointer group active:scale-[0.99]"
                  >
                    <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                      {category.name}
                    </span>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-[#05041a] border border-white/5 text-slate-500">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 3: Newsletter */}
            <div className="bg-[#0b0826]/60 backdrop-blur-2xl rounded-3xl p-6 border border-white/5 bg-gradient-to-b from-[#0b0826]/60 to-purple-600/5 relative overflow-hidden space-y-4">
              <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 text-[#8b7eff] flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-black text-white tracking-tight">
                  Join the Engineering Dispatch
                </h4>
                <p className="text-slate-400 text-xs font-medium leading-relaxed">
                  Get compiled core architecture updates delivered directly to your profile workspace inbox.
                </p>
              </div>
              <div className="space-y-2 pt-1">
                <input
                  type="email"
                  placeholder="secure@email.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#06041a]/60 border border-white/5 text-xs text-white placeholder:text-slate-600 focus:border-purple-500 focus:bg-[#06041a] outline-none transition-all duration-200"
                  required
                />
                <button className="w-full bg-gradient-to-r from-[#5643ff] to-[#6d5dfc] text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-indigo-600/10 hover:brightness-110 cursor-pointer active:scale-[0.99]">
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