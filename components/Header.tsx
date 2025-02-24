import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/assets/lynkable-logo.avif" 
              alt="Lynkable Logo" 
              width={40} 
              height={40} 
              className="rounded-sm"
            />
            <span className="text-2xl font-bold text-purple-600">
              Lynkable
            </span>
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="#features" className="text-gray-700 hover:text-purple-600">
              Features
            </Link>
            <Link href="#hybrid-events" className="text-gray-700 hover:text-purple-600">
              Hybrid Events
            </Link>
            <Link href="#decentralized-events" className="text-gray-700 hover:text-purple-600">
              Decentralized Events
            </Link>
            <Link href="#" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
              Join Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

