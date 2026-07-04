import PageContainer from "./components/page-layout/PageContainer";
import Hero from "./components/page-sections/Hero";
import MainNavigation from "./components/site-navigation/MainNavigation";
import Services from "./components/page-sections/Services";
import DesignShowcase from "./components/page-sections/DesignShowcase";
import DesignProcess from "./components/page-sections/DesignProcess";
import TestimonialsSection from "./components/page-sections/TestimonialsSection";
import NewsletterSignup from "./components/page-sections/NewsletterSignup";
import SiteFooter from "./components/page-sections/SiteFooter";

function App() {
  return (
    <>
      <PageContainer>
        <header className="w-full">
          <MainNavigation />
        </header>
        <main className="flex flex-col justify-center items-center gap-57 w-full">
          <Hero />
          <Services />
          <DesignShowcase />
          <DesignProcess />
          <TestimonialsSection />
          <NewsletterSignup />
        </main>
      </PageContainer>
      <SiteFooter />
    </>
  );
}

export default App;
