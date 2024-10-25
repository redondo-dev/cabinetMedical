import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image'; 

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: "/doctor.jpg", 
      title: "Medecin",
      description: "Fathia belkharoubi"
    },
    {
      img: "/doctor.jpg", 
      title: "Medecin",
     description: "Belkharoubi Fathia",

    },
    {
      img: "/doctor.jpg",
      title: "Medecin",
      description: "FATHIA BELKHAROUBI"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto " >
      <div className="relative w-full pt-[56.25%] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 backdrop-blur-sm">
              <h2 className="text-xl md:text-2xl font-bold mb-2">{slide.title}</h2>
              <p className="text-sm md:text-base">{slide.description}</p>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all backdrop-blur-sm z-10"
          aria-label="Image précédente"
        >
          <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all backdrop-blur-sm z-10"
          aria-label="Image suivante"
        >
          <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
        </button>

        <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;