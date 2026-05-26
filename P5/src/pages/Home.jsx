import React from 'react';
import { Navbar } from '../components/Navbar';
import  {Hero} from '../components/features/Hero';
import { EventCard } from '../components/features/EventCard';
import { Button } from '../components/ui/Button';
import { Star } from 'lucide-react';
import imagenLocal from '../assets/hero-local2.png'; 

export const HomePage = ({setCurrentPage}) => {
  const destacados = [
    {
      title: "Taller de Hipnosis y Autohipnosis",
      category: "Mente",
      date: "23/05/26 18:00",
      description: "Lucas Martínez, experto en hipnosis estará con nosotros enseñando su taller.",
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500"
    },
    {
      title: "Estreno libro Margarita Merino",
      category: "Libros",
      date: "2/06/26 20:00",
      description: "Nuestra queridísima Margarita vendrá a presentarnos su nuevo libro.",
      imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500"
    },
    {
      title: "Taller Lectura Niños",
      category: "Creativo",
      date: "20/05/26 17:30",
      description: "Iniciamos nuevo taller para los más peques de la casa.",
      imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500"
    }
  ];

  return (
    <div className="bg-brand-neutral-1 min-h-screen text-brand-neutral-10 flex flex-col">
      {/* Pasamos las propiedades al Navbar */}
      <Navbar currentPage="inicio" setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow max-w-6xl w-full mx-auto px-6 py-10">
        
        {/* Sección Hero */}
        <section className="flex flex-col md:flex-row items-center gap-12 py-12">
          
          <div className="w-180 h-90 rounded-2xl overflow-hidden border border-brand-neutral-3 bg-brand-neutral-1 flex items-center justify-center shadow-xs">
                    <img 
                      src={imagenLocal} 
                      alt="Local de La Estantería de Sabores" 
                      className="w-full h-full object-cover scale-105"
                    />
                  </div>
          
          <div className="w-full md:w-1/2 flex flex-col items-start gap-4">
            <h1 className="font-serif text-5xl lg:text-6xl text-brand-neutral-10 leading-tight">
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

        {/* Bloque Eventos Destacados */}
        <section className="mt-16">
          <div className="flex items-center justify-center gap-3 mb-10">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-brand-neutral-10">
              Eventos destacados
            </h2>
            <Star size={28} className="text-brand-primary-4" fill="currentColor" />
          </div>

          {/* Grid de las 3 Tarjetas de Eventos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {destacados.map((item, idx) => (
              <EventCard 
                key={idx}
                title={item.title}
                category={item.category}
                date={item.date}
                description={item.description}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>

          {/* Botón Inferior Agenda */}
          <div className="flex justify-center">
            <Button 
              label="Ver agenda completa" 
              iconName="ChevronRight" 
              onClick={() => setCurrentPage('agenda')} 
             />
          </div>
        </section>
      </main>

      {/* Pie de Página Rústico */}
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