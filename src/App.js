import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import ChocolateContainer from './components/ChocolateContainer'
import { Provider } from 'react-redux'
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <IceCreamContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <ChocolateContainer />
        <NewCakeContainer />
      </div>
    </Provider>

  );
}

export default App;
