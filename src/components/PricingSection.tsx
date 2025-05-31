
import { Button } from "@/components/ui/button";
import { Check, Crown, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "597",
    period: "mês",
    description: "Ideal para pequenos negócios começarem a automatizar",
    features: [
      "Atendimento IA básico",
      "1 número WhatsApp",
      "Agendamento simples",
      "Suporte por email",
      "Dashboard básico"
    ],
    highlighted: false,
    cta: "Começar Agora"
  },
  {
    name: "Professional",
    price: "997",
    period: "mês",
    description: "Perfeito para empresas em crescimento",
    features: [
      "IA avançada personalizada",
      "3 números WhatsApp",
      "Agendamento completo",
      "Integração com ferramentas",
      "Relatórios detalhados",
      "Suporte prioritário"
    ],
    highlighted: true,
    cta: "Mais Popular"
  },
  {
    name: "Enterprise",
    price: "1.497",
    period: "mês",
    description: "Solução completa para grandes operações",
    features: [
      "IA ultra personalizada",
      "Números WhatsApp ilimitados",
      "Todas as integrações",
      "API personalizada",
      "Consultoria dedicada",
      "Suporte 24/7",
      "Relatórios avançados"
    ],
    highlighted: false,
    cta: "Falar com Especialista"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Planos que se adaptam ao
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              {" "}seu negócio{" "}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Escolha o plano ideal e comece a transformar seu atendimento hoje mesmo
          </p>
          
          {/* Special Offer Banner */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-lg p-4 max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center space-x-2">
              <Crown size={20} />
              <span className="font-semibold">Oferta Especial:</span>
              <span>Plano anual com site gratuito + consultoria personalizada!</span>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 transform hover:scale-105 ${
                plan.highlighted
                  ? 'ring-2 ring-primary-500 relative'
                  : 'hover:shadow-xl'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-500 text-white px-4 py-2 rounded-full flex items-center space-x-1">
                    <Star size={16} />
                    <span className="text-sm font-semibold">Mais Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-primary-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-primary-500 hover:bg-primary-600 text-white'
                    : 'bg-gray-100 hover:bg-primary-50 text-gray-900 hover:text-primary-600 border border-gray-200'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Annual Plan CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            🎁 Oferta Especial: Plano Anual
          </h3>
          <p className="text-xl mb-6 text-primary-100">
            Contrate qualquer plano anual e ganhe:
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-2">🌐 Site Personalizado</h4>
              <p className="text-primary-100">
                Site profissional completo, responsivo e otimizado para seu negócio
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-2">👨‍💼 Consultoria Gratuita</h4>
              <p className="text-primary-100">
                Acompanhamento especializado para maximizar seus resultados
              </p>
            </div>
          </div>
          <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Garantir Oferta Anual
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
