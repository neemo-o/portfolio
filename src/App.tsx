import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home.tsx";
import Projects from "./routes/Projects.tsx";
import { Header } from "./components/Header.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-[#050505] text-gray-200 relative overflow-x-hidden">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
