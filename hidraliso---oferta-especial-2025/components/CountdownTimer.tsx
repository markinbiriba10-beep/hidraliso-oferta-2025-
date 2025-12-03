import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  // Função para calcular o tempo restante até as 23:59:59 de hoje
  const calculateTimeLeft = () => {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    
    const difference = endOfDay.getTime() - now.getTime();
    
    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return { hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <p className="text-xs text-red-600 font-bold uppercase tracking-widest mb-1 animate-pulse">A oferta encerra em:</p>
      <div className="flex gap-2 justify-center items-center text-gray-800">
        {/* Horas */}
        <div className="flex flex-col items-center">
           <span className="font-black text-3xl leading-none font-mono">
             {formatTime(timeLeft.hours)}
           </span>
           <span className="text-[9px] uppercase font-bold text-gray-400">Horas</span>
        </div>

        <div className="font-black text-2xl pb-2">:</div>

        {/* Minutos */}
        <div className="flex flex-col items-center">
           <span className="font-black text-3xl leading-none font-mono">
             {formatTime(timeLeft.minutes)}
           </span>
           <span className="text-[9px] uppercase font-bold text-gray-400">Min</span>
        </div>

        <div className="font-black text-2xl pb-2">:</div>

        {/* Segundos */}
        <div className="flex flex-col items-center">
           <span className="text-red-600 font-black text-3xl leading-none font-mono">
             {formatTime(timeLeft.seconds)}
           </span>
           <span className="text-[9px] uppercase font-bold text-red-400">Seg</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;