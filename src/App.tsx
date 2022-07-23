import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './myRoutes'
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <MyRoutes/>
        </BrowserRouter>
    </Provider>
  );
}

export default App;