import Header from '@/components/Header';
import HeroBanner from '@/components/hero/HeroBanner';
import Offer from '@/components/offer/Offer';
import AboutBrothers from '@/components/about/AboutBrothers';
import OurProcess from '@/components/process/OurProcess';
import Portfolio from '@/components/portfolio/Portfolio';
import ConsultationForm from '@/components/ConsultationForm';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <AboutBrothers />
        <Offer />
        <OurProcess />
        <Portfolio />
        <ConsultationForm />
        <FloatingCTA />
      </main>
    </>
  );
}
