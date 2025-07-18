import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

// Brand color for icons - should match tailwind.config.ts
const BRAND_ICON_COLOR = "4DCF8E"

export const metadata: Metadata = {
  title: "retweet.fun - Transform Your Social Influence",
  description: "Revolutionary platform for purchasing influencer tokens and requesting social media actions.",
  generator: 'v0.dev',
  icons: {
    icon: [
      {
        url: `https://img.icons8.com/?size=32&id=Axgf1IBhLcYr&format=png&color=${BRAND_ICON_COLOR}`,
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: `https://img.icons8.com/?size=16&id=Axgf1IBhLcYr&format=png&color=${BRAND_ICON_COLOR}`,
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: {
      url: `https://img.icons8.com/?size=180&id=Axgf1IBhLcYr&format=png&color=${BRAND_ICON_COLOR}`,
      sizes: "180x180",
      type: "image/png",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
