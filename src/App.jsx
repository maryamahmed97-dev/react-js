import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import MainHeader from "./MainHeader";
import Sectionone from "./section1";
import Sectiontwo from "./sectiontwo";
import Footer from "./footer";
export default function App() {
  return (
    <>
      <MainHeader />
      <Sectionone />
      <Sectiontwo />
      <Footer />
    </>
  );
}
