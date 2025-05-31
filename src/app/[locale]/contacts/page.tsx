import Contacts from "@/components/contactsPage/Contacts";
import ContactsFeedback from "@/components/contactsPage/ContactsFeedback";
import ContactsHero from "@/components/contactsPage/ContactsHero";

const ContactsPage = () => {
  return (
    <>
      <ContactsHero />
      <Contacts />
      <ContactsFeedback />
    </>
  );
};

export default ContactsPage;
