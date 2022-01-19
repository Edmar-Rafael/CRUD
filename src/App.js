import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './contexts/authContext';
import Routes from './routes'

function App() {
  return (
    <AuthContextProvider>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
    </AuthContextProvider> 
  );
}

export default App;