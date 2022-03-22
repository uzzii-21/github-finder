import { Header, Footer, Backdrop } from './container';

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
