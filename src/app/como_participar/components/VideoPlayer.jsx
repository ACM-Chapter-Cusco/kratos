"use client";

import { useState, useRef } from "react";
import { X } from "lucide-react";
import { FaRegCirclePlay } from "react-icons/fa6";

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const closeVideoModal = () => {
    if (videoRef.current) {
      // Pausar el video
      videoRef.current.pause();
      // Reiniciar el tiempo del video a 0
      videoRef.current.currentTime = 0;
      // Remover el src para asegurarnos que se descarga completamente
      videoRef.current.src = "";
      // Forzar la descarga de recursos
      videoRef.current.load();
    }
    setIsPlaying(false);
  };

  // Evitar que los clics en el contenedor del video se propaguen
  const handleVideoContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="absolute inset-0 h-full w-full">
      {!isPlaying ? (
        // Capa clickable sobre toda la imagen
        <div
          className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center"
          onClick={handlePlayClick}
        >
          {/* Botón central de play */}
          <div className="flex items-center justify-center rounded-full bg-black/30 p-3 backdrop-blur-sm">
            <FaRegCirclePlay className="size-12 text-white" />
          </div>
        </div>
      ) : (
        // Video modal a pantalla completa
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/90"
          onClick={closeVideoModal}
        >
          <div
            onClick={handleVideoContainerClick}
            className="relative z-50 mx-auto w-full max-w-3xl" // Definir ancho máximo
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeVideoModal();
              }}
              className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70"
              aria-label="Cerrar video"
            >
              <X size={24} />
            </button>
            <video
              ref={videoRef}
              className="aspect-video w-full" // Mantener relación de aspecto
              controls
              autoPlay
            >
              <source src="/pages/participation/media/tutorial-participation.mp4" type="video/mp4" />
              Tu navegador no soporta el tag de video.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
