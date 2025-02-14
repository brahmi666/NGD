import { motion } from "framer-motion";
import "./TeamFanned.css";

// Static team data.
const team = [
  {
    name: "Damino Issaoui",
    role: "Fullstack Developer",
    image: "damn.jpg",
  },
  {
    name: "Feres Brahmi",
    role: "Fullstack Developer",
    image: "feres.jpg",
  },
  { name: "Aymen", role: "Founder of NGD", image: "aymen.jpg" },
  { name: "Amine Sbii", role: "Fullstack Developer", image: "amine.jpg" },
  { name: "Rami Sassi", role: "Fullstack Developer", image: "rami.jpg" },
  { name: "Sandra Chamsi", role: " Social media Manager", image: "sandra.jpg" },
];

// Motion variants.
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Team() {
  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="team-header"
        >
          <h2>Our Team</h2>
          <p>Experts with a passion for digital innovation</p>
        </motion.div>

        {/* Cards Container */}
        <motion.div
          className="team-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              className="team-card"
              variants={cardVariant}
            >
              <img src={member.image} alt={member.name} loading="lazy" />
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
