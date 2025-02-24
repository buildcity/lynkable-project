import Image from "next/image"

export default function HybridEvents() {
  return (
    <section id="hybrid-events" className="bg-purple-100 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Utilizing Hybrid Events</h2>
            <p className="text-gray-600 mb-4">
              Hybrid events combine an in-person vibe with an online community to create a unique experience made to
              evolve the event scene.
            </p>
            <p className="text-gray-600 mb-4">
              We provide tips and tools for New York events and host our community on Discord.
            </p>
            <a href="#" className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 inline-block">
              Join Our Discord
            </a>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Hybrid event illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

