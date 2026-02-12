import { Hero } from '@/features/hero/Hero';
import { WeddingInfoSection } from '@/features/wedding-info/WeddingInfoSection';
import { CountdownRSVPSection } from '@/features/countdown-rsvp/CountdownRSVPSection';
import { DressCodeSection } from '@/features/dress-code/DressCodeSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WeddingInfoSection />
      <CountdownRSVPSection />
      <DressCodeSection />
    </div>
  );
}
