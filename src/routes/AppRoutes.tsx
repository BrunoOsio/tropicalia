import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateCandidates from "../components/CreateCandidates";
import { Game } from "../components/game/Game";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateCandidates/>}/>
        <Route path="/partida" element={<Game/>}/>
      </Routes>
    </BrowserRouter>
  );
}