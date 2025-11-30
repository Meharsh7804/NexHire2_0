import {
  Sparkles,
  Zap,
  Target,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Award,
} from "lucide-react";
import Marquee from "react-fast-marquee";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24 overflow-hidden">
      {/* Hero Section with Gradient Background */}
      <div className="relative w-full bg-gradient-to-br from-slate-50 via-sky-50/40 to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl"></div>

        <Container className="relative z-10">
          <div className="my-12 md:my-10 space-y-6">
            {/* Badge */}
            <div className="inline-block">
              <div className="px-4 rounded-full bg-sky-100/60 border border-sky-200 backdrop-blur-sm">
                <span className="text-sm font-semibold text-sky-700 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  AI-Powered Interview Prep
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AskSmart
              </span>
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl text-slate-700">
                Master Your Next Interview
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
              Practice with AI-driven coaching, realistic prompts, and instant
              feedback. Build confidence and stand out in every interview.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 pt-6">
              <Link to={"/generate"} className="w-full md:w-auto">
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-900 hover:to-cyan-100 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Practicing Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="w-full md:w-auto border-2 hover:border-sky-500 hover:bg-sky-500"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 md:pt-12">
              <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-xl p-6 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-sky-100 to-sky-50 rounded-lg">
                    <Sparkles className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-xl md:text-3xl font-bold text-slate-900">
                      Empowering Careers
                    </p>
                    <p className="text-sm text-slate-600 font-medium">
                      Trusted by thousands of professionals
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-xl p-6 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-xl md:text-3xl font-bold text-slate-900">
                      AI-Driven Excellence
                    </p>
                    <p className="text-sm text-slate-600 font-medium">
                      Achieve your goals with precision
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Hero Image Section */}
      <Container className="relative z-10 -mt-8 md:-mt-16 mb-12">
        <div className="w-full rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 h-[420px] drop-shadow-2xl overflow-hidden relative group">
          <img
            src="/assets/img/bg.png"
            alt="Practice Studio"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>

          {/* Badge */}
          <div className="absolute top-6 left-6 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 shadow-lg hover:bg-white/30 transition-all">
            <span className="text-white font-semibold flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Practice Studio
            </span>
          </div>

          {/* Info Card */}
          <div className="hidden md:block absolute w-96 bottom-6 right-6 px-6 py-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/50 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-5 h-5 text-teal-600" />
              Get Tailored Questions
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Receive personalized questions and real-time feedback for the
              roles you care about most.
            </p>

            <Button className="mt-4 w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800">
              Start Practicing <Sparkles className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>

      {/* Trusted By Section */}
      <div className="w-full bg-gradient-to-r from-slate-900/95 to-slate-800/95 py-12 my-8">
        <Container>
          <p className="text-center text-slate-400 text-sm font-semibold mb-8 uppercase tracking-wider">
            Trusted by professionals at
          </p>
          <Marquee pauseOnHover speed={40}>
            <MarqueImg img="/assets/img/logo/firebase.png" />
            <MarqueImg img="/assets/img/logo/meet.png" />
            <MarqueImg img="/assets/img/logo/zoom.png" />
            <MarqueImg img="/assets/img/logo/react.png" />
            <MarqueImg img="/assets/img/logo/microsoft.png" />
            <MarqueImg img="/assets/img/logo/meet.png" />
            <MarqueImg img="/assets/img/logo/tailwindcss.png" />
            <MarqueImg img="/assets/img/logo/microsoft.png" />
          </Marquee>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="py-16 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent">
              AskSmart
            </span>
            ?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Grow faster with focused practice sets, actionable AI insights, and
            comprehensive interview simulation.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-slate-100 p-8 hover:border-teal-500 hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 via-transparent to-transparent group-hover:from-teal-50/40 transition-all duration-300"></div>
            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center group-hover:shadow-lg transition-all">
                <Zap className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Real-time Feedback
              </h3>
              <p className="text-slate-600">
                Get instant AI-powered feedback on your answers to improve
                continuously.
              </p>
              <div className="pt-4 flex items-center text-teal-600 font-semibold gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-slate-100 p-8 hover:border-amber-500 hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 via-transparent to-transparent group-hover:from-amber-50/40 transition-all duration-300"></div>
            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center group-hover:shadow-lg transition-all">
                <Target className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Targeted Practice
              </h3>
              <p className="text-slate-600">
                Practice with curated questions tailored to your target role and
                experience level.
              </p>
              <div className="pt-4 flex items-center text-amber-600 font-semibold gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-slate-100 p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-transparent group-hover:from-blue-50/40 transition-all duration-300"></div>
            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:shadow-lg transition-all">
                <BarChart3 className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Track Progress
              </h3>
              <p className="text-slate-600">
                Monitor your improvement with detailed analytics and performance
                metrics.
              </p>
              <div className="pt-4 flex items-center text-blue-600 font-semibold gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Main CTA Section with Image */}
      <Container className="py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          {/* Image Column */}
          <div className="col-span-1 md:col-span-3 overflow-hidden rounded-2xl shadow-2xl group">
            <img
              src="/assets/img/office.jpg"
              alt="Interview Practice"
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content Column */}
          <div className="col-span-1 md:col-span-2 space-y-6 py-8">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Train Like It's{" "}
                <span className="bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent">
                  The Real Thing
                </span>
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Simulate actual interviews, refine your responses, and learn
                what excellence looks like with instant coaching from our AI.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              {[
                "Realistic interview simulations",
                "Instant AI-powered feedback",
                "Performance analytics",
                "Customized practice sets",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link to={"/generate"} className="inline-block w-full md:w-auto">
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Generate Practice Set <Sparkles className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
