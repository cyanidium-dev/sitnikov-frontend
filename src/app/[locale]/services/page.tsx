import ServicesAnalytics from "@/components/servicespage/ServicesAnalytics";
import ServicesConsulting from "@/components/servicespage/ServicesConsulting";
import ServicesHero from "@/components/servicespage/ServicesHero";
import ServicesPractice from "@/components/servicespage/ServicesPractice";

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <ServicesPractice />
      <ServicesAnalytics />
      <ServicesConsulting />
    </>
  );
};

export default ServicesPage;
