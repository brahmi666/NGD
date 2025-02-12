import React from "react";
import { motion } from "framer-motion";
import { Palette, Code, Monitor, Smartphone, Globe, Gauge } from "lucide-react";
import "./snap.css";

export function Services() {
  const services = [
    {
      category: "Communication & Marketing Digital",
      items: [
        {
          icon: <Palette />,
          title: "Stratégie de marque & identité visuelle",
        },
        {
          icon: <Monitor />,
          title: "Design graphique & Motion design",
        },
        {
          icon: <Globe />,
          title: "Gestion des réseaux sociaux",
        },
      ],
    },
    {
      category: "Développement Web & Mobile",
      items: [
        {
          icon: <Code />,
          title: "Création de sites web",
        },
        {
          icon: <Smartphone />,
          title: "Applications mobiles",
        },
        {
          icon: <Gauge />,
          title: "Solutions SaaS",
        },
      ],
    },
  ];
  return (
    <section id="services" className="py-20 blur-bg  ">
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
          <h2 className="text-4xl font-bold mb-4">Nos Services</h2>
          <p className="text-gray-400">
            Des solutions complètes pour votre présence digitale
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12  hover:scale-105 transition-all hover:cursor-pointer hover:backdrop-blur-none">
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
              className="p-8 rounded-2xl bg-purple-900/10  backdrop-blur-lg border-purple-500/20"
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
