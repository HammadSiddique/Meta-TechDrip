/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
// import { useDispatch } from 'react-redux';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
// import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import { fetchProducts } from '../redux/products/products';

const Header = () => (
  <header>
    <nav className="navbar">
      <Link to="/"><i className="back-btn"><MdOutlineArrowBackIosNew /></i></Link>
      <h2 className="shop-name">Meta TechDrip</h2>
      <div>
        <i><FaMicrophone /></i>
        <i><AiOutlineSetting /></i>
      </div>
    </nav>
    {/* <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            placeholder="Search Products"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit"><BsSearch /></button>
        </form>
      </div> */}
  </header>
);
export default Header;
// const [search, setSearch] = useState('');
// const dispatch = useDispatch();
// const submitHandler = (e) => {
//   e.preventDefault();
//   dispatch(fetchProducts(search));
// };
