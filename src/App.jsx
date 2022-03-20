import Backdrop from './components/Backdrop/Backdrop';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => (
  <>
    <div className="container flex flex-col items-center justify-center min-h-[90vh]">
      <Header />
    </div>
    <Footer />
    <Backdrop />
  </>
);

export default App;
