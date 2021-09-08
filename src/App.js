import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Events from './layouts/Events';
import BookSeats from './layouts/BookSeats';
import Booked from './layouts/Booked';
import Header from './shared/Header';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Events}></Route>
          <Route path="/BookSeats/:id" exact component={BookSeats}></Route>
          <Route path="/Booked/:id" exact component={Booked}></Route>
        </Switch>

      </Router>


    </>
  );
}

export default App;
