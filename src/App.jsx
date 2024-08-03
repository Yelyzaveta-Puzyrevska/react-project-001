import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Message from "./Message/Message";

const App = () => {
  const isOnline = true;
  return (
    <>
      <Header /> {isOnline && <h1>Welcome Back!</h1>}
      <Message title="Maria" text="Hello World" online={true} />
      <Message title="Petro" text="Hello World" online={false} />
      <Message title="Ivan" text="Hello World" online={false} />
      <Footer />
    </>
  );
};
export default App;
