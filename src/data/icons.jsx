// Maps the icon names used in portfolio.json to react-icons components.
// To use a new icon, import it here and add it to the `icons` object.
import {
  FaReact, FaHtml5, FaJs, FaGitAlt, FaFigma, FaNodeJs, FaImage, FaPenNib,
  FaLaptopCode, FaPaintBrush, FaMobileAlt, FaServer, FaPalette, FaStore,
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaGithub, FaCode,
  FaPencilRuler, FaVideo, FaFilm, FaMagic,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiTypescript, SiNextdotjs, SiVite, SiCplusplus, SiWordpress, SiMongodb, SiExpress,
} from 'react-icons/si';

const icons = {
  FaReact, FaHtml5, FaJs, FaGitAlt, FaFigma, FaNodeJs, FaImage, FaPenNib,
  FaLaptopCode, FaPaintBrush, FaMobileAlt, FaServer, FaPalette, FaStore,
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaGithub,
  FaPencilRuler, FaVideo, FaFilm, FaMagic,
  SiTailwindcss, SiTypescript, SiNextdotjs, SiVite, SiCplusplus, SiWordpress, SiMongodb, SiExpress,
};

// Falls back to a generic code icon if the name isn't in the map.
export const Icon = ({ name, ...props }) => {
  const Component = icons[name] || FaCode;
  return <Component {...props} />;
};
