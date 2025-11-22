import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home.tsx";
import Projects from "./routes/Projects.tsx";
import { Header } from "./components/Header.tsx";
import ProjectDetail from "./components/ProjectDetail.tsx";

const base = import.meta.env.BASE_URL
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-[#050505] text-gray-200 relative overflow-x-hidden">
        <Header />

          <Routes>
            <Route path={base + "/"} element={<Home />} />
            <Route path={base+ "/projects"} element={<Projects />} />
            <Route path={base + "/project/:id"} element={<ProjectDetail />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
