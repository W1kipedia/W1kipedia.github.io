import Header from './components/header';
import _404 from './components/404';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Fragment } from 'react'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Header} />
        <Route path='/' component={_404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
