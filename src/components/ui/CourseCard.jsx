import Image from "next/image";
import { FaStar } from "react-icons/fa";

const CourseCard = ({ course }) => {
  const { rating, instructor, image, title } = course;
  return (
    <div className=" bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
      <div>
        <Image
          alt={title}
          width={400}
          height={400}
          src={image}
          className="w-full h-60 object-cover"
        />
      </div>

      <div className="p-5 space-y-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>

        <div className="flex justify-between items-center">
          <p className="text-gray-600 text-sm  mb-4">{instructor}</p>
          <p className="flex items-center gap-2 font-semibold">
            <FaStar color="orange" /> {rating}
          </p>
        </div>

        <div className="flex justify-end">
          <button className="bg-main-gradient w-full text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
