
export const exportSiteData = () => {
  const siteData = {
    meta: {
      title: "NEST - Atendimento Automatizado com IA",
      description: "Transforme seu WhatsApp em uma máquina de vendas com nossa IA",
      exportDate: new Date().toISOString(),
    },
    hero: {
      title: "Transforme seu WhatsApp em uma máquina de vendas",
      subtitle: "Nossa IA conversa com seus clientes, agenda horários e responde dúvidas 24/7 enquanto você foca no que realmente importa",
      cta: "Começar Gratuitamente"
    },
    features: [
      {
        title: "Atendimento 24/7",
        description: "Sua IA nunca dorme e atende clientes a qualquer hora"
      },
      {
        title: "Agenda Automatizada",
        description: "Agendamentos automáticos direto no seu WhatsApp"
      },
      {
        title: "Respostas Inteligentes",
        description: "IA treinada para seu negócio específico"
      }
    ],
    demoScenarios: [
      {
        title: "Agendamento - Barbearia",
        subtitle: "Sistema automatizado de agendamentos",
        businessName: "Barbearia Elite",
        type: "scheduling",
        industry: "beauty",
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
        type: "support",
        industry: "events",
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
        type: "consultation",
        industry: "healthcare",
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
    ],
    testimonials: [
      {
        name: "Dr. Carlos Silva",
        role: "Diretor Clínica VidaSaúde",
        content: "A NEST revolucionou nosso atendimento. Conseguimos reduzir 80% das ligações de agendamento e os pacientes adoram a praticidade do WhatsApp integrado.",
        rating: 5,
        industry: "healthcare"
      },
      {
        name: "Marina Santos",
        role: "Proprietária Salão Elegance",
        content: "O sistema de agendamento é perfeito para nosso salão. A IA entende exatamente o que as clientes precisam e agenda automaticamente. Aumentamos 40% nossa ocupação!",
        rating: 5,
        industry: "beauty"
      },
      {
        name: "Roberto Lima",
        role: "Dono Pet Shop AmigoFiel",
        content: "Incrível como a plataforma se adaptou ao nosso negócio. Os clientes conseguem agendar banho e tosa pelo WhatsApp, e ainda recebem lembretes automáticos. Recomendo!",
        rating: 5,
        industry: "petcare"
      }
    ],
    pricing: {
      plans: [
        {
          name: "Starter",
          price: "R$ 97",
          period: "/mês",
          features: [
            "1.000 mensagens/mês",
            "1 número WhatsApp",
            "Agendamentos básicos",
            "Suporte por email"
          ]
        },
        {
          name: "Professional",
          price: "R$ 197",
          period: "/mês",
          features: [
            "5.000 mensagens/mês",
            "3 números WhatsApp",
            "IA personalizada",
            "Integrações avançadas",
            "Suporte prioritário"
          ],
          popular: true
        },
        {
          name: "Enterprise",
          price: "Personalizado",
          period: "",
          features: [
            "Mensagens ilimitadas",
            "Números ilimitados",
            "IA totalmente customizada",
            "Suporte 24/7",
            "Gerente dedicado"
          ]
        }
      ]
    },
    benefits: {
      conversions: "+300%",
      timeReduction: "-80%",
      availability: "24/7",
      setupTime: "5 minutos"
    }
  };

  // Convert to JSON and download
  const jsonString = JSON.stringify(siteData, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `nest-site-data-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
