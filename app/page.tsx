import Footer from "./components/footer"
import Quiz from "./components/quiz";
import Chat from "./components/chat"
import ResponsiveAppBar from "./components/appbar";
import { Divider } from "@mui/material";

export default function Home() {
  const title = "Quant Genius";

  return (
    <div className="flex flex-col h-1/1">
      <ResponsiveAppBar />
      <div className="flex flex-row h-17/20">
        <Quiz/>
        <Divider orientation="vertical" />
        <Chat />
      </div>
      <Divider />
      <Footer />
    </div>
  );
}
