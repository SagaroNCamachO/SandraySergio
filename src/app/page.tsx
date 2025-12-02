import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import DressCode from '@/components/DressCode';
import GiftSection from '@/components/GiftSection';
import AdditionalInfo from '@/components/AdditionalInfo';
import Footer from '@/components/Footer';
import { getWeddingInfo } from '@/lib/weddingInfo';
import PhotoGallery from '@/components/PhotoGallery';
import RsvpSection from '@/components/RsvpSection';

export default async function Home() {
  const weddingInfo = await getWeddingInfo();

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-white">
      <Hero weddingInfo={weddingInfo} />
      <InfoSection weddingInfo={weddingInfo} />
      <DressCode dressCode={weddingInfo.dressCode} />
      <GiftSection
        bank={weddingInfo.giftAccount.bank}
        accountNumber={weddingInfo.giftAccount.accountNumber}
        accountHolder={weddingInfo.giftAccount.accountHolder}
        accountType={weddingInfo.giftAccount.accountType}
        accountRut={weddingInfo.giftAccount.accountRut}
        currency={weddingInfo.giftAccount.currency}
      />
      <PhotoGallery weddingInfo={weddingInfo} />
      <AdditionalInfo weddingInfo={weddingInfo} />
      <RsvpSection
        whatsappMessage={weddingInfo.whatsappMessage}
        phoneNumber={weddingInfo.additionalInfo?.contact?.phone}
      />
      <Footer coupleNames={weddingInfo.couple} />
    </main>
  );
}
