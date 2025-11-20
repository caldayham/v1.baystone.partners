import HeroBanner from '@/components/HeroBanner';
import Portfolio from '@/components/Portfolio';
import ConsultationForm from '@/components/ConsultationForm';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Portfolio />
      <ConsultationForm />
      <FloatingCTA />
    </main>
  );
}
