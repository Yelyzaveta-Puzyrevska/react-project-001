import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { List } from "./components/List/List";

import Message from "./Message/Message";

const App = () => {
  const isOnline = true;
  const messageData = [
    {
      title: "Maria",
      text: "Hello World",
      online: false,
      id: 1,
    },
    {
      title: "Petro",
      text: "React cool",
      online: true,
      id: 1,
    },
    {
      title: "Ivan",
      text: "Hello",
      online: false,
      id: 1,
    },
    {
      title: "Helen",
      text: "Test",
      online: true,
      id: 1,
    },
  ];
  const filmData = [
    {
      id: 1,
      title: "Terminator",
    },
    {
      id: 2,
      title: "Taxi",
    },
    {
      id: 3,
      title: "Harry Potter",
    },
    {
      id: 4,
      title: "GoT",
    },
  ];

  const goodsData = [
    {
      id: 4,
      title: "Tomato",
    },
    {
      id: 7,
      title: "Apples",
    },

    {
      id: 5,
      title: "Potatos",
    },
  ];

  return (
    <>
      <Header /> {isOnline && <h1>Welcome Back!</h1>};
      <List data={filmData} />
      <List data={goodsData} />
      {/* {messageData.map((message) => (
        <Message
          key={message.id}
          title={message.title}
          text={message.text}
          online={message.online}
        />
      ))} */}
      {/* <Footer /> */}
    </>
  );
};
export default App;
