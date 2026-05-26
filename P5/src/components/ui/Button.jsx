import React from 'react';
import * as LucideIcons from 'lucide-react';

export const Button = ({ 
  label, 
  variant = 'primary', 
  iconName,
  className = '', 
  ...props 
}) => {
  
  // Estilos base compartidos
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-sans font-bold text-xs uppercase tracking-wider transition-all duration-200 active:scale-95";
  
  // Variantes de color basadas en tu paleta de Figma
  const variants = {
    primary: "bg-brand-primary-4 hover:bg-brand-primary-5 text-brand-neutral-1",      // Rojo ladrillo
    secondary: "bg-brand-neutral-10 hover:bg-brand-neutral-9 text-brand-neutral-1", // Marrón oscuro
    neutral3: "bg-brand-neutral-1 border border-brand-neutral-4 text-brand-neutral-10 hover:bg-brand-neutral-2", // Tu botón beige "Ver agenda completa"
  };

  // Buscamos dinámicamente el icono en la librería Lucide
  const Icon = iconName ? LucideIcons[iconName] : null;

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {label}
      {Icon && <Icon size={14} />}
    </button>
  );
};
