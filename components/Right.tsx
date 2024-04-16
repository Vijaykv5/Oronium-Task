import Footer from "./Footer";
import {Header} from "./Header";
import Socialmedia from "./Socialmedia";

export const Right = () => {
  return (
    <div className="p-12 w-1/2">
      <Header />
      <Footer />
      <Socialmedia/>
    </div>
  );
};