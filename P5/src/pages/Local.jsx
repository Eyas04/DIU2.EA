import React from 'react';
import { Navbar } from '../components/Navbar';
import { MapPin, Clock, Wifi, Zap, Laptop, BookOpen, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export const LocalPage = ({ setCurrentPage }) => {
  // Tus 3 fotos del local rústico de Granada
  const fotosLocal = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400",
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400"

  ];

  return (
    <div className="bg-brand-neutral-1 min-h-screen text-brand-neutral-10 flex flex-col">
      <Navbar currentPage="local" setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow max-w-6xl w-full mx-auto px-6 py-12">
        
        {/* SECCIÓN SUPERIOR: Mapa + Carrusel Centrado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Bloque Izquierdo: Dónde estamos y mapa */}
          <div className="flex flex-col gap-4 text-left">
            <div className="flex items-center gap-3 text-brand-neutral-10">
              <h1 className="font-serif font-bold text-3xl md:text-4xl uppercase tracking-wide">
                DÓNDE ESTAMOS
              </h1>
            </div>
            
            {/* Mapa contenedor */}
            <div className="w-full h-[320px] rounded-2xl overflow-hidden border border-brand-neutral-3 shadow-sm relative bg-stone-200">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800" 
                alt="Mapa Granada" 
                className="w-full h-full object-cover opacity-70"
              />
              {/* Pin flotante central rojo ladrillo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-brand-neutral-1/20 backdrop-blur-[1px]">
                <MapPin size={40} className="text-brand-primary-4 animate-bounce" fill="currentColor" />
                <span className="bg-brand-neutral-10 text-brand-neutral-2 text-[11px] font-sans font-bold px-3 py-1 rounded-md shadow-md">
                  La Qarmita - C/ Concha Espina, Granada
                </span>
              </div>
            </div>
          </div>

          {/* Bloque Derecho: Fotos del local  */}
          <div className="flex flex-col gap-4 text-left justify-center h-full">
            <h2 className="font-serif text-2xl text-brand-neutral-10 font-medium">
              Fotos del local
            </h2>
            
            {/* Carrusel de imágenes alineadas */}
            <div className="flex items-center gap-2 w-full">
              <button className="p-1 text-brand-neutral-8 hover:text-brand-primary-4 transition-colors">
                <ChevronLeft size={20} />
              </button>
              
              <div className="grid grid-cols-3 gap-3 w-full">
                {fotosLocal.map((foto, idx) => (
                  <div key={idx} className="h-24 rounded-xl overflow-hidden border border-brand-neutral-3 shadow-xs">
                    <img src={foto} alt={`Local ${idx}`} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                ))}
              </div>

              <button className="p-1 text-brand-neutral-8 hover:text-brand-primary-4 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* SECCIÓN INFERIOR: Horarios + Servicios en paralelo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          
          {/* Bloque Horarios */}
          <div className="flex flex-col gap-4 text-left">
            <div className="flex items-center gap-2 font-sans font-bold text-sm text-brand-neutral-9 uppercase tracking-wider">
              <Clock size={16} className="text-brand-primary-4" />
              <span>Horarios</span>
            </div>
            
            <div className="bg-brand-neutral-2 border border-brand-neutral-4/60 rounded-xl overflow-hidden font-sans text-sm shadow-xs">
              <div className="flex justify-between px-4 py-3 border-b border-brand-neutral-3 bg-brand-neutral-3/20">
                <span className="text-brand-neutral-8">Lunes a viernes</span>
                <span className="font-bold text-brand-neutral-10">9:00 - 22:00</span>
              </div>
              <div className="flex justify-between px-4 py-3 border-b border-brand-neutral-3">
                <span className="text-brand-neutral-8">Sábado</span>
                <span className="font-bold text-brand-neutral-10">10:00 - 23:00</span>
              </div>
              <div className="flex justify-between px-4 py-3 border-b border-brand-neutral-3 bg-brand-neutral-3/20">
                <span className="text-brand-neutral-8">Domingo</span>
                <span className="font-bold text-brand-neutral-10">10:00 - 20:00</span>
              </div>
              <div className="flex justify-between px-4 py-3 text-brand-primary-4 font-bold">
                <span>Festivos</span>
                <span>Consultar</span>
              </div>
            </div>
          </div>

          {/* Bloque Nuestros Servicios */}
          <div className="flex flex-col gap-4 text-left">
            <div className="flex items-center gap-2 font-sans font-bold text-sm text-brand-neutral-9 uppercase tracking-wider">
              <span>Nuestros servicios</span>
            </div>
            
            <div className="bg-brand-neutral-2 border border-brand-neutral-4/60 rounded-xl overflow-hidden font-sans text-sm shadow-xs flex flex-col divide-y divide-brand-neutral-3">
              <div className="flex items-center justify-between px-4 py-3 bg-brand-neutral-3/20">
                <span className="text-brand-neutral-10 font-medium">WiFi alta velocidad</span>
                <Wifi size={16} className="text-brand-neutral-9" />
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-brand-neutral-10 font-medium">Zonas con enchufe</span>
                <Zap size={16} className="text-brand-neutral-9" />
              </div>
              <div className="flex items-center justify-between px-4 py-3 bg-brand-neutral-3/20">
                <span className="text-brand-neutral-10 font-medium">Espacio de trabajo</span>
                <Laptop size={16} className="text-brand-neutral-9" />
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-brand-neutral-10 font-medium">Zona de lectura tranquila</span>
                <BookOpen size={16} className="text-brand-neutral-9" />
              </div>
              <div className="flex items-center justify-between px-4 py-3 bg-brand-neutral-3/20">
                <span className="text-brand-neutral-10 font-medium">Política de ruido</span>
                <AlertCircle size={16} className="text-brand-neutral-9" />
              </div>
            </div>
          </div>

        </div>

      </main>

      {/* Footer Espresso */}
      <footer className="w-full bg-brand-neutral-9 text-brand-neutral-2 py-8 text-center text-xs font-sans mt-24">
        © 2026 La Estantería de Sabores | Granada
      </footer>
    </div>
  );
};