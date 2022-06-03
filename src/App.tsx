import React, { ReactElement } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const repository = "/template-react";

const Home = () => (
  <TouchableOpacity>
    <Text style={{ color: "red" }}>홈</Text>
  </TouchableOpacity>
);
const Login = () => (
  <TouchableOpacity>
    <Text style={{ color: "red" }}>로그인</Text>
  </TouchableOpacity>
);

export default function App(): ReactElement {
  return (
    <BrowserRouter basename={repository}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
