import { communityLinks, platformLinks, resourcesLinks } from "../constants";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-neutral-700 pt-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 border-b border-neutral-600 pb-5">
        <div>
          <h3 className="text-md mb-4 font-semibold">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((resource) => (
              <li key={resource.text}>
                <a
                  href={resource.href}
                  className="text-neutral-300 hover:text-white text-sm"
                >
                  {resource.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md mb-4 font-semibold">Platforms</h3>
          <ul className="space-y-2">
            {platformLinks.map((platform) => (
              <li key={platform.text}>
                <a
                  href={platform.href}
                  className="text-neutral-300 hover:text-white text-sm"
                >
                  {platform.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md mb-4 font-semibold">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((community) => (
              <li key={community.text}>
                <a
                  href={community.href}
                  className="text-neutral-300 hover:text-white text-sm"
                >
                  {community.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex  flex-col lg:flex-row items-center gap-2 justify-between my-2">
        <div className="flex items-center">
          <img src={logo} className="h-10  mr-2" />
          <span className="text-xl tracking-tight">React Tailwind</span>
        </div>

        <p className="text-sm">
          Powered by{" "}
          <span className="text-neutral-400 cursor-pointer">
            Kathiravan Vellaisamy
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
