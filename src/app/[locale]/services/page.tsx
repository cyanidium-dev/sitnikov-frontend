import ServicesAnalytics from "@/components/servicespage/ServicesAnalytics";
import ServicesConsulting from "@/components/servicespage/ServicesConsulting";
import ServicesPractice from "@/components/servicespage/ServicesPractice";

const ServicesPage = () => {
  return (
    <>
      <ServicesPractice />
      <ServicesAnalytics />
      <ServicesConsulting />
    </>
  );
};

export default ServicesPage;
