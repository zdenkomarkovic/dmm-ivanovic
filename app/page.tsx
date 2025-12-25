"use client";

import Hero3Images from "@/components/Hero3Images";
import { services, companyInfo } from "@/constants/index";
import { motion } from "framer-motion";
import {
  HomeIcon,
  CheckCircle2Icon,
  PhoneIcon,
  MailIcon,
  Sofa,
  DoorOpen,
  Tv,
  Baby,
  ChefHat,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const iconMap: { [key: string]: LucideIcon } = {
  chef: ChefHat,
  cabinet: DoorOpen,
  sofa: Sofa,
  tv: Tv,
  baby: Baby,
};

export default function Home() {
  return (
    <div className="">
      <Hero3Images />

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              O Nama
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              {companyInfo.about}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-muted rounded-lg"
            >
              <div className="text-5xl font-bold text-primary mb-2">20+</div>
              <p className="text-lg">Godina Iskustva</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-muted rounded-lg"
            >
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <p className="text-lg">Zadovoljnih Klijenata</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6 bg-muted rounded-lg"
            >
              <div className="text-5xl font-bold text-primary mb-2">
                <HomeIcon className="w-12 h-12 mx-auto" />
              </div>
              <p className="text-lg">Besplatan Izlazak</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 md:px-8 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Proces Izrade Nameštaja po Meri
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Od prvog kontakta do gotovog nameštaja - vaš put ka savršenom
              prostoru
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Step 01 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="flex items-start gap-6">
                  <div className="text-6xl font-bold text-primary/20">01</div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-4">
                      Prijem Porudžbine
                    </h3>
                    <p className="text-lg leading-relaxed mb-4">
                      Pozovite nas i besplatno ćemo doći na vašu adresu.
                      Iznesite svoje zahteve, želje i ideje za novi nameštaj.
                      Zajedno odabiramo tip i dezen materijala, a mi precizno
                      merimo prostor kako bi sve komponente savršeno odgovarale.
                    </p>
                    <Link href="/kontakt">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold"
                      >
                        Kontaktirajte Nas
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-80 rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src="/11831.jpg"
                    alt="Prijem porudžbine"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Step 02 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-80 rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src="/images/projekti/projekat (6).jpg"
                    alt="Planiranje nameštaja"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </div>
              <div>
                <div className="flex items-start gap-6">
                  <div className="text-6xl font-bold text-primary/20">02</div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-4">
                      Planiranje Nameštaja
                    </h3>
                    <p className="text-lg leading-relaxed">
                      Naše kvalifikacije i dugogodišnje iskustvo omogućavaju nam
                      da isplaniramo svaki komad nameštaja tako da savršeno
                      ispunjava vaša očekivanja, estetske norme i optimalnu
                      funkcionalnost. Po prihvaćenom planu računamo cenu i
                      dostavljamo detaljnu ponudu.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 03 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="flex items-start gap-6">
                  <div className="text-6xl font-bold text-primary/20">03</div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-4">
                      Izrada Nameštaja
                    </h3>
                    <p className="text-lg leading-relaxed">
                      Izrada nameštaja je naša osnovna delatnost i u tome smo
                      najbolji. Zahvaljujući savremenoj opremi, ali pre svega
                      iskusnim i predanim majstorima, pretvaramo vaš plan u
                      kvalitetan i dugotrajan nameštaj koji će vas služiti
                      godinama.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-80 rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src="/11683.jpg"
                    alt="Izrada nameštaja"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Step 04 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-80 rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src="/24849.jpg"
                    alt="Dostava i montaža"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </div>
              <div>
                <div className="flex items-start gap-6">
                  <div className="text-6xl font-bold text-primary/20">04</div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-4">
                      Dostava i Montaža
                    </h3>
                    <p className="text-lg leading-relaxed">
                      Gotove komponente donosimo i po potrebi montiramo
                      (kuhinje, plakare...) na vašoj adresi. Uprkos trendu
                      prodaje nameštaja koji kupac sam sklapa, mi i dalje
                      isporučujemo potpuno gotov nameštaj. Vaše je samo da
                      uživate u novom ambijentu i funkcionalnom prostoru.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="usluge" className="py-20 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Naše Usluge
            </h2>
            <p className="text-lg md:text-xl">
              Izrada nameštaja po vašoj meri i želji
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Link key={index} href={service.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-background rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden flex flex-col cursor-pointer h-full"
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 flex-1">
                      <div className="mb-4">
                        <IconComponent className="w-12 h-12 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 md:px-8 bg-muted">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text List */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-1 gap-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl text-left font-bold text-primary mb-4">
                  Zašto Izabrati Nas?
                </h2>
              </motion.div>
              {[
                "Preko 20 godina iskustva u izradi nameštaja",
                "Kvalitetni materijali i obrada",
                "Besplatan izlazak na teren",
                "Besplatna izrada projekta i ponude",
                "Nameštaj prilagođen vašim potrebama",
                "Profesionalan i brz rad",
                "Konkurentne cene",
                "Garancija na sve proizvode",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{feature}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side - Video */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl mx-10 overflow-hidden shadow-2xl md:aspect-[9/15]"
            >
              <video
                controls
                className="w-full h-full object-cover"
                poster="/images/kuhinja/kuhinja (1).jpg"
              >
                <source
                  src="/AQMFqhi6iIi1uGkProjvhTo6JrvkL2KDjmxYjOdMQsOT7tovbgex7LmTcgroTVUOKTal1-mhpIX0WKcGwlMVx2QgYlsE1Nw9EU0MTfE.mp4"
                  type="video/mp4"
                />
                Vaš pretraživač ne podržava video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Spremni za Vaš Novi Nameštaj?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Kontaktirajte nas danas za besplatnu konsultaciju i ponudu
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href={`tel:${companyInfo.phoneFormatted}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-background text-primary px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2"
                >
                  <PhoneIcon className="w-6 h-6" />
                  Pozovite Nas
                </motion.button>
              </a>
              <Link href="/kontakt">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-background text-background px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2"
                >
                  <MailIcon className="w-6 h-6" />
                  Pošaljite Upit
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      {/* <section className="py-20 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <PhoneIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Telefon</h3>
              <a
                href={`tel:${companyInfo.phoneFormatted}`}
                className="text-lg hover:text-primary"
              >
                {companyInfo.phone}
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <MailIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-lg hover:text-primary"
              >
                {companyInfo.email}
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <MapPinIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Adresa</h3>
              <p className="text-lg">{companyInfo.address}</p>
            </motion.div>
          </div>
        </div>
      </section> */}
      {/* Project Design Section */}
      <section className="py-20 px-4 md:px-8 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Planiranje i Projektovanje
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Pažljivo planiranje je osnova svakog uspešnog projekta
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Preciznost i Planiranje
                </h3>
                <p className="text-lg leading-relaxed">
                  Svaki projekat započinjemo detaljnim planiranjem. Analiziramo
                  vaš prostor, potrebe i želje kako bismo kreirali optimalno
                  rešenje koje će savršeno odgovarati vašim zahtevima i
                  prostoru.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Optimizacija Prostora
                </h3>
                <p className="text-lg leading-relaxed">
                  Naše dugogodišnje iskustvo omogućava nam da isplaniramo svaki
                  komad nameštaja tako da maksimalno iskoristi dostupan prostor
                  uz zadržavanje funkcionalnosti i estetike.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Izbor Materijala i Boja
                </h3>
                <p className="text-lg leading-relaxed">
                  Zajedno biramo materijale, boje i završne obrade koji će
                  najbolje odgovarati vašem prostoru i stilu. Naša podrška i
                  saveti su tu da vam pomognu u donošenju prave odluke.
                </p>
              </div>

              <div className="pt-4">
                <Link href="/galerija">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg"
                  >
                    Pogledajte Naše Radove
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[1, 2, 3, 4].map((num) => (
                <motion.div
                  key={num}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => (window.location.href = "/galerija")}
                >
                  <Image
                    src={`/images/projekti/projekat (${num}).jpg`}
                    alt={`Projekat ${num}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
