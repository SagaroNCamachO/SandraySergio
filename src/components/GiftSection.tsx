'use client';

import { Gift, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import ScrollReveal from './ui/ScrollReveal';

interface GiftSectionProps {
  bank: string;
  accountNumber: string;
  accountHolder: string;
  accountType: 'cuenta_rut' | 'cuenta_corriente' | 'cuenta_vista' | 'chequera_electronica' | 'cuenta_ahorro';
  accountRut?: string;
  currency: string;
}

export default function GiftSection({
  bank,
  accountNumber,
  accountHolder,
  accountType,
  accountRut,
  currency,
}: GiftSectionProps) {
  const [copiedField, setCopiedField] = useState<'account' | 'rut' | null>(null);

  const accountTypeLabels: Record<GiftSectionProps['accountType'], string> = {
    cuenta_rut: 'Cuenta RUT',
    cuenta_corriente: 'Cuenta Corriente',
    cuenta_vista: 'Cuenta Vista',
    chequera_electronica: 'Chequera Electrónica',
    cuenta_ahorro: 'Cuenta de Ahorro',
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedField('account');
    setTimeout(() => setCopiedField(null), 2000);
  };

  const copyRut = () => {
    if (!accountRut) return;
    navigator.clipboard.writeText(accountRut);
    setCopiedField('rut');
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="regalos" className="py-24 px-4 bg-rose-50/30">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-6 shadow-sm">
              <Gift className="w-8 h-8 text-rose-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-rose-950 mb-6">
              Regalos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto"></div>
            <p className="text-rose-800/80 mt-8 text-lg max-w-2xl mx-auto leading-relaxed">
              Tu presencia es el mejor regalo, sin embargo si deseas hacernos un regalo,
              puedes hacer un depósito en la siguiente cuenta:
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal width="100%" delay={0.2}>
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 grid gap-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-2 block">
                    Tipo de Cuenta
                  </label>
                  <p className="text-xl text-rose-950 font-medium">
                    {accountTypeLabels[accountType]}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-2 block">
                    Banco
                  </label>
                  <p className="text-xl text-rose-950 font-medium">{bank}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-2 block">
                    Titular
                  </label>
                  <p className="text-xl text-rose-950 font-medium">{accountHolder}</p>
                </div>

                {accountRut && accountType === 'cuenta_rut' && (
                  <div>
                    <label className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-2 block">
                      RUT del Titular
                    </label>
                    <div className="flex items-center gap-3">
                      <p className="text-xl text-rose-950 font-medium">{accountRut}</p>
                      <button
                        onClick={copyRut}
                        className="p-2 text-rose-500 hover:bg-rose-50 rounded-full transition-colors"
                        title="Copiar RUT"
                      >
                        {copiedField === 'rut' ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-8 border-t border-rose-100">
                <label className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-4 block">
                  Número de Cuenta
                </label>
                <div className="flex items-center gap-4 bg-white/50 p-4 rounded-xl border border-rose-100">
                  <p className="text-2xl sm:text-3xl font-mono text-rose-950 flex-1 tracking-wider">
                    {accountNumber}
                  </p>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors shadow-sm active:scale-95"
                  >
                    {copiedField === 'account' ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span className="font-medium">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="font-medium">Copiar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

