import { BrowserRouter, Route, Routes } from "react-router-dom";
import Insert from "./pages/Insert";
import Layout from "./Layout";
import Display from "./pages/Display";
import Update from "./pages/Update";
import Edit from "./pages/Edit";
import Search from "./pages/Search";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Insert />} />
            <Route path="insert" element={<Insert />} />
            <Route path="view" element={<Display />} />
            <Route path="update" element={<Update />} />
            <Route path="search" element={<Search />} />
            <Route path="myEdit/:id" element={<Edit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
