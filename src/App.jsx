
import { useState  } from "react";

import Navbar from "./Componentes/Navbar";

import NewsBoard from "./Componentes/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;
