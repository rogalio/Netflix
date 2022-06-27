import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./pages/Home";
import Login from "./pages/Login";
import ProfilScreen from "./pages/ProfilScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // // firebase check si utilisateur est connecté avec Redux
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/profil" element={<ProfilScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
