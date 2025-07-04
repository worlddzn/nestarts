
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Calendar, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-purple-500/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Automatize seu
                <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}atendimento{" "}
                </span>
                com inteligência artificial
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Transforme seu negócio com nossa plataforma completa de automação. 
                Atendimento 24/7, agendamentos inteligentes e integração total com WhatsApp.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary-500 to-purple-600 hover:from-primary-600 hover:to-purple-700 text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-500/25">
                Começar Gratuitamente
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="border-primary-400 text-primary-400 hover:bg-primary-500/10 px-8 py-4 text-lg bg-transparent">
                Ver Demonstração
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">500+</div>
                <div className="text-gray-400">Empresas Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">24/7</div>
                <div className="text-gray-400">Atendimento Ativo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">99%</div>
                <div className="text-gray-400">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-700">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Bot className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">IA Personalizada</h3>
                    <p className="text-gray-400 text-sm">Atendimento inteligente para seu negócio</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">WhatsApp Integrado</h3>
                    <p className="text-gray-400 text-sm">Múltiplos números em uma plataforma</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Calendar className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Agendamento Smart</h3>
                    <p className="text-gray-400 text-sm">Sistema completo para seu segmento</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/30 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-primary-600/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
