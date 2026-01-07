import React from "react";

export const ModernGrid: React.FC = () => {
  const images = [
    "https://the-royal-mandaya.davaovaluehotels.com/data/Imgs/OriginalPhoto/9433/943333/943333759/img-the-royal-mandaya-hotel-davao-6.JPEG", // Hotel Interior/Lobby
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231731916.jpg?k=1a9f55b53b3e5bca0ce1188a4465b2fcc27a30490dc332c4de51ce81c2ba30a8&o=", // Fine Dining
    "https://pix8.agoda.net/hotelImages/296583/-1/90702361985cd22e1df3dc4e6c14acfb.jpg?ca=9&ce=1&s=1024x", // Luxury Room
    "https://pix8.agoda.net/hotelImages/296583/-1/cbc2179b28fc9fec2d7ad33c9ced1cef.jpg?ca=10&ce=1&s=1024x", // Exterior/Pool
  ];

  return (
    <section className="bg-royal-cream py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Sticky Left Column */}
        <div className="relative">
          <div className="lg:sticky lg:top-32">
            <div className="w-16 h-1 bg-royal-gold mb-8"></div>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-royal-onyx mb-8 leading-[1.1]">
              Where Tradition <br />
              Meets{" "}
              <span className="italic text-royal-gold">Modern Luxury.</span>
            </h2>
            <p className="text-royal-dark-grey/80 font-montserrat leading-loose mb-8 text-base md:text-lg">
              For decades, The Royal Mandaya has stood as a beacon of
              hospitality in Davao City. We are the preferred address for
              government dignitaries, corporate leaders, and discerning
              travelers seeking a blend of safety, comfort, and heritage.
            </p>
            <p className="text-royal-dark-grey/80 font-montserrat leading-loose mb-12 text-base md:text-lg">
              Situated in the heart of the Poblacion district, every corner of
              our hotel tells a story of the city's vibrant culture, reimagined
              through a lens of modern elegance.
            </p>

            <button className="group flex items-center gap-4 text-royal-onyx font-bold tracking-widest text-xs uppercase hover:text-royal-gold transition-colors">
              Our Story
              <span className="h-[1px] w-12 bg-royal-onyx group-hover:bg-royal-gold transition-colors"></span>
            </button>
          </div>
        </div>

        {/* Right Column: 2x2 Image Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden group w-full aspect-[3/4] ${
                idx % 2 === 1 ? "mt-12" : ""
              }`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <img
                src={src}
                alt="Royal Mandaya Experience"
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
