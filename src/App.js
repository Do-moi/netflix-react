import "./App.css";
import Row from "./components/Row";
import { requests } from "./request";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      {requests.map((req, i) => {
        return (
          <Row
            title={req.title}
            fetchUrl={req.fetchUrl}
            isLargeRow={req.isLargeRow}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default App;
