import "./App.css";
import Header from "@/components/common/Header";
import { Routes, Route } from "react-router-dom";

import NotFound from "@/pages/NotFound";

import Login from "@/pages/Login";
import SignUpForms from "@/pages/SignUpForms";
import Bills from "@/components/interface/Bills";
import { Toaster } from "react-hot-toast";
import TestLogin from "./pages/TestLogin";
import InterfaceContainer from "./container/InterfaceContainer";
import Menu from "./components/interface/Menu";
import Amount from "./components/interface/Amount";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<InterfaceContainer />}>
          <Route path="bills" element={<Bills />} />
          <Route path="menu" element={<Menu />} />
          <Route path="amount" element={<Amount />} />
        </Route>
        <Route path="user/">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUpForms />} />
          <Route path="supabase" element={<TestLogin />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
