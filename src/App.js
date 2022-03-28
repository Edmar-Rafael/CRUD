import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
    </Provider>
  );
}

export default App;