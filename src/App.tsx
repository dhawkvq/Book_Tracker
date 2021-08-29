import { FC } from "react";
import { Main } from "./pages/Main/Main";
import { Search } from "./pages/Search/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";

const App: FC = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/search" component={Search} />
          <Route>
            <div>OOF!</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
