const Form = () => {
  return (
    <form className="flex flex-col gap-4 py-5">
      <input
        className="border border-gray-300 sm:w-6/12 py-3 px-2 text-xs rounded-md"
        type="text"
        id="pholder"
        placeholder="Name"
      />
      <input
        className="border border-gray-300 sm:w-6/12  py-3 px-2 text-xs rounded-md"
        type="email"
        id="pholder"
        placeholder="Email"
      />
      <input
        className="border border-gray-300 sm:w-6/12 py-3 px-2 text-xs rounded-md"
        type="tel"
        id="pholder"
        placeholder="Phone Number"
      />
      <input
        className="border border-gray-300 sm:w-6/12 py-3 px-2 text-xs rounded-md"
        type="text"
        id="pholder"
        placeholder="Type Your Query"
      />
      <select className="border border-gray-300 sm:w-6/12 py-3 px-2 text-xs rounded-md">
        <option value="someOption">Medical Query</option>
        <option value="otherOption">Other option</option>
      </select>
      <button className="bg-orange-600 text-white py-1 px-5 w-fit rounded-md  hover:bg-orange-400">
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
