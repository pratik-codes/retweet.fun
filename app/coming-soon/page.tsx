"use client"

import {
  Wallet,
  ArrowLeft,
  Clock,
  Bell,
  Star,
  Zap,
  Users,
  Target,
} from "lucide-react"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"

// Utility function to get icon URL with brand color
const BRAND_ICON_COLOR = "000000"
const getIconUrl = (size: number = 100) => {
  return "/retweet.fun.png"
}

// Custom hook for intersection observer animations
function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return [ref, isVisible] as const
}

export default function ComingSoon() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [heroRef, heroVisible] = useIntersectionObserver()

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image 
            src={getIconUrl(100)} 
            alt="retweet.fun logo" 
            width={32} 
            height={32}
            className="h-8 w-8"
          />
          <span className="text-2xl font-display font-bold text-white">
            retweet.fun
          </span>
        </div>
        <Link 
          href="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </nav>

      {/* Coming Soon Hero Section */}
      <section ref={heroRef} className="container mx-auto px-6 py-32 relative">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Floating Icons */}
          <div className="absolute -top-16 left-8 w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center animate-bounce">
            <Clock className="h-8 w-8 text-brand-primary" />
          </div>
          <div className="absolute -top-20 right-8 w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center animate-pulse">
            <Star className="h-6 w-6 text-brand-primary" />
          </div>
          <div className="absolute top-0 right-16 w-14 h-14 bg-brand-primary/20 rounded-full flex items-center justify-center animate-bounce delay-1000">
            <Target className="h-7 w-7 text-brand-primary" />
          </div>
          <div className="absolute top-16 left-16 w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center animate-pulse delay-500">
            <Users className="h-5 w-5 text-brand-primary" />
          </div>
          <div className="absolute -top-8 right-32 w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center animate-bounce delay-700">
            <Zap className="h-6 w-6 text-brand-primary" />
          </div>

          <h1
            className={`font-display tracking-tight font-black text-6xl md:text-8xl leading-tight mb-8 transition-all duration-1200 ease-out delay-200 text-white ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <span className="text-brand-primary">Coming</span> Soon
          </h1>

          <p
            className={`text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-400 text-gray-300 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            We're building something revolutionary. Get VIP access to your favorite influencers through our 
            token-based platform. Be the first to know when we launch!
          </p>

          {/* Email Subscription */}
          <div
            className={`max-w-md mx-auto mb-16 transition-all duration-1000 ease-out delay-600 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {!isSubscribed ? (
              <form onSubmit={handleEmailSubmit} className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-brand-primary transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-brand-primary text-primary-foreground font-bold px-8 py-4 rounded-full hover:bg-brand-primary/80 transition-colors duration-300 shadow-[0_4px_0_theme(colors.brand.secondary)] cursor-pointer"
                >
                  <Bell className="w-5 h-5" />
                  Notify Me
                </button>
              </form>
            ) : (
              <div className="bg-brand-primary/20 border border-brand-primary/30 rounded-full px-8 py-4 text-brand-primary font-semibold">
                ✨ Thanks! We'll notify you when we launch.
              </div>
            )}
          </div>

          {/* Launch Features Preview */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-1000 ease-out delay-800 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Buy Creator Tokens</h3>
              <p className="text-gray-400">Purchase tokens from your favorite Twitter influencers using SOL</p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Request Actions</h3>
              <p className="text-gray-400">Get retweets, likes, and custom content from top creators</p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Earn Rewards</h3>
              <p className="text-gray-400">Hold tokens and earn passive income from creator activity</p>
            </div>
          </div>

          {/* Launch Stats */}
          <div
            className={`mt-20 transition-all duration-1000 ease-out delay-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-2">500+</div>
                <div className="text-sm text-gray-400">Influencers Ready</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-2">Q1 2025</div>
                <div className="text-sm text-gray-400">Expected Launch</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-2">1000+</div>
                <div className="text-sm text-gray-400">Early Signups</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-2">24/7</div>
                <div className="text-sm text-gray-400">Platform Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-16 border-t border-gray-800">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Image 
              src={getIconUrl(100)} 
              alt="retweet.fun logo" 
              width={32} 
              height={32}
              className="h-8 w-8"
            />
            <span className="text-2xl font-display font-bold text-white">
              retweet.fun
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            The future of influencer engagement is coming soon.
          </p>
          <p className="text-gray-500 text-sm">
            &copy; 2025 retweet.fun. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
} 