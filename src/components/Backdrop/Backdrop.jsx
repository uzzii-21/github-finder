import { ForkIcon } from '../../assets';

const Backdrop = () => (
  <div className="h-screen w-screen fixed top-0 left-0 flex items-center justify-center -z-10 bg-primary">
    <ForkIcon className="w-80 h-80 opacity-5" />
  </div>
);

export default Backdrop;
