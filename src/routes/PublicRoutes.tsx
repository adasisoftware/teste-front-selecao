import { Navigate, Route, Routes } from "react-router";
import { ArrayTestPage } from "../pages/tests/ArrayTestPage";
import { StringTestPage } from "../pages/tests/StringTestPage";
import { HomePage } from "../pages/home/HomePage";
import App from "../App";

export function PublicRoutes() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route index element={<Navigate to="inicio" replace />} />

        <Route path="inicio" element={<HomePage />} />

        <Route path="testes">
          <Route path="array" element={<ArrayTestPage />} />
          <Route path="string" element={<StringTestPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
