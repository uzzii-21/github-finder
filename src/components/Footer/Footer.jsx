import { GithubIcon, LinkedInIcon } from '../../assets';

const Footer = () => (
  <footer className="container flex items-center justify-between border-t-[1px] border-secondary py-8">
    <p className="text-base text-white">Developed by Uzair Ahmed 💖</p>
    <div className="flex items-center">
      <a
        className="mr-3"
        href="https://github.com/uzzii-21"
        aria-label="github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/uzzii21"
        aria-label="linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </a>
    </div>
  </footer>
);
export default Footer;
