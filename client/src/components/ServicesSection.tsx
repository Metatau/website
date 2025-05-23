import { motion } from "framer-motion";
import { 
  MonitorIcon, PaletteIcon, SmartphoneIcon, 
  ShoppingCartIcon, TrendingUpIcon, SettingsIcon, 
  ChevronRightIcon, LayersIcon
} from "lucide-react";

const services = [
  {
    title: "Веб-разработка",
    icon: <MonitorIcon className="w-9 h-9" />,
    description: "Индивидуальные веб-сайты и веб-приложения, созданные с использованием новейших технологий и оптимизированные для высокой производительности.",
    features: [
      "Фронтенд-разработка",
      "Бэкенд-разработка",
      "Интеграция API",
      "Прогрессивные веб-приложения",
    ]
  },
  {
    title: "UI/UX Дизайн",
    icon: <PaletteIcon className="w-9 h-9" />,
    description: "Пользовательско-ориентированный дизайн, создающий интуитивно понятный, привлекательный и доступный цифровой опыт.",
    features: [
      "Дизайн пользовательского интерфейса",
      "Исследование пользовательского опыта",
      "Прототипирование и макетирование",
      "Тестирование удобства использования",
    ]
  },
  {
    title: "Мобильные приложения",
    icon: <SmartphoneIcon className="w-9 h-9" />,
    description: "Нативные и кроссплатформенные мобильные приложения, обеспечивающие плавный пользовательский опыт на всех устройствах.",
    features: [
      "Полный цикл разработки",
      "Безупречное соблюдение стандартов",
      "Кроссплатформенные решения",
      "Публикация приложений",
    ]
  },
  {
    title: "Комплексные решения",
    icon: <LayersIcon className="w-9 h-9" />,
    description: "Внедрение комплексной автоматизации для увеличения продаж и улучшения клиентского опыта.",
    features: [
      "Индивидуальные сайты",
      "Интеграция платежных систем",
      "CRM, ERP, PMS системы",
      "Программы лояльности",
    ]
  },
  {
    title: "Digital маркетинг",
    icon: <TrendingUpIcon className="w-9 h-9" />,
    description: "Комплексный digital маркетинг для повышения видимости и вовлеченности, роста конверсий.",
    features: [
      "SEO оптимизация",
      "Контент-маркетинг",
      "SERM продвижение",
      "Аналитика и отчетность",
    ]
  },
  {
    title: "Обслуживание и поддержка",
    icon: <SettingsIcon className="w-9 h-9" />,
    description: "Техническая поддержка и регулярные обновления для стабильной работы вашей цифровой экосистемы.",
    features: [
      "Техническая поддержка 24/7",
      "Регулярные обновления",
      "Мониторинг безопасности",
      "Оптимизация производительности",
    ]
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div 
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-['Courier_Prime']">
            Наши <span className="text-[#00FF41]">Услуги</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[#00FF41] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-[#0D0208]/75 backdrop-blur-md rounded-lg overflow-hidden border border-[#00FF41] hover:border-white transition-colors group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="p-4 sm:p-5 md:p-6">
                <div className="text-[#00FF41] text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">{service.description}</p>
                <ul className="text-gray-300 space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#00FF41] mr-2 text-xs sm:text-sm">{'>'}</span> 
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="inline-flex items-center text-[#00FF41] hover:text-white transition-colors text-sm sm:text-base">
                  Узнать больше <ChevronRightIcon className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
