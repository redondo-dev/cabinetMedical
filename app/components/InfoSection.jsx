import React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const InfoSection = () => {
  const [isVisible, setIsVisible] = useState({
    hours: true,
    contact: true,
  });

  const hoursRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
    //   threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hoursRef.current) {
          setIsVisible((prev) => ({ ...prev, hours: entry.isIntersecting }));
        }
        if (entry.target === contactRef.current) {
          setIsVisible((prev) => ({ ...prev, contact: entry.isIntersecting }));
        }
      });
    }, observerOptions);

    if (hoursRef.current) observer.observe(hoursRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-[600px] md:min-h-[800px] w-full overflow-hidden bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 relative">
        {/* Image centrale */}
        <div className="relative w-full max-w-3xl mx-auto aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="/epilation.jpg"
            alt="Cabinet médical"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
            priority
          />
        </div>

        {/* Horaires - Gauche bas */}
        <div
          ref={hoursRef}
          className={`absolute left-4 bottom-8 md:left-8 md:bottom-16 bg-red p-6 rounded-lg shadow-xl max-w-xs transform transition-all duration-700 ${
            isVisible.hours
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Horaires d/ouverture
          </h3>
          <div className="space-y-2 text-gray-600">
            <p className="flex justify-between">
              <span>Lundi - Vendredi</span>
              <span>10h - 19h</span>
            </p>
            <p className="flex justify-between">
              <span>Samedi</span>
              <span>10h - 17h</span>
            </p>
            <p className="flex justify-between">
              <span>Dimanche</span>
              <span>Fermé</span>
            </p>
          </div>
        </div>

        {/* Contact - Droite haut */}
        <div
          ref={contactRef}
          className={`absolute right-4 top-8 md:right-8 md:top-16 bg-white p-6 rounded-lg shadow-xl max-w-sm transform transition-all duration-700 ${
            isVisible.contact
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <h2 className="text-2xl font-bold mb-3 text-gray-800">
            Notre Cabinet
          </h2>
          <p className="text-gray-600 mb-6">
            Notre équipe de professionnels est là pour vous accompagner dans
            votre parcours de santé. Prenez rendez-vous dès maintenant pour une
            consultation personnalisée.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

// import Image from "next/image";
// import Link from "next/link";

// const InfoSection = () => {
//   return (
//     <section className="relative min-h-[600px] md:min-h-[800px] w-full overflow-hidden bg-gray-50 py-16 md:py-24">
//       <div className="container mx-auto px-4 relative ">
//         {/* Contact - Haut droite*/}
//         <div
//           className="absolute max-lg: mr-25 z-10 top-8 md:top-16 bg-white p-6 rounded-lg shadow-xl max-w-sm transform transition-all duration-700"
//           style={{
//             position: "absolute",
//             top: "1rem",
//             right: "1rem",
//             float: "right",
//           }}
//         >
//           <h2 className="text-2xl font-bold mb-3 text-gray-800">
//             Notre Cabinet
//           </h2>
//           <p className="text-gray-600 mb-6">
//             Notre équipe de professionnels est là pour vous accompagner dans
//             votre parcours de santé. Prenez rendez-vous dès maintenant pour une
//             consultation personnalisée.
//           </p>
//           <Link
//             href="/contact"
//             className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
//           >
//             Contactez-nous
//           </Link>
//         </div>
//         {/* Image centrale */}
//         <div className="relative w-full max-w-3xl mx-auto aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
//           <Image
//             src="/epilation.jpg"
//             alt="Cabinet médical"
//             fill
//             className="object-cover"
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
//             priority
//           />
//         </div>

//         {/* Horaires - Gauche bas */}
//         <div
//           className="sticky left-4 bottom-8 md:left-8 md:bottom-16 bg-red-500 p-6 rounded-lg shadow-xl max-w-xs transform transition-all duration-700"
//           style={{ position: "sticky", bottom: "1rem" }}
//         >
//           <h3 className="text-xl font-semibold mb-4 text-gray-800">
//             Horaires d'ouverture
//           </h3>
//           <div className="space-y-2 text-gray-600">
//             <p className="flex justify-between">
//               <span>Lundi - Vendredi</span>
//               <span>10h - 19h</span>
//             </p>
//             <p className="flex justify-between">
//               <span>Samedi</span>
//               <span>10h - 17h</span>
//             </p>
//             <p className="flex justify-between">
//               <span>Dimanche</span>
//               <span>Fermé</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InfoSection;
