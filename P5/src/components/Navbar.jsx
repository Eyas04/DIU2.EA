import React from 'react';
import { Home, Calendar, Coffee, FileText, MapPin, Menu } from 'lucide-react';
import logoEstanteria from '../assets/isotipo.png'; 

export const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="w-full bg-brand-neutral-2 border-b border-brand-neutral-3 px-6 md:px-12 py-3 flex items-center justify-between sticky top-0 z-50 transition-colors">
      
      {/* Bloque Izquierdo: Contenedor del Logo + Nombre */}
      <div 
        onClick={() => setCurrentPage('inicio')}
        className="flex items-center gap-3 cursor-pointer hover:opacity-90 flex-shrink-0"
      >
        
        <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-neutral-3 bg-brand-neutral-1 flex items-center justify-center shadow-xs">
          <img 
            src={logoEstanteria} 
            alt="Logo La Estantería de Sabores" 
            className="w-full h-full object-cover scale-105"
          />
        </div>

        {/* Nombre de la marca */}
        <span className="font-serif font-bold text-2xl text-brand-neutral-10 tracking-tight">
          La estantería de sabores
        </span>
      </div>

      {/* Menú de enlaces empujado a la derecha */}
      <div className="hidden md:flex flex-grow justify-end items-center gap-8 font-sans font-bold text-xs uppercase tracking-widest text-brand-neutral-9 mr-4">
        
        {/* Inicio */}
        <button 
          onClick={() => setCurrentPage('inicio')}
          className={`flex items-center gap-1.5 pb-1 transition-colors border-b-2 ${
            currentPage === 'inicio' ? 'text-brand-primary-4 border-brand-primary-4' : 'text-brand-neutral-9 border-transparent hover:text-brand-primary-4'
          }`}
        >
          <Home size={14} className={currentPage === 'inicio' ? 'text-brand-primary-4' : 'text-brand-neutral-8'} />
          Inicio
        </button>

        {/* Agenda */}
        <button 
          onClick={() => setCurrentPage('agenda')}
          className={`flex items-center gap-1.5 pb-1 transition-colors border-b-2 ${
            currentPage === 'agenda' ? 'text-brand-primary-4 border-brand-primary-4' : 'text-brand-neutral-9 border-transparent hover:text-brand-primary-4'
          }`}
        >
          <Calendar size={14} className={currentPage === 'agenda' ? 'text-brand-primary-4' : 'text-brand-neutral-8'} />
          Agenda
        </button>

        {/* Sabores */}
        <button 
          onClick={() => setCurrentPage('sabores')}
          className={`flex items-center gap-1.5 pb-1 transition-colors border-b-2 ${
            currentPage === 'sabores' ? 'text-brand-primary-4 border-brand-primary-4' : 'text-brand-neutral-9 border-transparent hover:text-brand-primary-4'
          }`}
        >
          <Coffee size={14} className={currentPage === 'sabores' ? 'text-brand-primary-4' : 'text-brand-neutral-8'} />
          Sabores
        </button>

        {/* Reserva */}
        <button 
          onClick={() => setCurrentPage('reserva')}
          className={`flex items-center gap-1.5 pb-1 transition-colors border-b-2 ${
            currentPage === 'reserva' ? 'text-brand-primary-4 border-brand-primary-4' : 'text-brand-neutral-9 border-transparent hover:text-brand-primary-4'
          }`}
        >
          <FileText size={14} className={currentPage === 'reserva' ? 'text-brand-primary-4' : 'text-brand-neutral-8'} />
          Reserva
        </button>

        {/* Local */}
        <button 
          onClick={() => setCurrentPage('local')}
          className={`flex items-center gap-1.5 pb-1 transition-colors border-b-2 ${
            currentPage === 'local' ? 'text-brand-primary-4 border-brand-primary-4' : 'text-brand-neutral-9 border-transparent hover:text-brand-primary-4'
          }`}
        >
          <MapPin size={14} className={currentPage === 'local' ? 'text-brand-primary-4' : 'text-brand-neutral-8'} />
          Local
        </button>
      </div>

      {/* Menú Móvil */}
      <div className="flex md:hidden items-center p-1.5 rounded hover:bg-brand-neutral-3/40 text-brand-neutral-9 cursor-pointer transition-colors">
        <Menu size={20} />
      </div>
    </nav>
  );
};
