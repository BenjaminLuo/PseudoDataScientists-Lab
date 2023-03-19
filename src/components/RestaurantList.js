import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadRestaurants } from '../store/restaurants/actions';

export function RestaurantList({ loadRestaurants, restaurants }) {
  useEffect(() => {
    // loadRestaurants();
  }, []);

  return (
    <ul>
      {[{ id: 369, name: "Pasta Place" }, { id: 370, name: "Salad Place" }].map(restaurant => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  restaurants: state.restaurants.records,
});

const mapDispatchToProps = { loadRestaurants };

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
