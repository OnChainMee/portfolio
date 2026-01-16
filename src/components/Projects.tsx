"use client";

import { projects } from "@/config/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiCode, FiExternalLink, FiGithub } from "react-icons/fi";
import {highlightAsterisksAsColor} from "./WorkExperience"

export function Projects() {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-12"
      >
        <motion.div 
          className="flex items-center gap-4 mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30 shadow-lg shadow-blue-500/20"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 1 
              }}
            >
              <FiCode className="w-6 h-6 text-blue-400" />
            </motion.div>
          </motion.div>
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
        </motion.div>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent shadow-lg shadow-blue-500/30"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1, 
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ 
              scale: 1.02, 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="rounded-xl overflow-hidden transition-all duration-500 ease-out border border-blue-500/30 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-sm shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-500/50"
          >
            <motion.div 
              className="aspect-video bg-gray-800 overflow-hidden relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
            <motion.div 
              className="p-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center justify-between mb-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 mb-3 flex-wrap"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
              >
                  {project.techStack.map((tech, techIndex) => {
                    const Icon = tech;
                    return (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8, y: 5 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + 0.4 + techIndex * 0.05,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      >
                        {/* <Icon className={`w-6 h-6 ${tech.color}`} /> */}
                        <p className="text-teal-300 text-sm px-2 py-1 rounded-md bg-teal-500/10 border border-teal-500/20">{Icon}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              <motion.p 
                className="text-gray-300 mb-4 leading-relaxed line-clamp-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                {highlightAsterisksAsColor(project.description)}
              </motion.p>

              <motion.div 
                className="flex items-center justify-between gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                viewport={{ once: true }}
              >
                <motion.a
                  whileHover={{ scale: 1.05, x: 4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  href={project.liveUrl}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <FiExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </motion.div>
                  Live Demo
                </motion.a>
                {project.githubUrl && (
                  <motion.a
                    whileHover={{ scale: 1.05, x: 4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors duration-300 text-sm font-medium group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FiGithub className="w-4 h-4" />
                    </motion.div>
                    GitHub
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
