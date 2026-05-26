import React from 'react';
import { Navbar } from '../components/Navbar';
import { ReservationForm } from '../components/features/ReservationForm';
import { CalendarDays } from 'lucide-react';

export const ReservaPage = ({ setCurrentPage }) => {
  return (
    <div className="bg-brand-neutral-1 min-h-screen text-brand-neutral-10 flex flex-col">
      {/* El Navbar interactivo con sus controles de página */}
      <Navbar currentPage="reserva" setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow max-w-4xl w-full mx-auto px-6 py-12 text-center">
        {/* Título en mayúsculas y Serif */}
        <div className="flex items-center justify-center gap-3 mb-10 text-brand-neutral-10">
          <h1 className="font-serif font-bold text-3xl md:text-4xl uppercase tracking-wide">
            RESERVA TU ESPACIO
          </h1>
          <CalendarDays size={28} className="text-brand-primary-4" />
        </div>

        {/* El componente del formulario contenedor */}
        <ReservationForm />
      </main>

      {/* Footer*/}
      <footer className="w-full bg-brand-neutral-9 text-brand-neutral-2 py-8 mt-20 text-center text-xs font-sans">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-12 opacity-90">
          <span className="cursor-pointer hover:underline">Sobre nosotros</span>
          <span className="cursor-pointer hover:underline">FAQ</span>
          <span className="cursor-pointer hover:underline">Contacto</span>
          <span className="cursor-pointer hover:underline">Términos y condiciones</span>
        </div>
      </footer>
    </div>
  );
};