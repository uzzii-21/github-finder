import { AnimatePresence } from 'framer-motion';
import { useState } from 'react/cjs/react.development';
import { Header, Search } from '../components';

const Home = () => {
  const [isTyping, setIsTyping] = useState(false);
  return (
    <>
      <Search isTyping={setIsTyping} />
      <AnimatePresence>{!isTyping ? <Header /> : null}</AnimatePresence>
    </>
  );
};

export default Home;
