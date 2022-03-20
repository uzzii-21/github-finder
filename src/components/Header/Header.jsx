import { useState, useEffect } from 'react/cjs/react.development';
import Search from '../Search/Search';

const Header = () => {
  const [isTyping, setIsTyping] = useState(false);
  useEffect(() => {
    console.log(isTyping);
  }, [isTyping]);

  return (
    <>
      {!isTyping && (
        <div className="text-center text-white  w-full md:w-[80%]">
          <h1 className="text-5xl sm:text-8xl font-roboto font-bold">
            GitHub Finder
          </h1>
          <p className="mb-12 mt-4 text-base sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            illo, aliquid quos laudantium sit exercitationem accusantium natus
            corporis repellat asperiores nulla minus assumenda totam impedit.
          </p>
        </div>
      )}
      <Search isTyping={setIsTyping} />
    </>
  );
};

export default Header;
