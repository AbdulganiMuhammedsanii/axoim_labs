import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Shield } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-900">Axiom Labs</div>
          <nav className="flex items-center gap-8">
            <Link href="#product" className="text-sm text-gray-600 hover:text-gray-900">
              Product
            </Link>
            <Link href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900">
              How It Works
            </Link>
            <Button variant="outline" size="sm">
              Request Demo
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-semibold text-gray-900 tracking-tight mb-6 text-balance">
            Reliable AI systems for real operations
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            AI voice agents that handle inbound calls, patient intake, and scheduling for clinics and service
            businesses.
          </p>
          <div className="flex items-center gap-4">
            <Button size="lg" className="gap-2">
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Product
            </Button>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">AI Voice Intake Agent</h2>
            <p className="text-lg text-gray-600">
              Handle every inbound call with consistent, professional AI that collects information and takes action.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white border-gray-200">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-gray-900 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Answers every call</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Never miss a patient or customer. The AI picks up immediately and handles intake conversations
                    naturally.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white border-gray-200">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-gray-900 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Collects structured intake</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Gathers symptoms, contact details, insurance information, and reason for visit in a standardized
                    format.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white border-gray-200">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-gray-900 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Books appointments</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Integrates with your scheduling system to find available slots and confirm bookings in real-time.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white border-gray-200">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-gray-900 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Escalates urgent cases</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Identifies emergencies or complex situations and immediately transfers to your staff with full
                    context.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Safe by design:</strong> All calls are monitored, transcribed, and include human escalation paths.
              The AI is designed to recognize its limits.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">How it works</h2>
          <p className="text-lg text-gray-600">A straightforward process from call to action.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold mb-4">
              1
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Call received</h3>
            <p className="text-gray-600 leading-relaxed">
              Patient or customer calls your number. AI answers immediately and begins a natural conversation.
            </p>
          </div>

          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold mb-4">
              2
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">AI collects intake</h3>
            <p className="text-gray-600 leading-relaxed">
              The agent gathers all necessary information through conversation, validates details, and structures the
              data.
            </p>
          </div>

          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold mb-4">
              3
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Action or escalation</h3>
            <p className="text-gray-600 leading-relaxed">
              Books the appointment automatically, or escalates to staff if human judgment is needed.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="flex items-start gap-4 mb-8">
              <Shield className="w-8 h-8 text-gray-900 shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Enterprise-grade infrastructure</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Built on secure, compliant infrastructure with HIPAA-aware design principles. Every call is encrypted,
                  logged, and auditable.
                </p>
                <p className="text-sm text-gray-600">
                  Built by engineers with experience deploying production systems on AWS. We understand reliability,
                  security, and compliance requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Ready to automate your intake?</h2>
          <p className="text-lg text-gray-600 mb-8">See how Axiom Labs can handle your inbound calls and scheduling.</p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">© 2025 Axiom Labs. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
