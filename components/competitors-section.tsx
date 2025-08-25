import { X } from "lucide-react"

export function CompetitorsSection() {
  const competitors = [
    {
      title: "add logo here",
      description: "Lorem ipsum dolor sit amet consectetur. Senectus aliquet aenean risus quis.",
      details: "Neque viverra amet leo nisl. Morbi habitant cras ornare gravida sed arcu tempor elementum nibh sem.",
      weakness: "Statement about why they are not solution",
    },
    {
      title: "add logo here",
      description: "Lorem ipsum dolor sit amet consectetur. Senectus aliquet aenean risus quis.",
      details: "Neque viverra amet leo nisl. Morbi habitant cras ornare gravida sed arcu tempor elementum nibh sem.",
      weakness: "Statement about why they are not solution",
    },
    {
      title: "add logo here",
      description: "Lorem ipsum dolor sit amet consectetur. Senectus aliquet aenean risus quis.",
      details: "Neque viverra amet leo nisl. Morbi habitant cras ornare gravida sed arcu tempor elementum nibh sem.",
      weakness: "Statement about why they are not solution",
    },
    {
      title: "add logo here",
      description: "Lorem ipsum dolor sit amet consectetur. Senectus aliquet aenean risus quis.",
      details: "Neque viverra amet leo nisl. Morbi habitant cras ornare gravida sed arcu tempor elementum nibh sem.",
      weakness: "Statement about why they are not solution",
    },
  ]

  return (
    <section id="competitors" className="py-20 px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">COMPETITORS</p>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
              Who your competitors are and why they are not the solution
            </h2>
          </div>

          {/* Right Content - Competitor Grid */}
          <div className="grid grid-cols-2 gap-6">
            {competitors.map((competitor, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg space-y-4">
                <div className="text-lg font-medium text-gray-900">{competitor.title}</div>
                <p className="text-gray-700 text-sm">{competitor.description}</p>
                <p className="text-gray-600 text-sm">{competitor.details}</p>
                <div className="flex items-center gap-2 text-red-500">
                  <X className="w-4 h-4" />
                  <span className="text-sm">{competitor.weakness}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
