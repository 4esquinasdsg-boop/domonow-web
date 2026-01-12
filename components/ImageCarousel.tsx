import React from 'react';

interface ImageCarouselProps {
  images: string[];
  heightClass?: string;
  overlay?: boolean;
  squareItems?: boolean;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  heightClass = "h-64",
  overlay = false,
  squareItems = false
}) => {
  // We duplicate the images to create a seamless loop effect
  const displayImages = [...images, ...images];

  // Logic to handle square items vs rectangular items styling
  const widthClasses = squareItems 
    ? "aspect-square w-auto min-w-0" 
    : "w-auto min-w-[300px] max-w-[500px]";

  return (
    <div className={`w-full overflow-hidden relative group ${heightClass}`}>
      {overlay && <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>}
      
      <div className="flex animate-infinite-scroll w-max">
        {displayImages.map((src, index) => (
          <div key={index} className={`relative flex-shrink-0 px-2 ${heightClass}`}>
            <img 
              src={src} 
              alt={`Carousel item ${index}`} 
              className={`h-full object-cover rounded-2xl shadow-sm ${widthClasses}`}
            />
          </div>
        ))}
      </div>
      
      {/* Fade edges for smoother integration */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none hidden md:block"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none hidden md:block"></div>
    </div>
  );
};

// Variation for Dark Mode backgrounds (no white fade, darker styling)
export const ImageCarouselDark: React.FC<ImageCarouselProps> = ({ 
    images, 
    heightClass = "h-64" 
  }) => {
    const displayImages = [...images, ...images];
  
    return (
      <div className={`w-full overflow-hidden relative ${heightClass}`}>
        <div className="flex animate-infinite-scroll w-max">
          {displayImages.map((src, index) => (
            <div key={index} className={`relative flex-shrink-0 px-2 ${heightClass}`}>
              <img 
                src={src} 
                alt={`Carousel item ${index}`} 
                className="h-full w-auto object-cover rounded-xl opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0 min-w-[300px]"
              />
            </div>
          ))}
        </div>
         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-torre to-transparent z-20 pointer-events-none"></div>
         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-torre to-transparent z-20 pointer-events-none"></div>
      </div>
    );
  };