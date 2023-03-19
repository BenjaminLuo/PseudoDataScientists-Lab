import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import restaurantsReducer from '../../src/store/reducers';
import { loadRestaurants } from '../../src/store/restaurants/actions';

await store.dispatch(loadRestaurants());

describe('restaurants', () => {

    describe('loadRestaurants action', () => {

        it('stores the restaurants', async () => {
            const records = [
                { id: 1, name: 'Sushi Place' },
                { id: 2, name: 'Pizza Place' },
            ];
        });
        const api = {
            loadRestaurants: () => Promise.resolve(records),
        };
        const initialState = {
            records: [],
        };
        const store = createStore(
            restaurantsReducer,
            initialState,
            applyMiddleware(thunk.withExtraArgument(api)),
        );

        expect(store.getState().records).toEqual(records);
    });
});