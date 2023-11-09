import {
  About,
  Footer,
  Header,
  Presentation,
  Products,
  Categories,
} from "./components";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Presentation />
      <Products />
      <Categories />
      <About />
      {/*   <Footer /> */}
    </div>
  );
}

export default App;
