function Hero({ onOpenModal }) {
  return (
    <section id="home" className="relative bg-white py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              ПРОФЕСІЙНИЙ ЗАПУСК САЙТА
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Створимо ефективний сайт за 7 днів, без зайвих питань. Оплата після замовлення. 
              Вартість - від 300 $. Зручно, швидко, з гарантією 5 років
            </p>
            <button 
              onClick={onOpenModal}
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              ЗАЛИШИТИ ЗАЯВКУ
            </button>
          </div>

          {/* Right Side - Illustration Placeholder */}
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl h-96 md:h-[500px] flex items-center justify-center shadow-2xl">
              <span className="text-white text-xl font-semibold">Illustration Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

