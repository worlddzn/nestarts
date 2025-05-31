
import { MessageCircle, Bot, User, Clock, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const demoScenarios = [
  {
    title: "Agendamento - Barbearia",
    subtitle: "Sistema automatizado de agendamentos",
    businessName: "Barbearia Elite",
    messages: [
      {
        type: "user",
        message: "Olá! Gostaria de agendar um horário para corte de cabelo",
        time: "14:32"
      },
      {
        type: "bot",
        message: "Olá! Claro, vou te ajudar com o agendamento. Qual seu nome?",
        time: "14:32"
      },
      {
        type: "user",
        message: "João Silva",
        time: "14:33"
      },
      {
        type: "bot",
        message: "Perfeito, João! Temos os seguintes horários disponíveis para amanhã:\n\n• 09:00 - Disponível\n• 14:00 - Disponível\n• 16:30 - Disponível\n\nQual prefere?",
        time: "14:33"
      },
      {
        type: "user",
        message: "14:00 seria perfeito!",
        time: "14:34"
      },
      {
        type: "bot",
        message: "Excelente! Agendamento confirmado:\n\n✅ João Silva\n📅 Amanhã às 14:00\n✂️ Corte de cabelo\n💰 R$ 25,00\n\nVou enviar uma confirmação 1 hora antes. Até amanhã!",
        time: "14:34"
      }
    ]
  },
  {
    title: "Dúvidas - Evento",
    subtitle: "Atendimento para eventos e shows",
    businessName: "Festival Tech 2024",
    messages: [
      {
        type: "user",
        message: "Oi! Tenho algumas dúvidas sobre o festival",
        time: "16:15"
      },
      {
        type: "bot",
        message: "Olá! Fico feliz em ajudar com suas dúvidas sobre o Festival Tech 2024. O que gostaria de saber?",
        time: "16:15"
      },
      {
        type: "user",
        message: "Qual o horário de início e quanto custa o ingresso?",
        time: "16:16"
      },
      {
        type: "bot",
        message: "O festival acontece das 14h às 23h nos dias 15 e 16 de dezembro.\n\n🎫 Ingressos:\n• Pista: R$ 120,00\n• Camarote: R$ 250,00\n• VIP: R$ 450,00\n\nTodos incluem open bar até 22h!",
        time: "16:16"
      },
      {
        type: "user",
        message: "E sobre estacionamento? Tem alguma opção?",
        time: "16:17"
      },
      {
        type: "bot",
        message: "Sim! Temos estacionamento próprio:\n\n🚗 R$ 25,00 por dia\n📍 Localização: Ao lado do evento\n⏰ Funcionamento: 13h às 01h\n\nTambém há estacionamentos parceiros com desconto. Gostaria de mais informações?",
        time: "16:17"
      }
    ]
  },
  {
    title: "Consultório - Odontologia",
    subtitle: "Esclarecimento de dúvidas odontológicas",
    businessName: "Dr. Ana Oliveira - Dentista",
    messages: [
      {
        type: "user",
        message: "Olá! Tenho dúvidas sobre lentes de resina",
        time: "10:20"
      },
      {
        type: "bot",
        message: "Olá! Sou a assistente virtual da Dra. Ana Oliveira. Ficarei feliz em esclarecer suas dúvidas sobre lentes de resina!",
        time: "10:20"
      },
      {
        type: "user",
        message: "Quanto tempo dura o procedimento e qual o valor?",
        time: "10:21"
      },
      {
        type: "bot",
        message: "As lentes de resina são aplicadas em sessão única:\n\n⏱️ Duração: 2 a 3 horas\n💰 Valor: R$ 350 por dente\n✨ Resultado imediato\n\nO procedimento é minimamente invasivo e muito confortável!",
        time: "10:21"
      },
      {
        type: "user",
        message: "Preciso fazer algum preparo antes?",
        time: "10:22"
      },
      {
        type: "bot",
        message: "Sim! Recomendamos:\n\n🦷 Limpeza profissional 1 semana antes\n🚭 Evitar fumo 48h antes\n☕ Reduzir café/chá para não manchar\n💊 Informar medicamentos em uso\n\nGostaria de agendar uma avaliação gratuita?",
        time: "10:22"
      }
    ]
  }
];

const DemoSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const currentScenario = demoScenarios[currentSlide];

  useEffect(() => {
    // Reset messages when slide changes
    setDisplayedMessages([]);
    setCurrentMessage(0);
  }, [currentSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentMessage < currentScenario.messages.length) {
        setIsTyping(true);
        
        setTimeout(() => {
          setDisplayedMessages(prev => [...prev, currentScenario.messages[currentMessage]]);
          setCurrentMessage(prev => prev + 1);
          setIsTyping(false);
        }, 1500);
      } else {
        // Reset animation after showing all messages
        setTimeout(() => {
          setDisplayedMessages([]);
          setCurrentMessage(0);
        }, 3000);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentMessage, currentScenario]);

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Veja como
            <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
              {" "}funciona{" "}
            </span>
            na prática
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nossa IA conversa naturalmente com seus clientes, agenda horários e responde dúvidas 24/7
          </p>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mb-8 space-x-4">
          {demoScenarios.map((scenario, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {scenario.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chat Demo */}
          <div className="relative">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-primary-600 to-purple-600 p-4 flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{currentScenario.businessName}</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-white/80">Online</span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-900/30">
                {displayedMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                  >
                    <div className={`max-w-xs lg:max-w-sm ${
                      msg.type === 'user' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-gray-700 text-gray-100'
                    } rounded-2xl px-4 py-3 shadow-lg`}>
                      <div className="flex items-start space-x-2">
                        {msg.type === 'bot' && (
                          <Bot size={16} className="text-primary-400 mt-1 flex-shrink-0" />
                        )}
                        {msg.type === 'user' && (
                          <User size={16} className="text-white/80 mt-1 flex-shrink-0" />
                        )}
                        <div>
                          <p className="text-sm whitespace-pre-line">{msg.message}</p>
                          <span className="text-xs opacity-70 mt-1 block">{msg.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="bg-gray-700 rounded-2xl px-4 py-3 flex items-center space-x-2">
                      <Bot size={16} className="text-primary-400" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{currentScenario.subtitle}</h3>
              <p className="text-gray-300">Exemplo prático de como nossa IA atende diferentes tipos de negócio</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Atendimento 24/7</h4>
                  <p className="text-gray-300">Seus clientes são atendidos a qualquer hora, mesmo quando você está dormindo ou ocupado.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Conversas Naturais</h4>
                  <p className="text-gray-300">A IA entende e responde como um humano, criando uma experiência personalizada para cada cliente.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Respostas Inteligentes</h4>
                  <p className="text-gray-300">Responde dúvidas específicas do seu negócio com precisão e agilidade, liberando seu tempo.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-600/20 to-purple-600/20 rounded-2xl p-6 border border-primary-500/30">
              <h4 className="text-lg font-semibold text-white mb-3">Resultado Real:</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-400">+300%</div>
                  <div className="text-sm text-gray-300">Mais conversões</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-400">-80%</div>
                  <div className="text-sm text-gray-300">Menos tempo gasto</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-primary-500 to-purple-600 hover:from-primary-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-500/25">
            Quero Testar Gratuitamente
          </button>
          <p className="text-gray-400 mt-3">Sem compromisso • Configuração em 5 minutos</p>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
