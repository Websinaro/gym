'use client'

import { useState } from 'react'

const classes = [
  { name: 'HIIT INFERNO', time: '06:00 AM', duration: '45 min', intensity: 'MAX', spots: 3, trainer: 'Coach Alex' },
  { name: 'POWERLIFTING', time: '07:30 AM', duration: '60 min', intensity: 'HIGH', spots: 8, trainer: 'Coach Marcus' },
  { name: 'YOGA FLOW', time: '09:00 AM', duration: '60 min', intensity: 'LOW', spots: 12, trainer: 'Instructor Priya' },
  { name: 'BOXING CIRCUIT', time: '12:00 PM', duration: '45 min', intensity: 'HIGH', spots: 0, trainer: 'Coach Torres' },
  { name: 'SPIN CYCLE', time: '06:00 PM', duration: '45 min', intensity: 'HIGH', spots: 5, trainer: 'Coach Jamie' },
  { name: 'FUNCTIONAL FIT', time: '07:00 PM', duration: '50 min', intensity: 'MED', spots: 7, trainer: 'Coach Sam' },
]

const plans = [
  {
    name: 'GRIND',
    price: '29',
    period: '/month',
    tag: 'Starter',
    features: ['Full gym access', 'Locker rooms', '2 group classes/week', 'App access'],
    cta: 'Start Grinding',
    highlight: false,
  },
  {
    name: 'FORGE',
    price: '59',
    period: '/month',
    tag: 'Most Popular',
    features: ['Full gym access', 'Unlimited group classes', '1 PT session/month', 'Nutrition guide', 'App + progress tracking', 'Guest passes x2'],
    cta: 'Join The Forge',
    highlight: true,
  },
  {
    name: 'ELITE',
    price: '129',
    period: '/month',
    tag: 'Premium',
    features: ['Everything in Forge', '4 PT sessions/month', 'Body composition scans', 'Meal planning', 'Recovery lounge', 'Priority booking'],
    cta: 'Go Elite',
    highlight: false,
  },
]

const trainers = [
  { name: 'Alex Morgan', role: 'Head Trainer · HIIT & Conditioning', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80', exp: '8 yrs' },
  { name: 'Marcus Wade', role: 'Strength & Powerlifting Coach', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80', exp: '12 yrs' },
  { name: 'Priya Sharma', role: 'Yoga & Mobility Specialist', img: 'https://images.unsplash.com/photo-1609899537878-4b4fb4571e26?w=400&q=80', exp: '6 yrs' },
  { name: 'Torres Rivera', role: 'Boxing & Combat Fitness', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80', exp: '10 yrs' },
]

const intensityColor: Record<string, string> = {
  MAX: 'bg-red/20 text-red border border-red/30',
  HIGH: 'bg-lime/10 text-lime border border-lime/30',
  MED: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30',
  LOW: 'bg-blue-500/10 text-blue-400 border border-blue-500/30',
}

export default function Home() {
  const [activeDay, setActiveDay] = useState('Monday')
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  return (
    <main className="bg-forge text-white overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-forge/95 backdrop-blur-sm border-b border-white/5">
        <div className="font-display text-3xl text-lime tracking-widest">FORGE</div>
        <div className="hidden md:flex gap-8 font-body text-sm tracking-wider uppercase text-white/60">
          {['Classes', 'Trainers', 'Pricing', 'Gallery'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-lime transition-colors">{item}</a>
          ))}
        </div>
        <a href="#join" className="bg-lime text-forge font-heading font-700 text-sm tracking-widest uppercase px-6 py-2.5 hover:bg-lime-dark transition-colors">
          JOIN NOW
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden clip-diagonal">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80"
            alt="Gym interior"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forge via-forge/80 to-forge/40" />
          <div className="stripe-bg absolute inset-0" />
        </div>

        <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto w-full pt-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-lime" />
              <span className="font-body text-lime text-xs tracking-[0.4em] uppercase">Premium Fitness Facility</span>
            </div>
            <h1 className="font-display text-8xl md:text-[11rem] leading-none text-white text-glow-lime">
              FORGE<br />
              <span className="text-lime">YOUR</span><br />
              BEST SELF
            </h1>
            <p className="font-body text-white/60 text-xl mt-8 mb-12 max-w-lg leading-relaxed">
              State-of-the-art equipment, elite trainers, and a community that pushes you further than you thought possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#join" className="bg-lime text-forge font-heading font-700 text-sm tracking-widest uppercase px-10 py-5 hover:bg-lime-dark transition-colors inline-flex items-center gap-3 group">
                START FREE TRIAL
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#classes" className="border border-white/20 text-white font-heading text-sm tracking-widest uppercase px-10 py-5 hover:border-lime hover:text-lime transition-all">
                VIEW CLASSES
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-forge-700 border-t border-white/10 hidden md:flex">
          {[['2,400+', 'ACTIVE MEMBERS'], ['47', 'WEEKLY CLASSES'], ['18', 'ELITE TRAINERS'], ['98%', 'SATISFACTION']].map(([num, label]) => (
            <div key={label} className="flex-1 py-6 text-center border-r border-white/10 last:border-r-0">
              <div className="font-display text-3xl text-lime">{num}</div>
              <div className="font-body text-white/40 text-xs tracking-widest uppercase mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLASSES ── */}
      <section id="classes" className="py-28 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <p className="font-body text-lime text-xs tracking-[0.4em] uppercase mb-3">Schedule</p>
            <h2 className="font-display text-6xl md:text-7xl">CLASS SCHEDULE</h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {days.map(day => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`font-body text-xs tracking-wider uppercase px-4 py-2 transition-all ${
                  activeDay === day ? 'bg-lime text-forge' : 'border border-white/20 text-white/50 hover:border-lime hover:text-lime'
                }`}
              >
                {day.slice(0, 3)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {classes.map((cls) => (
            <div key={cls.name} className="flex items-center justify-between bg-forge-800 border border-white/5 px-6 py-5 hover:border-lime/30 hover:bg-forge-700 transition-all group">
              <div className="flex items-center gap-6">
                <div className="text-center w-20">
                  <div className="font-display text-lime text-2xl">{cls.time.split(' ')[0]}</div>
                  <div className="font-body text-white/30 text-xs">{cls.time.split(' ')[1]}</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div>
                  <div className="font-heading font-700 text-xl tracking-wider group-hover:text-lime transition-colors">{cls.name}</div>
                  <div className="font-body text-white/40 text-sm mt-0.5">{cls.trainer} · {cls.duration}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`font-body text-xs tracking-widest uppercase px-3 py-1 ${intensityColor[cls.intensity]}`}>
                  {cls.intensity}
                </span>
                <div className="text-right hidden sm:block">
                  <div className={`font-body text-sm ${cls.spots === 0 ? 'text-red' : 'text-white/50'}`}>
                    {cls.spots === 0 ? 'FULL' : `${cls.spots} spots`}
                  </div>
                </div>
                <button disabled={cls.spots === 0} className={`font-body text-xs tracking-widest uppercase px-5 py-2 transition-colors ${
                  cls.spots === 0 ? 'bg-white/10 text-white/20 cursor-not-allowed' : 'bg-lime text-forge hover:bg-lime-dark'
                }`}>
                  {cls.spots === 0 ? 'WAITLIST' : 'BOOK'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRAINERS ── */}
      <section id="trainers" className="py-28 bg-forge-800">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="mb-16">
            <p className="font-body text-lime text-xs tracking-[0.4em] uppercase mb-3">The Team</p>
            <h2 className="font-display text-6xl md:text-7xl">ELITE TRAINERS</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trainers.map((t) => (
              <div key={t.name} className="group relative overflow-hidden">
                <img src={t.img} alt={t.name} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-forge via-forge/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="font-heading font-700 text-lg tracking-wider">{t.name}</div>
                  <div className="font-body text-white/50 text-sm mt-0.5">{t.role}</div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-lime" />
                    <span className="font-body text-lime text-xs">{t.exp} experience</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-lime text-xs tracking-[0.4em] uppercase mb-3">Membership</p>
            <h2 className="font-display text-6xl md:text-7xl">CHOOSE YOUR PLAN</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative p-8 border transition-all hover:-translate-y-1 duration-300 ${
                plan.highlight
                  ? 'bg-lime border-lime text-forge border-lime-glow'
                  : 'bg-forge-800 border-white/10 text-white hover:border-lime/30'
              }`}>
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-forge text-lime font-body text-xs tracking-widest uppercase px-4 py-1 border border-lime">
                    {plan.tag}
                  </div>
                )}
                <div className={`font-body text-xs tracking-widest uppercase mb-6 ${plan.highlight ? 'text-forge/60' : 'text-white/40'}`}>{plan.tag}</div>
                <div className="font-display text-6xl">{plan.name}</div>
                <div className="flex items-end gap-1 mt-4 mb-8">
                  <span className="font-display text-5xl">€{plan.price}</span>
                  <span className={`font-body text-sm pb-2 ${plan.highlight ? 'text-forge/60' : 'text-white/40'}`}>{plan.period}</span>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-center gap-3 font-body text-sm">
                      <svg className={`w-4 h-4 shrink-0 ${plan.highlight ? 'text-forge' : 'text-lime'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
                <button className={`w-full font-heading font-700 text-sm tracking-widest uppercase py-4 transition-colors ${
                  plan.highlight
                    ? 'bg-forge text-lime hover:bg-forge-600'
                    : 'bg-lime text-forge hover:bg-lime-dark'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
          <p className="text-center font-body text-white/30 text-sm mt-8">All plans include a 7-day free trial. Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section id="join" className="py-28 px-6 bg-lime text-forge relative overflow-hidden">
        <div className="stripe-bg absolute inset-0 opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-7xl md:text-9xl leading-none">NO EXCUSES.<br />JUST RESULTS.</h2>
          <p className="font-body text-forge/70 text-xl mt-8 mb-12">Start your 7-day free trial today. No credit card required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 bg-white font-body text-sm px-6 py-4 text-forge placeholder-forge/40 outline-none" />
            <button className="bg-forge text-lime font-heading font-700 text-sm tracking-widest uppercase px-8 py-4 hover:bg-forge-600 transition-colors whitespace-nowrap">
              GET STARTED
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-forge-800 border-t border-white/5 py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display text-4xl text-lime">FORGE</div>
          <div className="flex gap-8 font-body text-sm text-white/40">
            {['Privacy', 'Terms', 'FAQ', 'Contact'].map(item => (
              <a key={item} href="#" className="hover:text-lime transition-colors">{item}</a>
            ))}
          </div>
          <p className="font-body text-white/20 text-sm">© 2025 Forge Gym. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
