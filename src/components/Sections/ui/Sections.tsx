'use client';

import dynamic from 'next/dynamic';

const HeroSection = dynamic(
  () => import('@/components/HeroSection').then((mod) => mod.HeroSection),
  {
    ssr: true,
  },
);
const TrustedBySection = dynamic(
  () => import('@/components/TrustedBySection').then((mod) => mod.TrustedBySection),
  {
    ssr: true,
  },
);
const SupportSection = dynamic(
  () => import('@/components/SupportSection').then((mod) => mod.SupportSection),
  {
    ssr: true,
  },
);
const PortfolioSection = dynamic(
  () => import('@/components/PortfolioSection').then((mod) => mod.PortfolioSection),
  {
    ssr: false,
  },
);
const FeaturesSection = dynamic(
  () => import('@/components/FeaturesSection').then((mod) => mod.FeaturesSection),
  {
    ssr: false,
  },
);
const TestimonialsSection = dynamic(
  () => import('@/components/TestimonialsSection').then((mod) => mod.TestimonialsSection),
  {
    ssr: false,
  },
);
const SubscriptionSection = dynamic(
  () => import('@/components/SubscriptionSection').then((mod) => mod.SubscriptionSection),
  {
    ssr: false,
  },
);
const Footer = dynamic(() => import('@/components/Footer').then((mod) => mod.Footer), {
  ssr: false,
});

const Sections = () => {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <SupportSection />
      <PortfolioSection />
      <FeaturesSection />
      <TestimonialsSection />
      <SubscriptionSection />
      <Footer />
    </>
  );
};

export default Sections;
