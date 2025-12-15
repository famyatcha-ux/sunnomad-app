import React, { useState } from 'react';
import { 
  Armchair, 
  Calendar, 
  Smartphone, 
  Tag, 
  Sparkles, 
  UserCheck, 
  Wallet, 
  MessageCircle, 
  Search, 
  Home, 
  ShieldCheck, 
  ClipboardCheck, 
  HeartHandshake, 
  MapPin, 
  CheckCircle, 
  ChevronRight, 
  Send, 
  Coffee, 
  Wifi, 
  Plane, 
  Users, 
  Briefcase, 
  Mail, 
  Phone,
  CreditCard,
  Menu,
  X
} from 'lucide-react';

// --- Shared Components ---

const SunNomadLogo: React.FC<{ className?: string; variant?: 'light' | 'dark' }> = ({ className = "", variant = 'light' }) => {
  const sloganColor = variant === 'light' ? '#DAD5C6' : '#4A4A49'; 
  
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <g stroke="#EF561C" strokeWidth="4" strokeLinecap="round">
          <line x1="100" y1="50" x2="100" y2="10" />
          <line x1="100" y1="50" x2="100" y2="10" transform="rotate(20 100 50)" />
          <line x1="100" y1="50" x2="100" y2="10" transform="rotate(40 100 50)" />
          <line x1="100" y1="50" x2="100" y2="10" transform="rotate(60 100 50)" />
          <line x1="100" y1="50" x2="100" y2="10" transform="rotate(80 100 50)" />
          <line x1="100" y1="50" x2="100" y2="10" transform="rotate(-20 100 50)" />
          <line x1="100" y1="50" x2="100" y2="10" transform="rotate(-40 100 50)" />
          <line x1="100" y1="50" x2="100" y2="10" transform="rotate(-60 100 50)" />
          <line x1="100" y1="50" x2="100" y2="10" transform="rotate(-80 100 50)" />
        </g>
        <path d="M60 70 A 40 40 0 0 1 140 70" fill="#EF561C" />
        <path d="M20 80 L 50 65 L 150 65 L 180 80 L 200 85 L 200 90 L 0 90 L 0 85 Z" fill="#4A4A49" />
        <text x="100" y="108" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="24" fill="#EF561C">
          SunNomad
        </text>
      </svg>
      <div className="text-center mt-[-5px]">
        <span className="text-xs md:text-[13px] lg:text-sm font-heading font-semibold tracking-widest uppercase" style={{ color: sloganColor }}>
          Work. Rest. Shine.
        </span>
      </div>
    </div>
  );
};

interface BenefitBoxProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  accentColorClass: string;
  iconBgClass: string;
}

const BenefitBox: React.FC<BenefitBoxProps> = ({ icon, title, text, accentColorClass, iconBgClass }) => (
  <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl border border-neutral-light/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary group h-full">
    <div className={`mb-6 p-4 rounded-full ${iconBgClass} ${accentColorClass} transition-colors duration-300`}>
      {icon}
    </div>
    <h3 className="text-xl md:text-[22px] lg:text-2xl font-heading font-bold mb-4 text-secondary">{title}</h3>
    <p className="text-[15px] md:text-base lg:text-lg text-secondary/70 leading-relaxed font-normal">{text}</p>
  </div>
);

// --- HomePage Component ---

const HomePage: React.FC<{ onNavigate: (page: 'home' | 'landlords' | 'digitalNomads' | 'about' | 'contact' | 'terms') => void }> = ({ onNavigate }) => {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-12 md:py-20 lg:py-28 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-[70px] font-heading font-extrabold text-primary leading-none mb-4">
              SunNomad
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-secondary mb-8 tracking-wide">
              Work. Rest. Shine.
            </p>
            <h2 className="text-xl md:text-2xl lg:text-[26px] font-heading font-medium text-secondary/90 leading-snug mb-6 max-w-xl">
              Flexible stays for digital nomads and effortless hosting for property owners
            </h2>
            <p className="text-lg md:text-xl text-secondary/70 font-normal leading-relaxed max-w-xl mb-8">
              Connecting stylish Cape Town homes with responsible nomads. Simple, transparent and tailored for medium-term stays (3 to 6 months).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={() => onNavigate('landlords')}
                className="flex items-center justify-center gap-2 px-6 py-4 md:px-8 bg-primary text-white text-[15px] md:text-base lg:text-lg font-heading font-bold rounded-full shadow-lg hover:bg-primary-dark hover:-translate-y-1 transition-all"
              >
                <Home size={20} />
                List Your Property
              </button>
              <button 
                onClick={() => onNavigate('digitalNomads')}
                className="flex items-center justify-center gap-2 px-6 py-4 md:px-8 bg-transparent text-secondary border-2 border-secondary text-[15px] md:text-base lg:text-lg font-heading font-bold rounded-full shadow-sm hover:bg-secondary hover:text-white hover:-translate-y-1 transition-all"
              >
                <Search size={20} />
                Find Your Stay
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group rotate-2 hover:rotate-0 transition-all duration-500 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2000&auto=format&fit=crop" 
                alt="SunNomad Property View" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/5"></div>
            </div>
            <div className="absolute -z-10 top-10 right-10 w-full h-full bg-primary-light/30 rounded-full blur-3xl transform translate-x-10 translate-y-10"></div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US */}
      <section className="py-24 bg-white border-y border-neutral-light/30">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <div className="inline-block mb-8">
            <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-heading font-bold text-secondary mb-4">
              About Us
            </h2>
            <div className="h-1.5 w-24 bg-primary-light rounded-full mx-auto"></div>
          </div>
          <div className="text-[15px] md:text-base lg:text-lg text-secondary/80 font-normal leading-loose space-y-6">
            <p>
              At SunNomad, we believe that home should feel comfortable, inspiring and secure, even when you’re on the move. Based in Cape Town, we specialise in matching high-quality properties with professionals, creatives and remote workers who need stays of 3 to 6 months.
            </p>
            <button 
              onClick={() => onNavigate('about')}
              className="mt-4 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-full transition-colors text-sm font-bold uppercase tracking-wide"
            >
              Read Our Full Story
            </button>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-heading font-bold text-secondary mb-6">Why Choose SunNomad</h2>
            <p className="text-xl md:text-[22px] lg:text-2xl text-secondary/70 font-normal max-w-3xl mx-auto leading-relaxed">
              We provide a trusted platform that connects verified digital nomads with homeowners offering short to mid-term stays. Our goal is to make the process simple, transparent, and reliable for both guests and property owners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-light/50 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full text-primary mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl md:text-[22px] lg:text-2xl font-heading font-bold mb-3 text-secondary">Verified Screening</h3>
              <p className="text-[15px] md:text-base lg:text-lg text-secondary/70 font-normal">We rigorously screen every guest and property to ensure safety, reliability, and peace of mind for everyone.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-light/50 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full text-primary mb-6">
                <ClipboardCheck size={32} />
              </div>
              <h3 className="text-xl md:text-[22px] lg:text-2xl font-heading font-bold mb-3 text-secondary">Logistics Support</h3>
              <p className="text-[15px] md:text-base lg:text-lg text-secondary/70 font-normal">From contracts to guest coordination, we manage every operational detail so you can enjoy a seamless hosting and living experience.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-light/50 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full text-primary mb-6">
                <HeartHandshake size={32} />
              </div>
              <h3 className="text-xl md:text-[22px] lg:text-2xl font-heading font-bold mb-3 text-secondary">Transparent Experience</h3>
              <p className="text-[15px] md:text-base lg:text-lg text-secondary/70 font-normal">No hidden fees or surprises. We facilitate open communication and clear agreements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIGITAL NOMADS */}
      <section className="py-24 bg-white border-t border-neutral-light/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-heading font-bold text-secondary mb-4">Digital Nomads</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-80"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitBox 
              icon={<Armchair size={32} strokeWidth={1.5} />}
              title="Fully Furnished Homes"
              text="Move into a clean, comfortable space equipped for daily living."
              accentColorClass="text-primary"
              iconBgClass="bg-primary/10"
            />
            <BenefitBox 
              icon={<Calendar size={32} strokeWidth={1.5} />}
              title="Flexible Stays"
              text="Stay from three to six months, with the option to extend when available."
              accentColorClass="text-primary"
              iconBgClass="bg-primary/10"
            />
            <BenefitBox 
              icon={<Smartphone size={32} strokeWidth={1.5} />}
              title="Easy Online Application"
              text="Apply directly from your phone or laptop, quick and secure."
              accentColorClass="text-primary"
              iconBgClass="bg-primary/10"
            />
            <BenefitBox 
              icon={<Tag size={32} strokeWidth={1.5} />}
              title="Transparent Pricing"
              text="Clear terms upfront so you always know what to expect."
              accentColorClass="text-primary"
              iconBgClass="bg-primary/10"
            />
          </div>
          <div className="mt-12 text-center">
            <button 
              onClick={() => onNavigate('digitalNomads')}
              className="px-6 py-4 md:px-8 bg-white border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-full font-heading font-bold shadow-sm text-[15px] md:text-base lg:text-lg"
            >
              Learn More for Digital Nomads
            </button>
          </div>
        </div>
      </section>

      {/* 5. LANDLORDS (Preview on Home) */}
      <section className="py-24 bg-primary/5 border-t border-primary/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-heading font-bold text-secondary mb-4">Landlords</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-80"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitBox 
              icon={<Sparkles size={32} strokeWidth={1.5} />}
              title="Hands Free Hosting"
              text="We handle enquiries, screening and coordination so your property earns without extra effort."
              accentColorClass="text-primary"
              iconBgClass="bg-primary/10"
            />
            <BenefitBox 
              icon={<UserCheck size={32} strokeWidth={1.5} />}
              title="Vetted Digital Nomads"
              text="Every guest is screened to ensure respect, reliability and care for your home."
              accentColorClass="text-primary"
              iconBgClass="bg-primary/10"
            />
            <BenefitBox 
              icon={<Wallet size={32} strokeWidth={1.5} />}
              title="No Service Fees"
              text="You keep your full rental income. Our admin fee is covered separately, allowing owners to benefit without added costs."
              accentColorClass="text-primary"
              iconBgClass="bg-primary/10"
            />
            <BenefitBox 
              icon={<MessageCircle size={32} strokeWidth={1.5} />}
              title="Simple Communication"
              text="We manage the day to day coordination so hosting feels effortless."
              accentColorClass="text-primary"
              iconBgClass="bg-primary/10"
            />
          </div>
          <div className="mt-12 text-center">
            <button 
              onClick={() => onNavigate('landlords')}
              className="px-6 py-4 md:px-8 bg-white border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-full font-heading font-bold shadow-sm text-[15px] md:text-base lg:text-lg"
            >
              Learn More for Landlords
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

// --- AboutPage Component ---

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      {/* 1. Hero Section (Updated to Split Layout) */}
      <section className="py-20 bg-background px-6 md:px-12 border-b border-neutral-light/30">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text */}
            <div className="w-full lg:w-1/2 text-left">
              <h1 className="text-4xl md:text-[42px] lg:text-5xl font-heading font-bold mb-6 text-secondary">
                About SunNomad
              </h1>
              <p className="text-xl md:text-[22px] lg:text-2xl text-secondary/80 font-light leading-relaxed mb-6">
                Cape Town stays made simple, safe, and inspiring.
              </p>
            </div>
            
            {/* Image */}
            <div className="w-full lg:w-1/2">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white group">
                 <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2000&auto=format&fit=crop" alt="Stylish Cape Town Apartment" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
               </div>
               <div className="absolute -z-10 top-10 right-10 w-full h-full bg-primary-light/20 rounded-full blur-3xl transform translate-x-8 translate-y-8"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why SunNomad Section (New) */}
      <section className="py-20 bg-white border-b border-neutral-light/30">
        <div className="container mx-auto px-6 md:px-12">
           <div className="text-center mb-16">
            <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-heading font-bold text-secondary mb-4">Why SunNomad</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <BenefitBox icon={<MapPin size={32}/>} title="Cape Town Based Team" text="Local expertise available when you need it." accentColorClass="text-primary" iconBgClass="bg-primary/10" />
             <BenefitBox icon={<UserCheck size={32}/>} title="Trusted Network" text="Trusted homeowners and verified digital nomads." accentColorClass="text-primary" iconBgClass="bg-primary/10" />
             <BenefitBox icon={<Sparkles size={32}/>} title="Concierge Coordination" text="We handle the details so you can focus on living." accentColorClass="text-primary" iconBgClass="bg-primary/10" />
             <BenefitBox icon={<Wallet size={32}/>} title="No Hidden Fees" text="Transparent pricing for both owners and guests." accentColorClass="text-primary" iconBgClass="bg-primary/10" />
             <BenefitBox icon={<Wifi size={32}/>} title="Work Ready Homes" text="Safe, connected spaces designed for productivity." accentColorClass="text-primary" iconBgClass="bg-primary/10" />
             <BenefitBox icon={<HeartHandshake size={32}/>} title="Local Support" text="Dedicated assistance throughout your stay." accentColorClass="text-primary" iconBgClass="bg-primary/10" />
           </div>
        </div>
      </section>

      {/* 3. Our Story Section */}
      <section className="py-20 md:py-28 bg-background px-6 md:px-12 border-b border-neutral-light/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="relative">
                <div className="absolute top-4 -left-4 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop" 
                  alt="Digital Nomad Working" 
                  className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3]" 
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">Our Story</h2>
              <p className="text-[15px] md:text-base lg:text-lg text-secondary/80 leading-loose">
                SunNomad was created to simplify the way digital nomads and global travelers find short to mid-term stays in Cape Town. We connect verified tenants with homeowners who are open to hosting guests, making the search for a temporary home straightforward and reliable. Our focus is on connecting people safely and transparently, so travelers can find a place to stay and homeowners can confidently list their properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Mission Section */}
      <section className="py-20 md:py-28 bg-white px-6 md:px-12 border-b border-neutral-light/30">
        <div className="container mx-auto max-w-6xl">
           <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
             <div className="w-full md:w-1/2">
               <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] rotate-1 hover:rotate-0 transition-all duration-500">
                 <img 
                   src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1600&auto=format&fit=crop" 
                   alt="Cape Town Lifestyle" 
                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                 />
               </div>
             </div>
             <div className="w-full md:w-1/2 text-left">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">Our Mission</h2>
                <div className="h-1 w-20 bg-primary mb-8 rounded-full"></div>
                <p className="text-[15px] md:text-base lg:text-lg text-secondary/80 leading-loose">
                   To make every stay in Cape Town safe, comfortable, and inspiring, with a seamless experience that blends professional convenience and a touch of local warmth.
                </p>
             </div>
           </div>
        </div>
      </section>

      {/* 5. Our Promise Section */}
      <section className="py-24 bg-background px-6 md:px-12">
        <div className="container mx-auto max-w-4xl text-center">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">Our Promise</h2>
                <p className="text-xl text-secondary/70 max-w-2xl mx-auto">
                  We deliver transparency, reliability, and genuine care for every guest and property owner.
                </p>
            </div>
            
            <div className="relative bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-neutral-light/50">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-primary text-white p-4 rounded-full shadow-lg">
                   <HeartHandshake size={32} />
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1 text-left">
                        <p className="text-[15px] md:text-base lg:text-lg text-secondary/80 leading-loose">
                           Our goal is to provide peace of mind, smooth coordination, and a stress-free stay from start to finish. Whether you are listing your home or finding your temporary sanctuary, we promise to treat your needs with the highest level of integrity.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                         <img 
                           src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=1000&auto=format&fit=crop" 
                           alt="Peace of Mind" 
                           className="w-full h-64 object-cover rounded-xl"
                         />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-secondary text-white text-center">
        <div className="container mx-auto px-6">
           <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-heading font-bold mb-6">Join the SunNomad Community</h2>
           <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-neutral-light text-[15px] md:text-base lg:text-lg">
             <a href="mailto:hello@sunnomad.co.za" className="flex items-center gap-2 hover:text-white transition-colors">
               <span className="p-2 bg-white/10 rounded-full"><MessageCircle size={18} /></span>
               hello@sunnomad.co.za
             </a>
             <div className="flex items-center gap-2">
               <span className="p-2 bg-white/10 rounded-full"><MapPin size={18} /></span>
               Cape Town, South Africa
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

// --- DigitalNomadPage Component ---

const DigitalNomadPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setFormSubmitted(true);
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 1000);
  };

  return (
    <div className="animate-fade-in-up">
      {/* Hero with Image Split */}
      <section className="py-20 bg-background px-6 md:px-12 border-b border-neutral-light/30">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text */}
            <div className="w-full lg:w-1/2 text-left">
              <h1 className="text-4xl md:text-[42px] lg:text-5xl font-heading font-bold mb-6 text-secondary">
                Stay with Confidence
              </h1>
              <p className="text-xl md:text-[22px] lg:text-2xl text-secondary/80 font-light leading-relaxed mb-6">
                Cape Town is one of the world’s most inspiring remote work destinations. Whether you’re here for a few months or the full summer season, SunNomad ensures your stay is comfortable, connected, and stress-free.
              </p>
              <button 
                onClick={() => document.getElementById('nomad-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-4 bg-primary text-white text-[15px] md:text-base lg:text-lg font-heading font-bold rounded-full shadow-lg hover:bg-primary-dark hover:-translate-y-1 transition-all"
              >
                Find My Stay
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Image */}
            <div className="w-full lg:w-1/2">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white group">
                 <img src="https://i.imgur.com/kXW2349.jpeg" alt="Digital Nomad Workspace with View" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
               </div>
               {/* Decorative blob */}
               <div className="absolute -z-10 top-10 right-10 w-full h-full bg-primary-light/20 rounded-full blur-3xl transform translate-x-8 translate-y-8"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Concierge Services */}
      <section className="py-20 bg-white px-6 md:px-12 border-y border-neutral-light/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-heading font-bold text-secondary mb-4">Our Concierge Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <BenefitBox icon={<ShieldCheck size={32} />} title="Verified & Trusted" text="We work with vetted homeowners to ensure quality and safety." accentColorClass="text-primary" iconBgClass="bg-primary/10" />
            <BenefitBox icon={<Calendar size={32} />} title="Flexible Rentals" text="Convenient 3–6 month rental periods that suit your schedule." accentColorClass="text-primary" iconBgClass="bg-primary/10" />
            <BenefitBox icon={<Wifi size={32} />} title="Work-Friendly" text="High-speed Wi-Fi and dedicated workspaces in every home." accentColorClass="text-primary" iconBgClass="bg-primary/10" />
            <BenefitBox icon={<HeartHandshake size={32} />} title="Dedicated Assistance" text="Ongoing support during your stay for total peace of mind." accentColorClass="text-primary" iconBgClass="bg-primary/10" />
            <BenefitBox icon={<CreditCard size={32} />} title="Foreign Currency Payments Accepted" text="We accept foreign currency payments for rental bookings, making it easier for international guests to secure their stay quickly and conveniently." accentColorClass="text-primary" iconBgClass="bg-primary/10" />
            <BenefitBox icon={<Armchair size={32} />} title="Furnished Apartments and Homes" text="All our listings come fully furnished, thoughtfully designed, and ready to live in. From comfortable work spaces to cozy living areas, each property is equipped to make your medium-term stay in Cape Town seamless and hassle-free." accentColorClass="text-primary" iconBgClass="bg-primary/10" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-heading font-bold text-secondary mb-4">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
             {/* Step 1 */}
             <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center font-heading font-bold text-2xl shadow-md mb-6">1</div>
                <h3 className="text-xl md:text-[22px] lg:text-2xl font-heading font-bold mb-2">Apply</h3>
                <p className="text-[15px] md:text-base lg:text-lg text-secondary/70">Complete our Digital Nomad Application Form below.</p>
             </div>
             {/* Step 2 */}
             <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center font-heading font-bold text-2xl shadow-md mb-6">2</div>
                <h3 className="text-xl md:text-[22px] lg:text-2xl font-heading font-bold mb-2">Review</h3>
                <p className="text-[15px] md:text-base lg:text-lg text-secondary/70">Our concierge team reviews your request.</p>
             </div>
             {/* Step 3 */}
             <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center font-heading font-bold text-2xl shadow-md mb-6">3</div>
                <h3 className="text-xl md:text-[22px] lg:text-2xl font-heading font-bold mb-2">Select</h3>
                <p className="text-[15px] md:text-base lg:text-lg text-secondary/70">We send a list of handpicked properties that match your preferences.</p>
             </div>
             {/* Step 4 */}
             <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center font-heading font-bold text-2xl shadow-md mb-6">4</div>
                <h3 className="text-xl md:text-[22px] lg:text-2xl font-heading font-bold mb-2">Confirm</h3>
                <p className="text-[15px] md:text-base lg:text-lg text-secondary/70">You confirm your stay and we handle all coordination.</p>
             </div>
             
             {/* Connecting Line (Desktop) */}
             <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-neutral-light/50 -z-0"></div>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-[15px] md:text-base lg:text-lg text-secondary/80 font-bold">
              “No agents. No hidden fees. Just effortless stays.”
            </p>
          </div>
        </div>
      </section>

      {/* Digital Nomad Application Form */}
      <section id="nomad-form" className="py-24 bg-white border-t border-neutral-light/30">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-heading font-bold text-secondary mb-2">Digital Nomad Application Form</h2>
            <p className="text-secondary/60 text-[15px] md:text-base lg:text-lg">Tell us what you need, and we’ll find the perfect match.</p>
          </div>

          {formSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center animate-fade-in-up">
              <div className="inline-flex p-4 bg-green-100 rounded-full text-green-600 mb-6">
                <CheckCircle size={48} />
              </div>
              <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-heading font-bold text-secondary mb-4">Thank you!</h3>
              <p className="text-[15px] md:text-base lg:text-lg text-secondary/80">Our team will email you a selection of properties that match your preferences within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6 bg-background p-8 md:p-10 rounded-2xl shadow-lg border border-neutral-light/50">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Full Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px] md:text-base lg:text-lg" placeholder="Jane Smith" />
                </div>
                <div>
                  <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px] md:text-base lg:text-lg" placeholder="jane@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">WhatsApp Number</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px] md:text-base lg:text-lg" placeholder="+1 555 123 4567" />
                </div>
                <div>
                  <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Country of Origin</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px] md:text-base lg:text-lg" placeholder="Germany, USA, etc." />
                </div>
              </div>

              {/* Added Zoom and Teams Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border border-neutral-light rounded-lg bg-background/30">
                   <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Zoom Contact</label>
                   <div className="flex gap-4">
                     <label className="flex items-center gap-2 cursor-pointer">
                       <input type="radio" name="zoom_contact_nomad" className="text-primary focus:ring-primary w-5 h-5 accent-[#EF561C]" />
                       <span className="text-[15px] md:text-base">Yes</span>
                     </label>
                     <label className="flex items-center gap-2 cursor-pointer">
                       <input type="radio" name="zoom_contact_nomad" className="text-primary focus:ring-primary w-5 h-5 accent-[#EF561C]" />
                       <span className="text-[15px] md:text-base">No</span>
                     </label>
                   </div>
                </div>
                <div className="p-4 border border-neutral-light rounded-lg bg-background/30">
                   <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Microsoft Teams Contact</label>
                   <div className="flex gap-4">
                     <label className="flex items-center gap-2 cursor-pointer">
                       <input type="radio" name="teams_contact_nomad" className="text-primary focus:ring-primary w-5 h-5 accent-[#EF561C]" />
                       <span className="text-[15px] md:text-base">Yes</span>
                     </label>
                     <label className="flex items-center gap-2 cursor-pointer">
                       <input type="radio" name="teams_contact_nomad" className="text-primary focus:ring-primary w-5 h-5 accent-[#EF561C]" />
                       <span className="text-[15px] md:text-base">No</span>
                     </label>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Length of Stay</label>
                   <div className="relative">
                     <select className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white text-[15px] md:text-base lg:text-lg">
                       <option>3 Months</option>
                       <option>4 Months</option>
                       <option>5 Months</option>
                       <option>6 Months</option>
                       <option>6+ Months</option>
                     </select>
                     <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-secondary/50">
                       <ChevronRight className="rotate-90" size={16} />
                     </div>
                   </div>
                </div>
                <div>
                   <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Type of Property</label>
                   <div className="relative">
                     <select className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white text-[15px] md:text-base lg:text-lg">
                       <option>Apartment</option>
                       <option>House</option>
                       <option>Studio</option>
                       <option>Any</option>
                     </select>
                     <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-secondary/50">
                       <ChevronRight className="rotate-90" size={16} />
                     </div>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Preferred Location</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px] md:text-base lg:text-lg" placeholder="e.g. City Bowl, Sea Point..." />
                </div>
                <div>
                  <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Budget Range (Monthly)</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px] md:text-base lg:text-lg" placeholder="e.g. R20,000 - R35,000" />
                </div>
              </div>

              <div>
                <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Any Special Requests</label>
                <textarea className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all h-24 resize-none text-[15px] md:text-base lg:text-lg" placeholder="Balcony view, specific gym nearby, pet friendly..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-primary text-white text-[15px] md:text-base lg:text-lg font-heading font-bold rounded-full shadow-lg hover:bg-primary-dark hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mt-4">
                <Search size={20} />
                Secure My Stay
              </button>

            </form>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-secondary text-white text-center">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-neutral-light text-[15px] md:text-base lg:text-lg">
             <a href="mailto:rental@sunnomad.co.za" className="flex items-center gap-2 hover:text-white transition-colors">
               <span className="p-2 bg-white/10 rounded-full"><MessageCircle size={18} /></span>
               rental@sunnomad.co.za
             </a>
             <div className="flex items-center gap-2">
               <span className="p-2 bg-white/10 rounded-full"><MapPin size={18} /></span>
               Cape Town, South Africa
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

// --- LandlordPage Component ---

const LandlordPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setFormSubmitted(true);
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 1000);
  };

  return (
    <div className="animate-fade-in-up">
      {/* Hero with Image Split (Updated Layout) */}
      <section className="py-20 bg-background px-6 md:px-12 border-b border-neutral-light/30">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text */}
            <div className="w-full lg:w-1/2 text-left">
              <h1 className="text-4xl md:text-[42px] lg:text-5xl font-heading font-bold mb-6 text-secondary">
                Earn Effortless Income from Your Cape Town Home
              </h1>
              <p className="text-xl md:text-[22px] lg:text-2xl text-secondary/80 font-light leading-relaxed mb-6">
                 Join SunNomad’s network of trusted property owners and unlock reliable income while your home is cared for by responsible, verified digital nomads.
              </p>
              <button 
                onClick={() => document.getElementById('landlord-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-4 bg-primary text-white text-[15px] md:text-base lg:text-lg font-heading font-bold rounded-full shadow-lg hover:bg-primary-dark hover:-translate-y-1 transition-all"
              >
                List My Property
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Image */}
            <div className="w-full lg:w-1/2">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white group">
                 <img src="https://i.imgur.com/yOx86ur.jpeg" alt="SunNomad Hosting" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
               </div>
               {/* Decorative blob */}
               <div className="absolute -z-10 top-10 right-10 w-full h-full bg-primary-light/20 rounded-full blur-3xl transform translate-x-8 translate-y-8"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why List */}
      <section className="py-20 bg-white border-y border-neutral-light/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-heading font-bold text-secondary mb-4">Why List with SunNomad</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <BenefitBox icon={<UserCheck size={32} />} title="Trusted Digital Nomads" text="Verified digital nomads and remote professionals." accentColorClass="text-primary" iconBgClass="bg-primary/10" />
            <BenefitBox icon={<Wallet size={32} />} title="No Hidden Fees" text="Transparent terms. You keep your full rental income." accentColorClass="text-primary" iconBgClass="bg-primary/10" />
            <BenefitBox icon={<Sparkles size={32} />} title="Stress-Free Hosting" text="Coordination, screening and logistics handled for you." accentColorClass="text-primary" iconBgClass="bg-primary/10" />
            <BenefitBox icon={<Calendar size={32} />} title="Flexible Terms" text="List only when it suits you. Perfect for seasonal travelers." accentColorClass="text-primary" iconBgClass="bg-primary/10" />
            <BenefitBox icon={<MapPin size={32} />} title="Local Expertise" text="Deep understanding of Cape Town nomad demand." accentColorClass="text-primary" iconBgClass="bg-primary/10" />
            <BenefitBox icon={<Coffee size={32} />} title="Hands-Off Convenience" text="You stay in control while we manage the process." accentColorClass="text-primary" iconBgClass="bg-primary/10" />
          </div>
        </div>
      </section>

      {/* AIRBNB COMPARISON (New Section) */}
      <section className="py-20 bg-background border-b border-neutral-light/30">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-heading font-bold text-secondary mb-4">
              Airbnb vs SunNomad: What’s Better for Property Owners?
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-neutral-light/50">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="p-4 md:p-6 font-heading font-bold text-lg md:text-xl w-1/3">Feature</th>
                  <th className="p-4 md:p-6 font-heading font-bold text-lg md:text-xl bg-primary w-1/3">SunNomad</th>
                  <th className="p-4 md:p-6 font-heading font-bold text-lg md:text-xl w-1/3 text-neutral-light">Airbnb</th>
                </tr>
              </thead>
              <tbody className="text-base md:text-lg text-secondary/80">
                {[
                  { f: "Type of Guests", s: "Verified professionals staying 3 to 6 months", a: "Short term holiday guests" },
                  { f: "Income Stability", s: "Predictable monthly income", a: "Seasonal and unpredictable" },
                  { f: "Guest Turnover", s: "Low, fewer check ins and outs", a: "High turnover, more wear and tear" },
                  { f: "Hosting Effort", s: "Low effort, concierge support", a: "High effort unless paying a manager" },
                  { f: "Fees", s: "Fully transparent", a: "Platform fees and deductions" },
                  { f: "Property Impact", s: "Minimal due to longer stays", a: "Higher due to guest volume" },
                  { f: "Ideal For", s: "Owners wanting stability and respect", a: "Owners willing to host short stays" }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-background/50" : "bg-white"}>
                    <td className="p-4 md:p-6 font-bold text-secondary border-b border-neutral-light/30">{row.f}</td>
                    <td className="p-4 md:p-6 font-medium text-primary border-b border-neutral-light/30 bg-primary/5">{row.s}</td>
                    <td className="p-4 md:p-6 border-b border-neutral-light/30">{row.a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works (Changed to bg-white for alternating contrast) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-heading font-bold text-secondary mb-4">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
             {/* Step 1 */}
             <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center font-heading font-bold text-2xl shadow-md mb-6">1</div>
                <h3 className="text-xl md:text-[22px] lg:text-2xl font-heading font-bold mb-2">Complete Form</h3>
                <p className="text-[15px] md:text-base lg:text-lg text-secondary/70">Complete the Property Owner Form below.</p>
             </div>
             {/* Step 2 */}
             <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center font-heading font-bold text-2xl shadow-md mb-6">2</div>
                <h3 className="text-xl md:text-[22px] lg:text-2xl font-heading font-bold mb-2">Review</h3>
                <p className="text-[15px] md:text-base lg:text-lg text-secondary/70">Our team reviews your property and contacts you.</p>
             </div>
             {/* Step 3 */}
             <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center font-heading font-bold text-2xl shadow-md mb-6">3</div>
                <h3 className="text-xl md:text-[22px] lg:text-2xl font-heading font-bold mb-2">List & Promote</h3>
                <p className="text-[15px] md:text-base lg:text-lg text-secondary/70">If approved, we list and promote your property to verified digital nomads.</p>
             </div>
             {/* Step 4 */}
             <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center font-heading font-bold text-2xl shadow-md mb-6">4</div>
                <h3 className="text-xl md:text-[22px] lg:text-2xl font-heading font-bold mb-2">Earn Income</h3>
                <p className="text-[15px] md:text-base lg:text-lg text-secondary/70">You earn income while we coordinate communication and screening.</p>
             </div>
             
             {/* Connecting Line (Desktop) */}
             <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-neutral-light/50 -z-0"></div>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-[15px] md:text-base lg:text-lg text-secondary/80 italic">
              “SunNomad is not a rental agent or property manager. It is a concierge coordination service built on trust, simplicity and transparency.”
            </p>
          </div>
        </div>
      </section>

      {/* Property Owner Form (Changed to bg-background for alternating contrast) */}
      <section id="landlord-form" className="py-24 bg-background border-t border-neutral-light/30">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-heading font-bold text-secondary mb-2">Property Owner Form</h2>
            <p className="text-secondary/60 text-[15px] md:text-base lg:text-lg">Tell us about your property to get started.</p>
          </div>

          {formSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center animate-fade-in-up">
              <div className="inline-flex p-4 bg-green-100 rounded-full text-green-600 mb-6">
                <CheckCircle size={48} />
              </div>
              <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-heading font-bold text-secondary mb-4">Thank you!</h3>
              <p className="text-[15px] md:text-base lg:text-lg text-secondary/80">Our team will contact you within 24 hours with next steps.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6 bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-neutral-light/50">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Full Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px] md:text-base lg:text-lg" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px] md:text-base lg:text-lg" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">WhatsApp Number</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px] md:text-base lg:text-lg" placeholder="+27 82 123 4567" />
                </div>
                <div>
                   <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Type of Property</label>
                   <div className="relative">
                     <select className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white text-[15px] md:text-base lg:text-lg text-secondary">
                       <option>Apartment</option>
                       <option>House</option>
                       <option>Studio</option>
                       <option>Villa</option>
                     </select>
                     <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-secondary/50">
                       <ChevronRight className="rotate-90" size={16} />
                     </div>
                   </div>
                </div>
              </div>

              <div>
                <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Property Address</label>
                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px] md:text-base lg:text-lg" placeholder="Street, Suburb, City" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Suburb or Area</label>
                   <input required type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px] md:text-base lg:text-lg" placeholder="e.g. Sea Point" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 border border-neutral-light rounded-lg bg-background/30">
                     <label className="block text-sm md:text-[15px] font-bold text-secondary mb-2">Zoom Contact</label>
                     <div className="flex gap-3 text-[15px] md:text-base">
                       <label className="flex items-center gap-2 cursor-pointer">
                         <input type="radio" name="zoom_contact" className="text-primary focus:ring-primary w-4 h-4 accent-[#EF561C]" />
                         <span>Yes</span>
                       </label>
                       <label className="flex items-center gap-2 cursor-pointer">
                         <input type="radio" name="zoom_contact" className="text-primary focus:ring-primary w-4 h-4 accent-[#EF561C]" />
                         <span>No</span>
                       </label>
                     </div>
                  </div>
                  <div className="p-3 border border-neutral-light rounded-lg bg-background/30">
                     <label className="block text-sm md:text-[15px] font-bold text-secondary mb-2">Teams Contact</label>
                     <div className="flex gap-3 text-[15px] md:text-base">
                       <label className="flex items-center gap-2 cursor-pointer">
                         <input type="radio" name="teams_contact" className="text-primary focus:ring-primary w-4 h-4 accent-[#EF561C]" />
                         <span>Yes</span>
                       </label>
                       <label className="flex items-center gap-2 cursor-pointer">
                         <input type="radio" name="teams_contact" className="text-primary focus:ring-primary w-4 h-4 accent-[#EF561C]" />
                         <span>No</span>
                       </label>
                     </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Available Dates</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px] md:text-base lg:text-lg" placeholder="e.g. Nov 2024 - Mar 2025" />
                </div>
                <div>
                  <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Monthly Rate (Optional)</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[15px] md:text-base lg:text-lg" placeholder="R 25,000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Property Status</label>
                   <div className="flex gap-4 pt-3 text-[15px] md:text-base lg:text-lg">
                     <label className="flex items-center gap-2 cursor-pointer">
                       <input type="radio" name="furnished" className="text-primary focus:ring-primary w-5 h-5" defaultChecked />
                       <span>Furnished</span>
                     </label>
                     <label className="flex items-center gap-2 cursor-pointer">
                       <input type="radio" name="furnished" className="text-primary focus:ring-primary w-5 h-5" />
                       <span>Unfurnished</span>
                     </label>
                   </div>
                 </div>
                 <div>
                   <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Parking Availability</label>
                   <div className="relative">
                     <select className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white text-[15px] md:text-base lg:text-lg text-secondary">
                       <option value="" disabled selected>Select option</option>
                       <option>Secure Garage</option>
                       <option>Secure Off-street</option>
                       <option>On-street</option>
                       <option>None</option>
                     </select>
                     <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-secondary/50">
                       <ChevronRight className="rotate-90" size={16} />
                     </div>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Inverter / Backup Power</label>
                   <div className="relative">
                     <select className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white text-[15px] md:text-base lg:text-lg text-secondary">
                       <option value="" disabled selected>Select option</option>
                       <option>Full Solar/Battery (No Loadshedding)</option>
                       <option>Inverter (Essentials/WiFi)</option>
                       <option>UPS (WiFi only)</option>
                       <option>None</option>
                     </select>
                     <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-secondary/50">
                       <ChevronRight className="rotate-90" size={16} />
                     </div>
                   </div>
                 </div>
                 <div>
                   <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Workspace Suitability</label>
                   <div className="relative">
                     <select className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white text-[15px] md:text-base lg:text-lg text-secondary">
                       <option value="" disabled selected>Select option</option>
                       <option>Dedicated Home Office</option>
                       <option>Dedicated Desk</option>
                       <option>Dining Table / Common Area</option>
                     </select>
                     <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-secondary/50">
                       <ChevronRight className="rotate-90" size={16} />
                     </div>
                   </div>
                 </div>
              </div>

              <div>
                <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Other Amenities</label>
                <textarea className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all h-24 resize-none text-[15px] md:text-base lg:text-lg" placeholder="e.g. Pool, Garden, Pet friendly, Ocean view..."></textarea>
              </div>

              <div>
                <label className="block text-[15px] md:text-base lg:text-lg font-bold text-secondary mb-2">Any Notes or Requirements</label>
                <textarea className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all h-24 resize-none text-[15px] md:text-base lg:text-lg" placeholder="Any specific requirements for digital nomads?"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-primary text-white text-[15px] md:text-base lg:text-lg font-heading font-bold rounded-full shadow-lg hover:bg-primary-dark hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mt-4">
                <Send size={20} />
                Register Your Property
              </button>

            </form>
          )}
        </div>
      </section>

      {/* Small Concluding Contact Block */}
      <section className="py-8 bg-secondary border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
           <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-neutral-light text-sm md:text-base">
             <span className="font-heading font-bold text-white text-lg">Questions?</span>
             <div className="hidden md:block w-1 h-1 bg-primary rounded-full"></div>
             <a href="mailto:property@sunnomad.co.za" className="flex items-center gap-2 hover:text-primary transition-colors">
               <Mail size={16} />
               property@sunnomad.co.za
             </a>
             <div className="hidden md:block w-1 h-1 bg-primary rounded-full"></div>
             <div className="flex items-center gap-2">
               <Phone size={16} />
               083 414 2591 (Call or WhatsApp)
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

// --- ContactPage Component ---

const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setFormSubmitted(true);
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 1000);
  };

  return (
    <div className="animate-fade-in-up">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1595511890498-8b396d2a8a5b?q=80&w=2000&auto=format&fit=crop" 
            alt="Table Mountain Sunset from Beach" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/50 mix-blend-multiply"></div>
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 drop-shadow-md">
             We’re Here to Help
           </h1>
           <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
             Whether you’re a digital nomad searching for your next stay or a property owner looking to earn income effortlessly, our team is ready to assist.
           </p>
        </div>
      </section>

      {/* 2. Contact Content */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Contact Information */}
            <div className="space-y-12">
               <div>
                 <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6 relative inline-block">
                   Contact Us
                   <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
                 </h2>
                 <p className="text-[15px] md:text-base lg:text-lg text-secondary/80 leading-loose">
                   Have a question, suggestion, or just want to say hello? We’d love to hear from you. Reach out to the specific department below for the fastest response.
                 </p>
               </div>

               <div className="space-y-6">
                 <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-neutral-light/50 hover:shadow-md transition-shadow">
                   <div className="p-3 bg-primary/10 text-primary rounded-full shrink-0">
                     <Mail size={24} />
                   </div>
                   <div>
                     <h3 className="text-lg font-heading font-bold text-secondary mb-1">Digital Nomads</h3>
                     <a href="mailto:rental@sunnomad.co.za" className="text-secondary/70 hover:text-primary transition-colors">rental@sunnomad.co.za</a>
                   </div>
                 </div>

                 <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-neutral-light/50 hover:shadow-md transition-shadow">
                   <div className="p-3 bg-primary/10 text-primary rounded-full shrink-0">
                     <Home size={24} />
                   </div>
                   <div>
                     <h3 className="text-lg font-heading font-bold text-secondary mb-1">Property Owners</h3>
                     <a href="mailto:property@sunnomad.co.za" className="text-secondary/70 hover:text-primary transition-colors">property@sunnomad.co.za</a>
                   </div>
                 </div>

                 <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-neutral-light/50 hover:shadow-md transition-shadow">
                   <div className="p-3 bg-primary/10 text-primary rounded-full shrink-0">
                     <Briefcase size={24} />
                   </div>
                   <div>
                     <h3 className="text-lg font-heading font-bold text-secondary mb-1">General Info</h3>
                     <a href="mailto:info@sunnomad.co.za" className="text-secondary/70 hover:text-primary transition-colors">info@sunnomad.co.za</a>
                   </div>
                 </div>

                 <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-neutral-light/50 hover:shadow-md transition-shadow">
                   <div className="p-3 bg-primary/10 text-primary rounded-full shrink-0">
                     <MapPin size={24} />
                   </div>
                   <div>
                     <h3 className="text-lg font-heading font-bold text-secondary mb-1">Visit Us</h3>
                     <a href="https://www.sunnomad.co.za" target="_blank" rel="noopener noreferrer" className="text-secondary/70 hover:text-primary transition-colors block mb-1">www.sunnomad.co.za</a>
                     <span className="text-secondary/60 text-sm">Cape Town, South Africa</span>
                   </div>
                 </div>
               </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-neutral-light/50">
               <h3 className="text-2xl font-heading font-bold text-secondary mb-8">Send a Message</h3>
               
               {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center animate-fade-in-up h-full flex flex-col justify-center items-center">
                  <div className="inline-flex p-4 bg-green-100 rounded-full text-green-600 mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-secondary mb-4">Message Sent!</h3>
                  <p className="text-secondary/80">Thank you for reaching out. We'll get back to you shortly.</p>
                  <button onClick={() => setFormSubmitted(false)} className="mt-8 text-primary font-bold hover:underline">Send another message</button>
                </div>
               ) : (
                 <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-secondary uppercase tracking-wider mb-2">Full Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Your Name" />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-secondary uppercase tracking-wider mb-2">Email Address</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="you@example.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-secondary uppercase tracking-wider mb-2">Subject (Optional)</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="How can we help?" />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-secondary uppercase tracking-wider mb-2">Message</label>
                      <textarea required className="w-full px-4 py-3 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all h-32 resize-none" placeholder="Write your message here..."></textarea>
                    </div>

                    <button type="submit" className="w-full py-4 bg-primary text-white font-heading font-bold rounded-full shadow-lg hover:bg-primary-dark hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mt-4 text-lg">
                      <Send size={20} />
                      Send Message
                    </button>
                 </form>
               )}
            </div>

          </div>
        </div>
      </section>

      {/* Map / Location Vibe Section (Optional Visual Filler) */}
      <section className="h-64 md:h-80 w-full overflow-hidden relative">
         <img src="https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?q=80&w=2000&auto=format&fit=crop" alt="Cape Town Coastline" className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-secondary/20"></div>
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
               <MapPin className="text-primary w-8 h-8 mx-auto mb-2" />
               <p className="font-heading font-bold text-secondary text-lg">Proudly based in Cape Town</p>
            </div>
         </div>
      </section>

    </div>
  );
};

// --- TermsPage Component ---

const TermsPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up bg-background">
      {/* Header */}
      <section className="py-16 px-6 md:px-12 border-b border-neutral-light/30 bg-white">
        <div className="container mx-auto max-w-4xl">
           <h1 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">Terms and Conditions</h1>
           <p className="text-secondary/70 text-lg">SunNomad Digital Nomad and Concierge Services</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6 md:px-12">
         <div className="container mx-auto max-w-4xl text-secondary/80 text-[15px] md:text-base leading-relaxed space-y-10">
           
           <div>
             <h2 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-4">1. Introduction</h2>
             <p>These Terms and Conditions apply to all services provided by SunNomad. By using our website, submitting a form, or making a booking through our coordination service, you agree to the terms outlined below.</p>
           </div>

           <div>
             <h2 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-4">2. Nature of Service</h2>
             <p>SunNomad acts as a coordination and concierge service. We are not a rental agent, estate agent, property manager, or landlord. All accommodation agreements are arranged on behalf of property owners, who remain legally responsible for their properties.</p>
           </div>

           <div>
             <h2 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-4">3. Digital Nomads and Guests</h2>
             <div className="space-y-6">
                <div>
                   <h3 className="font-bold text-secondary mb-2">3.1 Service Scope</h3>
                   <ul className="list-disc pl-5 space-y-1">
                     <li>SunNomad facilitates communication, coordinates bookings, and offers optional concierge services.</li>
                     <li>We do not own, manage, maintain, or clean any property.</li>
                     <li>Guests will not receive property owner contact details, as SunNomad manages all communication on their behalf.</li>
                   </ul>
                </div>
                <div>
                   <h3 className="font-bold text-secondary mb-2">3.2 Identity and Payment Verification</h3>
                   <ul className="list-disc pl-5 space-y-1">
                     <li>All guests must provide valid identification before confirmation.</li>
                     <li>Payment verification must be completed before any stay is finalised.</li>
                     <li>A booking is confirmed only once payment has been received in full.</li>
                   </ul>
                </div>
                <div>
                   <h3 className="font-bold text-secondary mb-2">3.3 Damages and Liability</h3>
                   <ul className="list-disc pl-5 space-y-1">
                     <li>Guests are responsible for any damages caused during their stay.</li>
                     <li>Any issues related to maintenance, cleanliness, safety, noise, or neighbour concerns must be reported directly to SunNomad.</li>
                     <li>SunNomad will liaise with the property owner to address the issue, based on the owner’s instructions.</li>
                     <li>SunNomad is not liable for delays or outcomes caused by the owner’s response or decisions.</li>
                     <li>SunNomad is not responsible for loss, theft, personal injury, accidents, or events outside our control.</li>
                   </ul>
                </div>
                <div>
                   <h3 className="font-bold text-secondary mb-2">3.4 Payments</h3>
                   <ul className="list-disc pl-5 space-y-1">
                     <li>SunNomad accepts payment only in foreign currency.</li>
                     <li>Guests are invoiced directly by SunNomad for rental and any optional concierge services.</li>
                     <li>Once payment is received, SunNomad pays the rental portion to the property owner on the guest’s behalf.</li>
                     <li>SunNomad may hold deposits or rental funds for the purpose of transferring them to the owner.</li>
                     <li>Guests do not receive owner banking details or direct payment access.</li>
                   </ul>
                </div>
                <div>
                   <h3 className="font-bold text-secondary mb-2">3.5 Concierge Services</h3>
                   <p>Optional add-on services such as airport transfers, grocery stocking, SIM card assistance, or guided support are billed separately. Pricing will be confirmed upfront before delivery.</p>
                </div>
             </div>
           </div>

           <div>
             <h2 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-4">4. Property Owners</h2>
             <div className="space-y-6">
                <div>
                   <h3 className="font-bold text-secondary mb-2">4.1 Service Scope</h3>
                   <ul className="list-disc pl-5 space-y-1">
                     <li>SunNomad does not lease, manage, or maintain properties.</li>
                     <li>Owners retain full responsibility for the legal compliance, safety, and upkeep of their property.</li>
                   </ul>
                </div>
                <div>
                   <h3 className="font-bold text-secondary mb-2">4.2 Property Standards</h3>
                   <p>Owners must ensure that:</p>
                   <ul className="list-disc pl-5 space-y-1 mt-1">
                     <li>The property is safe, well maintained, hygienic, and accurately represented.</li>
                     <li>All required legal compliance documents (electrical, gas, water, occupancy certificates) are up to date.</li>
                     <li>The listing information and images provided to SunNomad are accurate and current.</li>
                   </ul>
                </div>
                <div>
                   <h3 className="font-bold text-secondary mb-2">4.3 Communication and Pricing</h3>
                   <ul className="list-disc pl-5 space-y-1">
                     <li>Owners maintain full control of pricing, availability, and acceptance of bookings.</li>
                     <li>SunNomad handles all guest communication on behalf of the owner.</li>
                   </ul>
                </div>
                <div>
                   <h3 className="font-bold text-secondary mb-2">4.4 Fees</h3>
                   <ul className="list-disc pl-5 space-y-1">
                     <li>All SunNomad coordination or service fees are disclosed upfront.</li>
                     <li>Owners remain responsible for any taxes or obligations linked to rental income.</li>
                   </ul>
                </div>
             </div>
           </div>

           <div>
             <h2 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-4">5. Property Issues and Disputes</h2>
             <ul className="list-disc pl-5 space-y-1">
               <li>Guests must report all issues directly to SunNomad.</li>
               <li>SunNomad coordinates with the owner to resolve concerns about property condition, inventory discrepancies, damages, or maintenance.</li>
               <li>Final decisions on refunds, repairs, replacements, or compensation rest with the property owner.</li>
               <li>SunNomad does not guarantee the speed or outcome of owner responses.</li>
             </ul>
           </div>

           <div>
             <h2 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-4">6. Cancellation Policy</h2>
             <ul className="list-disc pl-5 space-y-1">
               <li>Cancellation within 7 days of arrival: 100 percent of the booking total is forfeited.</li>
               <li>Cancellation within 14 days of arrival: 50 percent of the deposit is forfeited.</li>
               <li>Cancellation within 21 days of arrival: 25 percent of the deposit is forfeited.</li>
               <li>No-show bookings are non refundable.</li>
             </ul>
           </div>

           <div>
             <h2 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-4">7. Website and Platform Use</h2>
             <ul className="list-disc pl-5 space-y-1">
               <li>Information on the SunNomad website is provided in good faith.</li>
               <li>We may update pricing, policies, or information at any time without notice.</li>
               <li>SunNomad does not guarantee the availability, suitability, or accuracy of any property.</li>
             </ul>
           </div>

           <div>
             <h2 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-4">8. Privacy and Data Protection</h2>
             <ul className="list-disc pl-5 space-y-1">
               <li>Personal information is used only for verification, booking coordination, service delivery, and communication.</li>
               <li>Information is stored securely and never sold to third parties.</li>
               <li>By submitting forms, users consent to being contacted by SunNomad.</li>
             </ul>
           </div>

           <div>
             <h2 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-4">9. Limitation of Liability</h2>
             <p>SunNomad is not liable for:</p>
             <ul className="list-disc pl-5 space-y-1 mt-1">
               <li>Property defects or misrepresentations provided by owners.</li>
               <li>Loss of belongings, theft, or damage to personal items.</li>
               <li>Injuries or accidents occurring in or around the property.</li>
               <li>Power failures, water outages, weather conditions, strikes, or delays caused by external service providers.</li>
               <li>Any event outside our direct control.</li>
             </ul>
           </div>

           <div>
             <h2 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-4">10. Indemnity</h2>
             <p>Guests and property owners agree to indemnify SunNomad against any claims, losses, damages, or legal actions arising from use of our services or from stays arranged through us.</p>
           </div>

           <div>
             <h2 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-4">11. Governing Law</h2>
             <p>These Terms and Conditions are governed by the laws of South Africa. Any disputes must be resolved within South African jurisdiction.</p>
           </div>

         </div>
      </section>
    </div>
  );
};

// --- Main App ---

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'landlords' | 'digitalNomads' | 'about' | 'contact' | 'terms'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (page: 'home' | 'landlords' | 'digitalNomads' | 'about' | 'contact' | 'terms') => {
    setCurrentView(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-body text-secondary selection:bg-primary-light selection:text-white bg-background">
      
      {/* Navigation Bar */}
      <nav className="w-full bg-background/90 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-light/50 relative">
        <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <div className="w-24 md:w-32 cursor-pointer" onClick={() => navigateTo('home')}>
            <SunNomadLogo variant="dark" />
          </div>
          <div className="hidden md:flex gap-8 text-[15px] md:text-base lg:text-lg font-heading font-bold text-secondary/70 items-center">
            <button onClick={() => navigateTo('home')} className={`transition-colors ${currentView === 'home' ? 'text-primary' : 'hover:text-primary'}`}>Home</button>
            <button onClick={() => navigateTo('about')} className={`transition-colors ${currentView === 'about' ? 'text-primary' : 'hover:text-primary'}`}>About</button>
            <button onClick={() => navigateTo('landlords')} className={`transition-colors ${currentView === 'landlords' ? 'text-primary' : 'hover:text-primary'}`}>Landlords</button>
            <button onClick={() => navigateTo('digitalNomads')} className={`transition-colors ${currentView === 'digitalNomads' ? 'text-primary' : 'hover:text-primary'}`}>Digital Nomads</button>
            <button onClick={() => navigateTo('contact')} className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors shadow-sm tracking-wide">
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Icon */}
          <div className="md:hidden text-primary">
             <button 
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
               className="p-2 focus:outline-none transition-transform active:scale-95"
             >
               {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
             </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-neutral-light/50 shadow-lg py-6 px-6 flex flex-col gap-6 animate-fade-in-down z-40">
            <button onClick={() => navigateTo('about')} className={`text-left text-xl font-heading font-bold ${currentView === 'about' ? 'text-primary' : 'text-secondary'}`}>About</button>
            <button onClick={() => navigateTo('landlords')} className={`text-left text-xl font-heading font-bold ${currentView === 'landlords' ? 'text-primary' : 'text-secondary'}`}>Landlords</button>
            <button onClick={() => navigateTo('digitalNomads')} className={`text-left text-xl font-heading font-bold ${currentView === 'digitalNomads' ? 'text-primary' : 'text-secondary'}`}>Digital Nomads</button>
            <button onClick={() => navigateTo('contact')} className={`text-left text-xl font-heading font-bold ${currentView === 'contact' ? 'text-primary' : 'text-secondary'}`}>Contact</button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {currentView === 'home' ? (
          <HomePage onNavigate={navigateTo} />
        ) : currentView === 'landlords' ? (
          <LandlordPage />
        ) : currentView === 'about' ? (
          <AboutPage />
        ) : currentView === 'contact' ? (
          <ContactPage />
        ) : currentView === 'terms' ? (
          <TermsPage />
        ) : (
          <DigitalNomadPage />
        )}
      </main>

      {/* Footer */}
      <footer className="py-12 bg-secondary text-white text-center border-t-8 border-primary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center mb-6 cursor-pointer" onClick={() => navigateTo('home')}>
            <SunNomadLogo className="w-32 opacity-90" variant="light" />
          </div>
          
          <button 
            onClick={() => navigateTo('terms')}
            className="text-neutral-light text-xs md:text-[13px] hover:text-white underline mb-4 transition-colors"
          >
            Terms and Conditions
          </button>
          
          <p className="text-neutral-light text-xs md:text-[13px] lg:text-sm font-light">
            © {new Date().getFullYear()} SunNomad. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;