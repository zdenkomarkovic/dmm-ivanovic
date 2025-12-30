"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero3Images = () => {
  return (
    <div className="relative flex min-h-[100dvh] flex-col md:flex-row bg-[#2f2f2f] md:bg-transparent">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-[60vh] md:h-[100dvh] md:object-cover z-[0]"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-[60vh]  md:h-full bg-black/20 z-[1]" />

      {/* Mobile layout - text below video */}
      <div className="relative flex md:hidden flex-col gap-6 w-full items-center justify-start text-white z-[2] text-center pt-[calc(60vh+2rem)] pb-8 px-4">
        <h1 className="text-primary text-3xl font-bold max-w-[900px] leading-[1.2]">
          DMM Ivanović - Nameštaj po Meri
        </h1>
        <h2 className="text-background font-medium text-lg max-w-[800px]">
          Preko 20 godina iskustva u izradi kvalitetnog nameštaja
        </h2>
        <div className="flex flex-col gap-4">
          <Link href="/#usluge">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary text-foreground px-4 py-2 rounded-lg font-medium"
            >
              Naše Usluge
              <ArrowRightIcon className="w-[18px]" />
            </motion.button>
          </Link>
          <a href="tel:+381641225908">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-foreground border-[1px] rounded-lg px-4 py-2 font-medium"
            >
              Pozovite odmah
            </motion.button>
          </a>
        </div>
      </div>

      {/* Desktop layout - text in bottom right corner */}
      <div className="relative hidden md:flex flex-col gap-4 w-full items-end justify-end text-white z-[2]  pb-16 pr-16">
        <div className="space-y-6 text-center">
          <h1 className="text-primary text-[3.7rem] font-bold leading-[1.1]">
            DMM Ivanovic - Nameštaj po Meri
          </h1>
          <h2 className="text-background font-medium text-[1.5rem]">
            Preko 20 godina iskustva u izradi kvalitetnog nameštaja
          </h2>
          <div className="flex flex-row gap-4 justify-center">
            <Link href="/#usluge">
              <motion.button
                whileHover={{ translateY: "-5px" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-primary text-background px-8 py-3 rounded-lg font-medium"
              >
                Naše Usluge
                <ArrowRightIcon className="w-[18px]" />
              </motion.button>
            </Link>
            <a href="tel:+381641225908">
              <motion.button
                whileHover={{ translateY: "-5px" }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-background border-[1px] rounded-lg px-8 py-3 font-medium"
              >
                Pozovite odmah
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3Images;
