import Counter from "./Counter.js";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Errorpage from "./components/ErrorPage.js";
import ErrorTest from "./ErrorTest.js";
import { Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary.js";

function App() {
  function NotFound() {
    return <Errorpage />;
  }

  function Home() {
    return (
      <div className="wrapper">
        <h2>Home</h2>

        <p>Welcome to the Counter App.</p>

        <h5>
          This simple and intuitive application allows you to keep track of
          numbers effortlessly. You can easily increment or decrement the count,
          reset it to its initial value, or even set a custom value. Whether you
          need a tally for various tasks, want to keep score in a game, or
          simply enjoy playing with numbers, our Counter App has you covered.
          It's a versatile tool for all your counting needs.
        </h5>
        {/* <button onClick={NotFound} >404 page</button> */}
        <a href="*">404 page</a>
      </div>
    );
  }
  return (
    <div className="App">
      {/* <Counter /> */}
      <Router>
        <nav className="headerwrapper">
          <ul>
            <li>
              <Link className="headercontent" to="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="headercontent" to="/counter">
                Counter
              </Link>
            </li>
            <li>
            <Link className="headercontent" to="/test-error">
              Error Test
            </Link>
          </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/counter" element={<Counter />} />

          <Route path="*" element={<NotFound />} />
          {/* <Route path="/error" element={<ErrorBoundaryTest />} /> */}
          <Route
          path="/test-error"
          element={
            <ErrorBoundary>
              <ErrorTest />
            </ErrorBoundary>
          }
        />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
