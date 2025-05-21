/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

// components/interview-selection.tsx

import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface InterviewSelectionProps {
  onStart: (interviewType: string) => void;
}

export function InterviewSelection({ onStart }: InterviewSelectionProps) {
  const cardClasses =
    "relative w-full max-w-3xl rounded-xl border border-border shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden px-6 py-5 bg-[#080540] border-gray-700 flex items-center justify-between";
  const buttonClasses =
    "py-5 px-8 rounded-lg flex items-center justify-between font-medium hover:cursor-pointer hover:opacity-90 text-lg";

  return (
    <div className="flex flex-col min-h-screen bg-[#020114] bg-gradient-to-br from-[#020114] via-[#040332] to-[#060340]">
      {/* En-tête avec image de fond */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-6 px-6 border-b border-gray-800 bg-cover bg-bottom"
        style={{ backgroundImage: "url('/background.jpeg')" }}
      >
        <div className="container max-w-6xl mx-auto flex flex-row items-center justify-between">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            src="https://derivativesfinance.fr/wp-content/uploads/2023/01/cropped-full_white-2048x574.png"
            alt="Logo Derivatives Finance"
            width={220}
            height={70}
            className="ml-0"
          />
          <div className="flex items-center">
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl font-bold text-white mr-6 absolute right-28"
            >
              Préparation aux Entretiens
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="size-12 rounded-full overflow-hidden shadow-md absolute right-10"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQENMDCuoafmPg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708998508964?e=1753315200&v=beta&t=FPtoEyAnHfkW1em1rzp5oH8h4nkBmquN1E-SXJ89Lks"
                alt="Avatar"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Sélection d'entretien */}
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[2.4rem] gap-0 font-bold h-fit text-white mb-12 text-center px-4"
        >
          Bienvenue Pierre !<div className="" />
          Prêt à passer un entretien ?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full flex justify-center mt-8"
        >
          {/* Finance de marché - Row rectangle with clear layout */}
          <div className={cardClasses}>
            {/* Left: Profile image */}
            <div className="flex items-center">
              <div className="size-20 rounded-full overflow-hidden shadow-md">
                <img
                  src="/pierre.png"
                  alt="Julien"
                  className="object-cover object-top w-full h-full"
                />
              </div>

              {/* Middle: Title and description as column */}
              <CardContent className="pl-5 pr-0 py-0">
                <h3 className="text-xl font-semibold text-white mb-1">
                  Finance de marché
                </h3>
                <p className="text-gray-300 text-sm">
                  Entretien avec un professionnel du trading
                </p>
              </CardContent>
            </div>

            {/* Right: Button section */}
            <div>
              <Button
                className={buttonClasses}
                style={{ backgroundColor: "#ffffff", color: "#152658" }}
                onClick={() => onStart("market")}
              >
                <span className="font-semibold text-sm">Démarrer</span>
                <Icon
                  icon="ic:round-chevron-right"
                  width="24"
                  height="24"
                  className="ml-2"
                />
              </Button>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Pied de page */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="py-4 text-center text-gray-400 text-sm"
      >
        <p>Derivatives Finance - Préparation aux Entretiens</p>
      </motion.footer>
    </div>
  );
}
