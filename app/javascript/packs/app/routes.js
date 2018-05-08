import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import ContactsContainer from './containers/ContactsContainer';
const App = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={ContactsContainer} />
    </div>
  </Router>
)
export default App;
