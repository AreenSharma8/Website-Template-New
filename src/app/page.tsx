import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Pricing } from '@/components/pricing';
import { Testimonials } from '@/components/testimonials';
import { ContactForm } from '@/components/contact-form';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
