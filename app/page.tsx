import Header from "./components/header"
import Footer from "./components/footer"
import Quiz from "./components/quiz";
import Chat from "./components/chat"

export default function Home() {
  const title = "Quant Genius";

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row">
        <Quiz />
        <Chat />
      </div>
      <Footer />
    </div>
  );
}
