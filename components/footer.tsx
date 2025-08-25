export function Footer() {
  const footerSections = [
    {
      title: "CAREERS",
      links: [
        "Overview",
        "Students",
        "Life at GS",
        "Benefits",
        "Featured Locations",
        "Open Roles",
        "Disability Accommodation",
        "Statement on Equal Employment Opportunities",
      ],
    },
    {
      title: "RESOURCES",
      links: ["Client Logins", "Employee Login", "Pressroom", "Investor Relations", "Alumni Network"],
    },
    {
      title: "OUR BUSINESSES",
      links: [
        "Investment Banking",
        "FICC and Equities",
        "Asset Management",
        "Private Wealth Management",
        "Ayco",
        "Marcus",
        "Marquee",
        "Transaction Banking",
      ],
    },
    {
      title: "CONNECT",
      links: ["linkedin", "instagram", "youtube", "x"],
    },
  ]

  return (
    <footer className="bg-gray-900 text-white py-16 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xs tracking-widest text-gray-400 uppercase font-mono mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
                      {link}
                      {(link === "Asset Management" ||
                        link === "Private Wealth Management" ||
                        link === "Open Roles" ||
                        link === "Marcus" ||
                        link === "Marquee") && <span className="text-xs text-gray-500 ml-1">open_in_new</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-400">
            <div>© 2025 Goldman Sachs. All rights reserved.</div>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy and Cookies
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                Your Privacy Choices
                <span className="w-4 h-4 bg-blue-600 rounded-sm"></span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Security & Fraud Awareness
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Regulatory Disclosures
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
