import React, { useState } from 'react';
import { HomePage } from './pages/Home';
import { ReservaPage } from './pages/Reserva';
import { AgendaPage } from './pages/Agenda';
import { LocalPage } from './pages/Local';
import { DetalleEventoPage } from './pages/DetalleEvento'; 
import { SaboresPage } from './pages/Sabores';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');
  

  const [selectedEvent, setSelectedEvent] = useState(null);

  
  const verDetalle = (evento) => {
    setSelectedEvent(evento);
    setCurrentPage('detalle-evento');
  };

  if (currentPage === 'reserva') {
    return <ReservaPage setCurrentPage={setCurrentPage} />;
  }

  if (currentPage === 'agenda') {
    
    return <AgendaPage setCurrentPage={setCurrentPage} onEventClick={verDetalle} />;
  }

  if (currentPage === 'detalle-evento') {
    return <DetalleEventoPage event={selectedEvent} setCurrentPage={setCurrentPage} />;
  }

  if (currentPage === 'local') {
    return <LocalPage setCurrentPage={setCurrentPage} />;
  }

  if (currentPage === 'sabores') {
    return <SaboresPage setCurrentPage={setCurrentPage} />; 
  }

  return <HomePage setCurrentPage={setCurrentPage} />;
}

export default App;