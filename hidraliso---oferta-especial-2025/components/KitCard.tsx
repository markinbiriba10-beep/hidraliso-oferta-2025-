import React from 'react';
import { CreditCard, Check } from 'lucide-react';

interface KitCardProps {
  image: string;
  title: string;
  subTitle: string;
  discountTag: string;
  installmentPrice: string;
  cashPrice: string;
  originalPrice: string; // Novo campo para o preço "De"
  link: string;
  color: 'gray' | 'blue' | 'purple' | 'pink';
  bestSeller?: boolean;
}

const KitCard: React.FC<KitCardProps> = ({ 
  image, title, subTitle, discountTag, installmentPrice, cashPrice, originalPrice, link, color, bestSeller
}) => {
  
  // Definição de cores baseada no tipo de kit
  const colorClasses = {
    gray: { bg: 'bg-gray-100', text: 'text-gray-700' },
    blue: { bg: 'bg-blue-600', text: 'text-white' },
    purple: { bg: 'bg-[#9b51e0]', text: 'text-white' },
    pink: { bg: 'bg-pink-600', text: 'text-white' },
  };

  const theme = colorClasses[color];

  return (
    <div className={`relative flex flex-col bg-white rounded-3xl shadow-lg shadow-purple-900/10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20 hover:-translate-y-2 border ${bestSeller ? 'border-[#9b51e0] border-2 scale-105 z-10 ring-4 ring-purple-500/20' : 'border-[#9b51e0]/50'}`}>
      
      {/* Badge de Mais Vendido */}
      {bestSeller && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-max bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-sm font-black uppercase px-6 py-2 rounded-full shadow-lg tracking-wider animate-pulse z-20">
          🔥 CAMPEÃO DE VENDAS
        </div>
      )}

      {/* Cabeçalho do Card */}
      <div className={`${bestSeller ? 'bg-[#9b51e0]' : theme.bg} ${bestSeller ? 'text-white' : (color === 'gray' ? 'text-gray-800' : 'text-white')} p-4 pt-6 text-center rounded-t-[1.3rem]`}>
        <h3 className="text-xl font-black uppercase leading-none">{title}</h3>
        <p className="text-xs font-medium opacity-90 mt-1 uppercase tracking-wider">{subTitle}</p>
      </div>

      {/* Corpo do Card */}
      <div className="p-4 flex flex-col items-center flex-1">
        
        {/* Badge de Desconto */}
        <div className="bg-green-100 text-green-700 font-bold text-xs px-3 py-1 rounded-md border border-green-200 mb-4 uppercase">
          {discountTag}
        </div>

        {/* Imagem do Produto (AUMENTADA) */}
        <div className="relative mb-2 w-full flex justify-center h-56">
           <img src={image} alt={title} className="h-full object-contain drop-shadow-xl hover:scale-110 transition duration-500 transform" />
        </div>

        {/* Preços (DE / POR) */}
        <div className="w-full text-center space-y-1 mb-6">
          <div className="flex justify-center items-center gap-2 mb-1">
             <span className="text-gray-400 text-sm font-medium">De</span>
             <span className="text-red-500 text-sm line-through font-bold">R$ {originalPrice}</span>
          </div>
          
          <div className="flex flex-col items-center justify-center leading-none">
             <span className="text-sm font-bold text-gray-500 mb-[-5px]">12x de</span>
             <span className="text-5xl font-black text-gray-800 tracking-tighter">
               <span className="text-2xl align-top relative top-2">R$</span>{installmentPrice}
             </span>
          </div>
          <p className="text-[#9b51e0] font-bold text-lg mt-1">Ou R${cashPrice} à vista</p>
        </div>

        {/* Lista de Benefícios (Visual Clean) */}
        <ul className="w-full text-sm text-gray-500 space-y-2 mb-6 px-2">
           <li className="flex items-center gap-2">
             <Check className="w-4 h-4 text-green-500" /> <span>Envio Imediato</span>
           </li>
           <li className="flex items-center gap-2">
             <Check className="w-4 h-4 text-green-500" /> <span>Nota Fiscal e Garantia</span>
           </li>
        </ul>

        {/* BOTÃO CTA */}
        <a 
          href={link}
          className="w-full bg-[#25D366] hover:bg-[#1fbd59] text-white font-black py-4 rounded-xl shadow-lg shadow-green-500/20 transition-all active:scale-95 flex items-center justify-center gap-2 group uppercase tracking-wide text-lg"
        >
          COMPRAR AGORA
          <CreditCard className="w-5 h-5 group-hover:animate-bounce" />
        </a>
      </div>

      {/* Footer do Card */}
      <div className="bg-gray-50 p-3 rounded-b-[1.3rem] text-center border-t border-gray-100">
         <p className="text-[10px] font-bold text-gray-400 uppercase">
           <span className="text-green-600">🚚 Frete Grátis</span> para todo Brasil
         </p>
      </div>

    </div>
  );
};

export default KitCard;