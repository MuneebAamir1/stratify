import { ArrowLeft, Shield, Mail, Phone, Globe } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
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
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 text-xs text-muted-foreground mb-6">
              <Shield className="w-3 h-3 text-cyan-400" />
              Legal Document
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "Poppins" }}
            >
              Privacy{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Stratify Systems AI (&quot;Stratify Systems AI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, engage with our services, or communicate with us via SMS, email, or other channels.
            </p>
            <p className="text-sm text-muted-foreground/70 mt-4">
              By accessing our website or using our services, you agree to the terms of this Privacy Policy. If you do not agree, please do not access the site or use our services.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-10">

            {/* ─── 1. Information We Collect ───────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-black text-sm font-bold">1</span>
                Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">We may collect the following categories of information:</p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Personal Identification Information
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground ml-4">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-border" />Full name</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-border" />Email address</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-border" />Phone number (including mobile)</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-border" />Mailing or billing address</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-border" />Business name and title</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Communications Data
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-border" />Messages and correspondence sent via forms, email, or SMS</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-border" />Records of appointment bookings and scheduling interactions</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-border" />Call logs and voicemail records related to our services</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Technical &amp; Usage Data
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground ml-4">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-border" />IP address &amp; approximate location</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-border" />Browser type and version</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-border" />Pages visited &amp; time on page</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-border" />Device type and operating system</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Payment Information
                  </h3>
                  <p className="text-sm text-muted-foreground ml-4">
                    Payment card details are processed securely through third-party payment processors. Stratify Systems AI does not store full card numbers.
                  </p>
                </div>
              </div>
            </div>

            {/* ─── 2. How We Collect Information ───────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-purple-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 text-white text-sm font-bold">2</span>
                How We Collect Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Stratify Systems AI collects information through the following methods:</p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  Website contact and lead capture forms
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  Appointment booking tools integrated into our platform
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  SMS and email opt-in forms, including web-based sign-up pages and landing pages
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  Meta Ads (Facebook/Instagram) lead generation campaigns
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  Direct communications you initiate with our team
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  Automated intake workflows powered by GoHighLevel (our CRM platform)
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  AI voice agents and AI text agents provided through our service platform
                </li>
              </ul>
            </div>

            {/* ─── 3. How We Use Your Information ──────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-black text-sm font-bold">3</span>
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Stratify Systems AI uses the information we collect to:</p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Deliver, manage, and improve our AI voice agent and AI text agent services
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Respond to inquiries, support requests, and appointment bookings
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Send SMS and email communications for service updates, follow-ups, and scheduling (only with your consent)
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Run and optimize paid advertising campaigns through Meta Ads
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Analyze website traffic and user behavior to improve our online presence
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Process transactions and send related information
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Comply with legal obligations and resolve disputes
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Prevent fraud and ensure platform security
                </li>
              </ul>
            </div>

            {/* ─── 4. SMS & Communications ─────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-purple-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 text-white text-sm font-bold">4</span>
                SMS &amp; Communications
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">How You Opt In</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    By submitting your phone number through any of our web forms, landing pages, or appointment booking tools, and checking the applicable consent checkbox, you expressly consent to receive SMS text messages from Stratify Systems AI. Consent is obtained at the point of data collection, and a record of that consent is maintained in our CRM system.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Types of Messages You May Receive</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-400" />Appointment reminders and confirmations</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-400" />Follow-up messages related to your inquiry or service</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-400" />Service updates and important account notifications</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-400" />Responses from our AI text agent system</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Message Frequency &amp; Rates</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Message frequency may vary depending on your interactions with Stratify Systems AI. Message and data rates may apply, depending on your mobile carrier and plan.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Consent Is Not a Condition of Purchase</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    You are not required to consent to receive SMS messages as a condition of purchasing any product or service. Your consent is entirely voluntary. Text messaging originator opt-in data and consent will not be shared with any third parties, except for aggregators and providers of the Text Message services.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-border bg-background/50">
                    <h3 className="font-semibold text-foreground mb-2 text-sm">Opt-Out Instructions</h3>
                    <p className="text-muted-foreground text-sm">
                      Reply <span className="text-cyan-400 font-mono font-bold">STOP</span> to any text message to unsubscribe immediately. You may also contact us at{" "}
                      <a href="mailto:uzair@stratify-systems-ai.com" className="text-cyan-400 hover:underline">uzair@stratify-systems-ai.com</a>.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-background/50">
                    <h3 className="font-semibold text-foreground mb-2 text-sm">HELP Instructions</h3>
                    <p className="text-muted-foreground text-sm">
                      Reply <span className="text-cyan-400 font-mono font-bold">HELP</span> to any SMS or contact us at{" "}
                      <a href="mailto:uzair@stratify-systems-ai.com" className="text-cyan-400 hover:underline">uzair@stratify-systems-ai.com</a>{" "}
                      or <span className="text-cyan-400">+4591653072</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── 5. Data Sharing Policy ──────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-black text-sm font-bold">5</span>
                Data Sharing Policy
              </h2>

              <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 mb-6">
                <p className="text-sm text-cyan-400/90 font-semibold">
                  Stratify Systems AI does not sell, rent, trade, or share your personal information or lead data with third parties for their own marketing or promotional purposes under any circumstances.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">We may share your information only in the following limited circumstances:</p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-border bg-background/50">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Service Providers</h3>
                  <p className="text-muted-foreground text-sm">
                    We share data with trusted service providers who assist in operating our platform (e.g., GoHighLevel for CRM/automation, Retell AI for voice agent functionality). These providers are contractually bound to protect your data.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background/50">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Legal Requirements</h3>
                  <p className="text-muted-foreground text-sm">
                    We may disclose information when required by law, court order, or government authority, or to protect the rights, property, or safety of Stratify Systems AI, our clients, or others.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background/50">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Business Transfers</h3>
                  <p className="text-muted-foreground text-sm">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email or prominent website notice if such a change occurs.
                  </p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground/70 mt-4 italic">
                In all cases, SMS opt-in data and mobile consent information are never included in any sharing arrangement for marketing purposes.
              </p>
            </div>

            {/* ─── 6. Cookies & Tracking ──────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-purple-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 text-white text-sm font-bold">6</span>
                Cookies &amp; Tracking Technologies
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                Our website uses standard web technologies to enhance your browsing experience:
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-border bg-background/50">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Cookies</h3>
                  <p className="text-muted-foreground text-sm">
                    Small text files stored on your device that help us remember your preferences and recognize returning visitors.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background/50">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Meta Pixel</h3>
                  <p className="text-muted-foreground text-sm">
                    A tracking pixel placed by Meta Platforms (Facebook/Instagram) to measure the effectiveness of our advertising campaigns and to build custom audiences for ad targeting.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background/50">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Analytics Tools</h3>
                  <p className="text-muted-foreground text-sm">
                    We may use web analytics tools to understand traffic patterns and improve our site.
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground/70 mt-4">
                You may control cookie settings through your browser preferences. You may also opt out of Meta&apos;s ad tracking through your Facebook account settings or the Digital Advertising Alliance opt-out tool at{" "}
                <a href="https://aboutads.info" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">aboutads.info</a>.
              </p>
            </div>

            {/* ─── 7. Data Security ───────────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-black text-sm font-bold">7</span>
                Data Security Practices
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                We implement a variety of technical and organizational measures to protect your data:
              </p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Encrypted data transmission using SSL/TLS protocols
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Restricted access controls limiting data access to authorized personnel only
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Secure cloud-based data storage through GoHighLevel&apos;s platform
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  Regular review of data collection and storage practices
                </li>
              </ul>
              <p className="text-xs text-muted-foreground/70 mt-4">
                While we take all reasonable steps to protect your information, no method of transmission over the Internet is 100% secure. We are committed to promptly addressing any data security incidents in accordance with applicable law.
              </p>
            </div>

            {/* ─── 8. Data Retention ──────────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-purple-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 text-white text-sm font-bold">8</span>
                Data Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Stratify Systems AI retains personal information for as long as necessary to fulfill the purposes described in this Privacy Policy, to comply with our legal obligations, resolve disputes, and enforce our agreements. When your data is no longer needed, we will securely delete or anonymize it.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm mt-3">
                You may request deletion of your personal data at any time by contacting us at{" "}
                <a href="mailto:uzair@stratify-systems-ai.com" className="text-cyan-400 hover:underline">uzair@stratify-systems-ai.com</a>.
                We will process your request in accordance with applicable law.
              </p>
            </div>

            {/* ─── 9. Third-Party Services ────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-black text-sm font-bold">9</span>
                Third-Party Services
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-border bg-background/50">
                  <h3 className="font-semibold text-foreground mb-2 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    GoHighLevel (Primary Data Processor)
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We use GoHighLevel as our primary CRM, funnel builder, automation platform, and communications system. GoHighLevel stores and manages contact records, facilitates SMS/email communications, manages scheduling, and houses automation workflows. GoHighLevel does not use your data for their own marketing purposes.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background/50">
                  <h3 className="font-semibold text-foreground mb-2 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    Retell AI
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We use Retell AI to power our AI voice agent services. Retell AI processes voice interaction data solely for delivering AI voice agent functionality on our behalf and is contractually prohibited from using your data for independent marketing purposes.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background/50">
                  <h3 className="font-semibold text-foreground mb-2 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    Meta Ads (Facebook/Instagram)
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We run paid advertising campaigns through Meta Platforms. Meta may collect data about your interactions with our ads through the Meta Pixel. Meta&apos;s use of this data is governed by{" "}
                    <a href="https://facebook.com/policy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Meta&apos;s Data Policy</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* ─── 10. Your Rights & Choices ───────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-purple-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 text-white text-sm font-bold">10</span>
                Your Rights &amp; Choices
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                Depending on your location and applicable law, you may have the following rights:
              </p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Access:</strong> Request a copy of the personal information we hold about you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Correction:</strong> Request that we correct inaccurate or incomplete information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Deletion:</strong> Request that we delete your personal data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Opt-Out of SMS:</strong> Opt out at any time by replying STOP</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Opt-Out of Email:</strong> Unsubscribe via the link in any email</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Data Portability:</strong> Receive your data in a structured, machine-readable format</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground/70 mt-4">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:uzair@stratify-systems-ai.com" className="text-cyan-400 hover:underline">uzair@stratify-systems-ai.com</a>.
              </p>
            </div>

            {/* ─── 11. Opt-Out Instructions ────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-black text-sm font-bold">11</span>
                Opt-Out Instructions
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-border bg-background/50 text-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">SMS Opt-Out</h3>
                  <p className="text-muted-foreground text-xs">
                    Reply <span className="text-cyan-400 font-mono font-bold">STOP</span> to any SMS message
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background/50 text-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Email Opt-Out</h3>
                  <p className="text-muted-foreground text-xs">
                    Click &quot;Unsubscribe&quot; in any marketing email footer
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background/50 text-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Ads Opt-Out</h3>
                  <p className="text-muted-foreground text-xs">
                    Visit{" "}
                    <a href="https://aboutads.info" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">aboutads.info</a>
                  </p>
                </div>
              </div>
            </div>

            {/* ─── 12. Children's Information ─────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-purple-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 text-white text-sm font-bold">12</span>
                Children&apos;s Information
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Our services are not directed to individuals under the age of 13, and we do not knowingly collect personal information from children under 13. If you believe that we have inadvertently collected information from a child under 13, please contact us immediately at{" "}
                <a href="mailto:uzair@stratify-systems-ai.com" className="text-cyan-400 hover:underline">uzair@stratify-systems-ai.com</a>{" "}
                and we will take steps to delete such information promptly.
              </p>
            </div>

            {/* ─── 13. Changes to This Policy ─────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-black text-sm font-bold">13</span>
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Stratify Systems AI reserves the right to update or modify this Privacy Policy at any time. When we make changes, we will update the &quot;Last Updated&quot; date at the top of this document and, where appropriate, notify you by email or by posting a prominent notice on our website.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm mt-3">
                Your continued use of our website or services after any changes constitutes your acceptance of the updated terms. We encourage you to review this Privacy Policy periodically.
              </p>
            </div>

            {/* ─── 14. Contact Information ────────────────────── */}
            <div className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-black text-sm font-bold">14</span>
                Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:
              </p>
              <div className="p-6 rounded-xl border border-border bg-background/50 space-y-3">
                <p className="text-foreground font-bold text-lg" style={{ fontFamily: "Poppins" }}>Stratify Systems AI</p>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Globe className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <a href="https://stratify-systems-ai.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">stratify-systems-ai.com</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <a href="mailto:uzair@stratify-systems-ai.com" className="text-cyan-400 hover:underline">uzair@stratify-systems-ai.com</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <a href="tel:+4591653072" className="text-cyan-400 hover:underline">+4591653072</a>
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
              <Link href="/privacy-policy" className="text-cyan-400">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-cyan-400 transition">Terms of Service</Link>
              <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
