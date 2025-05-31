
import { Bot, Calendar, Globe, MessageCircle, Settings, Users } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "IA Personalizada",
    description: "ChatGPT integrado e personalizado para seu negócio, entendendo suas necessidades específicas.",
    color: "primary"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Multicanal",
    description: "Gerencie múltiplos números de WhatsApp em uma única plataforma integrada.",
    color: "green"
  },
  {
    icon: Calendar,
    title: "Agendamento Inteligente",
    description: "Sistema completo para clínicas, salões, pet shops e barbearias com confirmação automática.",
    color: "blue"
  },
  {
    icon: Globe,
    title: "Site Personalizado",
    description: "Site profissional gratuito ao contratar o plano anual, totalmente personalizado.",
    color: "purple"
  },
  {
    icon: Users,
    title: "Consultoria Gratuita",
    description: "Suporte especializado para integração e otimização da sua operação.",
    color: "orange"
  },
  {
    icon: Settings,
    title: "Integração Completa",
    description: "Conecte-se com suas ferramentas favoritas e automatize processos complexos.",
    color: "cyan"
  }
];

const colorMap = {
  primary: "bg-gradient-to-r from-primary-500 to-purple-500 text-white",
  green: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
  blue: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
  purple: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
  orange: "bg-gradient-to-r from-orange-500 to-red-500 text-white",
  cyan: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Funcionalidades que
            <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
              {" "}transformam{" "}
            </span>
            seu negócio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubra como nossa plataforma pode automatizar e otimizar cada aspecto do seu atendimento
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-2 group border border-gray-700"
            >
              <div className={`w-16 h-16 ${colorMap[feature.color]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl shadow-primary-500/20">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para revolucionar seu atendimento?
            </h3>
            <p className="text-xl mb-8 text-purple-100">
              Junte-se a centenas de empresas que já transformaram seus resultados
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg">
              Iniciar Teste Gratuito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
