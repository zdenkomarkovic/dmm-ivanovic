"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";

// Definisanje foldera i njihovih naziva
const folderConfig = {
  kuhinja: { name: "Kuhinje", count: 46 },
  plakari: { name: "Plakari", count: 51 },
  tvpolice: { name: "TV Police", count: 18 },
  ostalo: { name: "Ostalo", count: 19 },
  predsoblja: { name: "Predsoblja", count: 4 },
  projekti: { name: "Projekti", count: 9 },
};

// Funkcija za generisanje liste slika za dati folder
const getImagesForFolder = (folder: string): string[] => {
  const images: string[] = [];

  // Ako je "sve", vrati slike iz svih foldera
  if (folder === "sve") {
    Object.keys(folderConfig).forEach((folderKey) => {
      images.push(...getImagesForFolder(folderKey));
    });
    return images;
  }

  const config = folderConfig[folder as keyof typeof folderConfig];
  if (!config) return [];

  if (folder === "kuhinja") {
    const nums = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24,
      25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
      43, 44, 45, 46, 47, 52, 59,
    ];
    nums.forEach((num) =>
      images.push(`/images/${folder}/${folder} (${num}).jpg`)
    );
  } else if (folder === "plakari") {
    for (let i = 1; i <= 51; i++) {
      images.push(`/images/${folder}/plakar (${i}).jpg`);
    }
  } else if (folder === "tvpolice") {
    for (let i = 1; i <= 18; i++) {
      images.push(`/images/${folder}/tvpolica (${i}).jpg`);
    }
  } else if (folder === "ostalo") {
    for (let i = 1; i <= 19; i++) {
      images.push(`/images/${folder}/${folder} (${i}).jpg`);
    }
  } else if (folder === "predsoblja") {
    for (let i = 1; i <= 4; i++) {
      images.push(`/images/${folder}/predsoblje (${i}).jpg`);
    }
  } else if (folder === "projekti") {
    for (let i = 1; i <= 9; i++) {
      images.push(`/images/${folder}/projekat (${i}).jpg`);
    }
  }

  return images;
};

const ITEMS_PER_PAGE = 12;

export default function GalerijaPage() {
  const [selectedFolder, setSelectedFolder] = useState<string>("sve");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  // Dobijanje slika za trenutni folder
  const allImages = useMemo(
    () => getImagesForFolder(selectedFolder),
    [selectedFolder]
  );

  // Računanje paginacije
  const totalPages = Math.ceil(allImages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentImages = allImages.slice(startIndex, endIndex);

  // Handler za promenu foldera
  const handleFolderChange = (folder: string) => {
    setSelectedFolder(folder);
    setCurrentPage(1);
  };

  // Handler za promenu stranice
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handler za navigaciju kroz slike u modalu
  const handlePreviousImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (
      selectedImageIndex !== null &&
      selectedImageIndex < allImages.length - 1
    ) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (e.key === "ArrowLeft") {
        handlePreviousImage();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "Escape") {
        setSelectedImageIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, allImages.length]);

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Galerija Radova
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Pregledajte našu kolekciju završenih projekata
          </p>
        </motion.div>

        {/* Filter dugmad */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2 md:gap-3 justify-center mb-12"
        >
          {/* Dugme Sve */}
          <motion.button
            onClick={() => handleFolderChange("sve")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-0.5 md:px-6 md:py-3 rounded-full font-semibold transition-all ${
              selectedFolder === "sve"
                ? "bg-primary text-primary-foreground shadow-lg"
                : " text-card-foreground "
            }`}
          >
            Sve
          </motion.button>

          {/* Ostali folderConfig dugmad */}
          {Object.entries(folderConfig).map(([key, value]) => (
            <motion.button
              key={key}
              onClick={() => handleFolderChange(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-0.5 md:px-6 md:py-3 rounded-full font-semibold transition-all ${
                selectedFolder === key
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : " text-card-foreground "
              }`}
            >
              {value.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid slika */}
        <motion.div
          key={selectedFolder + currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
        >
          {currentImages.map((image, index) => {
            const globalIndex = startIndex + index;
            return (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer bg-card"
                onClick={() => setSelectedImageIndex(globalIndex)}
              >
                <Image
                  src={image}
                  alt={`${
                    selectedFolder === "sve"
                      ? "Galerija"
                      : folderConfig[
                          selectedFolder as keyof typeof folderConfig
                        ].name
                  } ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Paginacija */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center gap-2 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeftIcon className="w-6 h-6 text-primary" />
            </motion.button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                  currentPage === page
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : ""
                }`}
              >
                {page}
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRightIcon className="w-6 h-6 text-primary" />
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Modal za prikaz slike */}
      {selectedImageIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 z-[60] p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <XIcon className="w-8 h-8 text-white" />
          </motion.button>

          {/* Previous button */}
          {selectedImageIndex > 0 && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                handlePreviousImage();
              }}
              className="absolute left-4 z-[60] p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronLeftIcon className="w-8 h-8 text-white" />
            </motion.button>
          )}

          {/* Image container */}
          <motion.div
            key={selectedImageIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-7xl max-h-[90vh] w-full h-full px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allImages[selectedImageIndex]}
              alt="Enlarged view"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </motion.div>

          {/* Next button */}
          {selectedImageIndex < allImages.length - 1 && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-4 z-[60] p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronRightIcon className="w-8 h-8 text-white" />
            </motion.button>
          )}

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[60] px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold">
            {selectedImageIndex + 1} / {allImages.length}
          </div>
        </motion.div>
      )}
    </div>
  );
}
