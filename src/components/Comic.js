import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation, useParams, Redirect } from 'react-router-dom';
import './Comic.scss';
import axios from 'axios';

const Comic = (props) => {
  const { comicNumber } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comic, setComic] = useState(null);

  const fetchComic = (number) => {
    setLoading(true);
    setError(null);
    axios.get(`https://cors-anywhere.herokuapp.com/http://xkcd.com/${number}/info.0.json`)
      .then(response => setComic(response.data))
      .catch(error => {
        console.log('error', error);
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  const fetchLatestComic = () => {
    setLoading(true);
    setError(null);
    axios.get(`https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json`)
      .then(response => setComic(response.data))
      .catch(error => {
        console.log('error', error);
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (comicNumber === 'random') {
      axios.get(`https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json`)
        .then(response => {
          const num = response.data.num;
          const randomNum = Math.floor(Math.random() * (num - 1)) + 1;
          props.history.replace(`/${randomNum}`);
        })
        .catch(error => {
          console.log('error', error);
          setError(error);
        });
    } else if (comicNumber) {
      fetchComic(props.match.params.comicNumber);
    } else {
      fetchLatestComic();
    }
  }, [comicNumber]);

  if (error) {
    if (error.response && error.response.status === 404) {
      return <Redirect to="/" />;
    }
    return <div>error</div>;
  }

  return (
    <div className="app">
    <h1>{loading ? 'Loading...' : comic.title}</h1>
      <ComicButtons
        comic={comic}
        loading={loading}
      />
      {loading
       ? <div className="loading"><div className="spinner"/></div>
       : (
         <div className="comic">
           <img src={comic.img} title={comic.alt} alt={comic.title} />
         </div>
       )
      }
      <ComicButtons
        comic={comic}
        loading={loading}
      />
    </div>
  );
};

const ComicButtons = ({
  comic,
  loading,
}) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <div className="buttons">
      <button
        disabled={loading || comic.num === 1}
        onClick={() => history.push('/1')}
      >
        first
      </button>
      <button
        disabled={loading || comic.num <= 1}
        onClick={() => history.push(`/${comic.num - 1}`)}
      >
        previous
      </button>
      <button
        disabled={loading}
        onClick={() => history.push(`/random`)}
      >
        random
      </button>
      <button
        disabled={loading || location.pathname === '/'}
        onClick={() => history.push(`${comic.num + 1}`)}
      >
        next
      </button>
      <button
        disabled={loading || location.pathname === '/'}
        onClick={() => history.push('/')}
      >
        latest
      </button>
    </div>
  );
};

export default Comic;
