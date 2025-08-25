import { Navigation } from "@/components/navigation"
import { TractionSection } from "@/components/traction-section"
import { WorldMapSection } from "@/components/world-map-section"
import { WhyNowSection } from "@/components/why-now-section"
import { LandingHero } from "@/components/landing-hero"
import { MissionSection } from "@/components/mission-section"
import { MarketOpportunitySection } from "@/components/market-opportunity-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { CompetitorsSection } from "@/components/competitors-section"
import { FinancialsSection } from "@/components/financials-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <LandingHero />
        <TractionSection />
        <MissionSection />
        <MarketOpportunitySection />
        <ProblemSection />
        <SolutionSection />
        <CompetitorsSection />
        <FinancialsSection />
        <WhyNowSection />
        <WorldMapSection />
        <CaseStudiesSection />
        <NewsletterSection />
        <Footer />
      </main>
    </>
  )
}
