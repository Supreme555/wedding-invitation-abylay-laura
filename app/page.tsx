import { Hero } from '@/features/hero/Hero';
import { Countdown } from '@/features/countdown/Countdown';
import { Details } from '@/features/details/Details';
import { Gallery } from '@/features/gallery/Gallery';
import { RSVP } from '@/features/rsvp/RSVP';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Countdown />
      <Details />
      <Gallery />
      <RSVP />
    </div>
  );
}
