import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Message from "./Message/Message";

const App = () => {
  return (
    <>
      <Header />
      <Message title="Maria" text="Hello World" />
      <Message title="Petro" text="Hello World" />
      <Message title="Petro" text="Hello World" />
      <Footer />
    </>
  );
};
export default App;
