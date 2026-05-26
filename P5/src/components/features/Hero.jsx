import React from 'react';
import { Button } from '../ui/Button';

export const Hero = ({ setCurrentPage }) => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 py-10 w-full">
      
      {/* Lado Izquierdo: Contenedor de la imagen con tamaños fijos para asegurar que se pinte */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-full max-w-[450px] h-[300px] md:h-[350px] rounded-[32px] overflow-hidden shadow-md border border-brand-neutral-3">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80" 
            alt="Cafetería con libros de prueba" 
            className="w-full h-full object-cover block"
          />
        </div>
      </div>

      {/* Lado Derecho: Textos principales */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-left gap-4">
        <h1 className="font-serif font-bold text-5xl lg:text-6xl text-brand-neutral-10 leading-tight">
          Cultura, café <br />y buenas ideas
        </h1>
        <p className="font-sans text-lg text-brand-neutral-8 font-medium">
          Tu refugio en Granada
        </p>
        
        <Button 
          variant="primary" 
          label="RESERVA TU ESPACIO" 
          iconName="Calendar" 
          className="mt-2" 
          onClick={() => setCurrentPage('reserva')} 
        />
      </div>

    </section>
  );
};