import fs from 'fs';
import path from 'path';
import { WeddingInfo } from '@/types';

const dataPath = path.join(process.cwd(), 'data', 'database.json');

export function readWeddingInfo(): WeddingInfo {
  try {
    const data = fs.readFileSync(dataPath, 'utf-8');
    const parsed = JSON.parse(data);
    // Asegurar que todos los datos sean serializables
    return JSON.parse(JSON.stringify(parsed.weddingInfo)) as WeddingInfo;
  } catch (error) {
    console.error('Error reading wedding info:', error);
    // Retornar datos por defecto si hay error
    return {
      couple: { name1: 'Pareja 1', name2: 'Pareja 2' },
      date: '2025-01-01',
      time: '16:00',
      hero: {
        headline: 'Bienvenidos a nuestra celebración',
        subheadline: 'Gracias por compartir con nosotros este día tan especial.',
      },
      ceremony: {
        name: 'Lugar de la ceremonia',
        address: 'Dirección de la ceremonia',
        lat: 0,
        lng: 0,
      },
      reception: {
        name: 'Lugar de la fiesta',
        address: 'Dirección de la fiesta',
        lat: 0,
        lng: 0,
      },
      dressCode: 'Código de vestimenta elegante',
      giftAccount: {
        bank: 'Banco',
        accountNumber: '0000 0000 0000 0000',
        accountHolder: 'Nombre del titular',
        accountType: 'cuenta_corriente',
        accountRut: '',
        totalReceived: 0,
        goal: 0,
        currency: 'EUR',
      },
      whatsappMessage: '',
    };
  }
}

