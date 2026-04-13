"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { APP_URL } from "@/lib/config";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="QR Studio - Free QR Code Generator" width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="font-semibold text-base tracking-tight">
              QR<span className="text-primary">Studio</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#generator" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Generator</a>
            <a href="#features" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#analytics" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Analytics</a>
            <Link href="/faqs" className="text-xs text-muted-foreground hover:text-foreground transition-colors">FAQs</Link>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button onClick={toggleTheme} className="text-xs h-8 w-8 p-0 inline-flex items-center justify-center rounded-md hover:bg-muted transition-colors">
              {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href={`${APP_URL}/sign-in`}>
              <button className="text-xs h-8 px-3 rounded-md hover:bg-muted transition-colors">Sign In</button>
            </a>
            <a href={`${APP_URL}/signup`}>
              <button className="text-xs h-8 px-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">Get Started Free</button>
            </a>
          </div>

          <button className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-1">
              <a href="#generator" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 hover:bg-muted rounded-lg transition-colors text-xs">Generator</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 hover:bg-muted rounded-lg transition-colors text-xs">Features</a>
              <a href="#analytics" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 hover:bg-muted rounded-lg transition-colors text-xs">Analytics</a>
              <Link href="/faqs" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 hover:bg-muted rounded-lg transition-colors text-xs">FAQs</Link>
              <div className="flex gap-2 px-3 pt-3">
                <button onClick={toggleTheme} className="w-10 h-8 p-0 inline-flex items-center justify-center border border-border rounded-md hover:bg-muted">
                  {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
                <a href={`${APP_URL}/sign-in`} className="flex-1">
                  <button className="w-full text-xs h-8 border border-border rounded-md hover:bg-muted transition-colors">Sign In</button>
                </a>
                <a href={`${APP_URL}/signup`} className="flex-1">
                  <button className="w-full text-xs h-8 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">Get Started</button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
