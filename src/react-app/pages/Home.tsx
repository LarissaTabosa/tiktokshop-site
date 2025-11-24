import { useState, useRef } from 'react';
import { ArrowLeft, Share2, ShoppingCart, MoreVertical, Truck, Store, MessageCircle, ChevronRight, Bookmark, CreditCard, Gift, Shield, Check, Camera, Star } from 'lucide-react';
export default function Home() {
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [usedCoupons, setUsedCoupons] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const productImages = ['https://mocha-cdn.com/019ab290-94ee-7f25-b3b7-6efa12570ee2/91WgoUYglbL._AC_SX679_.jpg', 'https://mocha-cdn.com/019ab290-94ee-7f25-b3b7-6efa12570ee2/71ynAzZXN8L._AC_SX679_.jpg', 'https://mocha-cdn.com/019ab290-94ee-7f25-b3b7-6efa12570ee2/91p3W6QIA4L._AC_SX679_.jpg', 'https://mocha-cdn.com/019ab290-94ee-7f25-b3b7-6efa12570ee2/81WnGUGEJBL._AC_SX679_.jpg', 'https://mocha-cdn.com/019ab290-94ee-7f25-b3b7-6efa12570ee2/81ShemrTObL._AC_SX679_.jpg'];
  const scrollToSection = (section: string, ref: React.RefObject<HTMLDivElement | null>) => {
    setActiveTab(section);
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  const toggleSaved = () => {
    setIsSaved(!isSaved);
  };
  const useCoupon = (couponId: string) => {
    if (!usedCoupons.includes(couponId)) {
      setUsedCoupons([...usedCoupons, couponId]);
    }
  };
  const handleBack = () => {
    window.history.back();
  };
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Anel Page Turner Da Câmera Para Celular De Controle Remoto',
          text: 'Confira este produto incrível!',
          url: window.location.href
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      alert('Link copiado para área de transferência!');
      navigator.clipboard.writeText(window.location.href);
    }
  };
  const handleCart = () => {
    window.location.href = '/cart';
  };
  const handleMenu = () => {
    alert('Menu de opções');
  };
  const handleShipping = () => {
    alert('Informações de envio');
  };
  const handleProtection = () => {
    alert('Detalhes da proteção do cliente');
  };
  const handleOffers = () => {
    alert('Ver todas as ofertas');
  };
  const handleStoreReviews = () => {
    alert('Ver todas as avaliações da loja');
  };
  const handleVisitStore = () => {
    window.location.href = '/store/tk-shine';
  };
  const handleMoreFromStore = () => {
    alert('Ver mais produtos desta loja');
  };
  const handleStoreButton = () => {
    window.location.href = '/store/tk-shine';
  };
  const handleChatButton = () => {
    alert('Iniciar chat com o vendedor');
  };
  const handleCartButton = () => {
    window.location.href = '/cart';
  };
  const handleBuyNow = () => {
    window.location.href = 'https://tiktokshopcheckinlego.shop';
  };
  const handlePaymentOptions = () => {
    alert('Opções de parcelamento');
  };
  const handlePreviousImage = () => {
    setCurrentImageIndex(prev => prev === 0 ? productImages.length - 1 : prev - 1);
  };
  const handleNextImage = () => {
    setCurrentImageIndex(prev => prev === productImages.length - 1 ? 0 : prev + 1);
  };
  const handleTouchStart = useRef<number>(0);
  const handleTouchEnd = useRef<number>(0);
  const onTouchStart = (e: React.TouchEvent) => {
    handleTouchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    handleTouchEnd.current = e.changedTouches[0].clientX;
    const diff = handleTouchStart.current - handleTouchEnd.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNextImage();
      } else {
        handlePreviousImage();
      }
    }
  };
  return <div className="min-h-screen bg-white font-sans">
      {/* Mobile Container - 9:16 aspect ratio simulation */}
      <div className="max-w-md mx-auto bg-white min-h-screen relative">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-white sticky top-0 z-10">
          <button className="p-1" onClick={handleBack}>
            <ArrowLeft className="w-6 h-6 text-gray-900" strokeWidth={2.5} />
          </button>
          <div className="flex items-center gap-4">
            <button className="p-1" onClick={handleShare}>
              <Share2 className="w-6 h-6 text-gray-900" strokeWidth={2.5} />
            </button>
            <button className="p-1 relative" onClick={handleCart}>
              <ShoppingCart className="w-6 h-6 text-gray-900" strokeWidth={2.5} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">17</span>
            </button>
            <button className="p-1" onClick={handleMenu}>
              <MoreVertical className="w-6 h-6 text-gray-900" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Product Image Section */}
        <div className="relative bg-white px-4 py-6">
          <div className="w-full aspect-square flex items-center justify-center relative overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <img src={productImages[currentImageIndex]} alt={`Product image ${currentImageIndex + 1}`} className="w-full h-full object-contain transition-opacity duration-300" />
          </div>
          
          {/* Image Counter */}
          <div className="absolute bottom-8 right-6 bg-gray-600 bg-opacity-60 text-white text-xs font-medium px-2 py-1 rounded">
            {currentImageIndex + 1}/{productImages.length}
          </div>
          
          {/* Image Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5">
            {productImages.map((_, index) => <button key={index} onClick={() => setCurrentImageIndex(index)} className={`w-1.5 h-1.5 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-4' : 'bg-white bg-opacity-50'}`} />)}
          </div>
        </div>

        {/* Price Section */}
        <div className="px-4 pt-2 pb-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">-35%</span>
            <span className="text-sm text-gray-700">A partir de</span>
            <span className="text-red-500 text-3xl font-bold">R$ 278,50</span>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-gray-400 text-sm line-through">R$ 430,00</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer" onClick={handlePaymentOptions}>
            <CreditCard className="w-4 h-4" strokeWidth={2} />
            <span>2x R$ 53,75 sem juros</span>
            <ChevronRight className="w-4 h-4 text-gray-400" strokeWidth={2} />
          </div>
        </div>

        {/* Coupon Tags */}
        <div className="px-4 pb-4 flex items-center gap-2">
          <div className="bg-red-50 text-red-600 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1">
            <Gift className="w-3 h-3" strokeWidth={2} />
            <span>Desconto de R$ 10</span>
          </div>
          <div className="bg-red-50 text-red-600 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1">
            <Gift className="w-3 h-3" strokeWidth={2} />
            <span>Desconto de R$ 20</span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" strokeWidth={2} />
        </div>

        {/* Product Title */}
        <div className="px-4 pb-3 border-b border-gray-100">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-start gap-2 flex-1">
              <span className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded shrink-0">Black Friday</span>
              <h1 className="text-gray-900 text-base leading-snug font-normal">LEGO Stranger Things The Upside Down  (2287 Peças)</h1>
            </div>
            <button onClick={toggleSaved} className="p-1 shrink-0">
              <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-red-500 text-red-500' : 'text-gray-900'}`} strokeWidth={2} />
            </button>
          </div>
          <div className="text-gray-500 text-sm">8 vendidos</div>
        </div>

        {/* Shipping Section */}
        <div className="px-4 py-4 border-b border-gray-100 cursor-pointer" onClick={handleShipping}>
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3 flex-1">
              <Truck className="w-5 h-5 text-gray-700 mt-0.5 shrink-0" strokeWidth={2} />
              <div>
                <div className="text-gray-900 text-sm font-medium mb-1">Receba até 27 de dez - 5 de jan</div>
                <div className="text-gray-700 text-sm mb-1">Taxa de envio:  R$ 0,00</div>
                <div className="text-teal-600 text-sm">
                  Desconto de R$ 10 no frete em pedidos acima de
                </div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 mt-1 shrink-0" strokeWidth={2} />
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="sticky top-14 bg-white z-10 border-b border-gray-200">
          <div className="flex items-center px-4">
            <button onClick={() => scrollToSection('overview', overviewRef)} className={`py-3 px-3 text-sm font-medium ${activeTab === 'overview' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500'}`}>
              Visão geral
            </button>
            <button onClick={() => scrollToSection('reviews', reviewsRef)} className={`py-3 px-3 text-sm font-medium ${activeTab === 'reviews' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500'}`}>
              Avaliações
            </button>
            <button onClick={() => scrollToSection('description', descriptionRef)} className={`py-3 px-3 text-sm font-medium ${activeTab === 'description' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500'}`}>
              Descrição
            </button>
            <button className="py-3 px-3 text-sm font-medium text-gray-500">
              Recomen...
            </button>
          </div>
        </div>

        {/* Customer Protection */}
        <div className="px-4 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-3 cursor-pointer" onClick={handleProtection}>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber-700" strokeWidth={2} fill="currentColor" />
              <h2 className="text-gray-900 text-base font-medium">Proteção do cliente</h2>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" strokeWidth={2} />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-gray-700" strokeWidth={2.5} />
              <span className="text-gray-700 text-sm">Devolução gratuita</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-gray-700" strokeWidth={2.5} />
              <span className="text-gray-700 text-sm">Reembolso automático por dano</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-gray-700" strokeWidth={2.5} />
              <span className="text-gray-700 text-sm">Pagamento seguro</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-gray-700" strokeWidth={2.5} />
              <span className="text-gray-700 text-sm">Cupom por atraso na coleta</span>
            </div>
          </div>
        </div>

        {/* Ofertas Section */}
        <div className="px-4 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-3 cursor-pointer" onClick={handleOffers}>
            <h2 className="text-gray-900 text-lg font-semibold">Ofertas</h2>
            <ChevronRight className="w-5 h-5 text-gray-400" strokeWidth={2} />
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 min-w-[280px] border border-teal-200">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-gray-900 font-semibold text-base mb-1">Cupom de envio</div>
                  <div className="text-gray-600 text-sm">Desconto de R$ 10 no frete em pedidos acima de R$ 29</div>
                </div>
                <div className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">x29</div>
              </div>
              <button onClick={() => useCoupon('shipping')} className={`mt-3 font-semibold text-sm px-6 py-2 rounded-lg w-full transition-colors ${usedCoupons.includes('shipping') ? 'bg-gray-100 border-2 border-gray-300 text-gray-500 cursor-not-allowed' : 'bg-white border-2 border-teal-500 text-teal-600 hover:bg-teal-50'}`} disabled={usedCoupons.includes('shipping')}>
                {usedCoupons.includes('shipping') ? 'Utilizado' : 'Usar'}
              </button>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 min-w-[280px] border border-red-200">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-gray-900 font-semibold text-base mb-1">Desconto</div>
                  <div className="text-gray-600 text-sm">Desconto de R$ 5 nos pedidos</div>
                </div>
                <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">x5</div>
              </div>
              <button onClick={() => useCoupon('discount')} className={`mt-3 font-semibold text-sm px-6 py-2 rounded-lg w-full transition-colors ${usedCoupons.includes('discount') ? 'bg-gray-100 border-2 border-gray-300 text-gray-500 cursor-not-allowed' : 'bg-white border-2 border-red-500 text-red-600 hover:bg-red-50'}`} disabled={usedCoupons.includes('discount')}>
                {usedCoupons.includes('discount') ? 'Utilizado' : 'Usar'}
              </button>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div ref={reviewsRef} className="px-4 py-4 border-b border-gray-100">
          <h2 className="text-gray-900 text-lg font-semibold mb-1">Avaliações dos clientes (0)</h2>
        </div>

        {/* Store Reviews */}
        <div className="px-4 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-3 cursor-pointer" onClick={handleStoreReviews}>
            <h2 className="text-gray-900 text-lg font-semibold">Avaliações da loja (408)</h2>
            <ChevronRight className="w-5 h-5 text-gray-400" strokeWidth={2} />
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
              <Camera className="w-4 h-4 text-gray-700" strokeWidth={2} />
              <span className="text-gray-900 text-sm">Inclui imagens ou vídeos(79)</span>
            </button>
            <button className="flex items-center gap-1 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
              <span className="text-gray-900 text-sm font-medium">5</span>
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" strokeWidth={2} />
              <span className="text-gray-600 text-sm">(323)</span>
            </button>
            <button className="flex items-center gap-1 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
              <span className="text-gray-900 text-sm font-medium">4</span>
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" strokeWidth={2} />
              <span className="text-gray-600 text-sm">(31)</span>
            </button>
          </div>
        </div>

        {/* Seller Info */}
        <div className="px-4 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white border-2 border-gray-200 flex items-center justify-center">
                <img src="https://mocha-cdn.com/019ab290-94ee-7f25-b3b7-6efa12570ee2/LEGO-Logo-1972-1998.png" alt="LEGO Logo" className="w-full h-full object-contain p-1" />
              </div>
              <div>
                <div className="text-gray-900 text-base font-semibold">LEGO®</div>
                <div className="text-gray-600 text-sm">2918 vendido(s)</div>
              </div>
            </div>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium text-sm px-6 py-2.5 rounded-lg transition-colors" onClick={handleVisitStore}>
              Visitar
            </button>
          </div>
        </div>

        {/* More from Store */}
        <div className="px-4 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-3 cursor-pointer" onClick={handleMoreFromStore}>
            <h2 className="text-gray-900 text-lg font-semibold">Mais desta loja</h2>
            <ChevronRight className="w-5 h-5 text-gray-400" strokeWidth={2} />
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            <div className="min-w-[140px] relative">
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">x5</div>
              <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 rounded-lg mb-2 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-red-600 text-2xl font-bold mb-1">Desconto</div>
                  <div className="text-red-600 text-xl font-bold">de R$ 5</div>
                </div>
              </div>
            </div>
            <div className="min-w-[140px]">
              <div className="aspect-square bg-white rounded-lg border border-gray-200 mb-2 overflow-hidden">
                <img src="https://mocha-cdn.com/019ab290-94ee-7f25-b3b7-6efa12570ee2/71mrnpSgWAL._AC_SX679_.jpg" alt="Product" className="w-full h-full object-cover" />
              </div>
              <div className="text-gray-900 text-sm line-clamp-2">LEGO Set Harry Potter Chapéu Seletor Falan</div>
              <div className="text-red-500 font-semibold text-sm mt-1">R$ 460,00</div>
            </div>
            <div className="min-w-[140px]">
              <div className="aspect-square bg-white rounded-lg border border-gray-200 mb-2 overflow-hidden">
                <img src="https://mocha-cdn.com/019ab290-94ee-7f25-b3b7-6efa12570ee2/813XP-eZBL._AC_SX679_-(1).jpg" alt="Product" className="w-full h-full object-cover" />
              </div>
              <div className="text-gray-900 text-sm line-clamp-2">LEGO The Legend of Zelda Árvore sagrada</div>
              <div className="text-red-500 font-semibold text-sm mt-1">R$ 2.840,50</div>
            </div>
          </div>
        </div>

        {/* Product Description Section */}
        <div ref={descriptionRef} className="px-4 py-4 border-b border-gray-100">
          <h2 className="text-gray-900 text-lg font-semibold mb-4">Sobre este produto</h2>
          
          <div className="text-gray-900 text-base font-semibold mb-3">Pronta Entrega!</div>
          
          <div className="text-gray-700 text-sm leading-relaxed space-y-4">
            <p>Construa uma casa LEGO Stranger Things Byers e The Upside Down da série original da Netflix
Este LEGO Stranger Things inclui 8 personagens de Stranger Things: Onze, Mike Wheeler, Lucas Sinclair, Dustin Henderson, Will Byers, Joyce Byers, Chefe Jim Hopper e o Demogorgon
A casa dos Stranger Things Byers mede mais de 32 cm de altura, 44 cm de largura e 21 cm de profundidade; 2287 peças - Para fãs e crianças maiores de 16 anos
Este brinquedo faz o presente perfeito para os fãs da série e faz um colecionador ideal de Stranger Things
Este LEGO Stranger Things O brinquedo de cabeça para baixo 75810 pode ser construído em conjunto com todos os outros conjuntos LEGO originais para construção criativa</p>
            
            <p>Os fãs da série original da Netflix, sucesso mundial, vão apreciar os detalhes autênticos deste brinquedo LEGO® Stranger Things altamente colecionável – 75810 The Upside Down. Este modelo robusto, construído com peças LEGO, pode alternar entre o mundo real e o Mundo Invertido. O design das instruções de montagem do modelo proporciona uma ótima experiência de construção compartilhada com amigos e familiares. A casa dos Byers inclui o quarto de Will, a sala de estar e a sala de jantar. A versão do Mundo Invertido da casa, de uma dimensão alternativa, apresenta todos os cômodos do modelo do mundo real, mas com uma aparência escura, coberta de vinhas, em ruínas, que os fãs reconhecerão instantaneamente da série. Com 8 mini-figuras de Stranger Things, cada uma com seus acessórios, este conjunto de brinquedos é um excelente presente para os fãs de Stranger Things, que vão adorar construir e exibir este modelo para mostrar sua paixão pela série.</p>
            
            <p>Este brinquedo LEGO® Stranger Things inclui 8 miniaturas instantaneamente reconhecíveis de Stranger Things, da série original de sucesso da Netflix: Eleven, Mike Wheeler, Lucas Sinclair, Dustin Henderson, Will Byers, Joyce Byers, Chefe Jim Hopper e o Demogorgon</p>
            
            <p>A casa dos Byers possui uma varanda com móveis, sala de estar, sala de jantar e o quarto do Will. 
A sala de estar apresenta detalhes autênticos da série, como a parede do alfabeto com função de luz, sofá, mesa de centro, telefone, machado, flyer 'você me viu?' colado, e uma armadilha para ursos para capturar o Demogorgon. 
O quarto do Will desempenha um papel central na série, que este modelo replica fielmente, incluindo detalhes como a boombox do Will, cama, escrivaninha, abajur, desenhos e pôsteres de filmes. 
A sala de jantar inclui uma poltrona, caixas que armazenam luzes de Natal, elemento colado com livro de regras de jogos de fantasia e uma planta em vaso.</p>
          </div>
        </div>

        {/* Spacer for bottom bar */}
        <div className="h-24"></div>

        {/* Bottom Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2.5 shadow-lg z-20">
          <div className="max-w-md mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-6">
              <button className="flex flex-col items-center" onClick={handleStoreButton}>
                <Store className="w-6 h-6 text-gray-900" strokeWidth={2} />
                <span className="text-xs text-gray-900 mt-0.5">Loja</span>
              </button>
              <button className="flex flex-col items-center" onClick={handleChatButton}>
                <MessageCircle className="w-6 h-6 text-gray-900" strokeWidth={2} />
                <span className="text-xs text-gray-900 mt-0.5">Chat</span>
              </button>
              <button className="flex flex-col items-center relative" onClick={handleCartButton}>
                <ShoppingCart className="w-6 h-6 text-gray-900" strokeWidth={2} />
                <span className="text-xs text-gray-900 mt-0.5">Carrinho</span>
              </button>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold text-sm px-5 py-3 rounded-lg shadow-md flex-shrink-0 transition-colors" onClick={handleBuyNow}>
              <div>Comprar agora</div>
              <div className="text-xs font-normal">R$ 278,50 com cupom</div>
            </button>
          </div>
        </div>

      </div>
    </div>;
}
