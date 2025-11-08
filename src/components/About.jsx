import { Award, Users, TrendingUp, DollarSign } from 'lucide-react';

function About() {
  const stats = [
    {
      icon: Award,
      number: '7',
      label: 'Років у маркетингу',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      number: '60+',
      label: 'Успішно реалізованих проектів',
      color: 'bg-green-500'
    },
    {
      icon: TrendingUp,
      number: '100%',
      label: 'Клієнтів продовжують співпрацю',
      color: 'bg-purple-500'
    },
    {
      icon: DollarSign,
      number: '2000$',
      label: 'Середній рекламний бюджет',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Наші досягнення
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:p-8 text-center"
                >
                  <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* About Text Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
            Про нас
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                VLM Digital - це сучасна веб-розробницька компанія, яка спеціалізується на створенні 
                професійних веб-сайтів та цифрових рішень для бізнесу різних масштабів.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ми пропонуємо повний спектр послуг, включаючи аналіз вашого бізнесу, дизайн, розробку, 
                інтеграцію функціоналу та підтримку після запуску. Наша команда експертів готова втілити 
                будь-яку вашу ідею в реальність та забезпечити вас професійним та ефективним веб-присутністю.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                VLM Digital активно використовує штучний інтелект та передові технології для досягнення 
                максимальної ефективності та інноваційності в кожному проекті. Ми завжди в курсі останніх 
                технологічних трендів та впроваджуємо їх у нашу роботу.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Оберіть якість та надійність – оберіть розробку сайта під ключ від VLM Digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
