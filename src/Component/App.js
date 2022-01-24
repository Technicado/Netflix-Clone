import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../Styling/App.css";
import Homepage from "./Homepage";
import LoginPage from "./LoginPage";

function App() {
  const user = null;
  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginPage />
        ) : (
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
