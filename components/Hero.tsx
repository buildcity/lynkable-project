import Image from "next/image"

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">Connect, Create, and Thrive with Lynkable</h1>
      <p className="text-xl mb-8 text-gray-600">
        A hybrid community connecting local event organizers, artists, and small businesses to strengthen community
        events in New York City and beyond.
      </p>
      <div className="flex justify-center">
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="New York City skyline"
          width={600}
          height={400}
          className="rounded-lg shadow-xl"
        />
      </div>
    </section>
  )
}

