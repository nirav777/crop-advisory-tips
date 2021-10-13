import "./App.css";
import Header from "./Components/Header";
import "./Styles/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddPost from "./Components/AddPost";
import MainWindow from "./Components/MainWindow";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [post, setPost] = useState([]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <MainWindow
                inputText={inputText}
                name={name}
                date={date}
                post={post}
                {...props}
              />
            )}
          />
          <Route
            path="/addpost"
            render={(props) => (
              <AddPost
                setInputText={setInputText}
                inputText={inputText}
                setName={setName}
                name={name}
                setDate={setDate}
                date={date}
                setPost={setPost}
                post={post}
                {...props}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
