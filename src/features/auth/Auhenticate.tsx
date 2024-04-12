import { useState } from "react";
import SignUpForm from "../../components/SignUpForm";
import Login from "../../components/Login";

const Auhenticate = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <Login />;
  }

  return <SignUpForm onLoggedIn={() => setLoggedIn(!isLoggedIn)} />;
};

export default Auhenticate;
