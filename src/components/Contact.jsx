import ContactCard from "./ContactCard";
import customer from "../assets/customer-care.png";
import conversation from "../assets/conversation.png";
import mail from "../assets/mail.png";

const Contact = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-sm pb-1">Always Get in Touch</div>
      <div className="font-bold text-orange-600 text-3xl">
        We're Ready To Serve You
      </div>
      <div className="flex sm:flex-row flex-col w-10/12 items-center ">
        <ContactCard
          img={customer}
          sub={"Have Query? Call Us"}
          head={"+91-7510818108"}
          desc={
            "Please call us for any healthcare related queries. We will be happy to assist you."
          }
          className="flex-1"
        />
        <ContactCard
          img={mail}
          sub={"Drop Us a Line"}
          head={"sales@easyheals.com"}
          desc={
            "Write to us for any healthcare enquiry. We will respond as soon as we can."
          }
          className="flex-1"
        />
        <ContactCard
          img={conversation}
          sub={"Drop Us a Line"}
          head={"Pune Office"}
          desc={"Meet us for partnership and business growth"}
          className="flex-1"
        />
      </div>
    </div>
  );
};

export default Contact;
