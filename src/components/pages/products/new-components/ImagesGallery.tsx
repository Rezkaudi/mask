"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";

// Types
interface TImage {
  imageSrc: string;
  title: string;
  isCenter?: boolean;
}

interface IImagesGalleryProps {
  images: TImage[];
  purchaseProductTitle?: string | null;
  title?: string | null;
  isCameraImages?: boolean;
}


const ImagesGallery = ({
  images,
  purchaseProductTitle,
  title,
  isCameraImages,
}: IImagesGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoading, setImageLoading] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [zoomScale, setZoomScale] = useState(1);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  const handlePrev = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedImageIndex(index);
    }
  };

  const handleImageLoad = (index: number) => {
    setImageLoading((prev) => ({ ...prev, [index]: false }));
  };

  const handleImageLoadStart = (index: number) => {
    setImageLoading((prev) => ({ ...prev, [index]: true }));
  };

  // Zoom functionality
  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(prev * 1.5, 4));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => Math.max(prev / 1.5, 1));
  };

  const resetZoom = () => {
    setZoomScale(1);
    setZoomPosition({ x: 0, y: 0 });
  };

  const handleZoomOpen = () => {
    setIsZoomed(true);
    resetZoom();
  };

  const handleZoomClose = () => {
    setIsZoomed(false);
    resetZoom();
  };

  // Drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomScale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - zoomPosition.x,
        y: e.clientY - zoomPosition.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomScale > 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;

      // Calculate boundaries to prevent dragging outside image bounds
      const maxX = (imageDimensions.width * (zoomScale - 1)) / 2;
      const maxY = (imageDimensions.height * (zoomScale - 1)) / 2;

      setZoomPosition({
        x: Math.max(-maxX, Math.min(maxX, newX)),
        y: Math.max(-maxY, Math.min(maxY, newY)),
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoomScale > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - zoomPosition.x,
        y: e.touches[0].clientY - zoomPosition.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && zoomScale > 1 && e.touches.length === 1) {
      e.preventDefault();
      const newX = e.touches[0].clientX - dragStart.x;
      const newY = e.touches[0].clientY - dragStart.y;

      const maxX = (imageDimensions.width * (zoomScale - 1)) / 2;
      const maxY = (imageDimensions.height * (zoomScale - 1)) / 2;

      setZoomPosition({
        x: Math.max(-maxX, Math.min(maxX, newX)),
        y: Math.max(-maxY, Math.min(maxY, newY)),
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  // Handle zoom modal keyboard events
  const handleZoomKeyDown = (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (e.key === "Escape") {
      handleZoomClose();
    }
    if (e.key === "ArrowLeft") {
      handlePrev();
    }
    if (e.key === "ArrowRight") {
      handleNext();
    }
    if (e.key === "+" || e.key === "=") {
      handleZoomIn();
    }
    if (e.key === "-") {
      handleZoomOut();
    }
    if (e.key === "0") {
      resetZoom();
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
      {/* Product Title */}
      {purchaseProductTitle && (
        <p className="mt-2 mb-5 lg:mt-4 text-[20px] lg:text-[40px] leading-[30px] lg:leading-[60px] font-black text-center bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent">
          {title}
          {purchaseProductTitle}
        </p>
      )}

      {/* Main Image Container */}
      <div className="relative mb-6">
        <div
          className="relative bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Image */}
          <div className="relative flex items-center justify-center min-h-[200px] p-4 md:p-6">
            {/* Loading Skeleton */}
            {imageLoading[selectedImageIndex] && (
              <div className="absolute inset-4 md:inset-6 bg-gray-200 animate-pulse rounded-lg" />
            )}

            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={images[selectedImageIndex].imageSrc}
                alt={`${images[selectedImageIndex].title} - Main view`}
                width={600}
                height={600}
                quality={90}
                className="w-auto h-auto max-w-full max-h-[70vh] object-contain transition-all duration-300 hover:scale-[1.02] drop-shadow-lg"
                onLoad={() => handleImageLoad(selectedImageIndex)}
                onLoadStart={() => handleImageLoadStart(selectedImageIndex)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              />
            </div>

            {/* Zoom Button */}
            <button
              onClick={handleZoomOpen}
              className={`absolute top-3 right-3 bg-white/95 hover:bg-white text-gray-600 hover:text-gray-800 p-2 rounded-lg shadow-sm border border-gray-100 transition-all duration-200 ${
                isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              aria-label="Zoom image"
            >
              <ZoomIn size={18} />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-3 right-3 bg-gray-900/80 text-white px-2.5 py-1 rounded-md text-xs font-medium backdrop-blur-sm">
              {selectedImageIndex + 1} / {images.length}
            </div>

            {/* Camera Image Title */}
            {isCameraImages && (
              <div className="absolute bottom-3 left-3 bg-white/95 text-rose-600 px-3 py-1.5 rounded-md text-sm font-medium shadow-sm border border-gray-100 backdrop-blur-sm">
                {images[selectedImageIndex].title}
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-600 hover:text-gray-800 p-2.5 rounded-lg shadow-sm border border-gray-100 transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            disabled={images.length <= 1}
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-600 hover:text-gray-800 p-2.5 rounded-lg shadow-sm border border-gray-100 transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            disabled={images.length <= 1}
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="relative">
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((image, index) => (
              <button
                key={`${image.title}-${index}`}
                onClick={() => setSelectedImageIndex(index)}
                onKeyDown={(e) => handleKeyPress(e, index)}
                className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-1 ${
                  selectedImageIndex === index
                    ? "ring-2 ring-rose-500 shadow-sm scale-[1.02]"
                    : "ring-1 ring-gray-200 hover:ring-gray-300 hover:shadow-sm"
                }`}
                aria-label={`View ${image.title}`}
              >
                {/* Thumbnail Loading Skeleton */}
                {imageLoading[index] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                )}

                <Image
                  src={image.imageSrc}
                  alt={`${image.title} thumbnail`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  onLoad={() => handleImageLoad(index)}
                  onLoadStart={() => handleImageLoadStart(index)}
                  sizes="(max-width: 768px) 64px, 80px"
                />

                {selectedImageIndex === index && (
                  <div className="absolute inset-0 bg-rose-500/10 border-2 border-rose-500 rounded-lg" />
                )}
              </button>
            ))}
          </div>

          {/* Gradient Fade for Scroll Indication */}
          <div className="absolute right-0 top-0 w-6 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />
        </div>
      )}

      {/* Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onKeyDown={handleZoomKeyDown}
          tabIndex={-1}
          onWheel={handleWheel}
        >
          {/* Zoom Controls */}
          <div className="absolute top-4 left-4 z-10 flex gap-2">
            <button
              onClick={handleZoomOut}
              disabled={zoomScale <= 1}
              className="bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 p-2 rounded-lg shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Zoom out"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </button>
            <button
              onClick={handleZoomIn}
              disabled={zoomScale >= 4}
              className="bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 p-2 rounded-lg shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Zoom in"
            >
              <ZoomIn size={18} />
            </button>
            <button
              onClick={resetZoom}
              className="bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 p-2 rounded-lg shadow-lg transition-all duration-200"
              aria-label="Reset zoom"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M3 21v-5h5" />
              </svg>
            </button>
          </div>

          {/* Zoom Level Indicator */}
          <div className="z-10 absolute top-4 left-1/2 -translate-x-1/2 bg-white/90 text-gray-900 px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
            {Math.round(zoomScale * 100)}%
          </div>

          {/* Image Container */}
          <div
            className="relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-out"
              style={{
                transform: `translate(${zoomPosition.x}px, ${zoomPosition.y}px) scale(${zoomScale})`,
                transformOrigin: "center center",
              }}
            >
              <Image
                src={images[selectedImageIndex].imageSrc}
                alt={`${images[selectedImageIndex].title} - Zoomed view`}
                width={1200}
                height={1200}
                quality={95}
                className="max-w-[90vw] max-h-[90vh] object-contain select-none"
                sizes="100vw"
                onLoad={(e) => {
                  const img = e.target as HTMLImageElement;
                  setImageDimensions({
                    width: img.naturalWidth,
                    height: img.naturalHeight,
                  });
                }}
                draggable={false}
              />
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleZoomClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 p-2 rounded-lg shadow-lg transition-all duration-200 z-10"
            aria-label="Close zoom"
          >
            <X size={20} />
          </button>

          {/* Modal Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 p-3 rounded-lg shadow-lg transition-all duration-200 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 p-3 rounded-lg shadow-lg transition-all duration-200 z-10"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Modal Image Counter */}
          <div className="absolute bottom-6 md:bottom-4 left-10 md:left-1/2 -translate-x-1/2 bg-white/90 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
            {selectedImageIndex + 1} / {images.length}
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 right-4 bg-white/90 text-gray-700 px-3 py-2 rounded-lg text-xs font-medium shadow-lg">
            <div className="flex flex-col gap-1 text-right">
              <span>Scroll or +/- to zoom</span>
              <span>Drag to pan • ESC to close</span>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ImagesGallery;
