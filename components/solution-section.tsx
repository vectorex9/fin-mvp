import { CheckCircle, Target, Users } from "lucide-react"

export function SolutionSection() {
  const solutions = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Senectus aliquet aenean risus quis. Neque viverra amet leo nisl. Morbi habitant cras ornare gravida sed arcu tempor elementum nibh sem.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Senectus aliquet aenean risus quis. Neque viverra amet leo nisl. Morbi habitant cras ornare gravida sed arcu tempor elementum nibh sem.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Senectus aliquet aenean risus quis. Neque viverra amet leo nisl. Morbi habitant cras ornare gravida sed arcu tempor elementum nibh sem.",
    },
  ]

  return (
    <section id="solution" className="py-20 px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">SOLUTION</p>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight max-w-4xl">
            How our company solves the problem and how this benefits your customers
          </h2>
        </div>

        {/* Solution Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="space-y-4">
              <div className="text-gray-700">{solution.icon}</div>
              <h3 className="text-xl font-medium text-gray-900">{solution.title}</h3>
              <p className="text-gray-600 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
