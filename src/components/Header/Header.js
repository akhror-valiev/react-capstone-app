import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import user from '../../assets/images/user.png';
import './Header.scss';
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/movies/movieSlice';

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === '') return alert('Please enter search item');
    

    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('');
  };

  return (

    <div className="header">

      <div className="logo">
        <Link to="/">Online Stream</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>

          <input type="text" value={term} placeholder="Search..." onChange={(e) => setTerm(e.target.value)} />
          <button type="submit">
            <i
              role="button"
              aria-label="Mute volume"
              className="fa fa-search"
            />
          </button>
        </form>
      </div>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>

    </div>
  );
};

export default Header;
