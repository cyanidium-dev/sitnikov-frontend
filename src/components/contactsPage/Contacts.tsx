import { getMessages } from "next-intl/server";

type ContactItem = {
  title: string;
  descr: string;
  icon: string;
};

const Contacts = async () => {
  const messages = await getMessages();

  const contactList = messages.contactsPage.contacts
    .contactList as ContactItem[];

  return (
    <section className="pb-[120px] pt-[110px]">
      <div className="container max-w-[1280px]">
        <ul className="grid gap-y-[100px] rounded-2xl bg-[linear-gradient(168.35deg,_#AFC8FF_-52.67%,_#FFFFFF_128.87%)] px-6 py-10 max-md:grid-cols-1 md:grid-cols-2 md:gap-x-10 xl:h-[240px] xl:grid-cols-4 xl:gap-x-[40px] xl:gap-y-0">
          {contactList.map(({ descr, icon, title }) => (
            <li
              key={title}
              className="flex -translate-y-20 flex-col items-center text-center xl:w-[231px]"
            >
              <div className="mb-6 size-20 rounded-full bg-dark">{icon}</div>
              <p className="mb-[20px] text-[20px] font-semibold leading-[1.6] text-[#000]">
                {title}
              </p>
              <p className="text-[18px] font-medium leading-none text-[#545454]">
                {descr}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
