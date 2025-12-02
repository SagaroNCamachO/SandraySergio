'use client';

import { Calendar, Clock, MapPin, UtensilsCrossed } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale/es';
import LocationMap from './LocationMap';
import { WeddingInfo } from '@/types';
import ScrollReveal from './ui/ScrollReveal';

interface InfoSectionProps {
  weddingInfo: WeddingInfo;
}

export default function InfoSection({ weddingInfo }: InfoSectionProps) {
  return (
    <section id="fecha" className="py-24 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-6 shadow-sm">
              <Calendar className="w-8 h-8 text-rose-600" />
            </div>
            <p className="uppercase text-xs tracking-[0.5em] text-rose-400 mb-3 font-medium">Detalles</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-rose-950 mb-6">
              Información del Evento
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto"></div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Ceremony */}
          <ScrollReveal width="100%" delay={0.2}>
            <div className="group">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-rose-50 rounded-2xl group-hover:bg-rose-100 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-rose-900">Ceremonia</h3>
              </div>

              {weddingInfo.ceremony.date && weddingInfo.ceremony.time && (
                <div className="glass-card p-8 mb-8 hover:shadow-xl transition-all duration-300 border-rose-100/50">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-2 text-rose-400">
                        <Calendar className="w-5 h-5" />
                        <span className="text-sm font-semibold uppercase tracking-wider">Fecha</span>
                      </div>
                      <p className="text-lg text-rose-950 font-medium">
                        {(() => {
                          const [y, m, d] = weddingInfo.ceremony.date.split('-').map(Number);
                          const date = new Date(y, m - 1, d);
                          const formatted = format(date, "EEEE, d 'de' MMMM", { locale: es });
                          return formatted.charAt(0).toUpperCase() + formatted.slice(1);
                        })()}
                      </p>
                      <p className="text-rose-800/60 text-sm mt-1">
                        {(() => {
                          const [y, m, d] = weddingInfo.ceremony.date.split('-').map(Number);
                          return format(new Date(y, m - 1, d), 'yyyy');
                        })()}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2 text-rose-400">
                        <Clock className="w-5 h-5" />
                        <span className="text-sm font-semibold uppercase tracking-wider">Hora</span>
                      </div>
                      <p className="text-lg text-rose-950 font-medium">{weddingInfo.ceremony.time} hrs</p>
                      <p className="text-rose-800/60 text-sm mt-1">Se ruega puntualidad</p>
                    </div>
                  </div>
                </div>
              )}

              <div id="lugar" className="rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                <LocationMap
                  name={weddingInfo.ceremony.name}
                  address={weddingInfo.ceremony.address}
                  lat={weddingInfo.ceremony.lat}
                  lng={weddingInfo.ceremony.lng}
                  type="ceremony"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Reception */}
          <ScrollReveal width="100%" delay={0.4}>
            <div className="group">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-rose-50 rounded-2xl group-hover:bg-rose-100 transition-colors duration-300">
                  <UtensilsCrossed className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-rose-900">Celebración</h3>
              </div>

              {weddingInfo.reception.date && weddingInfo.reception.time && (
                <div className="glass-card p-8 mb-8 hover:shadow-xl transition-all duration-300 border-rose-100/50">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-2 text-rose-400">
                        <Calendar className="w-5 h-5" />
                        <span className="text-sm font-semibold uppercase tracking-wider">Fecha</span>
                      </div>
                      <p className="text-lg text-rose-950 font-medium">
                        {(() => {
                          const [y, m, d] = weddingInfo.reception.date.split('-').map(Number);
                          const date = new Date(y, m - 1, d);
                          const formatted = format(date, "EEEE, d 'de' MMMM", { locale: es });
                          return formatted.charAt(0).toUpperCase() + formatted.slice(1);
                        })()}
                      </p>
                      <p className="text-rose-800/60 text-sm mt-1">
                        {(() => {
                          const [y, m, d] = weddingInfo.reception.date.split('-').map(Number);
                          return format(new Date(y, m - 1, d), 'yyyy');
                        })()}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2 text-rose-400">
                        <Clock className="w-5 h-5" />
                        <span className="text-sm font-semibold uppercase tracking-wider">Hora</span>
                      </div>
                      <p className="text-lg text-rose-950 font-medium">{weddingInfo.reception.time} hrs</p>
                      <p className="text-rose-800/60 text-sm mt-1">A continuación de la ceremonia</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                <LocationMap
                  name={weddingInfo.reception.name}
                  address={weddingInfo.reception.address}
                  lat={weddingInfo.reception.lat}
                  lng={weddingInfo.reception.lng}
                  type="reception"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
