"use client";

import React from "react";
import { Seccion6 } from "./StepImage";
import { VideoPlayer } from "./VideoPlayer"; // Asegúrate de tener esta importación

// Componente para la imagen
export function StepImage({ imageSrc, title, stepId, hasVideo = false }) {
  return (
    <div className="relative p-4 md:w-1/2">
      <div className="relative overflow-hidden rounded-lg bg-gray-800">
        {/* Imagen siempre visible */}
        <img
          src={imageSrc}
          alt={`Paso ${stepId}: ${title}`}
          className="h-64 w-full object-cover"
        />

        {/* VideoPlayer como capa adicional cuando hasVideo es true */}
        {hasVideo && <VideoPlayer />}
      </div>
    </div>
  );
}

// Componente para un paso individual
const Step = ({
  stepId,
  duration,
  title,
  description,
  buttonText,
  buttonLink,
  hasVideo,
  imageSrc,
  isLast,
}) => {
  // Convertir el ID a número y verificar si es impar
  const idNumber = parseInt(stepId);
  const isOdd = idNumber % 2 !== 0;

  return (
    <>
      <div
        className={`flex w-full max-w-5xl flex-col items-center pb-16 text-center ${isLast ? "md:flex-col md:items-center" : `md:flex-row md:py-0 md:text-left ${isOdd ? "" : "md:flex-row-reverse"}`}`}
      >
        <div
          className={`flex flex-col items-center p-4 ${isLast ? "md:items-center md:text-center" : `md:w-1/2 ${isOdd ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}`}
        >
          {/* Contenedor para número y fecha: en columna para móvil, en línea para desktop */}
          <div className="mb-4 flex flex-col items-center justify-center md:flex-row md:gap-4">
            <div className="text-blue-gray mb-2 flex h-[80px] min-w-[80px] items-center justify-center rounded-full border-3 border-dotted border-blue-400 md:mb-0 md:border-solid">
              <span className="text-2xl font-bold text-blue-400">{stepId}</span>
            </div>
            {duration && (
              <p className="text-blue-gray text-xm font-medium">{duration}</p>
            )}
          </div>

          <h3
            className={`text-blue text-H5-desktop mb-3 text-center font-bold md:text-4xl ${isLast ? "md:text-center" : isOdd ? "md:text-right" : "md:text-left"}`}
          >
            {title}
          </h3>
          {description && (
            <p
              className={`text-gray mb-6 max-w-md text-center text-base leading-relaxed ${isLast ? "mx-auto md:text-center" : isOdd ? "md:text-right" : "md:text-left"}`}
            >
              {description}
            </p>
          )}

          <div
            className={`flex w-full justify-center ${isLast ? "md:justify-center" : `md:${isOdd ? "justify-end" : "justify-start"}`}`}
          >
            {buttonText && (
              <a
                href={buttonLink}
                className="border-blue hover:bg-blue hover:text-blue-git text-blue mt-2 inline-block rounded-[30px] border-[4px] bg-transparent px-8 py-3 font-medium transition-colors duration-300 hover:text-white"
              >
                {buttonText}
              </a>
            )}
          </div>
        </div>

        {/* Condicional: usar Seccion6 para último ítem, StepImage para el resto */}
        {isLast ? (
          <Seccion6 />
        ) : (
          <StepImage
            imageSrc={imageSrc}
            title={title}
            stepId={stepId}
            hasVideo={hasVideo} // Esto hará que solo el paso con ID "1" tenga video
          />
        )}
      </div>

      {!isLast && (
        <div className="hidden w-full justify-center md:flex">
          <svg
            width="400"
            height="187"
            viewBox="0 0 400 187"
            className="overflow-visible"
          >
            <path
              d={
                // Si es el penúltimo paso (justo antes del último), usar una ruta que apunte al centro
                stepId === "05"
                  ? "M0,0 C20,130 160,50 200,187" // Curva suave que apunta al centro
                  : isOdd
                    ? "M0,0 C100,158 300,16 400,187" // Curva original para IDs impares
                    : "M0,187 C50,29 340,160 400,0" // Curva invertida para IDs pares
              }
              fill="none"
              stroke="#034159"
              strokeWidth="3"
              strokeDasharray="6 8"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
    </>
  );
};

// El resto del componente permanece igual
const ParticipationSteps = ({ steps }) => {
  return (
    <div className="flex w-full flex-col items-center px-4 py-12 md:px-6 lg:px-8">
      {steps.map((step, index) => (
        <Step
          key={step.id}
          stepId={step.id}
          duration={step.duration}
          title={step.title}
          description={step.description}
          buttonText={step.buttonText}
          buttonLink={step.buttonLink}
          hasVideo={step.hasVideo}
          imageSrc={step.imageSrc}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
};

export default ParticipationSteps;
