import { Icons } from "@/assets/icons/icons";
interface SocialIconsProps {
  Icons: typeof Icons;
}
const SocialIcons: React.FC<SocialIconsProps> = ({ Icons }) => {
  return (
    <div className="text-white flex sm:flex-col font-bold gap-6 justify-center">
      {Icons.map((icon, index) => (
        <span
          key={index}
          className="w-fit p-4 cursor-pointer inline-block 
        rounded-full bg-[#89070D] mx-1.5 text-6xl hover:text-gray-100 hover:bg-teal-500
        duration-300"
        >
          <a href={icon.link} target="_blank" rel="noreferrer">
            {icon.name}
          </a>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;