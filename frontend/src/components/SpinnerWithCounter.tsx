import React, { useEffect } from 'react';
import { FC } from 'react';

interface SpinnerProps {
  current?: number;
  total?: number;
  className?: string;
  setSpinner?: any;
}

const Spinner: FC<SpinnerProps> = ({ current, total, className, setSpinner }) => {

  useEffect(() => {
    if (current === total) {
      setSpinner(false);
    }
  }, [current]);

  return (
    <div className={`relative inline-block ${className}`}>
      <div className="relative w-72 h-72">
        {/* Fondo estático */}
        <div className="absolute inset-0 border-[10px] border-gray-200 rounded-full" />

        {/* Spinner animado */}
        <div
          className="absolute inset-0 border-[10px] border-transparent rounded-full animate-spin border-t-purple-500 border-r-blue-500 border-b-green-500 border-l-yellow-500 [animation-duration:2s]"
        />

        {/* Texto central con gradiente */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-semibold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Insertando {current} de {total} registros
          </span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
