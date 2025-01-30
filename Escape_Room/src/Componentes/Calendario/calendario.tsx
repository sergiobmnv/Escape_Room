import { useState } from "react";
import DatePicker from "react-datepicker";
import { Element } from "react-scroll";
import { useInView } from 'react-intersection-observer';

import "react-datepicker/dist/react-datepicker.css";
import "./calendario.css";

export default function Calendario() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null): void => {
    setSelectedDate(date);
    console.log("Fecha seleccionada:", date);
  };

// Lazy Loading para el titulo del calendario.
  const {ref:tituloCalendarioRef, inView:tituloCalendarioInView} = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Lazy Loading para el calendario.
  const {ref:calendarioRef, inView:calendarioInView} = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Element name = "calendario">
    <div ref = {tituloCalendarioRef} className={`tituloCalendario ${tituloCalendarioInView ? "visible":  "hidden"}`}>
      <h2 className="h2Titulo">Bienvenido a tu calendario</h2>
    </div>

    <div ref = {calendarioRef} className={`calendario-container ${calendarioInView ? "visible":  "hidden"}`}>
      <h2>Selecciona una fecha para tu reserva</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()} // Evita seleccionar fechas pasadas
        placeholderText="Elige una fecha"
        className="datepicker-input"
      />
      {selectedDate && (
        <p className="selected-date">
          Has seleccionado: {selectedDate.toLocaleDateString()}
        </p>
      )}
    </div>
    </Element>
  );
}
