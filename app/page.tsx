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
  Sun,
  Moon,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

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
  const [isDarkMode, setIsDarkMode] = useState(true)

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
    {
      name: "AIInfluencer",
      description: "AI expert & machine learning specialist. 4.1M followers",
      rating: "4.7",
      price: "$22.40",
      change: "+45%",
      href: "https://time.fun/_next/image?url=https%3A%2F%2Fd1jed1sess45wk.cloudfront.net%2Fprofile-pictures%2F3lau.png&w=256&q=75",
    },
    {
      name: "Web3Guru",
      description: "Web3 developer & blockchain educator. 1.9M followers",
      rating: "4.5",
      price: "$9.99",
      change: "+12%",
      href: "https://time.fun/_next/image?url=https%3A%2F%2Fd1jed1sess45wk.cloudfront.net%2Fprofile-pictures%2Fkashdhanda.png&w=256&q=75",
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

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark")
    }
  }, [])

  // Save theme to localStorage when changed
  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

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
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"
        }`}
    >
      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 backdrop-blur-lg container mx-auto px-6 py-4 flex justify-between items-center`}
      >
        <div className="flex items-center space-x-2">
          <Image 
            src="https://img.icons8.com/?size=100&id=Axgf1IBhLcYr&format=png&color=000000" 
            alt="retweet.fun logo" 
            width={32} 
            height={32}
            className="h-8 w-8"
          />
          <span className={`text-2xl font-display font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            retweet.fun
          </span>
        </div>
        <div className="hidden md:flex space-x-2 items-center">
          <a
            href="#how-it-works"
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out group ${
              isDarkMode ? "text-white hover:text-black" : "text-gray-700 hover:text-black"
            }`}
          >
            <span className="relative z-10">How It Works</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#C5DCFA] to-[#83B9FE] rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out"></div>
          </a>
          <a
            href="#benefits"
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out group ${
              isDarkMode ? "text-white hover:text-black" : "text-gray-700 hover:text-black"
            }`}
          >
            <span className="relative z-10">Benefits</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#C5DCFA] to-[#83B9FE] rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out"></div>
          </a>
          <a
            href="#tokens"
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out group ${
              isDarkMode ? "text-white hover:text-black" : "text-gray-700 hover:text-black"
            }`}
          >
            <span className="relative z-10">Tokens</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#C5DCFA] to-[#83B9FE] rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out"></div>
          </a>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`relative p-3 rounded-full transition-all duration-300 ease-in-out group ml-2 ${
              isDarkMode
                ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                : "bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 shadow-sm"
            }`}
            aria-label="Toggle theme"
          >
            <span className="relative z-10">
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#C5DCFA]/20 to-[#83B9FE]/20 rounded-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out"></div>
          </button>
        </div>
        <button className="relative flex items-center justify-center gap-3 bg-[#C5DCFA] text-black font-bold text-sm py-3 px-6 rounded-full hover:bg-[#C5DCFA]/80 transition-all duration-300 outline-none ring-0 border-0 focus:outline-none shadow-[0_4px_0_#83B9FE] hover:shadow-[0_6px_0_#83B9FE] hover:transform hover:-translate-y-0.5 cursor-pointer group">
          <Wallet className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
          <span>Launch App</span>
        </button>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="container mx-auto px-6 py-16 aurora-hero">
        <div
          className={`w-3/4 mx-auto text-center transition-all duration-1000 ease-out ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h1
            className={`font-display tracking-tight font-black text-5xl md:text-7xl leading-tight mb-6 transition-all duration-1200 ease-out delay-200 ${isDarkMode ? "text-white" : "text-gray-900"
              } ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            GET VIP ACCESS TO YOUR FAVORITE INFLUENCERS.
          </h1>
          <p
            className={`text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto transition-all duration-1000 ease-out delay-400 ${isDarkMode ? "text-gray-300" : "text-gray-600"
              } ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Buy tokens from Twitter influencers and request retweets, likes, or custom tweets. It's like having a VIP
            pass to get direct attention from the creators you admire.
          </p>
          <div
            className={`flex justify-center max-w-md mx-auto transition-all duration-1000 ease-out delay-600 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <button
              className="flex items-center justify-center gap-3 w-full bg-[#C5DCFA] text-black font-bold text-lg py-3 rounded-full hover:bg-[#C5DCFA]/80 transition-colors duration-300 outline-none ring-0 border-0 focus:outline-none shadow-[0_6px_0_#83B9FE] cursor-pointer"
              style={{ height: "60px" }}
            >
              <Wallet className="w-5 h-5" />
              Buy Tokens
            </button>
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
                <a className="group" href={creator.href}>
                  <div className="border border-transparent p-2 rounded-[40px] border-2 group-hover:border-[#C5DCFA] transition ease-out duration-300">
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
                              className={`font-display text-xl font-medium leading-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                            >
                              {creator.name}
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                              className="text-[#C5DCFA]"
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
                                className="text-[#C5DCFA]"
                              >
                                <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                              </svg>
                            </div>
                            <p className={`text-lg leading-5 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                              {creator.rating}
                            </p>
                          </div>
                        </div>
                        <p
                          className={`leading-6 line-clamp-3 h-[72px] break-all ${isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                        >
                          {creator.description}
                        </p>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <p className={`text-xl leading-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                              {creator.price}
                            </p>
                            <p
                              className={`leading-5 whitespace-nowrap ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                }`}
                            >
                              / token
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <p className="leading-5 text-[#C5DCFA] text-lg font-medium">{creator.change}</p>
                          </div>
                        </div>
                      </div>
                      <button
                        className="flex items-center justify-center gap-3 absolute inset-x-0 bottom-0 w-full bg-[#C5DCFA] text-black font-bold text-lg py-4 rounded-[36px] opacity-0 group-hover:opacity-100 group-hover:animate-in group-hover:fade-in-0 transition ease-out duration-300 outline-none ring-0 border-0 focus:outline-none shadow-[0_8px_0_#83B9FE] cursor-pointer mb-2"
                        style={{ height: "64px" }}
                      >
                        <Wallet className="w-6 h-6" />
                        Buy Tokens
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal & Stunning How It Works */}
      <section ref={howItWorksRef} id="how-it-works" className="relative py-32 overflow-hidden">
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C5DCFA]/3 via-transparent to-[#C5DCFA]/5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div
            className={`text-center mb-24 transition-all duration-1000 ease-out ${
              howItWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div
              className={`inline-block mb-6 transition-all duration-800 ease-out delay-200 ${
                howItWorksVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="w-16 h-1 bg-gradient-to-r from-[#C5DCFA] to-[#83B9FE] mx-auto rounded-full"></div>
            </div>
            <h2
              className={`font-display text-6xl md:text-7xl font-black mb-6 transition-all duration-1000 ease-out delay-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              } ${howItWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              How It Works
            </h2>
            <p
              className={`text-2xl max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-500 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } ${howItWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Four simple steps to VIP influencer access
            </p>
          </div>

          {/* Minimalist Timeline */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Central Timeline Line */}
              <div
                className={`absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2 transition-all duration-2000 ease-out delay-700 ${
                  howItWorksVisible ? "bg-gradient-to-b from-[#C5DCFA] via-[#C5DCFA] to-transparent opacity-100" : "opacity-0"
                }`}
              ></div>

              {/* Steps */}
              <div className="space-y-32">
                {/* Step 1 */}
                <div
                  className={`relative transition-all duration-1000 ease-out delay-800 ${
                    howItWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="lg:text-right lg:pr-16">
                      <div className="inline-flex items-center gap-2 bg-[#C5DCFA]/10 border border-[#C5DCFA]/20 text-[#C5DCFA] px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <div className="w-2 h-2 bg-[#C5DCFA] rounded-full animate-pulse"></div>
                        Step 01
                      </div>
                      <h3
                        className={`font-display text-4xl md:text-5xl font-bold mb-6 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Buy Creator Tokens
                      </h3>
                      <p
                        className={`text-xl leading-relaxed mb-8 ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Purchase tokens from your favorite Twitter influencers using SOL. Token prices adjust dynamically based on demand and creator popularity.
                      </p>
                      <div className="flex flex-wrap gap-3 lg:justify-end">
                        <span className="bg-[#C5DCFA]/20 text-[#C5DCFA] px-4 py-2 rounded-full text-sm font-medium">
                          Instant Purchase
                        </span>
                        <span className="bg-[#C5DCFA]/20 text-[#C5DCFA] px-4 py-2 rounded-full text-sm font-medium">
                          Dynamic Pricing
                        </span>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className="relative lg:pl-16">
                      <div className="relative">
                        {/* Floating Number */}
                        <div className="absolute -left-8 lg:-left-24 top-1/2 transform -translate-y-1/2 z-20">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#C5DCFA] to-[#83B9FE] rounded-full flex items-center justify-center shadow-2xl">
                            <span className="text-black text-xl font-bold">1</span>
                          </div>
                        </div>

                        {/* Card */}
                        <div
                          className={`relative rounded-3xl p-8 backdrop-blur-sm border transition-all duration-500 hover:scale-105 ${
                            isDarkMode
                              ? "bg-gray-900/60 border-gray-800 shadow-2xl"
                              : "bg-white/80 border-gray-200 shadow-xl"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-[#C5DCFA] to-[#83B9FE] rounded-xl flex items-center justify-center">
                                <Wallet className="h-6 w-6 text-black" />
                              </div>
                              <div>
                                <div className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                  @TechInfluencer
                                </div>
                                <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                  2.5M followers
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-[#C5DCFA]">$12.50</div>
                              <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                per token
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                              Buy 10 tokens
                            </span>
                            <span className="text-lg font-semibold text-[#C5DCFA]">$125.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div
                  className={`relative transition-all duration-1000 ease-out delay-1000 ${
                    howItWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual */}
                    <div className="relative lg:pr-16 lg:order-1">
                      <div className="relative">
                        {/* Floating Number */}
                        <div className="absolute -right-8 lg:-right-24 top-1/2 transform -translate-y-1/2 z-20">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#C5DCFA] to-[#83B9FE] rounded-full flex items-center justify-center shadow-2xl">
                            <span className="text-black text-xl font-bold">2</span>
                          </div>
                        </div>

                        {/* Card */}
                        <div
                          className={`relative rounded-3xl p-8 backdrop-blur-sm border transition-all duration-500 hover:scale-105 ${
                            isDarkMode
                              ? "bg-gray-900/60 border-gray-800 shadow-2xl"
                              : "bg-white/80 border-gray-200 shadow-xl"
                          }`}
                        >
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-[#C5DCFA] to-[#83B9FE] rounded-xl flex items-center justify-center">
                                <Target className="h-6 w-6 text-black" />
                              </div>
                              <div className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                Request Action
                              </div>
                            </div>
                            
                            <div className={`p-4 rounded-2xl ${isDarkMode ? "bg-gray-800/50" : "bg-gray-50"}`}>
                              <div className={`text-sm mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                Tweet to retweet:
                              </div>
                              <div className={`text-sm italic ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                                "Just launched my startup! 🚀 Building the future of AI..."
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <span className="text-[#C5DCFA] font-medium">3 tokens</span>
                              <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                for retweet
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:pl-16 lg:order-2">
                      <div className="inline-flex items-center gap-2 bg-[#C5DCFA]/10 border border-[#C5DCFA]/20 text-[#C5DCFA] px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <div className="w-2 h-2 bg-[#C5DCFA] rounded-full animate-pulse"></div>
                        Step 02
                      </div>
                      <h3
                        className={`font-display text-4xl md:text-5xl font-bold mb-6 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Request Actions
                      </h3>
                      <p
                        className={`text-xl leading-relaxed mb-8 ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Spend tokens to request retweets, likes, custom tweets, or shoutouts. Each action type has a different token cost.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-[#C5DCFA]/20 text-[#C5DCFA] px-4 py-2 rounded-full text-sm font-medium">
                          Retweets & Likes
                        </span>
                        <span className="bg-[#C5DCFA]/20 text-[#C5DCFA] px-4 py-2 rounded-full text-sm font-medium">
                          Custom Content
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div
                  className={`relative transition-all duration-1000 ease-out delay-1200 ${
                    howItWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="lg:text-right lg:pr-16">
                      <div className="inline-flex items-center gap-2 bg-[#C5DCFA]/10 border border-[#C5DCFA]/20 text-[#C5DCFA] px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <div className="w-2 h-2 bg-[#C5DCFA] rounded-full animate-pulse"></div>
                        Step 03
                      </div>
                      <h3
                        className={`font-display text-4xl md:text-5xl font-bold mb-6 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Automatic Delivery
                      </h3>
                      <p
                        className={`text-xl leading-relaxed mb-8 ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Smart contracts ensure guaranteed delivery. The influencer completes your request within 24 hours or you get a full refund.
                      </p>
                      <div className="flex flex-wrap gap-3 lg:justify-end">
                        <span className="bg-[#C5DCFA]/20 text-[#C5DCFA] px-4 py-2 rounded-full text-sm font-medium">
                          99.8% Success Rate
                        </span>
                        <span className="bg-[#C5DCFA]/20 text-[#C5DCFA] px-4 py-2 rounded-full text-sm font-medium">
                          24h Guarantee
                        </span>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className="relative lg:pl-16">
                      <div className="relative">
                        {/* Floating Number */}
                        <div className="absolute -left-8 lg:-left-24 top-1/2 transform -translate-y-1/2 z-20">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#C5DCFA] to-[#83B9FE] rounded-full flex items-center justify-center shadow-2xl">
                            <span className="text-black text-xl font-bold">3</span>
                          </div>
                        </div>

                        {/* Success Card */}
                        <div
                          className={`relative rounded-3xl p-8 backdrop-blur-sm border transition-all duration-500 hover:scale-105 ${
                            isDarkMode
                              ? "bg-gray-900/60 border-gray-800 shadow-2xl"
                              : "bg-white/80 border-gray-200 shadow-xl"
                          }`}
                        >
                          <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#C5DCFA] to-[#83B9FE] rounded-2xl flex items-center justify-center mx-auto">
                              <Shield className="h-8 w-8 text-black" />
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-[#C5DCFA] mb-2">Action Completed</div>
                              <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                Your tweet was retweeted to 2.5M followers
                              </div>
                            </div>
                            <div className="flex items-center justify-center gap-4 text-sm">
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-[#C5DCFA] rounded-full"></div>
                                <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Verified</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-[#C5DCFA] rounded-full"></div>
                                <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Completed in 2h</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div
                  className={`relative transition-all duration-1000 ease-out delay-1400 ${
                    howItWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual */}
                    <div className="relative lg:pr-16 lg:order-1">
                      <div className="relative">
                        {/* Floating Number */}
                        <div className="absolute -right-8 lg:-right-24 top-1/2 transform -translate-y-1/2 z-20">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#C5DCFA] to-[#83B9FE] rounded-full flex items-center justify-center shadow-2xl">
                            <span className="text-black text-xl font-bold">4</span>
                          </div>
                        </div>

                        {/* Rewards Card */}
                        <div
                          className={`relative rounded-3xl p-8 backdrop-blur-sm border transition-all duration-500 hover:scale-105 ${
                            isDarkMode
                              ? "bg-gray-900/60 border-gray-800 shadow-2xl"
                              : "bg-white/80 border-gray-200 shadow-xl"
                          }`}
                        >
                          <div className="space-y-6">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-[#C5DCFA] to-[#83B9FE] rounded-xl flex items-center justify-center">
                                <TrendingUp className="h-6 w-6 text-black" />
                              </div>
                              <div className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                Your Earnings
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                  Token appreciation
                                </span>
                                <span className="text-[#C5DCFA] font-medium">+12%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                  Platform rewards
                                </span>
                                <span className="text-[#C5DCFA] font-medium">$24.50</span>
                              </div>
                              <div className="pt-3 border-t border-gray-300/20">
                                <div className="flex justify-between items-center">
                                  <span className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                    Total Value
                                  </span>
                                  <span className="text-xl font-bold text-[#C5DCFA]">$164.50</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:pl-16 lg:order-2">
                      <div className="inline-flex items-center gap-2 bg-[#C5DCFA]/10 border border-[#C5DCFA]/20 text-[#C5DCFA] px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <div className="w-2 h-2 bg-[#C5DCFA] rounded-full animate-pulse"></div>
                        Step 04
                      </div>
                      <h3
                        className={`font-display text-4xl md:text-5xl font-bold mb-6 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Earn Passive Rewards
                      </h3>
                      <p
                        className={`text-xl leading-relaxed mb-8 ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Hold tokens to earn passive income from platform fees. Watch your tokens appreciate as the influencer grows their following.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-[#C5DCFA]/20 text-[#C5DCFA] px-4 py-2 rounded-full text-sm font-medium">
                          Up to 25% APY
                        </span>
                        <span className="bg-[#C5DCFA]/20 text-[#C5DCFA] px-4 py-2 rounded-full text-sm font-medium">
                          Daily Payouts
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Minimal Stats */}
          <div
            className={`mt-32 text-center transition-all duration-1000 ease-out delay-1600 ${
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
                  <div className="text-4xl font-bold text-[#C5DCFA] mb-2">{stat.number}</div>
                  <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Benefits Section - Creative Redesign */}
      <section ref={benefitsRef} id="benefits" className="relative py-32 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C5DCFA]/5 via-transparent to-[#C5DCFA]/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C5DCFA]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#C5DCFA]/5 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Stunning Header */}
          <div
            className={`text-center mb-20 transition-all duration-1000 ease-out ${
              benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* <div
              className={`inline-block mb-8 transition-all duration-800 ease-out delay-200 ${
                benefitsVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-20 h-1 bg-gradient-to-r from-transparent to-[#C5DCFA] rounded-full"></div>
                <div className="w-3 h-3 bg-[#C5DCFA] rounded-full animate-pulse"></div>
                <div className="w-20 h-1 bg-gradient-to-l from-transparent to-[#C5DCFA] rounded-full"></div>
              </div>
            </div> */}
            <h2
              className={`font-display text-6xl md:text-7xl font-black mb-8 transition-all duration-1000 ease-out delay-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              } ${benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#C5DCFA] via-[#83B9FE] to-[#C5DCFA] bg-clip-text text-transparent">
                retweet.fun
              </span>
              ?
            </h2>
            <p
              className={`text-2xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-500 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } ${benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
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
                className={`rounded-3xl p-1 backdrop-blur-sm border transition-all duration-500 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-gray-900/60 to-gray-800/60 border-gray-700"
                    : "bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200"
                }`}
              >
                <div className="rounded-3xl p-8 bg-gradient-to-br from-[#C5DCFA]/5 to-transparent">
                  {/* Table Header */}
                  <div className="grid grid-cols-3 gap-8 mb-8">
                    <div></div>
                    <div className="text-center">
                      <div className={`text-lg font-medium mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Traditional Platforms
                      </div>
                      <div className="w-12 h-12 bg-gray-400 rounded-xl flex items-center justify-center mx-auto opacity-50">
                        <span className="text-white text-lg">😞</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-medium mb-2 text-[#C5DCFA]">retweet.fun</div>
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C5DCFA] to-[#83B9FE] rounded-xl flex items-center justify-center mx-auto">
                        <span className="text-black text-lg">🚀</span>
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
                        <div className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                          {row.feature}
                        </div>
                        <div className={`text-center ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                          {row.traditional}
                        </div>
                        <div className="text-center text-[#C5DCFA] font-medium">{row.ours}</div>
                      </div>
                    ))}
                  </div>

                  {/* Winner Banner */}
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C5DCFA]/20 to-[#83B9FE]/20 border border-[#C5DCFA]/30 px-6 py-3 rounded-full">
                      <Star className="h-5 w-5 text-[#C5DCFA]" />
                      <span className="text-[#C5DCFA] font-semibold">Clear Winner: retweet.fun</span>
                      <Star className="h-5 w-5 text-[#C5DCFA]" />
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
              <div className="absolute -top-8 left-1/4 w-16 h-16 bg-[#C5DCFA]/20 rounded-full flex items-center justify-center animate-bounce">
                <Users className="h-8 w-8 text-[#C5DCFA]" />
              </div>
              <div className="absolute -top-12 right-1/3 w-12 h-12 bg-[#C5DCFA]/20 rounded-full flex items-center justify-center animate-pulse">
                <TrendingUp className="h-6 w-6 text-[#C5DCFA]" />
              </div>
              <div className="absolute top-4 right-1/4 w-14 h-14 bg-[#C5DCFA]/20 rounded-full flex items-center justify-center animate-bounce delay-1000">
                <Zap className="h-7 w-7 text-[#C5DCFA]" />
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
            className={`font-display text-4xl font-bold mb-8 transition-all duration-1000 ease-out delay-200 ${isDarkMode ? "text-white" : "text-gray-900"
              } ${exampleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Quick Example
          </h2>
          <div
            className={`backdrop-blur-sm rounded-3xl p-8 border transition-all duration-1000 ease-out delay-400 ${isDarkMode ? "bg-gray-900/60 border-gray-800" : "bg-white/60 border-gray-200"
              } ${exampleVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
          >
            <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
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
            className={`rounded-3xl p-12 border backdrop-blur-sm relative overflow-hidden transition-all duration-1200 ease-out ${isDarkMode
              ? "bg-gradient-to-br from-gray-900 via-[#C5DCFA]/5 to-[#C5DCFA]/10 border-gray-700"
              : "bg-gradient-to-br from-white via-[#C5DCFA]/5 to-[#C5DCFA]/10 border-gray-200"
              } ${ctaVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}`}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C5DCFA]/10 via-[#C5DCFA]/5 to-[#C5DCFA]/10 rounded-3xl"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(197,220,250,0.1),transparent_70%)]"></div>

            <div className="relative z-10 text-center">
              <h2
                className={`font-display text-5xl md:text-6xl font-black mb-6 transition-all duration-1000 ease-out delay-200 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <span className="bg-gradient-to-r from-[#C5DCFA] via-white to-[#C5DCFA] bg-clip-text text-transparent">
                  Ready to Get VIP Access
                </span>
                <br />
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>to Your Favorite Influencers?</span>
              </h2>

              <p
                className={`text-xl mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-400 ${isDarkMode ? "text-gray-300" : "text-gray-600"
                  } ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
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
                  <div className="text-3xl font-bold text-[#C5DCFA] mb-2">500+</div>
                  <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Twitter Influencers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#C5DCFA] mb-2">$2M+</div>
                  <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Total Volume</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#C5DCFA] mb-2">50K+</div>
                  <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Retweets & Actions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#C5DCFA] mb-2">99.8%</div>
                  <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Success Rate</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex justify-center items-center mb-8">
                <button
                  className="flex items-center justify-center gap-3 bg-[#C5DCFA] text-black font-bold text-xl py-4 px-12 rounded-full hover:bg-[#C5DCFA]/80 transition-colors duration-300 outline-none ring-0 border-0 focus:outline-none shadow-[0_8px_0_#83B9FE] cursor-pointer"
                  style={{ height: "70px" }}
                >
                  <Wallet className="w-6 h-6" />
                  <span>Get Started</span>
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div
                className={`flex flex-wrap justify-center items-center gap-8 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
              >
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-[#C5DCFA]" />
                  <span>Blockchain Secured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-[#C5DCFA]" />
                  <span>Instant Transactions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#C5DCFA]" />
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
        className={`container mx-auto px-6 py-16 border-t transition-all duration-1000 ease-out ${isDarkMode ? "border-gray-800" : "border-gray-200"
          } ${footerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image 
                src="https://img.icons8.com/?size=100&id=Axgf1IBhLcYr&format=png&color=000000" 
                alt="retweet.fun logo" 
                width={32} 
                height={32}
                className="h-8 w-8"
              />
              <span className={`text-2xl font-display font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                retweet.fun
              </span>
            </div>
            <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
              Revolutionary platform where you can buy tokens from Twitter influencers to request retweets, likes, and
              custom content. Your VIP pass to influencer attention.
            </p>
          </div>
          <div>
            <h4 className={`font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Platform</h4>
            <div className={`space-y-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              <a
                href="#"
                className={`block transition-colors ${isDarkMode ? "hover:text-white" : "hover:text-gray-900"}`}
              >
                How It Works
              </a>
              <a
                href="#"
                className={`block transition-colors ${isDarkMode ? "hover:text-white" : "hover:text-gray-900"}`}
              >
                Token Economics
              </a>
              <a
                href="#"
                className={`block transition-colors ${isDarkMode ? "hover:text-white" : "hover:text-gray-900"}`}
              >
                Security
              </a>
            </div>
          </div>
          <div>
            <h4 className={`font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Community</h4>
            <div className={`space-y-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              <a
                href="#"
                className={`block transition-colors ${isDarkMode ? "hover:text-white" : "hover:text-gray-900"}`}
              >
                Discord
              </a>
              <a
                href="#"
                className={`block transition-colors ${isDarkMode ? "hover:text-white" : "hover:text-gray-900"}`}
              >
                Twitter
              </a>
              <a
                href="#"
                className={`block transition-colors ${isDarkMode ? "hover:text-white" : "hover:text-gray-900"}`}
              >
                Telegram
              </a>
            </div>
          </div>
          <div>
            <h4 className={`font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Support</h4>
            <div className={`space-y-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              <a
                href="#"
                className={`block transition-colors ${isDarkMode ? "hover:text-white" : "hover:text-gray-900"}`}
              >
                Help Center
              </a>
              <a
                href="#"
                className={`block transition-colors ${isDarkMode ? "hover:text-white" : "hover:text-gray-900"}`}
              >
                Contact Us
              </a>
              <a
                href="#"
                className={`block transition-colors ${isDarkMode ? "hover:text-white" : "hover:text-gray-900"}`}
              >
                Bug Reports
              </a>
            </div>
          </div>
        </div>
        <div
          className={`mt-12 pt-8 border-t text-center ${isDarkMode ? "border-gray-800 text-gray-400" : "border-gray-200 text-gray-600"
            }`}
        >
          <p>&copy; 2025 retweet.fun. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
