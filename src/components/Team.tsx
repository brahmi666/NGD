import { motion } from "framer-motion";
import "./TeamFanned.css";

export function Team() {
  const team = [
    { name: "Damino Issaoui", role: "Backend Developer", image: "/damn.jpg" },
    { name: "Feres Brahmi", role: "Frontend Developer", image: "/feres.jpg" },
    { name: "Amine Sbeii", role: "UX Designer", image: "/amine.jpg" },
    { name: "Rami Sassi", role: "Backend Developer", image: "/rami.jpg" },
    { name: "Aymen", role: "Directeur Créative", image: "/aymen.jpg" },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="team-header"
        >
          <h2>Notre Équipe</h2>
          <p>Des experts passionnés par l&apos;innovation digitale</p>
        </motion.div>

        {/* Cards Container */}
        <motion.div
          className="team-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member, index) => (
            <motion.div key={index} className="team-card" variants={cardVariant}>
              <img src={member.image} alt={member.name} />
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
