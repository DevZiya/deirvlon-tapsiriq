import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './app.scss'
import Home from './page/Home'
import Products from './page/Products';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/product/:id'} component={Products} />
      </Switch>
    </Router>
  );
}

export default App;
