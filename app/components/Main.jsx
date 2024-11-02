"use client "
import React from "react";
import Image from "next/image";

function Main() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                width={350}
                height={280}
                alt="epilation"
                src="https://img.freepik.com/photos-gratuite/accueil-clinique-salle-attente-dans-hall-etablissement-comptoir-inscription-utilise-pour-patients-ayant-rendez-vous-medicaux-reception-vide-dans-centre-sante-pour-visites-controle_482257-51247.jpg?t=st=1729880757~exp=1729884357~hmac=35129c6e09e2868be1a37923395e642fc0dc60f2125dab4c3ed9dc714e5b356b&w=1380"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Bienvenue dans votre centre d&apos;esthétique et de soins laser
              </h2>

              <p className="mt-4 text-gray-600">
                Notre centre vous propose des traitements d&apos;épilation laser
                définitive et des soins de la peau personnalisés pour sublimer
                votre beauté naturelle. Grâce à notre équipe de professionnels
                et à nos technologies de pointe, nous garantissons des soins
                sûrs et efficaces, adaptés à chaque type de peau.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Horaires d&apos;ouverture
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
              <div>
                <p> Telephone </p>
                <span>04 88 88 88 88</span>
              </div>

              <a
                href="#"
                className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Prendre RDV sur Doctolib
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
