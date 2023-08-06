const ContactCard = ({ img, sub, head, desc }) => {
  return (
    <div className="flex flex-col gap-3 py-5 px-6 mx-6 border border-gray-300 rounded-xl sm:my-24 my-10 items-center text-center sm:w-8/12">
      <div className="pb-4">
        <img src={img} alt="" width={100} />
      </div>
      <div className="text-sm text-gray-500">{sub}</div>
      <div className="text-xl font-bold">{head}</div>
      <div className="text-xs text-gray-400">{desc}</div>
    </div>
  );
};

export default ContactCard;
