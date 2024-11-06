
"use client";
import { useTheme } from "../../providers/ThemeProvider";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    firstName: yup.string().required("Le prénom est requis"),
    lastName: yup.string().required("Le nom est requis"),
    email: yup.string().email("Email invalide").required("L'email est requis"),
    subject: yup.string().required("Le sujet est requis"),
    message: yup
      .string()
      .required("Le message est requis")
      .min(10, "Le message doit contenir au moins 10 caractères"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export default function ContactFormClient() {
  const { isDarkMode } = useTheme(); // Utilise le mode actuel
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`max-w-2xl mx-auto p-6 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Prénom */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium">
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName")}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "border-gray-300"
              } focus:border-blue-500 focus:ring-blue-500`}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Nom */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium">
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName")}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "border-gray-300"
              } focus:border-blue-500 focus:ring-blue-500`}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={`mt-1 block w-full rounded-md shadow-sm ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "border-gray-300"
            } focus:border-blue-500 focus:ring-blue-500`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Sujet */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium">
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            {...register("subject")}
            className={`mt-1 block w-full rounded-md shadow-sm ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "border-gray-300"
            } focus:border-blue-500 focus:ring-blue-500`}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            className={`mt-1 block w-full rounded-md shadow-sm ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "border-gray-300"
            } focus:border-blue-500 focus:ring-blue-500`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Bouton Submit */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white ${
              isDarkMode
                ? "bg-blue-800 hover:bg-blue-900"
                : "bg-blue-600 hover:bg-blue-700"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300`}
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
          </button>
        </div>
      </form>

      {/* Messages de statut */}
      {submitStatus === "success" && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
          Message envoyé avec succès !
        </div>
      )}
      {submitStatus === "error" && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
          Une erreur est survenue lors de l&apos;envoi du message.
        </div>
      )}
    </div>
  );
}
