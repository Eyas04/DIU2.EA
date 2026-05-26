import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Coffee, Cookie, Sparkles } from 'lucide-react';

export const SaboresPage = ({ setCurrentPage }) => {
  // Estado para alternar entre la pestaña de Cafés y de Tartas
  const [activeTab, setActiveTab] = useState('cafes');

  // Nuestra carta rústica de productos
  const menuProductos = {
    cafes: [
      {
        name: "Espresso de Especialidad",
        price: "1.80€",
        description: "Café con notas de chocolate artesanal y frutos rojos, molido al momento.",
        badge: "Origen Colombia",
        imageUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500"
      },
      {
        name: "Capuccino de la Casa",
        price: "2.60€",
        description: "Equilibrio perfecto de espresso, leche emulsionada y un toque de canela rústica.",
        badge: "Popular",
        imageUrl: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500"
      },
      {
        name: "Latte de Vainilla y Avellana",
        price: "3.20€",
        description: "Suave, dulce y reconfortante. Ideal para acompañar una tarde entera de lectura.",
        badge: "Recomendado",
        imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500"
      },
      {
        name: "Café de Filtro Chemex",
        price: "3.50€",
        description: "Método de extracción lento que resalta los aromas más puros del grano literario.",
        badge: "De Especialidad",
        imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500"
      }
    ],
    reposteria: [
      {
        name: "Tarta de Queso Rústica",
        price: "4.20€",
        description: "Nuestra famosa tarta horneada al estilo tradicional, increíblemente cremosa en el centro.",
        badge: "Casera",
        imageUrl: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500"
      },
      {
        name: "Bizcocho de Limón y Amapola",
        price: "3.00€",
        description: "Esponjoso, con un glaseado cítrico natural que combina de maravilla con tés verdes.",
        badge: "Sin Lactosa",
        imageUrl: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500"
      },
      {
        name: "Brownie de Chocolate y Nueces",
        price: "3.80€",
        description: "Intenso chocolate negro 70% horneado con nueces crujientes. Se sirve templado.",
        badge: "Sin Gluten",
        imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500"
      },
      {
        name: "Cookie Artesana de Avena",
        price: "2.20€",
        description: "Galleta rústica horneada cada mañana con pepitas de chocolate puro y un toque de miel.",
        badge: "Vegana",
        imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500"
      }
    ]
  };

  return (
    <div className="bg-brand-neutral-1 min-h-screen text-brand-neutral-10 flex flex-col">
      {/* Barra de navegación superior */}
      <Navbar currentPage="sabores" setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow max-w-5xl w-full mx-auto px-6 py-12">
        
        {/* Encabezado de la página */}
        <div className="flex flex-col items-center text-center gap-2 mb-10">
          <div className="flex items-center gap-2 text-brand-primary-4 mb-1">
            <Sparkles size={20} />
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-neutral-8">Nuestra Carta</span>
          </div>
          <h1 className="font-serif font-bold text-4xl uppercase tracking-wide text-brand-neutral-10">
            SABORES CON HISTORIA
          </h1>
          <p className="font-sans text-sm text-brand-neutral-8 max-w-md mt-1">
            Productos ecológicos, artesanos y de proximidad pensados para disfrutar con calma.
          </p>
        </div>

        {/* Selector de Pestañas */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('cafes')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-all border ${
              activeTab === 'cafes'
                ? 'bg-brand-primary-4 text-white border-brand-primary-4 shadow-sm'
                : 'bg-brand-neutral-2 text-brand-neutral-9 border-brand-neutral-3 hover:border-brand-neutral-4'
            }`}
          >
            <Coffee size={14} />
            Cafés de Especialidad
          </button>
          
          <button
            onClick={() => setActiveTab('reposteria')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-all border ${
              activeTab === 'reposteria'
                ? 'bg-brand-primary-4 text-white border-brand-primary-4 shadow-sm'
                : 'bg-brand-neutral-2 text-brand-neutral-9 border-brand-neutral-3 hover:border-brand-neutral-4'
            }`}
          >
            <Cookie size={14} />
            Repostería Casera
          </button>
        </div>

        {/* Rejilla de productos  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuProductos[activeTab].map((item, idx) => (
            <div 
              key={idx}
              className="bg-brand-neutral-2 border border-brand-neutral-3 rounded-[24px] overflow-hidden flex flex-col shadow-xs hover:shadow-md transition-all group"
            >
              {/* Imagen con altura controlada y overflow recortado */}
              <div className="h-44 w-full overflow-hidden bg-stone-100 relative">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Píldora rústica encima de la foto */}
                <span className="absolute top-3 left-3 bg-brand-neutral-2/90 backdrop-blur-xs text-brand-neutral-9 font-sans font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-md border border-brand-neutral-3/60 shadow-xs">
                  {item.badge}
                </span>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-4 flex flex-col justify-between flex-grow text-left">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-serif font-bold text-lg text-brand-neutral-10 leading-tight">
                      {item.name}
                    </h3>
                  </div>
                  <p className="font-sans text-xs text-brand-neutral-8 line-clamp-3 mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Precio destacado abajo en grande con fuente Serif */}
                <div className="flex items-center justify-between pt-2 border-t border-brand-neutral-3/50 mt-auto">
                  <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-brand-neutral-8">Precio</span>
                  <span className="font-serif font-bold text-lg text-brand-primary-4">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* Footer Espresso */}
      <footer className="w-full bg-brand-neutral-9 text-brand-neutral-2 py-8 text-center text-xs font-sans mt-24">
        © 2026 La Estantería de Sabores | Granada
      </footer>
    </div>
  );
};