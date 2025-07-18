"use client"

import {
  Zap,
  Shield,
  TrendingUp,
  Users,
  DollarSign,
  Star,
  ArrowRight,
  CheckCircle,
  Target,
  Wallet,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"

// Utility function to get icon URL with brand color
// This color value should match theme.colors.brand.icon in tailwind.config.ts
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

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Animation refs for each section
  const [heroRef, heroVisible] = useIntersectionObserver()
  const [carouselRef, carouselVisible] = useIntersectionObserver()
  const [howItWorksRef, howItWorksVisible] = useIntersectionObserver()
  const [benefitsRef, benefitsVisible] = useIntersectionObserver()
  const [exampleRef, exampleVisible] = useIntersectionObserver()
  const [ctaRef, ctaVisible] = useIntersectionObserver()
  const [footerRef, footerVisible] = useIntersectionObserver()

  const creators = [
    {
      name: "CryptoExpert",
      description: "Crypto expert & blockchain evangelist. 2.5M followers",
      rating: "4.8",
      price: "$12.50",
      change: "+24%",
      href: "https://time.fun/_next/image?url=https%3A%2F%2Fd1jed1sess45wk.cloudfront.net%2Fprofile-pictures%2Ftethegamer.png&w=256&q=75",
    },
    {
      name: "TechGuru",
      description: "Tech reviewer & startup advisor. 1.8M followers",
      rating: "4.6",
      price: "$8.75",
      change: "+18%",
      href: "https://time.fun/_next/image?url=https%3A%2F%2Fd1jed1sess45wk.cloudfront.net%2Fprofile-pictures%2Fblknoiz06.png&w=256&q=75",
    },
    {
      name: "DeFiInfluencer",
      description: "DeFi analyst & yield farming specialist. 3.2M followers",
      rating: "4.9",
      price: "$15.20",
      change: "+31%",
      href: "https://time.fun/_next/image?url=https%3A%2F%2Fd1jed1sess45wk.cloudfront.net%2Fprofile-pictures%2Fsoljakey.png&w=256&q=75",
    },
    // {
    //   name: "AIInfluencer",
    //   description: "AI expert & machine learning specialist. 4.1M followers",
    //   rating: "4.7",
    //   price: "$22.40",
    //   change: "+45%",
    //   href: "https://time.fun/_next/image?url=https%3A%2F%2Fd1jed1sess45wk.cloudfront.net%2Fprofile-pictures%2F3lau.png&w=256&q=75",
    // },
    {
      name: "StartupTech",
      description: "Startup founder & tech entrepreneur. 2.8M followers",
      rating: "4.4",
      price: "$18.30",
      change: "+28%",
      href: "https://time.fun/_next/image?url=https%3A%2F%2Fd1jed1sess45wk.cloudfront.net%2Fprofile-pictures%2Frajgokal.png&w=256&q=75",
    },
    {
      name: "DeFiInfluencer",
      description: "DeFi analyst & yield farming specialist. 3.2M followers",
      rating: "4.9",
      price: "$15.20",
      change: "+31%",
      href: "https://time.fun/_next/image?url=https%3A%2F%2Fd1jed1sess45wk.cloudfront.net%2Fprofile-pictures%2Fsoljakey.png&w=256&q=75",
    },
    {
      name: "AIInfluencer",
      description: "AI expert & machine learning specialist. 4.1M followers",
      rating: "4.7",
      price: "$22.40",
      change: "+45%",
      href: "https://time.fun/_next/image?url=https%3A%2F%2Fd1jed1sess45wk.cloudfront.net%2Fprofile-pictures%2F3lau.png&w=256&q=75",
    },
    {
      name: "StartupTech",
      description: "Startup founder & tech entrepreneur. 2.8M followers",
      rating: "4.4",
      price: "$18.30",
      change: "+28%",
      href: "https://time.fun/_next/image?url=https%3A%2F%2Fd1jed1sess45wk.cloudfront.net%2Fprofile-pictures%2Frajgokal.png&w=256&q=75",
    },
  ]

  // Auto-rotate carousel - continuous infinite scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1)
    }, 3000) // Much slower - 3 seconds per movement

    return () => clearInterval(interval)
  }, [])

  // Reset carousel position when it gets too far (invisible reset)
  useEffect(() => {
    if (currentSlide >= creators.length) {
      // Reset without transition after a brief delay
      const timer = setTimeout(() => {
        setCurrentSlide(0)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [currentSlide, creators.length])

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
            className="h-8 w-8 glow-medium"
          />
          <span className="text-2xl font-display font-bold text-white">
            retweet.fun
          </span>
        </div>
        <div className="hidden md:flex space-x-2 items-center">
          <Link
            href="#how-it-works"
            className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out group text-white hover:text-black"
          >
            <span className="relative z-10">How It Works</span>
            <div className="absolute inset-0 bg-brand-primary rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out glow-button"></div>
          </Link>
          <Link
            href="#benefits"
            className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out group text-white hover:text-black"
          >
            <span className="relative z-10">Benefits</span>
            <div className="absolute inset-0 bg-brand-primary rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out glow-button"></div>
          </Link>
          <Link
            href="#token-economics"
            className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out group text-white hover:text-black"
          >
            <span className="relative z-10">Tokens</span>
            <div className="absolute inset-0 bg-brand-primary rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out glow-button"></div>
          </Link>
        </div>
        <Link href="/coming-soon">
          <button className="relative flex items-center justify-center gap-3 bg-brand-primary text-primary-foreground font-bold text-sm py-3 px-6 rounded-full hover:bg-brand-primary/80 transition-all duration-300 outline-none ring-0 border-0 focus:outline-none shadow-[0_4px_0_theme(colors.brand.secondary)] hover:shadow-[0_6px_0_theme(colors.brand.secondary)] hover:transform hover:-translate-y-0.5 cursor-pointer group glow-button">
            <Wallet className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            <span>Launch App</span>
          </button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="container mx-auto px-6 py-16 relative">
        <div
          className={`w-3/4 mx-auto text-center transition-all duration-1000 ease-out ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Floating Icons */}
          {/* <div className="absolute -top-16 left-8 w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center animate-bounce">
            <Wallet className="h-8 w-8 text-brand-primary" />
          </div> */}
          {/* <div className="absolute -top-20 right-8 w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center animate-pulse">
            <Star className="h-6 w-6 text-brand-primary" />
          </div> */}
          {/* Top Right Icon */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center animate-bounce delay-1000">
            <Target className="h-8 w-8 text-brand-primary" />
          </div>
          {/* Top Left Icon */}
          <div className="absolute top-10 w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center animate-bounce delay-500">
            <Users className="h-8 w-8 text-brand-primary" />
          </div>
          {/* Bottom Right Icon */}
          <div className="absolute top-56 right-40 w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center animate-bounce delay-1200">
            <TrendingUp className="h-6 w-6 text-brand-primary" />
          </div>
          {/* Bottom Left Icon */}
          <div className="absolute top-72 left-40 w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center animate-bounce delay-300">
            <Zap className="h-8 w-8 text-brand-primary" />
          </div>

          <h1
            className={`font-display tracking-tight font-black text-5xl md:text-7xl leading-tight mb-6 transition-all duration-1200 ease-out delay-200 text-white ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            GET VIP ACCESS TO YOUR FAVORITE INFLUENCERS.
          </h1>
          <p
            className={`text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto transition-all duration-1000 ease-out delay-400 text-gray-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Buy tokens from Twitter influencers and request retweets, likes, or custom tweets. It's like having a VIP
            pass to get direct attention from the creators you admire.
          </p>
          <div
            className={`flex justify-center max-w-md mx-auto transition-all duration-1000 ease-out delay-600 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <Link href="/coming-soon" className="w-full">
              <button
                className="flex items-center justify-center gap-3 bg-brand-primary text-primary-foreground font-bold text-lg py-3 rounded-full hover:bg-brand-primary/80 transition-colors duration-300 outline-none ring-0 border-0 focus:outline-none shadow-[0_6px_0_theme(colors.brand.secondary)] cursor-pointer px-12 mx-auto"
                style={{ height: "60px", width: "fit-content" }}
              >
                <Wallet className="w-5 h-5" />
                Buy Tokens
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Auto-rotating Carousel of Creator Cards - Full Width */}
      <section ref={carouselRef} className="w-full py-12 overflow-hidden">
        <div
          className={`relative transition-all duration-1000 ease-out ${carouselVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div
            className="flex gap-6 animate-scroll"
            style={{
              width: `${creators.length * 2 * (280 + 24)}px`, // Double width for seamless loop with larger cards
            }}
          >
            {/* Render creators twice for seamless loop */}
            {[...creators, ...creators].map((creator, index) => (
              <div key={index} data-creator-card="true" className="shrink-0 basis-[280px]">
                {/* Keep the existing card content exactly the same but with larger sizing */}
                <Link href="/coming-soon" className="group block">
                  <div className="border border-transparent p-2 rounded-[40px] border-2 group-hover:border-brand-primary transition ease-out duration-300">
                    <div className="relative pb-4">
                      <div className="relative size-[260px] overflow-hidden rounded-[32px]">
                        <div className="overflow-hidden rounded-[32px]">
                          <Image
                            alt={creator.name}
                            loading="lazy"
                            width="260"
                            height="260"
                            decoding="async"
                            className="size-full group-hover:scale-[107%] transition ease-out duration-300"
                            src={creator.href}
                          />
                        </div>
                        <div className="absolute inset-0 opacity-0 group-hover:bg-black/20 group-hover:opacity-100 transition ease-out duration-300"></div>
                      </div>
                      <div className="relative mt-2 space-y-3 p-4 group-hover:-translate-y-[48px] transition ease-out duration-300">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex gap-1">
                            <p
                              className={`font-display text-xl font-medium leading-6 text-white`}
                            >
                              {creator.name}
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                              className="text-brand-primary"
                            >
                              <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14-1.36,3.27-1.44,8.69-1.52,13.94-.15,9.76-.31,20.82-8,28.51s-18.75,7.85-28.51,8c-5.25.08-10.67.16-13.94,1.52-3.56,1.47-7.63,5.37-11.57,9.14C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                            </svg>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 pb-0.5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                                className="text-brand-primary"
                              >
                                <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                              </svg>
                            </div>
                            <p className={`text-lg leading-5 text-white`}>
                              {creator.rating}
                            </p>
                          </div>
                        </div>
                        <p
                          className={`leading-6 line-clamp-3 h-[72px] break-all text-gray-400`}
                        >
                          {creator.description}
                        </p>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <p className={`text-xl leading-6 text-white`}>
                              {creator.price}
                            </p>
                            <p
                              className={`leading-5 whitespace-nowrap text-gray-400`}
                            >
                              / token
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <p className="leading-5 text-brand-primary text-lg font-medium">{creator.change}</p>
                          </div>
                        </div>
                      </div>
                      <button
                        className="flex items-center justify-center gap-3 absolute inset-x-0 bottom-0 w-full bg-brand-primary text-primary-foreground font-bold text-lg py-4 rounded-[36px] opacity-0 group-hover:opacity-100 group-hover:animate-in group-hover:fade-in-0 transition ease-out duration-300 outline-none ring-0 border-0 focus:outline-none shadow-[0_8px_0_theme(colors.brand.secondary)] cursor-pointer mb-2"
                        style={{ height: "64px" }}
                      >
                        <Wallet className="w-6 h-6" />
                        Buy Tokens
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal & Stunning How It Works */}
      <section ref={howItWorksRef} id="how-it-works" className="relative py-32 overflow-hidden">
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div
            className={`text-center mb-20 transition-all duration-1000 ease-out ${
              howItWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2
              className={`font-display text-5xl md:text-6xl font-black mb-6 transition-all duration-1000 ease-out delay-300 text-white ${howItWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              How retweet.fun Works
            </h2>
          </div>

          {/* Three Column Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              
              {/* Step 1: Buy Creator Tokens */}
              <div
                className={`text-center transition-all duration-1000 ease-out delay-400 flex flex-col h-full ${
                  howItWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                <h3
                  className={`font-display text-2xl font-bold mb-6 text-white`}
                >
                  Buy Creator Tokens
                </h3>
                <p
                  className={`text-base leading-relaxed mb-8 text-gray-300 flex-grow`}
                >
                  Purchase tokens from your favorite Twitter influencers using SOL. Token prices adjust dynamically based on demand.
                </p>

                {/* Visual Mockup for Step 1 */}
                <div
                  className={`relative rounded-2xl p-6 border transition-all duration-500 hover:scale-105 border-gray-800 flex-grow flex flex-col justify-between min-h-[400px]`}
                >
                  <div className="space-y-4 flex-grow flex flex-col justify-center">
                    {/* Creator Selection */}
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-brand-primary/10 border border-brand-primary/20">
                      <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                        <Wallet className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className={`text-sm font-medium text-white`}>
                          @TechInfluencer
                        </div>
                        <div className={`text-xs text-gray-400`}>
                          2.5M followers
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-brand-primary">$12.50</div>
                        <div className={`text-xs text-gray-400`}>per token</div>
                      </div>
                    </div>

                    {/* Purchase Interface */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-brand-primary/5">
                      <span className={`text-sm text-gray-300`}>Buy 10 tokens</span>
                      <span className="text-lg font-semibold text-brand-primary">$125.00</span>
                    </div>

                    <Link href="/coming-soon">
                      <button className="w-full bg-brand-primary text-primary-foreground font-medium py-2 px-4 rounded-lg text-sm hover:bg-brand-primary/80 transition-colors">
                        Purchase
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Step 2: Request Actions */}
              <div
                className={`text-center transition-all duration-1000 ease-out delay-600 flex flex-col h-full ${
                  howItWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                <h3
                  className={`font-display text-2xl font-bold mb-6 text-white`}
                >
                  Request Actions
                </h3>
                <p
                  className={`text-base leading-relaxed mb-8 text-gray-300 flex-grow`}
                >
                  Spend tokens to request retweets, likes, custom tweets, or shoutouts. Each action has a different cost.
                </p>

                {/* Visual Mockup for Step 2 */}
                <div
                  className={`relative rounded-2xl p-6 border transition-all duration-500 hover:scale-105 border-gray-800 flex-grow flex flex-col justify-between min-h-[400px]`}
                >
                  <div className="space-y-4 flex-grow flex flex-col justify-center">
                    {/* Action Options */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-brand-primary/10 border border-brand-primary/20">
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-brand-primary" />
                          <span className={`text-sm font-medium text-white`}>Retweet</span>
                        </div>
                        <span className="text-sm font-bold text-brand-primary">3 tokens</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 rounded-lg bg-brand-primary/5">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-brand-primary" />
                          <span className={`text-sm font-medium text-white`}>Like</span>
                        </div>
                        <span className="text-sm font-bold text-brand-primary">1 token</span>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-lg bg-brand-primary/5">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-brand-primary" />
                          <span className={`text-sm font-medium text-white`}>Shoutout</span>
                        </div>
                        <span className="text-sm font-bold text-brand-primary">5 tokens</span>
                      </div>
                    </div>

                    <Link href="/coming-soon">
                      <button className="w-full bg-brand-primary text-primary-foreground font-medium py-2 px-4 rounded-lg text-sm hover:bg-brand-primary/80 transition-colors">
                        Request Action
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Step 3: Earn & Track */}
              <div
                className={`text-center transition-all duration-1000 ease-out delay-800 flex flex-col h-full ${
                  howItWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                <h3
                  className={`font-display text-2xl font-bold mb-6 text-white`}
                >
                  Earn & Track
                </h3>
                <p
                  className={`text-base leading-relaxed mb-8 text-gray-300 flex-grow`}
                >
                  Hold tokens to earn passive income and track your portfolio performance in real-time.
                </p>

                {/* Visual Mockup for Step 3 */}
                <div
                  className={`relative rounded-2xl p-6 border transition-all duration-500 hover:scale-105 border-gray-800 flex-grow flex flex-col justify-between min-h-[400px]`}
                >
                  <div className="space-y-4 flex-grow flex flex-col justify-center">
                    {/* Stats Header */}
                    <div className="text-left">
                      <div className={`text-sm font-medium mb-2 text-gray-400`}>
                        Portfolio Overview
                      </div>
                    </div>

                    {/* Chart Visualization */}
                    <div className="flex items-end justify-center gap-1 h-20 p-4 rounded-lg bg-brand-primary/5">
                      <div className="w-3 bg-brand-primary rounded-t" style={{height: '40%'}}></div>
                      <div className="w-3 bg-brand-secondary rounded-t" style={{height: '60%'}}></div>
                      <div className="w-3 bg-brand-primary rounded-t" style={{height: '80%'}}></div>
                      <div className="w-3 bg-brand-secondary rounded-t" style={{height: '100%'}}></div>
                      <div className="w-3 bg-brand-primary rounded-t" style={{height: '70%'}}></div>
                      <div className="w-3 bg-brand-secondary rounded-t" style={{height: '50%'}}></div>
                      <div className="w-3 bg-brand-primary rounded-t" style={{height: '90%'}}></div>
                    </div>

                    {/* Performance Stats */}
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-primary mb-1">+24%</div>
                      <div className={`text-sm text-gray-400`}>
                        Portfolio growth this month
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="p-2 rounded bg-brand-primary/10">
                        <div className="font-medium text-brand-primary">$164.50</div>
                        <div className={`text-xs text-gray-400`}>Total Value</div>
                      </div>
                      <div className="p-2 rounded bg-brand-primary/10">
                        <div className="font-medium text-brand-primary">$24.50</div>
                        <div className={`text-xs text-gray-400`}>Rewards</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Stats */}
          <div
            className={`mt-20 text-center transition-all duration-1000 ease-out delay-1000 ${
              howItWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "500+", label: "Influencers" },
                { number: "99.8%", label: "Success Rate" },
                { number: "$2M+", label: "Volume" },
                { number: "50K+", label: "Actions" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">{stat.number}</div>
                  <div className={`text-sm text-gray-400`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Benefits Section - Creative Redesign */}
      <section ref={benefitsRef} id="benefits" className="relative py-32 overflow-hidden">
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Stunning Header */}
          <div
            className={`text-center mb-20 transition-all duration-1000 ease-out ${
              benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2
              className={`font-display text-6xl md:text-7xl font-black mb-8 transition-all duration-1000 ease-out delay-300 text-white ${benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Why Choose{" "}
              <span className="text-brand-primary">
                retweet.fun
              </span>
              ?
            </h2>
            <p
              className={`text-2xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-500 text-gray-400 ${benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Experience the revolutionary platform that's changing how creators and fans connect
            </p>
          </div>

          {/* Interactive Comparison Table */}
          <div
            className={`mb-24 transition-all duration-1200 ease-out delay-700 ${
              benefitsVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            <div className="max-w-5xl mx-auto">
              <div
                className={`rounded-3xl p-1 backdrop-blur-sm border transition-all duration-500 bg-gray-900/60 border-gray-700`}
              >
                <div className="rounded-3xl p-8 bg-brand-primary/5">
                  {/* Table Header */}
                  <div className="grid grid-cols-3 gap-8 mb-8">
                    <div></div>
                    <div className="text-center">
                      <div className={`text-lg font-medium mb-2 text-gray-400`}>
                        Traditional Platforms
                      </div>
                      <div className="w-12 h-12 bg-gray-400 rounded-xl flex items-center justify-center mx-auto opacity-50">
                        <span className="text-white text-lg">😞</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-medium mb-2 text-brand-primary">retweet.fun</div>
                      <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mx-auto">
                        <span className="text-primary-foreground text-lg">🚀</span>
                      </div>
                    </div>
                  </div>

                  {/* Comparison Rows */}
                  <div className="space-y-6">
                    {[
                      {
                        feature: "Direct Creator Access",
                        traditional: "❌ No direct access",
                        ours: "✨ VIP token-based access",
                      },
                      {
                        feature: "Guaranteed Delivery",
                        traditional: "❌ No guarantees",
                        ours: "✨ 99.8% smart contract guarantee",
                      },
                      {
                        feature: "Earning Potential",
                        traditional: "❌ Zero returns",
                        ours: "✨ Up to 25% APY passive income",
                      },
                      {
                        feature: "Creator Monetization",
                        traditional: "❌ Limited ad revenue",
                        ours: "✨ Direct fan monetization",
                      },
                      {
                        feature: "Transparency",
                        traditional: "❌ Opaque algorithms",
                        ours: "✨ Blockchain transparency",
                      },
                    ].map((row, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-3 gap-8 items-center py-4 border-b border-gray-200/20"
                      >
                        <div className={`font-medium text-white`}>
                          {row.feature}
                        </div>
                        <div className={`text-center text-gray-400`}>
                          {row.traditional}
                        </div>
                        <div className="text-center text-brand-primary font-medium">{row.ours}</div>
                      </div>
                    ))}
                  </div>

                  {/* Winner Banner */}
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-3 bg-brand-primary/20 border border-brand-primary/30 px-6 py-3 rounded-full">
                      <Star className="h-5 w-5 text-brand-primary" />
                      <span className="text-brand-primary font-semibold">Clear Winner: retweet.fun</span>
                      <Star className="h-5 w-5 text-brand-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Immersive Feature Showcase */}
          <div className="max-w-7xl mx-auto">
             {/* Final CTA with Floating Elements */}
            <div
              className={`text-center relative transition-all duration-1200 ease-out delay-1400 ${
                benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Floating Icons */}
              <div className="absolute -top-8 left-1/4 w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center animate-bounce">
                <Users className="h-8 w-8 text-brand-primary" />
              </div>
              <div className="absolute -top-12 right-1/3 w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center animate-pulse">
                <TrendingUp className="h-6 w-6 text-brand-primary" />
              </div>
              <div className="absolute top-4 right-1/4 w-14 h-14 bg-brand-primary/20 rounded-full flex items-center justify-center animate-bounce delay-1000">
                <Zap className="h-7 w-7 text-brand-primary" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Example */}
      <section ref={exampleRef} className="container mx-auto px-6 py-20">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${exampleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2
            className={`font-display text-4xl font-bold mb-8 transition-all duration-1000 ease-out delay-200 text-white ${exampleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Quick Example
          </h2>
          <div
            className={`backdrop-blur-sm rounded-3xl p-8 border transition-all duration-1000 ease-out delay-400 bg-gray-900/60 border-gray-800 ${exampleVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
          >
            <p className={`text-lg leading-relaxed text-gray-300`}>
              💡 <strong>Sarah</strong> buys 10 tokens from <strong>@TechInfluencer</strong> for $25. She uses 3 tokens
              to request a retweet of her startup announcement. After @TechInfluencer retweets it to 2M followers, Sarah
              keeps her remaining 7 tokens, earning rewards when others buy from @TechInfluencer.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div
            className={`rounded-3xl p-12 border backdrop-blur-sm relative overflow-hidden transition-all duration-1200 ease-out bg-gray-900 border-gray-700`}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-brand-primary/10 rounded-3xl"></div>

            <div className="relative z-10 text-center">
              <h2
                className={`font-display text-5xl md:text-6xl font-black mb-6 transition-all duration-1000 ease-out delay-200 text-white ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <span className="text-brand-primary">
                  Ready to Get VIP Access
                </span>
                <br />
                <span className="text-white">to Your Favorite Influencers?</span>
              </h2>

              <p
                className={`text-xl mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-400 text-gray-300 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                Join thousands of users who are already getting direct access to top Twitter influencers. Buy your first
                tokens today and experience the power of VIP influencer access.
              </p>

              {/* Stats Row */}
              <div
                className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 transition-all duration-1200 ease-out delay-600 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">500+</div>
                  <div className={`text-sm text-gray-400`}>Twitter Influencers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">$2M+</div>
                  <div className={`text-sm text-gray-400`}>Total Volume</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">50K+</div>
                  <div className={`text-sm text-gray-400`}>Retweets & Actions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">99.8%</div>
                  <div className={`text-sm text-gray-400`}>Success Rate</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex justify-center items-center mb-8">
                <Link href="/coming-soon">
                  <button
                    className="flex items-center justify-center gap-3 bg-brand-primary text-primary-foreground font-bold text-xl py-4 px-12 rounded-full hover:bg-brand-primary/80 transition-colors duration-300 outline-none ring-0 border-0 focus:outline-none shadow-[0_8px_0_theme(colors.brand.secondary)] cursor-pointer"
                    style={{ height: "70px" }}
                  >
                    <Wallet className="w-6 h-6" />
                    <span>Get Started</span>
                    <ArrowRight className="h-6 w-6" />
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div
                className={`flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400`}
              >
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-brand-primary" />
                  <span>Blockchain Secured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-brand-primary" />
                  <span>Instant Transactions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-brand-primary" />
                  <span>Guaranteed Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        ref={footerRef}
        className={`container mx-auto px-6 py-16 border-t transition-all duration-1000 ease-out border-gray-800 ${footerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image 
                src={getIconUrl(100)} 
                alt="retweet.fun logo" 
                width={32} 
                height={32}
                className="h-8 w-8 glow-medium"
              />
              <span className="text-2xl font-display font-bold text-white">
                retweet.fun
              </span>
            </div>
            <p className="text-gray-400">
              Revolutionary platform where you can buy tokens from Twitter influencers to request retweets, likes, and
              custom content. Your VIP pass to influencer attention.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Platform</h4>
            <div className="space-y-2 text-gray-400">
              <Link
                href="#how-it-works"
                className="block transition-colors hover:text-white"
              >
                How It Works
              </Link>
              <Link
                href="#token-economics"
                className="block transition-colors hover:text-white"
              >
                Token Economics
              </Link>
              <Link
                href="#security"
                className="block transition-colors hover:text-white"
              >
                Security
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Community</h4>
            <div className="space-y-2 text-gray-400">
              <Link
                href="/coming-soon"
                className="block transition-colors hover:text-white"
              >
                Discord
              </Link>
              <Link
                href="/coming-soon"
                className="block transition-colors hover:text-white"
              >
                Twitter
              </Link>
              <Link
                href="/coming-soon"
                className="block transition-colors hover:text-white"
              >
                Telegram
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <div className="space-y-2 text-gray-400">
              <Link
                href="/coming-soon"
                className="block transition-colors hover:text-white"
              >
                Help Center
              </Link>
              <Link
                href="/coming-soon"
                className="block transition-colors hover:text-white"
              >
                Contact Us
              </Link>
              <Link
                href="/coming-soon"
                className="block transition-colors hover:text-white"
              >
                Bug Reports
              </Link>
            </div>
          </div>
        </div>
        <div
          className="mt-12 pt-8 border-t text-center border-gray-800 text-gray-400"
        >
          <p>&copy; 2025 retweet.fun. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
