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
import CharDetailPage from '../../containers/CharDetail';
import TlabCharacters from '../../containers/CharacterList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <main>
            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <TlabCharacters {...routerProps} />
                )}
              />
              <Route path="/character/:id" exact={true}
                render={routerProps => (
                  <CharDetailPage {...routerProps} />
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
