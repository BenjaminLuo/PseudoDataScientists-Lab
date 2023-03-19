import RestaurantScreen from './components/RestaurantScreen';
// import Counter from './components/Counter.js'
import { Provider } from 'react-redux';
import store from './store';
// import IncrementByAmount from './components/IncrementByAmount.js'

export default function App() {
  return (
    <Provider store={store}>
      <RestaurantScreen />
    </Provider>
  );
}
