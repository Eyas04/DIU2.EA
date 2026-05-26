import React from 'react';
import { InputGroup } from '../ui/InputGroup';
import { Button } from '../ui/Button';

export const ReservationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Reserva enviada con éxito!");
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto bg-brand-neutral-2/50 border border-brand-neutral-3 rounded-2xl p-8 flex flex-col gap-6 shadow-sm"
    >
      <InputGroup label="Nombre completo" placeholder="Introduce tu nombre" />
      <InputGroup label="Teléfono" type="tel" placeholder="600 000 000" />

      {/* Fila doble: Fecha y Hora */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputGroup label="Fecha" type="date" />
        <InputGroup label="Hora" type="time" />
      </div>

      {/* Fila doble: Selectores rústicos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left font-sans">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-brand-neutral-9">Tipo de espacio</label>
          <select className="w-full px-4 py-2.5 bg-brand-neutral-1 rounded-xl border border-brand-neutral-3 text-sm text-brand-neutral-10 outline-none">
            <option>Espacio de trabajo</option>
            <option>Mesa rústica cafetera</option>
            <option>Zona de lectura</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-brand-neutral-9">Nº de personas</label>
          <select className="w-full px-4 py-2.5 bg-brand-neutral-1 rounded-xl border border-brand-neutral-3 text-sm text-brand-neutral-10 outline-none">
            <option>1 persona</option>
            <option>2 personas</option>
            <option>3 personas</option>
            <option>4+ personas</option>
          </select>
        </div>
      </div>

      {/* Tu botón estirado rojo de Figma */}
      <Button variant="primary" label="Enviar reserva" className="w-full py-3 mt-4" type="submit" />
    </form>
  );
};