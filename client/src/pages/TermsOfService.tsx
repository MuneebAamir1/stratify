import { ArrowLeft, Shield, Mail, Phone, Globe, MessageSquare, CreditCard, Scale, FileText, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663380626562/npYcoS56irkU9VnnMQFbwb/stratify-ai-logo-colorful-VPhYTqm4VBcLSZWWCD3uKj.webp"
              alt="Stratify AI"
              className="w-8 h-8"
            />
            <span className="font-bold text-lg" style={{ fontFamily: "Poppins" }}>
              Stratify AI
            </span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 text-xs text-muted-foreground mb-6">
              <Scale className="w-3 h-3 text-purple-400" />
              Legal Document
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "Poppins" }}
            >
              Terms of{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              These Terms of Service constitute a legally binding agreement between you and Stratify Systems AI governing your access to and use of our website and all related services, communications, and platforms we operate.
            </p>
            <p className="text-sm text-muted-foreground/70 mt-4">
              By visiting our website, submitting a form, booking an appointment, opting into our SMS or email communications, or otherwise engaging with our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our{" "}
              <Link href="/privacy-policy" className="text-cyan-400 hover:underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-10">

            {/* ─── 1. Agreement to Terms ───────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-purple-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 text-white text-sm font-bold">1</span>
                Agreement to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and Stratify Systems AI (&quot;Stratify Systems AI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your access to and use of our website at{" "}
                <a href="https://stratifyai.manus.space" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">stratifyai.manus.space</a>{" "}
                and all related services, communications, and platforms we operate.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm mt-3">
                By visiting our website, submitting a form, booking an appointment, opting into our SMS or email communications, or otherwise engaging with our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our{" "}
                <Link href="/privacy-policy" className="text-cyan-400 hover:underline">Privacy Policy</Link>.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm mt-3">
                If you do not agree to these Terms, please do not access or use our services.
              </p>
            </div>

            {/* ─── 2. Description of Services ──────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-black text-sm font-bold">2</span>
                Description of Services
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                Stratify Systems AI provides AI-powered voice agent and text agent solutions as a service. Our offerings include, but are not limited to:
              </p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  AI voice agents designed to handle inbound and outbound calls on behalf of clients
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  AI text agents that manage SMS and messaging communications
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Automated appointment scheduling and booking management
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Customer follow-up and engagement workflows
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  CRM and communications management powered by GoHighLevel
                </li>
              </ul>
              <p className="text-xs text-muted-foreground/70 mt-4">
                Our services are delivered through a combination of our proprietary systems, GoHighLevel&apos;s platform, and Retell AI&apos;s voice infrastructure. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice.
              </p>
            </div>

            {/* ─── 3. User Responsibilities ────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-purple-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 text-white text-sm font-bold">3</span>
                User Responsibilities
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">By using our services, you agree to:</p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  Provide accurate, current, and complete information when submitting forms or booking appointments
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  Maintain the confidentiality of any account credentials or access information we provide
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  Use our services only for lawful purposes and in accordance with these Terms
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  Promptly notify us of any unauthorized use of your account or any security breach
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  Comply with all applicable local, state, federal, and international laws and regulations
                </li>
              </ul>
              <p className="text-xs text-muted-foreground/70 mt-4">
                You are solely responsible for any content you submit to us and for all activities that occur in connection with your use of our services.
              </p>
            </div>

            {/* ─── 4. Acceptable Use ──────────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-black text-sm font-bold">4</span>
                Acceptable Use
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">You agree not to use our website or services to:</p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Violate any applicable law, regulation, or third-party rights
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Transmit any unsolicited or unauthorized advertising, promotional materials, or spam
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Impersonate any person or entity or misrepresent your affiliation
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Interfere with or disrupt the integrity or performance of our services or systems
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Attempt to gain unauthorized access to any part of our services, accounts, or networks
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Upload or transmit viruses, malware, or any other malicious code
                </li>
              </ul>
              <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 mt-4">
                <p className="text-yellow-400/80 text-xs font-semibold">
                  ⚠ We reserve the right to terminate your access immediately and without notice if we determine you have violated these acceptable use standards.
                </p>
              </div>
            </div>

            {/* ─── 5. SMS Messaging Terms ──────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-purple-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 text-white text-sm font-bold">5</span>
                SMS Messaging Terms
              </h2>

              <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                This section governs your participation in the Stratify Systems AI text messaging program. By providing your mobile phone number and opting in to receive SMS communications, you agree to the following terms.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-border bg-background/50">
                  <h3 className="font-semibold text-foreground mb-2 text-sm flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-purple-400" />
                    Program Description
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    When you opt in, you may receive appointment reminders and confirmations related to services you have booked, as well as follow-up messages from our AI text agent system regarding your inquiry or ongoing service engagement.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-border bg-background/50">
                    <h3 className="font-semibold text-foreground mb-2 text-sm">Opt-Out</h3>
                    <p className="text-muted-foreground text-xs">
                      Text <span className="text-purple-400 font-mono font-bold">STOP</span> to <span className="text-purple-400">+4591653072</span> to cancel. You&apos;ll receive a confirmation and no further messages will be sent.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-background/50">
                    <h3 className="font-semibold text-foreground mb-2 text-sm">Help</h3>
                    <p className="text-muted-foreground text-xs">
                      Reply <span className="text-purple-400 font-mono font-bold">HELP</span> or contact{" "}
                      <a href="mailto:uzair@stratify-systems-ai.com" className="text-cyan-400 hover:underline">uzair@stratify-systems-ai.com</a>{" "}
                      or <span className="text-purple-400">+4591653072</span>.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Carrier Liability:</strong> Carriers are not liable for delayed or undelivered messages.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Message &amp; Data Rates:</strong> Message and data rates may apply for messages sent to and from you.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Message Frequency:</strong> You will receive appointment-based messages as triggered by your scheduled appointments and service interactions.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
                  <p className="text-sm text-cyan-400/90 font-semibold mb-1">Consent Not Required for Purchase</p>
                  <p className="text-muted-foreground text-xs">
                    Your consent to receive SMS messages is not a condition of purchasing any product or service. Text messaging originator opt-in data and consent will not be shared with any third parties, except for aggregators and providers of the Text Message services.
                  </p>
                </div>
              </div>
            </div>

            {/* ─── 6. Payments & Billing ──────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-black text-sm font-bold">6</span>
                Payments &amp; Billing
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                Certain services offered by Stratify Systems AI may require payment. Where applicable:
              </p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  All fees are stated in US Dollars (USD) unless otherwise indicated
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Payment is due in accordance with the service agreement or invoice provided to you
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  All payments are processed securely through third-party payment processors; we do not store full payment card details
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Fees are non-refundable unless otherwise expressly stated in your service agreement
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  We reserve the right to modify our pricing at any time with reasonable advance notice
                </li>
              </ul>
              <p className="text-xs text-muted-foreground/70 mt-4">
                If you have questions about billing, please contact us at{" "}
                <a href="mailto:uzair@stratify-systems-ai.com" className="text-cyan-400 hover:underline">uzair@stratify-systems-ai.com</a>.
              </p>
            </div>

            {/* ─── 7. Intellectual Property ────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-purple-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 text-white text-sm font-bold">7</span>
                Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                All content, materials, technology, and intellectual property on our website and within our services — including but not limited to text, graphics, logos, software, AI models, workflows, and automation systems — are the exclusive property of Stratify Systems AI or our licensors and are protected by applicable intellectual property laws.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm mt-3">
                You are granted a limited, non-exclusive, non-transferable, revocable license to access and use our services for your personal or internal business purposes. You may not copy, reproduce, distribute, modify, create derivative works of, publicly display, or exploit any portion of our services or content without our prior written consent.
              </p>
            </div>

            {/* ─── 8. Disclaimers ─────────────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-yellow-500/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-black text-sm font-bold">8</span>
                Disclaimers
              </h2>
              <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 mb-4">
                <p className="text-yellow-400/80 text-xs font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Important Legal Disclaimer
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm uppercase font-medium">
                Our services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied. To the fullest extent permitted by law, Stratify Systems AI disclaims all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm mt-3">
                We do not warrant that our services will be uninterrupted, error-free, or completely secure. We do not warrant that any results obtained through our AI voice agents or AI text agents will be accurate, complete, or suitable for any particular purpose. You use our services at your own risk.
              </p>
            </div>

            {/* ─── 9. Limitation of Liability ─────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-yellow-500/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 text-white text-sm font-bold">9</span>
                Limitation of Liability
              </h2>
              <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 mb-4">
                <p className="text-yellow-400/80 text-xs font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Important Legal Clause
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm uppercase font-medium">
                To the maximum extent permitted by applicable law, Stratify Systems AI and its officers, directors, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including lost profits, lost data, loss of goodwill, or business interruption — arising out of or related to your use of or inability to use our services, even if we have been advised of the possibility of such damages.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm mt-3">
                In no event shall our total cumulative liability to you for any claims arising from or related to these Terms or our services exceed the greater of (a) the total amount you paid to Stratify Systems AI in the twelve (12) months preceding the claim, or (b) one hundred US dollars ($100).
              </p>
            </div>

            {/* ─── 10. Indemnification ────────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-black text-sm font-bold">10</span>
                Indemnification
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                You agree to indemnify, defend, and hold harmless Stratify Systems AI and its officers, directors, employees, agents, and licensors from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or in any way related to:
              </p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Your access to or use of our services
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Your violation of these Terms
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Your violation of any applicable law or the rights of any third party
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Any content or information you submit through our platform
                </li>
              </ul>
            </div>

            {/* ─── 11. Termination ────────────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-purple-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 text-white text-sm font-bold">11</span>
                Termination
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Stratify Systems AI reserves the right to suspend or terminate your access to our services at any time, with or without cause and with or without notice, including if we believe you have violated these Terms or engaged in conduct harmful to us, our users, or third parties.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm mt-3">
                You may stop using our services at any time. If you wish to opt out of SMS communications, reply STOP to any message. If you wish to close your account or terminate a service agreement, please contact us at{" "}
                <a href="mailto:uzair@stratify-systems-ai.com" className="text-cyan-400 hover:underline">uzair@stratify-systems-ai.com</a>.
              </p>
              <p className="text-xs text-muted-foreground/70 mt-4">
                Upon termination, all licenses and rights granted under these Terms will immediately cease. Provisions that by their nature should survive termination shall survive, including intellectual property rights, disclaimers, limitation of liability, and indemnification.
              </p>
            </div>

            {/* ─── 12. Governing Law ──────────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-black text-sm font-bold">12</span>
                Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any dispute arising from or relating to these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts located in the United States, and you consent to personal jurisdiction in such courts.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm mt-3">
                To the extent permitted by law, you waive any right to a jury trial in any dispute arising from these Terms or our services.
              </p>
            </div>

            {/* ─── 13. Changes to Terms ───────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-purple-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 text-white text-sm font-bold">13</span>
                Changes to These Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Stratify Systems AI reserves the right to modify these Terms at any time. When we make material changes, we will update the &quot;Last Updated&quot; date at the top of this document and, where appropriate, notify you by email or by posting a notice on our website.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm mt-3">
                Your continued use of our services after any changes constitutes your acceptance of the updated Terms. We encourage you to review these Terms periodically to stay informed of your rights and obligations.
              </p>
            </div>

            {/* ─── 14. Contact Information ────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-black text-sm font-bold">14</span>
                Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                If you have any questions, concerns, or requests regarding these Terms of Service, please contact us:
              </p>
              <div className="p-6 rounded-xl border border-border bg-background/50 space-y-3">
                <p className="text-foreground font-bold text-lg" style={{ fontFamily: "Poppins" }}>Stratify Systems AI</p>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Globe className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <a href="https://stratify-systems-ai.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">stratify-systems-ai.com</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <a href="mailto:uzair@stratify-systems-ai.com" className="text-purple-400 hover:underline">uzair@stratify-systems-ai.com</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <a href="tel:+4591653072" className="text-purple-400 hover:underline">+4591653072</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mini Footer */}
      <footer className="border-t border-border py-8 bg-card/50">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; 2026 Stratify AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/privacy-policy" className="hover:text-cyan-400 transition">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-purple-400">Terms of Service</Link>
              <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
