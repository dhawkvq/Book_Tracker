import { FC } from 'react';
import { Main } from './pages/Main';
import { Search } from './pages/Search';
import { 
  BrowserRouter as Router ,
  Route
} from 'react-router-dom';

const App: FC = () => {

  return (
    <Router>
      <div style={{ width: '100vw', minHeight: '100vh' }}>
        <Route exact path='/' component={Main} />
        <Route exact path='/search' component={Search} />
      </div>
    </Router>
  );
}

export default App;
