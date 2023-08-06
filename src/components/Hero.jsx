import doctor from "../assets/doctor.png";
import Form from "./Form";
const Hero = () => {
  return (
    <div className="flex sm:mt-14 sm:mb-6 my-24">
      <div className=" sm:w-6/12 sm:flex sm:justify-center sm:mt-10 hidden">
        <img src={doctor} alt="doctor" width={380} />
      </div>
      <div className="sm:w-6/12 flex flex-col sm:py-10 w-10/12 mx-auto ">
        <div>
          <h1 className="text-3xl font-bold text-orange-600">
            Share Your Health Concerns
          </h1>
          <p className="text-sm my-2 text-gray-500">
            Our Healthcare Specialist Will Get in Touch With You
          </p>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Hero;
