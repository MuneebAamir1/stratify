import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Clock, Zap, CheckCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";

/* ─── Declare GSAP on window so TS doesn't complain ─────────────── */
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export default function FormPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const orbRef1 = useRef<HTMLDivElement>(null);
  const orbRef2 = useRef<HTMLDivElement>(null);
  const orbRef3 = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap) return;
    if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

    /* --- Floating orbs perpetual motion --- */
    [orbRef1, orbRef2, orbRef3].forEach((ref, i) => {
      if (!ref.current) return;
      gsap.to(ref.current, {
        y: i % 2 === 0 ? -30 : 30,
        x: i % 2 === 0 ? 20 : -20,
        duration: 4 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    /* --- Hero entrance --- */
    if (heroRef.current) {
      const children = heroRef.current.querySelectorAll(".hero-anim");
      gsap.fromTo(
        children,
        { opacity: 0, y: 60, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }

    /* --- 3D tilt cards --- */
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".glass-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 80, rotateX: 15, scale: 0.9, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: ScrollTrigger
            ? { trigger: cardsRef.current, start: "top 85%", once: true }
            : undefined,
        }
      );

      /* Interactive 3D tilt on hover */
      cards.forEach((card: Element) => {
        const el = card as HTMLElement;
        el.addEventListener("mousemove", (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
          gsap.to(el, {
            rotateY: x,
            rotateX: y,
            duration: 0.4,
            ease: "power2.out",
          });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(el, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          });
        });
      });
    }

    /* --- Form container entrance --- */
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 100, scale: 0.92, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: ScrollTrigger
            ? { trigger: formRef.current, start: "top 80%", once: true }
            : undefined,
        }
      );
    }

    /* --- Interactive 3D tilt on the form card --- */
    const formCard = formCardRef.current;
    if (formCard && gsap) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = formCard.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
        gsap.to(formCard, {
          rotateY: x,
          rotateX: y,
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      };
      const handleMouseLeave = () => {
        gsap.to(formCard, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.4)",
          overwrite: "auto",
        });
      };
      /* Touch support for mobile */
      const handleTouchMove = (e: TouchEvent) => {
        const touch = e.touches[0];
        if (!touch) return;
        const rect = formCard.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / rect.width - 0.5) * 6;
        const y = ((touch.clientY - rect.top) / rect.height - 0.5) * -6;
        gsap.to(formCard, {
          rotateY: x,
          rotateX: y,
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      };
      const handleTouchEnd = () => {
        gsap.to(formCard, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.4)",
          overwrite: "auto",
        });
      };

      formCard.addEventListener("mousemove", handleMouseMove);
      formCard.addEventListener("mouseleave", handleMouseLeave);
      formCard.addEventListener("touchmove", handleTouchMove, { passive: true });
      formCard.addEventListener("touchend", handleTouchEnd);

      // Cleanup
      const cleanupFormCard = () => {
        formCard.removeEventListener("mousemove", handleMouseMove);
        formCard.removeEventListener("mouseleave", handleMouseLeave);
        formCard.removeEventListener("touchmove", handleTouchMove);
        formCard.removeEventListener("touchend", handleTouchEnd);
      };

      return () => {
        cleanupFormCard();
        if (ScrollTrigger) ScrollTrigger.getAll().forEach((t: any) => t.kill());
      };
    }

    return () => {
      if (ScrollTrigger) ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* ── SEO meta (via Helmet-style title) ── */}
      {(() => {
        document.title =
          "Get Started — Stratify AI | Book Your Free Consultation";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) {
          meta.setAttribute(
            "content",
            "Book a free consultation with Stratify AI. Complete the form to get started with AI-powered voice agents, text automation, and Meta ads management."
          );
        } else {
          const m = document.createElement("meta");
          m.name = "description";
          m.content =
            "Book a free consultation with Stratify AI. Complete the form to get started with AI-powered voice agents, text automation, and Meta ads management.";
          document.head.appendChild(m);
        }
        return null;
      })()}

      {/* ══════ Floating Gradient Orbs ══════ */}
      <div
        ref={orbRef1}
        className="fixed top-20 -left-32 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,217,255,0.4) 0%, transparent 70%)",
        }}
      />
      <div
        ref={orbRef2}
        className="fixed bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)",
        }}
      />
      <div
        ref={orbRef3}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,217,255,0.5) 0%, rgba(124,58,237,0.3) 50%, transparent 70%)",
        }}
      />

      {/* ══════ Navigation ══════ */}
      <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="container flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663380626562/npYcoS56irkU9VnnMQFbwb/stratify-ai-logo-colorful-VPhYTqm4VBcLSZWWCD3uKj.webp"
              alt="Stratify AI"
              className="w-8 h-8 group-hover:scale-110 transition-transform"
            />
            <span
              className="font-bold text-lg"
              style={{ fontFamily: "Poppins" }}
            >
              Stratify AI
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm hover:text-cyan-400 transition"
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="text-sm hover:text-cyan-400 transition"
            >
              Services
            </Link>
            <Link
              href="/#platform"
              className="text-sm hover:text-cyan-400 transition"
            >
              Platform
            </Link>
            <a
              href="#form-section"
              className="text-sm text-cyan-400 font-semibold transition"
            >
              Contact
            </a>
          </div>
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* ══════ Hero Section ══════ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div ref={heroRef} className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="hero-anim inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-sm font-medium text-cyan-400">
                Free Consultation Available
              </span>
            </div>

            <h1
              className="hero-anim text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "Poppins" }}
            >
              Let's{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Automate
              </span>{" "}
              Your Business
            </h1>

            <p className="hero-anim text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Ready to scale your sales without hiring more staff? Complete the
              form below and our team will craft a custom AI solution for your
              business.
            </p>

            {/* Scroll indicator */}
            <div className="hero-anim flex flex-col items-center gap-2">
              <a
                href="#form-section"
                className="group flex flex-col items-center gap-1"
              >
                <span className="text-xs text-muted-foreground group-hover:text-cyan-400 transition">
                  Fill the form below
                </span>
                <svg
                  className="w-5 h-5 text-cyan-400 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ Trust Indicators — Glassmorphism 3D Cards ══════ */}
      <section className="py-12 md:py-16">
        <div
          ref={cardsRef}
          className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          style={{ perspective: "1200px" }}
        >
          {[
            {
              icon: Shield,
              title: "100% Secure",
              desc: "Enterprise-grade encryption & GDPR compliant",
              color: "cyan",
            },
            {
              icon: Clock,
              title: "24/7 Active",
              desc: "AI agents that never sleep, never miss a lead",
              color: "purple",
            },
            {
              icon: Zap,
              title: "Quick Setup",
              desc: "Go live in under 7 days with full onboarding",
              color: "cyan",
            },
            {
              icon: CheckCircle,
              title: "Proven ROI",
              desc: "Average 40% increase in qualified lead conversions",
              color: "purple",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="glass-card group relative p-6 rounded-2xl border border-white/[0.08] overflow-hidden cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Glow on hover */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  card.color === "cyan"
                    ? "bg-gradient-to-br from-cyan-500/10 to-transparent"
                    : "bg-gradient-to-br from-purple-500/10 to-transparent"
                }`}
              />
              {/* Inner shine line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    card.color === "cyan"
                      ? "bg-cyan-500/10 border border-cyan-500/20"
                      : "bg-purple-500/10 border border-purple-500/20"
                  }`}
                >
                  <card.icon
                    className={`w-6 h-6 ${
                      card.color === "cyan"
                        ? "text-cyan-400"
                        : "text-purple-400"
                    }`}
                  />
                </div>
                <h3
                  className="font-bold text-lg mb-1"
                  style={{ fontFamily: "Poppins" }}
                >
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ Form Section — Glassmorphism Container ══════ */}
      <section id="form-section" className="py-16 md:py-24">
        <div className="container">
          <div
            ref={formRef}
            className="max-w-3xl mx-auto"
            style={{ perspective: "1000px" }}
          >
            {/* Section heading */}
            <div className="text-center mb-10">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                style={{ fontFamily: "Poppins" }}
              >
                Get{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Started
                </span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Fill out the form below and our AI consultants will get back to
                you within 24 hours with a custom automation strategy.
              </p>
            </div>

            {/* Glassmorphism form container */}
            <div
              ref={formCardRef}
              className="relative rounded-3xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              {/* Animated gradient border */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,217,255,0.12), transparent 40%, transparent 60%, rgba(124,58,237,0.12))",
                }}
              />
              {/* Top shine */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

              {/* Chat Widget CTA */}
              <div
                className="relative p-8 md:p-12 flex flex-col items-center justify-center text-center py-16"
              >
                <div className="max-w-2xl mx-auto">
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "Poppins" }}>
                    Ready to Get Started?
                  </h3>
                  
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    Use the <span className="text-cyan-400 font-semibold">chat widget</span> in the bottom right corner to connect with our team. Simply click "Have a question?" and start a conversation.
                  </p>
                  
                  <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl p-6 mb-8">
                    <p className="text-muted-foreground mb-4">
                      Our AI consultants will respond within <span className="text-cyan-400 font-semibold">24 hours</span> with a custom automation strategy tailored to your business.
                    </p>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span>Instant messaging with our team</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span>Mobile-friendly and secure</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span>Available 24/7 for your questions</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">
                    The chat widget is the fastest way to reach our team and get started with your AI automation journey.
                  </p>
                </div>
            </div>

            {/* Trust note below form */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-cyan-400" /> SSL Encrypted
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-purple-400" /> No
                Commitment Required
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" /> Response Within
                24hrs
              </span>
            </div>

            {/* Privacy / Terms links */}
            <p className="text-center text-xs text-muted-foreground mt-4">
              By submitting, you agree to our{" "}
              <Link
                href="/privacy-policy"
                className="text-cyan-400 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms-of-service"
                className="text-purple-400 hover:underline"
              >
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ══════ Footer ══════ */}
      <footer className="border-t border-white/[0.06] py-8 md:py-12 bg-card/50 backdrop-blur-sm">
        <div className="container">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500" />
                <span
                  className="font-bold"
                  style={{ fontFamily: "Poppins" }}
                >
                  Stratify AI
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Intelligent automation for modern sales teams.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-cyan-400 transition"
                  >
                    Voice Agents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-cyan-400 transition"
                  >
                    Text Agents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-cyan-400 transition"
                  >
                    Website Agents
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/#platform"
                    className="hover:text-cyan-400 transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="#form-section"
                    className="hover:text-cyan-400 transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-cyan-400 transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="hover:text-cyan-400 transition"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a
                    href="#form-section"
                    className="hover:text-cyan-400 transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/[0.06] pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Stratify AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
