// import React from 'react';
// import TheLastAirBenderCharacters from '../../containers/TlabCharacters';

// export default function App() {
//   return <TheLastAirBenderCharacters />;
// }

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import CharDetail from '../../containers/CharDetail';
import CharacterList from '../../containers/CharacterList';
import Header from '../characters/Header';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <main>
            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <CharacterList {...routerProps} />
                )}
              />
              <Route path="/character/:id" exact={true}
                render={routerProps => (
                  <CharDetail {...routerProps} />
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
