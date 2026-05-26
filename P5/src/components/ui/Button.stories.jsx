import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

// Tu botón principal Rojo Ladrillo con el icono del calendario
export const PrimaryWithIcon = {
  args: {
    variant: 'primary',
    label: 'RESERVA TU ESPACIO',
    iconName: 'Calendar',
  },
};

// Tu botón Beige/Crema de la parte inferior con la flechita
export const AgendaComplete = {
  args: {
    variant: 'neutral3',
    label: 'Ver agenda completa',
    iconName: 'ChevronRight',
  },
};