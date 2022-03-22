import { motion } from 'framer-motion';

const Header = () => (
  <motion.div
    className="text-center text-white w-full md:w-[80%] mt-12 h-[70vh] flex flex-col items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <h1 className="text-5xl sm:text-8xl font-roboto font-bold">
      GitHub Finder
    </h1>
    <p className="mb-12 mt-4 text-base sm:text-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo,
      aliquid quos laudantium sit exercitationem accusantium natus corporis
      repellat asperiores nulla minus assumenda totam impedit.
    </p>
  </motion.div>
);

export default Header;
