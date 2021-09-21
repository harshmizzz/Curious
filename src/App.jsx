import "./App.css";
import Color1 from "./Components/Color1/Color1";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Section1 from "./Components/Section 1/Section1";
import Section2 from "./Components/Section 2/Section2";
import Section3 from "./Components/Section 3/Section3";
import Section4 from "./Components/Section 4/Section4";
import Section5 from "./Components/Section 5/Section5";
import Section6 from "./Components/Section 6/Section6";
import Section7 from "./Components/Section 7/Section7";

function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Color1 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </div>
  );
}

export default App;
