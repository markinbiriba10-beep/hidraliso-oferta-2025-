import React from 'react';

interface ReviewCardProps {
  name: string;
  image: string;
  title: string;
  text: string;
  date: string;
  resultImage?: string; // Nova prop opcional para a foto do cabelo
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, image, title, text, date, resultImage }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition text-left min-w-[280px] md:min-w-[320px] flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover border-2 border-purple-100" />
        <div>
          <h3 className="font-bold text-lg text-gray-800">{name}</h3>
          <div className="text-yellow-400 text-sm flex tracking-tighter">★★★★★</div>
        </div>
      </div>
      
      <h4 className="font-bold text-gray-700 mb-2">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">{text}</p>
      
      {/* Imagem do Resultado (Prova Social) - Ajustada para Vertical */}
      {resultImage && (
        <div className="mb-4 rounded-lg overflow-hidden border border-gray-100 bg-gray-50 flex justify-center">
          <img 
            src={resultImage} 
            alt={`Resultado de ${name}`} 
            className="w-full h-auto max-h-96 object-contain" 
          />
        </div>
      )}

      <div className="border-t border-gray-100 pt-3 mt-auto">
        <p className="text-[#2ecc71] text-xs font-bold flex items-center gap-1">
          <span>✅</span> Compra Verificada
        </p>
        <p className="text-gray-400 text-xs mt-1">🕔 {date}</p>
      </div>
    </div>
  );
};

export default ReviewCard;