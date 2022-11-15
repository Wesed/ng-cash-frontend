import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import { UserStorage } from "./UserContext";
import { ThemeProvider } from "styled-components";
import GlobalVariables from "./Components/Helper/GlobalVariables";


function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <ThemeProvider theme={GlobalVariables}> 
          <Routes>
            {/* dashboard so deve aparece se tiver logado, verifica local storage token */}
            <Route path="/" end 
            element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
            } />
            <Route path="login/*" element={<Login/>} />
          </Routes>
        </ThemeProvider>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
