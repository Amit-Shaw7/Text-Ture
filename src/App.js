import { useState } from "react";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import Alert from "./components/Alert";
import "../src/App.css"
function App() {

  let [mode, setMode] = useState("light");
  let [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if (mode === "dark") {
      setMode(mode = "light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black";
    } else {
      setMode(mode = "dark")
      document.body.style.backgroundColor = "#031d32"
      document.body.style.color = "white";
    }
  }

  const setAlertProp = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  return (
    <>
      <Navbar toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert} />
      <TextBox setAlertProp={setAlertProp} mode={mode} />
    </>
  );
}

export default App;