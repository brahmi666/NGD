import { motion } from "framer-motion";
import { Palette, Code, Monitor, Smartphone, Globe, Gauge } from "lucide-react";
import "./snap.css";

export function Services() {
  const services = [
    {
      category: "Communication & Digital Marketing",
      items: [
        {
          icon: <Palette />,
          title: "Brand strategy & visual identity",
        },
        {
          icon: <Monitor />,
          title: "Graphic design & Motion design",
        },
        {
          icon: <Globe />,
          title: "Social network management",
        },
      ],
    },
    {
      category: "Web & Mobile Development",
      items: [
        {
          icon: <Code />,
          title: "Website creation",
        },
        {
          icon: <Smartphone />,
          title: "Mobile applications",
        },
        {
          icon: <Gauge />,
          title: "SaaS solutions",
        },
      ],
    },
  ];
  return (
    <section id="services" className="py-20  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16 "
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400">
            Comprehensive solutions for your digital presence.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12  transition-all  ">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              initial={{
                opacity: 0,
                x: index === 0 ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.2,
              }}
              className="p-8 rounded-2xl bg-black/50 "
            >
              <h3 className="text-2xl font-semibold mb-6">
                {service.category}
              </h3>
              <div className="space-y-6 ">
                {service.items.map((item) => (
                  <div key={item.title} className="flex items-center space-x-4">
                    <div className="text-purple-500">{item.icon}</div>
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
