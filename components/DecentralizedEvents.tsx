import Image from "next/image"

export default function DecentralizedEvents() {
  return (
    <section id="decentralized-events" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Decentralized, In-Person Events</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="New York City event"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Explore diverse events in new places around New York</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Focus on collaboration and knowledge sharing</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Build new relationships and have fun</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Connect with a broad range of small businesses</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Foster opportunities for communities to thrive</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

