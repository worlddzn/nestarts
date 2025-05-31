
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Calendar, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-12 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Automatize seu
                <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  {" "}atendimento{" "}
                </span>
                com inteligência artificial
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transforme seu negócio com nossa plataforma completa de automação. 
                Atendimento 24/7, agendamentos inteligentes e integração total com WhatsApp.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                Começar Gratuitamente
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="border-primary-300 text-primary-600 hover:bg-primary-50 px-8 py-4 text-lg">
                Ver Demonstração
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-gray-600">Empresas Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">24/7</div>
                <div className="text-gray-600">Atendimento Ativo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">99%</div>
                <div className="text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Bot className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">IA Personalizada</h3>
                    <p className="text-gray-600 text-sm">Atendimento inteligente para seu negócio</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp Integrado</h3>
                    <p className="text-gray-600 text-sm">Múltiplos números em uma plataforma</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Calendar className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Agendamento Smart</h3>
                    <p className="text-gray-600 text-sm">Sistema completo para seu segmento</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-200 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-primary-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
