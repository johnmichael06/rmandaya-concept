import React, { useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CarouselItemProps } from "../types";

const CarouselCard: React.FC<CarouselItemProps> = ({
  image,
  title,
  subtitle,
}) => (
  <div className="flex-none w-[300px] md:w-[450px] snap-center group cursor-pointer">
    <div className="relative overflow-hidden aspect-[16/9] mb-6 border border-white/10">
      <div className="absolute inset-0 bg-royal-onyx/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
      />
    </div>
    <div className="border-l border-royal-gold pl-4 transition-all duration-300 group-hover:pl-6">
      <h3 className="font-playfair text-2xl text-royal-gold mb-2">{title}</h3>
      <p className="font-montserrat text-royal-soft-white text-sm tracking-wide">
        {subtitle}
      </p>
    </div>
  </div>
);

export const CuratedCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const items = [
    {
      image:
        "https://pix8.agoda.net/hotelImages/296583/3144489/2260aa20489014406afb1315837d1312.jpeg?ce=0&s=1024x",
      title: "The Presidential Suite",
      subtitle: "Unmatched luxury on the top floor.",
    },
    {
      image:
        "https://pix8.agoda.net/hotelImages/296583/-1/f384147d831e52f765bd9e28d61eda28.jpg?ca=10&ce=1&s=1024x",
      title: "Kamayo Private Dining",
      subtitle: "Exclusive culinary events for intimate gatherings.",
    },
    {
      image:
        "https://pix8.agoda.net/hotelImages/296583/-1/26da363d33fc0b51a7ba867d2d64e81f.jpg?ca=10&ce=1&s=1024x",
      title: "City View Pool",
      subtitle: "A refreshing oasis amidst the skyline.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "The Royal Ballroom",
      subtitle: "Davao's most prestigious event venue.",
    },
  ];

  return (
    <section className="bg-royal-onyx py-24 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 w-full h-full opacity-[0.03] bg-damask pointer-events-none mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-white">
            Curated Davao <br />
            <span className="text-royal-gold italic">Experiences</span>
          </h2>

          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-3 border border-white/20 text-white hover:border-royal-gold hover:text-royal-gold transition-colors rounded-full"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 border border-white/20 text-white hover:border-royal-gold hover:text-royal-gold transition-colors rounded-full"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 snap-x hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item, idx) => (
            <CarouselCard key={idx} {...item} />
          ))}
          {/* Spacer for right padding */}
          <div className="flex-none w-8"></div>
        </div>
      </div>
    </section>
  );
};
