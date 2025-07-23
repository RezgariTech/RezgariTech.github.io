import { Link } from "react-router-dom";

const ProjectCard = ({ title, image, description, link }) => {
  return (
    <div className="bg-[#F9F9F9] rounded-xl shadow-md overflow-hidden flex flex-col h-full border-t-4 border-[#4DA96B]">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#4DA96B] mb-2">{title}</h3>
        <p className="text-gray-700 flex-grow">{description}</p>
        {link && (
          <div className="mt-4">
            <Link to={link} className="text-[#4DA96B] font-semibold hover:underline">
              View Project →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;