import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import ProductDetails from '../components/ProductDetails';
import store from '../redux/configureStore';

it('renders properly', () => {
  const tree = renderer.create(
    <Router>
      <Provider store={store}>
        <ProductDetails />
      </Provider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
