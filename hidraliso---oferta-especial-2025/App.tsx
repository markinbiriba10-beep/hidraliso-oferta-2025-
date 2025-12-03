
import React from 'react';
import { IMAGES, LINKS } from './constants';
import CountdownTimer from './components/CountdownTimer';
import KitCard from './components/KitCard';
import ReviewCard from './components/ReviewCard';
import { Truck, Star, CheckCircle, ShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  const testimonials = [IMAGES.DEP_1, IMAGES.DEP_2, IMAGES.DEP_3, IMAGES.DEP_4, IMAGES.DEP_5, IMAGES.DEP_6, IMAGES.DEP_7];
  
  // Triplicamos a lista para garantir o loop perfeito em telas grandes sem "buracos"
  const marqueeImages = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden font-roboto selection:bg-purple-200 selection:text-purple-900">
      
      {/* --- HERO SECTION (TOPO COM COR E LOGO) --- */}
      <div className="relative bg-gradient-to-b from-[#9b51e0] via-[#7c3aed] to-[#4c1d95] pb-24 pt-8 rounded-b-[3rem] shadow-2xl overflow-hidden">
        {/* Elementos de Fundo (Abstrato) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
           <div className="absolute top-10 left-10 w-64 h-64 bg-pink-500 rounded-full blur-[80px]"></div>
           <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center space-y-6">
          
          {/* LOGO CENTRALIZADA */}
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/20 mb-4 transform hover:scale-105 transition duration-500">
            <img 
              src={IMAGES.LOGO} 
              alt="Hidraliso Oficial" 
              className="h-16 md:h-20 drop-shadow-md filter brightness-0 invert" 
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-poppins font-black text-white leading-tight drop-shadow-lg">
            OFERTA EXCLUSIVA <br/>
            <span className="text-[#facc15]">LIBERADA HOJE!</span>
          </h1>

          <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl">
             Você ganhou até <b className="text-white bg-pink-600 px-2 py-1 rounded">70% DE DESCONTO</b> + Frete Grátis na compra dos kits promocionais.
          </p>

          {/* TIMER DE ESCASSEZ */}
          <div className="bg-white text-gray-900 rounded-xl p-6 shadow-2xl border-b-4 border-gray-300 w-full max-w-md transform translate-y-4">
             <CountdownTimer />
          </div>
        </div>
      </div>

      {/* --- KITS SECTION (OFERTA PRINCIPAL) --- */}
      <section id="kits" className="pt-20 pb-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 uppercase tracking-tight">
              Escolha seu Kit <span className="text-[#9b51e0]">Promocional</span>
            </h2>
            <p className="text-gray-500 mt-2 font-medium">Envio imediato com rastreamento para todo Brasil 🇧🇷</p>
          </div>

          {/* Grid Layout for Vertical Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto items-end">
            
            {/* KIT 1 - 1 POTE */}
            <KitCard 
              image={IMAGES.KIT_1}
              title="1 Hidraliso"
              subTitle="Tratamento Inicial"
              discountTag="30% DE DESCONTO"
              installmentPrice="15,20"
              cashPrice="147"
              originalPrice="219,90"
              link={LINKS.CHECKOUT_1}
              color="gray"
            />

            {/* KIT 2 - LEVE 3 PAGUE 2 */}
            <KitCard 
              image={IMAGES.KIT_2}
              title="Compre 2 Leve 3"
              subTitle="Tratamento Médio"
              discountTag="40% DE DESCONTO"
              installmentPrice="20,37"
              cashPrice="197"
              originalPrice="329,90"
              link={LINKS.CHECKOUT_2}
              color="blue"
            />

            {/* KIT 3 - LEVE 4 PAGUE 3 (BEST SELLER) */}
            <KitCard 
              image={IMAGES.KIT_3}
              title="Compre 3 Leve 4"
              subTitle="Tratamento Completo"
              discountTag="60% DE DESCONTO"
              installmentPrice="25,55"
              cashPrice="247"
              originalPrice="617,50"
              link={LINKS.CHECKOUT_3}
              bestSeller={true}
              color="purple"
            />

            {/* KIT 4 - LEVE 5 PAGUE 4 */}
            <KitCard 
              image={IMAGES.KIT_4}
              title="Compre 4 Leve 5"
              subTitle="Tratamento Máximo"
              discountTag="70% DE DESCONTO"
              installmentPrice="30,72"
              cashPrice="297"
              originalPrice="990,00"
              link={LINKS.CHECKOUT_4}
              color="pink"
            />
          </div>
        </div>
      </section>

      {/* --- SOCIAL PROOF CAROUSEL (INFINITE MARQUEE) --- */}
      <section className="py-16 bg-white border-t border-gray-100 overflow-hidden relative">
        <div className="container mx-auto px-4 text-center mb-10">
          
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 uppercase">
            DEPOIMENTOS
          </h2>
          <p className="text-xl text-gray-600 font-bold mb-2">
            Veja o que dizem nossas clientes
          </p>
          <p className="text-gray-500 font-medium mb-8">
            Campeão de vendas com mais de 35 mil clientes satisfeitas.
          </p>
          
          <div className="inline-block bg-purple-50 border border-purple-200 rounded-full px-6 py-3 shadow-sm transform hover:scale-105 transition-transform duration-300">
             <span className="text-[#9b51e0] font-black text-lg md:text-xl tracking-tight">
               💜 Hidraliso: O alisamento favorito das brasileiras!
             </span>
          </div>

        </div>
        
        {/* Infinite Scroll Container */}
        <div className="relative w-full py-8 bg-gray-50">
           
           {/* Fade Effect (Gradient Overlays) para Efeito Infinito */}
           <div className="absolute top-0 left-0 h-full w-20 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
           <div className="absolute top-0 right-0 h-full w-20 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

           <div className="flex w-max animate-marquee gap-6 items-center px-4">
              {marqueeImages.map((img, idx) => (
                <div key={idx} className="flex-shrink-0 bg-white p-2 rounded-2xl shadow-xl transform transition hover:scale-105 border border-gray-100 overflow-hidden">
                    {/* Imagem Inteira (Vertical) sem cortes */}
                    <img 
                      src={img} 
                      alt={`Resultado Hidraliso ${idx}`} 
                      className="h-[500px] w-auto object-contain rounded-xl"
                      loading="lazy"
                    />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- REVIEWS SECTION --- */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-800 uppercase">
              O que dizem sobre o <span className="text-[#9b51e0]">Hidraliso?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ReviewCard 
                  name="Silvye Alves"
                  image={IMAGES.AVATAR_1}
                  title="Simplesmente Incrível!"
                  text="Meu cabelo nunca ficou tão liso e brilhoso. Amei o resultado e a entrega foi super rápida."
                  date="Hoje"
                  resultImage={IMAGES.REVIEW_RESULT_SILVYE}
                />
                <ReviewCard 
                  name="Débora Lyra"
                  image={IMAGES.AVATAR_2}
                  title="Produto Fantástico"
                  text="Usei e já senti a diferença na primeira aplicação. O cheiro é maravilhoso e não arde os olhos."
                  date="Ontem"
                  resultImage={IMAGES.REVIEW_RESULT_DEBORA}
                />
                <ReviewCard 
                  name="Lais Bianchessi"
                  image={IMAGES.AVATAR_3}
                  title="Resultado Maravilhoso"
                  text="Fiquei chocada com o resultado! Alisou sem agredir meu cabelo. Recomendo demais!"
                  date="2 dias atrás"
                  resultImage={IMAGES.REVIEW_RESULT_LAIS}
                />
          </div>
          
          <div className="mt-12 text-center">
            <a href="#kits" className="inline-block bg-[#25D366] hover:bg-[#128C7E] text-white font-black py-4 px-10 rounded-full shadow-lg shadow-green-500/30 transition-all transform hover:-translate-y-1 text-xl animate-pulse">
              QUERO MEU CABELO LISO AGORA
            </a>
          </div>
        </div>
      </section>

      {/* --- GUARANTEE SECTION --- */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl border border-dashed border-gray-300 rounded-3xl p-8 md:p-12 relative bg-purple-50/50">
           <div className="flex flex-col md:flex-row items-center gap-8">
             <img src={IMAGES.GARANTIA_SEAL} alt="Garantia" className="w-48 md:w-64 drop-shadow-xl" />
             <div className="text-center md:text-left space-y-4">
               <h3 className="text-2xl md:text-3xl font-black text-gray-800">
                 Satisfação garantida ou seu dinheiro de volta!
               </h3>
               <p className="text-gray-600 leading-relaxed">
                 Acreditamos tanto na fórmula do nosso alisante de cabelo, que criamos o Desafio garantia estendida 30 Dias Hidraliso. Na compra acima de 2 Hidralisos você já estará participando do desafio automaticamente. Caso não tenha resultados visíveis na primeira aplicação, nós devolvemos seu dinheiro. É a certeza que somente o produto número 1 de vendas no Brasil pode oferecer. <a href="#" className="text-purple-600 font-bold underline">Saiba Mais.</a>
               </p>
               <div className="flex items-center justify-center md:justify-start gap-2 text-purple-700 font-bold text-sm">
                 <ShieldCheck className="w-5 h-5" />
                 <span>Compra Segura e Protegida</span>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-white py-12 border-t-4 border-[#9b51e0]">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          
          <img src={IMAGES.LOGO} alt="Hidraliso" className="h-12 mx-auto mb-8 filter brightness-0 invert opacity-80" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 text-sm text-gray-400">
             <a href="#" className="hover:text-white transition">Rastrear Pedido</a>
             <a href="#" className="hover:text-white transition">Políticas de Privacidade</a>
             <a href="#" className="hover:text-white transition">Termos de Uso</a>
             <a href={LINKS.WHATSAPP} className="hover:text-green-400 transition">Atendimento WhatsApp</a>
          </div>

          <div className="mb-8">
            <p className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-widest">Pagamento Seguro</p>
            <div className="flex flex-wrap justify-center gap-4 bg-white/5 p-4 rounded-xl inline-flex">
               <img src={IMAGES.PAYMENT_PIX} alt="Pix" className="h-6 opacity-80" />
               <img src={IMAGES.PAYMENT_MC} alt="Mastercard" className="h-6 opacity-80" />
               <img src={IMAGES.PAYMENT_VISA} alt="Visa" className="h-6 opacity-80" />
               <img src={IMAGES.PAYMENT_BOLETO} alt="Boleto" className="h-6 opacity-80" />
            </div>
          </div>

          <p className="text-xs text-gray-600">
            © 2025 Hidraliso. Todos os direitos reservados. <br/>
            Os resultados podem variar de acordo com o tipo de cabelo e modo de aplicação.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
