'use client';

import { MessageCircle } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

interface RsvpSectionProps {
    whatsappMessage?: string;
    phoneNumber?: string;
}

export default function RsvpSection({ whatsappMessage, phoneNumber }: RsvpSectionProps) {
    const handleConfirm = () => {
        const message = whatsappMessage || "¡Hola! Me encantaría confirmar asistencia a su boda";
        const encodedMessage = encodeURIComponent(message);
        // Clean phone number (remove spaces, +, etc. if needed, though wa.me handles some)
        // Ideally format as: 56987904865
        const cleanPhone = phoneNumber ? phoneNumber.replace(/\D/g, '') : '';

        const url = cleanPhone
            ? `https://wa.me/${cleanPhone}?text=${encodedMessage}`
            : `https://wa.me/?text=${encodedMessage}`;

        window.open(url, '_blank');
    };

    return (
        <section id="confirmar" className="py-24 px-4 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <ScrollReveal width="100%">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 shadow-sm">
                        <MessageCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-rose-950 mb-6">
                        Confirmar Asistencia
                    </h2>
                    <p className="text-rose-800/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        Esperamos contar con tu presencia en este día tan especial.
                        Por favor, confirma tu asistencia antes del 01-01-2026, para que podamos organizar todo perfectamente.
                    </p>

                    <button
                        onClick={handleConfirm}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <MessageCircle className="w-6 h-6" />
                        Confirmar por WhatsApp
                    </button>
                </ScrollReveal>
            </div>
        </section>
    );
}
