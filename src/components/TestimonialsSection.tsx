
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Carlos Silva",
    role: "Diretor Clínica VidaSaúde",
    content: "A NEST revolucionou nosso atendimento. Conseguimos reduzir 80% das ligações de agendamento e os pacientes adoram a praticidade do WhatsApp integrado.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Marina Santos",
    role: "Proprietária Salão Elegance",
    content: "O sistema de agendamento é perfeito para nosso salão. A IA entende exatamente o que as clientes precisam e agenda automaticamente. Aumentamos 40% nossa ocupação!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Roberto Lima",
    role: "Dono Pet Shop AmigoFiel",
    content: "Incrível como a plataforma se adaptou ao nosso negócio. Os clientes conseguem agendar banho e tosa pelo WhatsApp, e ainda recebem lembretes automáticos. Recomendo!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            O que nossos
            <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
              {" "}clientes dizem{" "}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Histórias reais de empresas que transformaram seus resultados com a NEST
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-500/50"
                />
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8">Empresas que confiam na NEST:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-800 h-12 w-32 rounded flex items-center justify-center border border-gray-700">
              <span className="text-gray-400 font-semibold">Clínica +</span>
            </div>
            <div className="bg-gray-800 h-12 w-32 rounded flex items-center justify-center border border-gray-700">
              <span className="text-gray-400 font-semibold">Salão Pro</span>
            </div>
            <div className="bg-gray-800 h-12 w-32 rounded flex items-center justify-center border border-gray-700">
              <span className="text-gray-400 font-semibold">Pet Care</span>
            </div>
            <div className="bg-gray-800 h-12 w-32 rounded flex items-center justify-center border border-gray-700">
              <span className="text-gray-400 font-semibold">Barber Style</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
