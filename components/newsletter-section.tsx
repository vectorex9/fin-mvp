import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="bg-white py-24 px-8 lg:px-16">
      <div className="max-w-2xl">
        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">Subscribe to Briefings</h2>

        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          Our signature newsletter with insights and analysis from across the firm
        </p>

        {/* Email Form */}
        <div className="flex gap-0 mb-6">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-r-none border-r-0 h-12 text-base"
          />
          <Button className="bg-black text-white hover:bg-gray-800 rounded-l-none h-12 px-8">Submit</Button>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-500 leading-relaxed">
          By submitting this information, you agree that the information you are providing is subject to Goldman Sachs'{" "}
          <a href="#" className="underline">
            privacy policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Terms of Use
          </a>
          . You consent to receive our newsletter via email.
        </p>
      </div>
    </section>
  )
}
