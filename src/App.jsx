import { Component } from "react";

import Box from "./components/Box";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="bg-secondary grid grid-rows-[1fr_auto] items-center justify-items-center min-h-screen">
        <Box />
        <Footer />
      </div>
    );
  }
}

export default App;
