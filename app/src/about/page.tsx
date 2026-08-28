import { Code2, Compass, Heart, Sparkles, Target } from "lucide-react";

const principles = [
  {
    title: "Detail-Oriented",
    text: "I care about clean interfaces, clear states, and components that hold up across screen sizes.",
    icon: Target,
  },
  {
    title: "Problem Solver",
    text: "I break work into practical steps, debug carefully, and keep performance in view while shipping.",
    icon: Compass,
  },
  {
    title: "Collaborative",
    text: "I enjoy working with product, design, and engineering teams to turn ideas into stable releases.",
    icon: Heart,
  },
];

export default function About() {
  return (
    <section id="about" className="section-band bg-white/70">
      <div className="section-container">
        <div className="reveal-on-scroll mx-auto mb-14 max-w-3xl text-center">
          <span className="section-eyebrow">Get to know me</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-copy mx-auto">
            Motivated IT graduate and software developer focused on building
            responsive, maintainable, user-centered web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          <div className="reveal-on-scroll lg:col-span-7">
            <div className="soft-card h-full p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-[8px] bg-teal-50 text-teal-700">
                  <Code2 className="size-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-950">Who I Am</h3>
              </div>

              <div className="space-y-5 text-base leading-8 text-slate-600">
                <p>
                  I specialize in building responsive and scalable web
                  applications across MERN stack and PHP ecosystems. My academic
                  foundation in B.Tech Information Technology supports a strong
                  practical approach to problem solving.
                </p>
                <p>
                  Whether I am crafting dynamic frontends or backend workflows,
                  I focus on reusable code, reliable APIs, and interfaces that
                  feel simple for the people using them.
                </p>
                <p>
                  I bring a can-do attitude, logical reasoning, and a steady
                  learning mindset to collaborative engineering environments.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal-on-scroll lg:col-span-5">
            <div className="soft-card h-full p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-[8px] bg-amber-50 text-amber-700">
                  <Sparkles className="size-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-950">How I Work</h3>
              </div>

              <div className="space-y-5">
                {principles.map(({ title, text, icon: Icon }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-[8px] bg-slate-950 text-teal-200">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-950">
                        {title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
