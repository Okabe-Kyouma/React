
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result'

import { BrowserRouter, Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./ques1.png)" }}>
        <Header>
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/quiz" exact>
             <Quiz></Quiz>
            </Route>
            <Route path="/result" exact>
             <Result></Result>
            </Route>
          </Switch>
        </Header>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}


/*

 "dependencies": {
    "@material-ui/core": "^4.11.3",
    "@material-ui/icons": "^4.11.2",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^1.6.8",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "^5.0.1",
    "web-vitals": "^1.0.1"
  },

*/