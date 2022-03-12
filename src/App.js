import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './contexts/authContext';
import Routes from './routes'

function App() {
  return (
    <Provider store={store}>
    <AuthContextProvider>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
    </AuthContextProvider> 
    </Provider>
  );
}

export default App;