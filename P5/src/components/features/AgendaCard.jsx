import React from 'react';
import { ChevronRight } from 'lucide-react';

export const AgendaCard = ({ title, category, date, description, imageUrl }) => {
  return (
    <div className="w-full bg-brand-neutral-2 border border-brand-neutral-3 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-6 transition-all hover:shadow-md text-left">
      
      {/* Miniatura del evento a la izquierda */}
      <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-stone-100">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Textos centrales */}
      <div className="flex-grow flex flex-col justify-between h-full w-full">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-serif font-bold text-xl text-brand-neutral-10 mb-1">
              {title}
            </h3>
            <p className="font-sans text-xs text-brand-neutral-8 line-clamp-2 mb-3">
              {description}
            </p>
          </div>
          
          {/* Píldora de Categoría rústica  */}
          <span className="bg-brand-neutral-3/60 text-brand-neutral-9 font-sans font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-brand-neutral-3 flex-shrink-0">
            {category}
          </span>
        </div>

        {/* Fecha inferior */}
        <div className="text-xs font-bold text-brand-neutral-10 mt-auto">
          Fecha: {date}
        </div>
      </div>

      {/* Flecha de acción derecha */}
      <div className="p-2 text-brand-neutral-10 flex-shrink-0 hidden sm:block">
        <ChevronRight size={20} />
      </div>
    </div>
  );
};