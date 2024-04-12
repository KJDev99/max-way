import Footer from "./components/Footer";
import Header from "./components/Header";
import Auhenticate from "./features/auth/Auhenticate";

const App = () => {
  return (
    <>
      <Header />
      <Auhenticate />
      <Footer />
    </>
  );
};

export default App;
