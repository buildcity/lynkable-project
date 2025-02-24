import { Users, Video, Building, Lightbulb } from "lucide-react"

const features = [
  {
    icon: <Users className="h-8 w-8 text-purple-600" />,
    title: "Supportive Online Community",
    description: "Communicate, build skills, and gain advice from fellow members.",
  },
  {
    icon: <Video className="h-8 w-8 text-purple-600" />,
    title: "Live-streamed Events",
    description: "Interact from anywhere, even from the comfort of your own home.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-purple-600" />,
    title: "Workshops and Online Content",
    description: "Learn techniques within the event market through our curated content.",
  },
  {
    icon: <Building className="h-8 w-8 text-purple-600" />,
    title: "Small Business Network",
    description: "Connect with local businesses to learn, work, and contribute to your neighborhood.",
  },
]

export default function Features() {
  return (
    <section id="features" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What Lynkable Offers</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

