// Al principio de tu archivo Agenda.jsx:
import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { AgendaCard } from '../components/features/AgendaCard';
import { Calendar } from 'lucide-react';


export const AgendaPage = ({ setCurrentPage, onEventClick }) => {
  // Estados para controlar el buscador y la categoría activa
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  // Base de datos con los talleres 
  const todosLosEventos = [
    {
      title: "Joyería gatuna",
      category: "Creativo",
      date: "21/05/26 19:00",
      description: "Ven con nosotros a diseñar joyas para los peludos de la casa. Incluye consumición.",
      imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500"
    },
    {
      title: "Diseño de un tarot",
      category: "Mitología",
      date: "12/06/26 18:30",
      description: "¿Y si diseñamos juntos un tarot? Irene Carrión Ruiz nos enseñará cómo paso a paso.",
      imageUrl: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500"
    },
    {
      title: "Taller Vivencial",
      category: "Social",
      date: "13/06/26 10:30",
      description: "Juan López de la Universidad de Granada nos dará una charla sobre la abundancia.",
      imageUrl: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500"
    },
    {
      title: "Taller de Hipnosis y Autohipnosis",
      category: "Mente",
      date: "23/05/26 18:00",
      description: "Lucas Martínez estará con nosotros enseñando técnicas de autohipnosis.",
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500"
    }
  ];

  // filtrado en tiempo real
  const eventosFiltrados = todosLosEventos.filter(evento => {
    const coincideBusqueda = evento.title.toLowerCase().includes(searchQuery.toLowerCase());
    const coincideCategoria = activeCategory === 'Todos' || evento.category === activeCategory;
    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div className="bg-brand-neutral-1 min-h-screen text-brand-neutral-10 flex flex-col">
      <Navbar currentPage="agenda" setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow max-w-4xl w-full mx-auto px-6 py-12">
        
        {/* Cabecera */}
        <div className="flex items-center justify-center gap-3 mb-8 text-brand-neutral-10">
          <h1 className="font-serif font-bold text-3xl md:text-4xl uppercase tracking-wide">
            AGENDA CULTURAL
          </h1>
          <Calendar size={28} className="text-brand-primary-4" />
        </div>

        {/* Buscador  */}
        <div className="max-w-xl mx-auto mb-6">
          <input
            type="text"
            placeholder="Buscar eventos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2.5 bg-brand-neutral-2 border border-brand-neutral-3 rounded-xl text-sm text-brand-neutral-10 outline-none focus:border-brand-primary-4 transition-colors font-sans shadow-sm"
          />
        </div>

        {/* Barra de Filtros de Categoría */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 font-sans text-xs font-bold text-brand-neutral-8">
          <span className="text-brand-neutral-9 font-medium">Filtrar por categoría:</span>
          {['Cine', 'Libros', 'Música', 'Creativo', 'Mitología', 'Social', 'Todos'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full border transition-all ${
                activeCategory === cat
                  ? 'bg-brand-primary-4 text-brand-neutral-2 border-brand-primary-4 shadow-sm'
                  : 'bg-transparent border-transparent hover:border-brand-neutral-4 text-brand-neutral-9'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Listado Dinámico de Tarjetas */}
<div className="flex flex-col gap-4 max-w-3xl mx-auto">
  {eventosFiltrados.length > 0 ? (
    eventosFiltrados.map((evento, idx) => (
      /* Envolvemos la tarjeta en un div con cursor pointer y el onClick */
      <div 
        key={idx} 
        onClick={() => onEventClick(evento)} 
        className="cursor-pointer transition-transform hover:scale-[1.01]"
      >
        <AgendaCard
          title={evento.title}
          category={evento.category}
          date={evento.date}
          description={evento.description}
          imageUrl={evento.imageUrl}
        />
      </div>
    ))
  ) : (
    <div className="text-center py-12 text-sm text-brand-neutral-8 font-sans">
      No se han encontrado eventos para tu búsqueda. 
    </div>
  )}
</div>
      </main>

      {/* Footer Espresso */}
      <footer className="w-full bg-brand-neutral-9 text-brand-neutral-2 py-8 text-center text-xs font-sans mt-20">
        © 2026 La Estantería de Sabores | Granada
      </footer>
    </div>
  );
};

