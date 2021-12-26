import Cart from "./Page/Cart";
import './app.scss'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from "./Page/Home";
import Payment from "./Page/Payment";


function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/cart'} component={Cart} />
        <Route path={'/odenis'} component={Payment} />
      </Switch>
    </Router>
  );
}

export default App;
