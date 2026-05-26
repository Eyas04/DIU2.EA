import React from 'react';
import { Navbar } from '../components/Navbar';
import { ChevronLeft, Share2, Calendar, Clock, Hourglass, Bookmark } from 'lucide-react';

export const DetalleEventoPage = ({ event, setCurrentPage }) => {
  if (!event) {
    setCurrentPage('agenda');
    return null;
  }

  return (
    <div className="bg-brand-neutral-1 min-h-screen text-brand-neutral-10 flex flex-col">
      <Navbar currentPage="agenda" setCurrentPage={setCurrentPage} />
      
      
      <main className="flex-grow max-w-5xl w-full mx-auto px-6 py-6 flex flex-col justify-center">
        
        {/* Botón de volver */}
        <button 
          onClick={() => setCurrentPage('agenda')}
          className="flex items-center gap-2 text-brand-neutral-8 hover:text-brand-primary-4 transition-colors font-sans text-sm font-bold mb-6 self-start"
        >
          <ChevronLeft size={18} />
          Volver a la agenda
        </button>

        {/* CONTENEDOR PRINCIPAL: Cambiamos a proporciones 2/5 y 3/5 en escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center bg-brand-neutral-2/40 p-6 rounded-[24px] border border-brand-neutral-3/50 shadow-xs">
          
          
          <div className="md:col-span-2 w-full flex justify-center">
            <div className="w-full max-w-[280px] md:max-w-full aspect-[3/4] max-h-[340px] rounded-[24px] overflow-hidden shadow-md border border-brand-neutral-3">
              <img 
                src={event.imageUrl} 
                alt={event.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Lado Derecho: Info y Título compactados */}
          <div className="md:col-span-3 flex flex-col items-start text-left gap-4 h-full justify-center">
            <div className="flex flex-col gap-1">
              {/* Píldora de categoría */}
              <span className="bg-brand-neutral-3/50 text-brand-neutral-9 font-sans font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-brand-neutral-3 w-fit">
                {event.category}
              </span>
              <h1 className="font-serif font-bold text-3xl lg:text-4xl text-brand-neutral-10 leading-tight">
                {event.title}
              </h1>
            </div>

            
            <div className="flex flex-row flex-wrap gap-4 text-sm mt-1">
              <div className="flex items-center gap-2 text-brand-neutral-9 bg-brand-neutral-2 px-3 py-1.5 rounded-xl border border-brand-neutral-3">
                <Calendar size={16} className="text-brand-primary-4" />
                <span className="font-sans font-bold">{event.date.split(' ')[0]}</span>
              </div>
              
              <div className="flex items-center gap-2 text-brand-neutral-9 bg-brand-neutral-2 px-3 py-1.5 rounded-xl border border-brand-neutral-3">
                <Clock size={16} className="text-brand-primary-4" />
                <span className="font-sans font-bold">{event.date.split(' ')[1]} h</span>
              </div>

              <div className="flex items-center gap-2 text-brand-neutral-9 bg-brand-neutral-2 px-3 py-1.5 rounded-xl border border-brand-neutral-3">
                <Hourglass size={16} className="text-brand-primary-4" />
                <span className="font-sans font-bold">60 min</span>
              </div>
            </div>

            {/* Descripción integrada al lado de la imagen  */}
            <div className="mt-2">
              <p className="font-sans text-xs lg:text-sm text-brand-neutral-8 leading-relaxed max-w-prose">
                {event.description}
              </p>
            </div>
          </div>
        </div>

        {/* ACCIONES: Botones de control inferiores */}
        <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-brand-neutral-3/60">
          
          {/* BOTÓN SECUNDARIO: Compartir */}
          <button className="flex items-center gap-2 px-6 py-2 rounded-full border-2 border-brand-primary-4 text-brand-primary-4 font-sans font-bold text-xs uppercase tracking-wider hover:bg-brand-primary-4/5 transition-all">
            <Share2 size={14} />
            Compartir
          </button>

          {/* BOTÓN PRIMARIO: Reserva  */}
          <button 
            onClick={() => setCurrentPage('reserva')}
            className="flex items-center gap-2 px-10 py-2.5 rounded-full bg-brand-primary-4 text-white font-sans font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-brand-primary-5 transition-all transform hover:-translate-y-0.5"
          >
            <Bookmark size={14} />
            Reservar espacio
          </button>

        </div>
      </main>

      <footer className="w-full bg-brand-neutral-9 text-brand-neutral-2 py-6 text-center text-xs font-sans mt-auto">
        © 2026 La Estantería de Sabores | Granada
      </footer>
    </div>
  );
};