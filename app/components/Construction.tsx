import Link from "next/link";
import React from "react";
import "../globals.css";

const construction: React.FC = () => {
  return (
    <section className="rounded-3xl shadow-2xl">
      <div className="p-8 text-center sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
          The page is under construction ,
        </p>

        <h2 className="mt-6 text-3xl font-bold">
          Thank you for your patience 💕!I m doing my best 😁
        </h2>
        <h3 className="mt-6 text-3xl font-bold text-blue-500">
          From Reda with love 💕😘😘💕{" "}
        </h3>

        <Link
          className="mt-8 inline-block w-full rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl"
          href="/"
        >
          Retour en la page acceuil
        </Link>
      </div>
    </section>
  );
};

export default construction;
