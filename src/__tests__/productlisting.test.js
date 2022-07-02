import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import ProductPage from '../components/ProductListing';
import store from '../redux/configureStore';

it('renders properly', () => {
  const tree = renderer.create(
    <Router>
      <Provider store={store}>
        <ProductPage />
      </Provider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
