import { Info, Hotel, Music } from 'lucide-react';
import { WeddingInfo } from '@/types';

interface AdditionalInfoProps {
  weddingInfo: WeddingInfo;
}

export default function AdditionalInfo({ weddingInfo }: AdditionalInfoProps) {
  const additionalInfo = weddingInfo.additionalInfo || {};

  const infoItems = [
    {
      icon: Hotel,
      title: 'Alojamiento',
      description: additionalInfo.accommodation?.description || 'Hoteles recomendados cerca del evento',
      details: additionalInfo.accommodation?.details || [],
      badge: 'bg-[#f0f4ff] text-[#4f63a6]',
    },
    {
      icon: Music,
      title: 'Música',
      description: additionalInfo.music?.description || '¿Tienes alguna canción especial?',
      details: additionalInfo.music?.details || [],
      badge: 'bg-[#f9e0ec] text-[#a94c7b]',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#fff5f7] to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
            <Info className="w-8 h-8 text-rose-500" />
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-rose-300 mb-3">
            Todo listo
          </p>
          <h2 className="text-4xl font-serif font-bold text-[#4f2d33] mb-4">
            Información Adicional
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Queremos que vivas una experiencia cálida y cuidada, por eso dejamos estos datos útiles
            para que puedas planificar sin preocupaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {infoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-1 transition-all border border-rose-50"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${item.badge}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#4f2d33] mb-2">{item.title}</h3>
                <p className="text-[#6b3d45] mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-[#4f2d33] flex items-start gap-2">
                      <span className="text-rose-400 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                {item.title === 'Música' && additionalInfo.music?.playlistUrl && (
                  <a
                    href={additionalInfo.music.playlistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#1DB954] text-white rounded-full text-sm font-medium hover:bg-[#1ed760] transition-colors shadow-sm w-full justify-center"
                  >
                    <Music className="w-4 h-4" />
                    Ver Playlist en Spotify
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

