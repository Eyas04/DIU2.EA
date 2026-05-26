import React from 'react';
import { ChevronRight } from 'lucide-react';

export const EventCard = ({ title, category, date, description, imageUrl }) => {
  return (
    <div className="bg-brand-neutral-2 rounded-2xl border border-brand-neutral-3 overflow-hidden p-4 flex flex-col h-full transition-shadow hover:shadow-sm">
      {/* Contenedor imagen */}
      <div className="w-full h-44 rounded-xl overflow-hidden border border-brand-neutral-3 relative bg-stone-100">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        
        {/* Categoría */}
        <span className="absolute top-3 right-3 bg-brand-neutral-3 text-brand-neutral-9 font-sans font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Textos */}
      <div className="mt-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-serif font-bold text-lg text-brand-neutral-10 leading-tight mb-2">
            {title}
          </h3>
          <p className="font-sans text-xs text-brand-neutral-8 line-clamp-2 mb-4">
            {description}
          </p>
        </div>

        {/* Fila inferior */}
        <div className="flex items-center justify-between pt-2 border-t border-brand-neutral-2">
          <span className="font-sans text-xs font-bold text-brand-neutral-10">
            Fecha: {date}
          </span>
          <ChevronRight size={18} className="text-brand-neutral-10 cursor-pointer hover:text-brand-primary-4" />
        </div>
      </div>
    </div>
  );
};
