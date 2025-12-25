"use client";
import { motion } from "framer-motion";
import { companyInfo, navList } from "@/constants/index";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="bg-primary py-12 border-t-2 border-primary/20 text-muted"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/android-chrome-192x192.png"
                alt={companyInfo.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <h3 className="text-xl font-bold text-muted-foreground">
                {companyInfo.name}
              </h3>
            </div>
            <p className="text-muted leading-relaxed">
              Preko 20 godina iskustva u izradi kvalitetnog nameštaja po meri.
              Vaš partner za savršen dom.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-muted-foreground mb-4">
              Brzi Linkovi
            </h4>
            <ul className="space-y-2">
              {navList.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-muted hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-muted-foreground mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <PhoneIcon className="w-5 h-5 text-muted flex-shrink-0 mt-1" />
                <a
                  href={`tel:${companyInfo.phoneFormatted}`}
                  className="text-muted hover:text-muted-foreground transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon className="w-5 h-5 text-muted flex-shrink-0 mt-1" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-muted hover:text-muted-foreground transition-colors break-all"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-muted flex-shrink-0 mt-1" />
                <span className="text-muted">{companyInfo.address}</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-bold text-muted-foreground mb-4">
              Radno Vreme
            </h4>
            <div className="flex items-start gap-3">
              <ClockIcon className="w-5 h-5 text-muted flex-shrink-0 mt-1" />
              <div className="text-muted">
                <p>Pon - Pet: 08:00 - 18:00</p>
                <p>Subota: 09:00 - 15:00</p>
                <p>Nedelja: Zatvoreno</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary/20 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-muted-foreground text-base">
              &copy; {new Date().getFullYear()} {companyInfo.name}. Sva prava
              zadržana.
            </p>
            <a
              href="https://www.manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-muted-foreground transition-colors"
            >
              Izrada sajta:{" "}
              <span className="font-bold text-muted-foreground hover:text-muted">
                ManikamWebSolutions
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
