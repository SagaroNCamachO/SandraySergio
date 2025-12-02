export interface WeddingInfo {
  couple: {
    name1: string;
    name2: string;
  };
  date: string;
  time: string;
  hero: {
    headline: string;
    subheadline: string;
    image?: string;
  };
  ceremony: {
    name: string;
    address: string;
    lat: number;
    lng: number;
    date?: string;
    time?: string;
  };
  reception: {
    name: string;
    address: string;
    lat: number;
    lng: number;
    date?: string;
    time?: string;
  };
  dressCode: string;
  giftAccount: {
    bank: string;
    accountNumber: string;
    accountHolder: string;
    accountType: 'cuenta_rut' | 'cuenta_corriente' | 'cuenta_vista' | 'chequera_electronica' | 'cuenta_ahorro';
    accountRut?: string;
    totalReceived: number;
    goal: number;
    currency: string;
  };
  whatsappMessage?: string;
  additionalInfo?: {
    contact?: {
      phone?: string;
      email?: string;
    };
    transport?: {
      description?: string;
      details?: string[];
    };
    accommodation?: {
      description?: string;
      details?: string[];
    };
    music?: {
      description?: string;
      details?: string[];
      playlistUrl?: string;
    };
  };
  photoGallery?: {
    images?: Array<{
      src: string;
      alt: string;
    }>;
  };
}

