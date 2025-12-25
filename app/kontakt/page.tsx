"use client";

import { motion } from "framer-motion";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "lucide-react";
import { companyInfo } from "@/constants/index";
import ContactForm from "@/components/ContactForm";

export default function KontaktPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
      <section className="py-12 px-4 md:px-8 bg-primary">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Kontaktirajte Nas
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Tu smo da odgovorimo na sva vaša pitanja
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-muted p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <PhoneIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Telefon</h3>
              <a
                href={`tel:${companyInfo.phoneFormatted}`}
                className="text-lg hover:text-primary transition-colors"
              >
                {companyInfo.phone}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-muted p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <MailIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-lg hover:text-primary transition-colors break-all"
              >
                {companyInfo.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-muted p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <MapPinIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Adresa</h3>
              <p className="text-lg">{companyInfo.address}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-muted p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <ClockIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Radno Vreme</h3>
              <p className="text-lg">{companyInfo.workingHours}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 md:px-8 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Pošaljite Upit
            </h2>
            <p className="text-lg">
              Popunite formu ispod i javićemo vam se u najkraćem mogućem roku
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-background p-8 rounded-lg"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-4 md:px-8 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Besplatan Izlazak na Teren
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-4">
              Dolazimo kod vas, uzimamo mere i pravimo projekat prema vašim
              željama - potpuno besplatno!
            </p>
            <p className="text-lg text-primary-foreground/80">
              Kontaktirajte nas telefonom ili email-om i zakažite termin koji
              vama odgovara.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Map Section - Placeholder */}
      <section className="py-16 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Naša Lokacija
            </h2>
            <div className="w-full h-96 bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19052.112525529024!2d20.511023444215724!3d44.77849195501722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a774de195f7f3%3A0x7c5446ee6d6c021b!2sNine%20Kirsanove%2011%2C%20Beograd!5e0!3m2!1ssr!2srs!4v1766629699728!5m2!1ssr!2srs"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info Section */}
    </div>
  );
}
