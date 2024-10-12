import Body from './components/Body';
import Browse from './components/Browse';
import Login from './components/Login';
import Header from './components/Header';
import './index.css';
import { Provider } from 'react-redux';
import appstore from "./utils/appstore";

function App() {
  return (
   
      <Provider store={appstore}>
      <Body/>
      </Provider>
     
      
   
  );
}

export default App;
