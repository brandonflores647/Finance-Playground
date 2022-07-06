import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <h1>test</h1>
      </Route>
      <Route>
        <Redirect to='/' />
      </Route>
    </Switch>
  );
}

export default App;
