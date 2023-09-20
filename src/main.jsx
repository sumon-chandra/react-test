import React from "react";
import { AuthContext } from "./authContext";
import { Routes, Route, Navigate } from "react-router-dom";
import SnackBar from "./components/SnackBar";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import PaginatedVideoList from "./components/VideoList";

function renderRoutes(role) {
     switch (role) {
          case "admin":
               return (
                    <Routes>
                         <Route path="/admin/dashboard" element={<AdminDashboardPage />}></Route>
                    </Routes>
               );
          default:
               return (
                    <Routes>
                         <Route exact path="/" element={<AdminLoginPage />}></Route>
                         <Route exact path="/videos" element={<PaginatedVideoList />}></Route>
                         <Route path="*" exact element={<NotFoundPage />}></Route>
                    </Routes>
               );
               break;
     }
}

function Main() {
     const { state } = React.useContext(AuthContext);

     return (
          <div className="h-full">
               <div className="flex w-full">
                    <div className="w-full">
                         <div className="w-full px-5 py-10 page-wrapper">
                              {!state.isAuthenticated ? renderRoutes("none") : renderRoutes(state.role)}
                         </div>
                    </div>
               </div>
               <SnackBar />
          </div>
     );
}

export default Main;
