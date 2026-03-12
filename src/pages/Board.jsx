import React from "react";
import { motion } from "framer-motion";
import BoardOfDirectors from "../assets/BoardOfDirectors.jpg";
import member1 from "../assets/williamOgene(bill).jpeg";
import member2 from "../assets/player2.JPG";
import member3 from "../assets/member3.jpeg";
import member4 from "../assets/player4.jpg";

const boardMembers = [
  {
    name: "Mr Dukes Odizor",
    role: "President",
    image: member2,
    description:
      "Former Nigerian tennis champion and respected leader dedicated to advancing the growth of tennis in Nigeria and mentoring the next generation of players.",
  },
  {
    name: "William (Bill) Ogene",
    role: "Head Tennis Professional",
    image: member1,
    description:
      "Experienced tennis professional responsible for overseeing player development programs and coaching initiatives aimed at elevating the standard of tennis training.",
  },
  {
    name: "Michael-Ann Russell",
    role: "Technical Director",
    image: member3,
    description:
      "Former African junior tennis champion and multi-time District Tennis Professional of the Year. Inducted into the 2018 Southern University Baton Rouge Sports Hall of Fame. Coached Gabriella Paz and Nathan Rosenfeld to the finals of the U.S. Open Junior Open.",
  },
  {
    name: "Grace Johnson",
    role: "Secretary General",
    image: member4,
    description:
      "Responsible for administrative leadership, organizational coordination, and ensuring the smooth operation of programs and tournaments within the organization.",
  },
];

export default function Board() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section
        className="relative w-full h-[50vh] md:h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${BoardOfDirectors})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-4"
          >
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              Board of Directors
            </h1>
            <p className="text-gray-200 mt-3 text-lg max-w-2xl mx-auto">
              Meet the leaders guiding the development and growth of tennis in Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20 bg-green-900">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Leadership Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-green-800 rounded-2xl shadow-lg overflow-hidden text-center hover:shadow-2xl transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-400">
                    {member.name}
                  </h3>

                  <p className="text-white font-semibold mt-1">
                    {member.role}
                  </p>

                  <p className="text-gray-200 text-sm mt-3 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}