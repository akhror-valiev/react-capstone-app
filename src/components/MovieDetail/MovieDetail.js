import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncDetailPage, getDetailPage, removeSelectedDetailPage } from '../../redux/movies/movieSlice';
import './MovieDetail.scss';

const MovieDetail = () => {
  const { imdbID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(getDetailPage);

  useEffect(() => {
    dispatch(fetchAsyncDetailPage(imdbID));
    return () => {
      dispatch(removeSelectedDetailPage());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="section-left">
            <div className="back-arrow">

              <button type="button" onClick={() => navigate('/')}>
                <i className="fa fa-arrow-left" />
              </button>
            </div>

            <div className="movie-title">

              {data.Title}

            </div>
            <div className="movie-rating">

              <span>
                IMDB Rating
                {' '}
                <i className="fa fa-star" />
                {' '}
                :
                {' '}
                {data.imdbRating}
              </span>
              <span>
                IMDB Votes
                {' '}
                <i className="fa fa-thumbs-up" />
                {' '}
                :
                {' '}
                {data.imdbVotes}
              </span>
              <span>
                Runtime
                {' '}
                <i className="fa fa-film" />
                {' '}
                :
                {' '}
                {data.Runtime}
              </span>
              <span>
                Year
                {' '}
                <i className="fa fa-calendar" />
                {' '}
                :
                {' '}
                {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
