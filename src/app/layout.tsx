import "@/styles/globals.css"
import { Manrope } from "next/font/google"

const manrope = Manrope({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const metadata = {
  title: "Location Targeting Form",
  description: "Campaign location targeting form",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
