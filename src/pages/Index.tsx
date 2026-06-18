import { Button } from '@/components/ui/button'
import { ContactModal } from '@/components/ContactModal'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  Handshake,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Target,
  TrendingUp,
  UserCheck,
  Users,
} from 'lucide-react'
import { motion } from 'framer-motion'

const Index = () => {
  return (
    <div className="bg-background font-sans text-foreground min-h-screen">
      <nav className="border-border fixed top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="mx-auto flex h-24 w-full max-w-[1920px] items-center justify-between px-4 md:px-12 lg:px-20">
          <a href="#" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="A&A Executive Management LLC PR"
              className="h-16 w-auto object-contain md:h-20"
            />
          </a>

          <div className="text-foreground hidden items-center space-x-10 text-xs font-bold tracking-widest uppercase lg:flex">
            <a href="#about" className="hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#services" className="hover:text-primary transition-colors">
              Services
            </a>
            <a href="#why-us" className="hover:text-primary transition-colors">
              Why Choose Us
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
            <ContactModal>
              <Button className="bg-[#0a192f] px-6 py-6 text-xs font-bold tracking-widest text-white uppercase hover:bg-[#0a192f]/90">
                Schedule A Consultation
              </Button>
            </ContactModal>
          </div>

          <div className="flex items-center lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-primary h-auto w-auto p-1 hover:bg-transparent"
                >
                  <Menu className="h-10 w-10 md:h-12 md:w-12" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-l-0">
                <a
                  href="#about"
                  className="border-border hover:text-primary border-b py-4 text-sm font-bold tracking-widest uppercase transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#services"
                  className="border-border hover:text-primary border-b py-4 text-sm font-bold tracking-widest uppercase transition-colors"
                >
                  Services
                </a>
                <a
                  href="#why-us"
                  className="border-border hover:text-primary border-b py-4 text-sm font-bold tracking-widest uppercase transition-colors"
                >
                  Why Choose Us
                </a>
                <a
                  href="#contact"
                  className="border-border hover:text-primary border-b py-4 text-sm font-bold tracking-widest uppercase transition-colors"
                >
                  Contact
                </a>
                <ContactModal>
                  <Button className="mt-8 w-full bg-[#0a192f] px-6 py-6 text-xs font-bold tracking-widest text-white uppercase hover:bg-[#0a192f]/90">
                    Schedule A Consultation
                  </Button>
                </ContactModal>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.png"
            alt="Hero Background"
            className="h-full w-full scale-[1.02] object-cover object-[80%_35%]"
          />
          <div className="absolute inset-0 bg-white/85 lg:bg-transparent" />
          <div className="absolute inset-0 w-full bg-gradient-to-r from-white via-white/95 to-transparent lg:w-3/4" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1920px] px-4 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-primary mb-4 font-serif text-4xl leading-[1.1] font-normal tracking-wide uppercase md:text-5xl lg:text-[4rem]">
              <span className="text-5xl md:text-6xl lg:text-[4.5rem]">S</span>
              trategic{' '}
              <span className="text-5xl md:text-6xl lg:text-[4.5rem]">B</span>
              usiness <br className="hidden md:block" />
              <span className="text-5xl md:text-6xl lg:text-[4.5rem]">S</span>
              olutions{' '}
              <span className="text-5xl md:text-6xl lg:text-[4.5rem]">T</span>
              hat{' '}
              <span className="text-5xl md:text-6xl lg:text-[4.5rem]">D</span>
              rive{' '}
              <span className="text-5xl md:text-6xl lg:text-[4.5rem]">G</span>
              rowth
            </h1>

            <p className="text-foreground/80 mb-8 text-sm font-semibold tracking-widest uppercase md:text-base">
              Franchise Development &bull; Healthcare Technology &bull; Remote
              Workforce Solutions
            </p>

            <div className="text-foreground/80 mb-10 max-w-2xl space-y-6 text-sm leading-relaxed font-medium md:text-base">
              <p>
                A&amp;A Executive Management LLC PR helps healthcare
                organizations, franchise operators, and service-based businesses
                accelerate growth through expert consulting, technology
                solutions, and remote workforce management.
              </p>
              <p>
                From franchise development and operational support to software
                implementation and virtual staffing solutions, we provide the
                expertise and resources organizations need to scale efficiently
                and profitably.
              </p>
            </div>

            <ContactModal>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-xs font-bold tracking-widest uppercase"
              >
                Schedule A Consultation
              </Button>
            </ContactModal>
          </motion.div>
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1920px] px-4 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="grid items-stretch gap-8 lg:grid-cols-12"
          >
            <div className="lg:col-span-4">
              <div className="h-full overflow-hidden">
                <img
                  src="/images/about.png"
                  alt="Executive Experience"
                  className="h-full min-h-[400px] w-full object-cover object-[center_80%]"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center px-4 py-6 lg:col-span-5">
              <div className="mb-6 flex items-center gap-4">
                <div className="bg-muted-foreground/30 h-px flex-grow" />
                <span className="text-muted-foreground font-sans text-xs font-bold tracking-widest whitespace-nowrap uppercase">
                  About Us
                </span>
                <div className="bg-muted-foreground/30 h-px flex-grow" />
              </div>
              <h2 className="text-primary mb-6 font-serif text-3xl leading-tight font-normal tracking-wide uppercase md:text-4xl">
                <span className="text-4xl md:text-5xl">E</span>xecutive{' '}
                <span className="text-4xl md:text-5xl">E</span>xperience.
                <br />
                <span className="text-4xl md:text-5xl">P</span>ractical{' '}
                <span className="text-4xl md:text-5xl">S</span>olutions.
              </h2>
              <div className="text-foreground/80 space-y-4 text-sm leading-relaxed font-medium">
                <p>
                  A&amp;A Executive Management LLC PR is a Puerto Rico-based
                  consulting firm specializing in franchise development,
                  healthcare technology solutions, and remote workforce
                  management.
                </p>
                <p>
                  Our leadership team brings decades of experience in healthcare
                  operations, franchising, business development, technology
                  implementation, and organizational growth. We partner with
                  business owners and executives to identify opportunities,
                  streamline operations, and implement scalable solutions that
                  drive measurable results.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="border-border flex h-full flex-col justify-center space-y-10 border p-8">
                <div className="flex items-center gap-6">
                  <Users className="text-primary h-10 w-10 stroke-[1]" />
                  <span className="text-foreground font-sans text-sm font-medium tracking-widest uppercase">
                    Professional.
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <Target className="text-primary h-10 w-10 stroke-[1]" />
                  <span className="text-foreground font-sans text-sm font-medium tracking-widest uppercase">
                    Strategic.
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <ShieldCheck className="text-primary h-10 w-10 stroke-[1]" />
                  <span className="text-foreground font-sans text-sm font-medium tracking-widest uppercase">
                    Reliable.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="bg-[#fafafa] py-20">
        <div className="mx-auto w-full max-w-[1920px] px-4 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="mx-auto mb-6 flex max-w-md items-center justify-center gap-4">
              <div className="bg-muted-foreground/30 h-px flex-grow" />
              <span className="text-muted-foreground font-sans text-xs font-bold tracking-widest whitespace-nowrap uppercase">
                Our Services
              </span>
              <div className="bg-muted-foreground/30 h-px flex-grow" />
            </div>
            <h2 className="text-primary font-serif text-3xl tracking-wide uppercase md:text-4xl">
              <span className="text-4xl md:text-5xl">S</span>olutions{' '}
              <span className="text-4xl md:text-5xl">D</span>esigned{' '}
              <span className="text-4xl md:text-5xl">T</span>o{' '}
              <span className="text-4xl md:text-5xl">H</span>elp{' '}
              <span className="text-4xl md:text-5xl">Y</span>ou{' '}
              <span className="text-4xl md:text-5xl">G</span>row
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex h-full flex-col bg-white shadow-sm"
            >
              <div className="relative pt-[75%]">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="/images/senior-care.png"
                    alt="Senior Care"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="bg-primary absolute -bottom-6 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white font-sans text-xl font-bold text-white shadow-sm">
                  1
                </div>
              </div>
              <div className="border-border/50 flex flex-grow flex-col border-x border-b p-8 pt-12">
                <h3 className="text-primary mb-4 text-center font-serif text-xl leading-snug tracking-wide uppercase">
                  <span className="text-2xl">S</span>enior{' '}
                  <span className="text-2xl">C</span>are{' '}
                  <span className="text-2xl">F</span>ranchise
                  <br />
                  <span className="text-2xl">D</span>evelopment &amp;{' '}
                  <span className="text-2xl">G</span>rowth
                </h3>
                <p className="text-primary mb-6 text-center text-xs leading-relaxed font-bold">
                  Build, Launch, and Scale Successful
                  <br />
                  Senior Care Businesses
                </p>
                <div className="text-foreground/80 mb-6 space-y-4 text-xs leading-relaxed font-medium">
                  <p>
                    We help entrepreneurs, and experienced professionals
                    navigate every stage of the Assisting Hands Home Care
                    franchise ownership opportunity.
                  </p>
                  <p className="text-foreground font-bold">
                    Our consulting services include:
                  </p>
                  <ul className="marker:text-primary list-disc space-y-1.5 pl-4">
                    <li>Franchise sales and candidate evaluation</li>
                    <li>Territory Exclusivity Analysis</li>
                    <li>Territory development strategies</li>
                    <li>New franchise onboarding and training</li>
                    <li>Operational support and best practices</li>
                    <li>Marketing and business development guidance</li>
                    <li>Performance improvement and growth planning</li>
                    <li>Leadership coaching and management support</li>
                  </ul>
                  <p>
                    Whether you are exploring franchise ownership or looking to
                    expand an existing operation, we provide the expertise to
                    build a strong, sustainable business.
                  </p>
                </div>

                <div className="mt-auto bg-[#f4f4f4] p-6 text-center">
                  <h4 className="text-primary mb-2 font-sans text-xs font-bold tracking-widest uppercase">
                    Franchise Opportunities
                  </h4>
                  <p className="text-foreground/80 mb-4 text-xs font-medium">
                    Explore franchise opportunities in
                    <br />
                    key territories.
                  </p>
                  <div className="flex justify-center gap-2">
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 h-10 w-1/2 rounded-none px-2 text-[0.6rem] leading-tight font-bold tracking-wider whitespace-normal text-white uppercase"
                    >
                      <a
                        href="https://assistinghands.com/franchise-opportunity/southeastflorida/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Florida
                      </a>
                    </Button>
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 h-10 w-1/2 rounded-none px-2 text-[0.6rem] leading-tight font-bold tracking-wider whitespace-normal text-white uppercase"
                    >
                      <a
                        href="https://assistinghands.com/franchise-opportunity/southcarolina/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        South Carolina
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex h-full flex-col bg-white shadow-sm"
            >
              <div className="relative pt-[75%]">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="/images/healthcare.png"
                    alt="Healthcare Technology"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="bg-primary absolute -bottom-6 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white font-sans text-xl font-bold text-white shadow-sm">
                  2
                </div>
              </div>
              <div className="border-border/50 flex flex-grow flex-col border-x border-b p-8 pt-12">
                <h3 className="text-primary mb-4 text-center font-serif text-xl leading-snug tracking-wide uppercase">
                  <span className="text-2xl">H</span>ealthcare{' '}
                  <span className="text-2xl">T</span>echnology
                  <br />&amp; <span className="text-2xl">B</span>usiness{' '}
                  <span className="text-2xl">S</span>olutions
                </h3>
                <p className="text-primary mb-6 text-center text-xs leading-relaxed font-bold">
                  Technology That Improves Efficiency
                  <br />
                  and Performance
                </p>
                <div className="text-foreground/80 space-y-4 text-xs leading-relaxed font-medium">
                  <p>
                    We assist healthcare providers and service organizations in
                    selecting, implementing, and optimizing technology solutions
                    that improve operational efficiency and support growth.
                  </p>
                  <p className="text-foreground pt-2 font-bold">
                    Our services include:
                  </p>
                  <ul className="marker:text-primary list-disc space-y-1.5 pl-4">
                    <li>Software evaluation and selection</li>
                    <li>Workflow analysis and process improvement</li>
                    <li>CRM and client management solutions</li>
                    <li>Scheduling and workforce management systems</li>
                    <li>Reporting and business intelligence tools</li>
                    <li>Technology integration consulting</li>
                    <li>Operational automation strategies</li>
                  </ul>
                  <p className="pt-4">
                    Our goal is simple: help organizations leverage technology to
                    reduce administrative burden and improve outcomes.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex h-full flex-col bg-white shadow-sm"
            >
              <div className="relative pt-[75%]">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="/images/remote-workforce.png"
                    alt="Remote Workforce"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="bg-primary absolute -bottom-6 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white font-sans text-xl font-bold text-white shadow-sm">
                  3
                </div>
              </div>
              <div className="border-border/50 flex flex-grow flex-col border-x border-b p-8 pt-12">
                <h3 className="text-primary mb-4 text-center font-serif text-xl leading-snug tracking-wide uppercase">
                  <span className="text-2xl">R</span>emote{' '}
                  <span className="text-2xl">W</span>orkforce
                  <br />
                  <span className="text-2xl">R</span>ecruitment &amp;{' '}
                  <span className="text-2xl">M</span>anagement
                </h3>
                <p className="text-primary mb-6 text-center text-xs leading-relaxed font-bold">
                  Skilled Virtual Teams That
                  <br />
                  Support Your Business
                </p>
                <div className="text-foreground/80 space-y-4 text-xs leading-relaxed font-medium">
                  <p>
                    Building and managing a remote workforce requires the right
                    people, processes, and oversight.
                  </p>
                  <p>
                    We help organizations recruit, train, and manage highly
                    qualified virtual professionals for a variety of
                    administrative and operational functions.
                  </p>
                  <p className="text-foreground pt-2 font-bold">
                    Common roles include:
                  </p>
                  <ul className="marker:text-primary list-disc space-y-1.5 pl-4">
                    <li>Customer service representatives</li>
                    <li>Staffing coordinators</li>
                    <li>Recruiters</li>
                    <li>Administrative assistants</li>
                    <li>Scheduling specialists</li>
                    <li>Intake coordinators</li>
                    <li>Billing and support personnel</li>
                    <li>Back-office operations staff</li>
                  </ul>
                  <p className="pt-4">
                    Our solutions provide businesses with access to talented
                    professionals while improving efficiency and reducing
                    operating costs.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="why-us" className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1920px] px-4 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="mx-auto mb-6 flex max-w-lg items-center justify-center gap-4">
              <div className="bg-muted-foreground/30 h-px flex-grow" />
              <span className="text-muted-foreground font-sans text-xs font-bold tracking-widest whitespace-nowrap uppercase">
                Why Choose A&amp;A Executive Management
              </span>
              <div className="bg-muted-foreground/30 h-px flex-grow" />
            </div>
            <h2 className="text-primary font-serif text-3xl tracking-wide uppercase md:text-4xl">
              <span className="text-4xl md:text-5xl">R</span>esults-
              <span className="text-4xl md:text-5xl">D</span>riven{' '}
              <span className="text-4xl md:text-5xl">E</span>xpertise
            </h2>
          </motion.div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <UserCheck className="text-primary mx-auto mb-6 h-14 w-14 stroke-[1]" />
                ),
                title: 'Industry Experience',
                desc: 'Decades of leadership experience in healthcare, franchising, operations, and business development.',
              },
              {
                icon: (
                  <Lightbulb className="text-primary mx-auto mb-6 h-14 w-14 stroke-[1]" />
                ),
                title: 'Practical Solutions',
                desc: 'Real-world strategies focused on implementation, execution, and measurable results.',
              },
              {
                icon: (
                  <TrendingUp className="text-primary mx-auto mb-6 h-14 w-14 stroke-[1]" />
                ),
                title: 'Scalable Support',
                desc: 'Solutions designed to help organizations grow without sacrificing quality or performance.',
              },
              {
                icon: (
                  <Handshake className="text-primary mx-auto mb-6 h-14 w-14 stroke-[1]" />
                ),
                title: 'Trusted Partnership',
                desc: 'We work as an extension of your leadership team, providing guidance and support every step of the way.',
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="px-2 text-center"
              >
                {feature.icon}
                <h3 className="text-primary mb-4 font-serif text-sm font-bold tracking-widest uppercase">
                  {feature.title}
                </h3>
                <p className="text-foreground/80 text-xs leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a192f] py-16 text-white">
        <div className="pointer-events-none absolute top-1/2 right-[-5%] -translate-y-1/2 opacity-[0.03] md:right-0 lg:right-10">
          <div className="font-serif text-[16rem] leading-none font-bold md:text-[22rem] lg:text-[28rem]">
            A&amp;A
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1920px] px-4 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-between gap-10 md:flex-row"
          >
            <div className="max-w-2xl">
              <h2 className="mb-6 font-serif text-3xl tracking-wide uppercase md:text-4xl">
                <span className="text-4xl md:text-5xl">R</span>eady{' '}
                <span className="text-4xl md:text-5xl">T</span>o{' '}
                <span className="text-4xl md:text-5xl">G</span>row{' '}
                <span className="text-4xl md:text-5xl">Y</span>our{' '}
                <span className="text-4xl md:text-5xl">B</span>usiness?
              </h2>
              <p className="mb-6 text-sm leading-relaxed font-medium text-white/90">
                Whether you need franchise development support, healthcare
                technology consulting, or remote workforce solutions, A&amp;A
                Executive Management LLC PR is ready to help.
              </p>
              <p className="text-sm font-bold">
                Let&apos;s discuss your goals and build a strategy for growth.
              </p>
            </div>

            <ContactModal>
              <Button
                size="lg"
                variant="outline"
                className="shrink-0 border-white bg-transparent px-8 py-6 text-xs font-bold tracking-widest text-white uppercase hover:bg-white hover:text-[#0a192f]"
              >
                Let&apos;s Discuss Your Goals
              </Button>
            </ContactModal>
          </motion.div>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-white/10 bg-[#0a192f] py-10 text-white"
      >
        <div className="mx-auto w-full max-w-[1920px] px-4 md:px-12 lg:px-20">
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="flex justify-center md:col-span-6 md:justify-start lg:col-span-6">
              <img
                src="/images/footer-logo.png"
                alt="A&A Executive Management LLC PR"
                className="mb-6 h-auto w-full max-w-[280px] object-contain md:mb-0"
              />
            </div>

            <div className="flex flex-col justify-center space-y-6 text-sm font-medium text-white/90 md:col-span-6 lg:col-span-5 lg:col-start-8">
              <div className="flex items-start">
                <MapPin className="mt-0.5 mr-4 h-5 w-5 shrink-0 stroke-[1.5] text-white" />
                <span className="leading-relaxed">
                  807 Ave Ponce de León PMB 0123
                  <br />
                  San Juan, PR 00907-3326
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-4 h-5 w-5 shrink-0 stroke-[1.5] text-white" />
                <span>787-665-2594</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-4 h-5 w-5 shrink-0 stroke-[1.5] text-white" />
                <a
                  href="mailto:aaexecutivepr@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  aaexecutivepr@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
