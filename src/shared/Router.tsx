import { Routes, Route } from "react-router-dom";
import { SignIn } from "../containers/join";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default Router;
