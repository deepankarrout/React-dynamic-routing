import { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Card from "./Card";
import CardDetails from "./CardDetails";

function App() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/0d48234659b84aa388d7")
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setCard(json);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path={`/`}
            element={
              <>
                {card.map((item) => (
                  //console.log(item)
                  <Card key={item.id} {...item} />
                ))}
              </>
            }
          />
          <Route
            path={`/:username/:title`}
            element={
              <Suspense fallback={<h1>Loading....</h1>}>
                <CardDetails />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

const Navigator = ({ data }) => {
  return (
    <Routes>
      <Route
        path={`/`}
        element={
          <>
            {data.map((item) => (
              //console.log(item)
              <Card
                key={item.id}
                image={item.image}
                imgAlt={item.name}
                name={item.name}
                title={item.title}
                avatar={item.avatar}
                likes={item.likes}
                comments={item.comments}
                onClick={() => console.log(item.username, item.title)}
              />
            ))}
          </>
        }
      />
      <Route
        element={
          <Suspense fallback={<h1>Loading....</h1>}>
            <CardDetails />
          </Suspense>
        }
        path={`/b`}
      />
    </Routes>
  );
};
