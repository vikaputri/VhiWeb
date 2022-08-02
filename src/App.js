import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./containers/Login";
import UserList from "./containers/UserList";
import UserDetail from "./containers/UserDetail";
import Error from "./containers/Error";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/user" component={UserList} exact />
          <Route path="/user/:id" component={UserDetail} exact />
          <Route path="/404page" component={Error} exact />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
