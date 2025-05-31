import { getMessages } from "next-intl/server";

import { ContactItemRaw, mapContactList } from "@/utils/mapContactList";

import { ContactCard } from "./ContactCard";

const Contacts = async () => {
  const messages = await getMessages();

  const contactList = messages.contactsPage.contacts
    .contactList as ContactItemRaw[];

  const mapped = mapContactList(contactList);

  return (
    <section className="pb-[120px] pt-[110px]">
      <div className="container max-w-[1280px]">
        <ul className="grid gap-y-[100px] rounded-2xl bg-[linear-gradient(168.35deg,_#AFC8FF_-52.67%,_#FFFFFF_128.87%)] px-6 py-10 max-md:grid-cols-1 md:grid-cols-2 md:gap-x-10 xl:h-[240px] xl:grid-cols-4 xl:gap-x-[40px] xl:gap-y-0">
          {mapped.map(item => (
            <ContactCard key={item.title} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
