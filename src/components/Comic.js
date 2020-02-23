import React, { useState, useEffect } from 'react';
import './Comic.scss';
import axios from 'axios';

const Comic = (props) => {
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
    fetchComic(1);
  }, [/* deps array */]);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="app">
    <h1>{loading ? 'Loading...' : comic.title}</h1>
      <ComicButtons
        comic={comic}
        fetchComic={fetchComic}
        fetchLatestComic={fetchLatestComic}
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
        fetchComic={fetchComic}
        fetchLatestComic={fetchLatestComic}
        loading={loading}
      />
    </div>
  );
};


const ComicButtons = ({
  comic,
  fetchComic,
  fetchLatestComic,
  loading,
}) => {
  return (
    <div className="buttons">
      <button
        disabled={loading || comic.num === 1}
        onClick={() => fetchComic(1)}
      >
        first
      </button>
      <button
        disabled={loading || comic.num <= 1}
        onClick={() => fetchComic(comic.num - 1)}
      >
        previous
      </button>
      {/* Stretch Goal */}
      {/*
         <button
         disabled={loading}
         onClick={() => null}
         >
         random
         </button>
       */}
      <button
        disabled={loading}
        onClick={() => fetchComic(comic.num + 1)}
      >
        next
      </button>
      <button
        disabled={loading}
        onClick={() => fetchLatestComic()}
      >
        latest
      </button>
    </div>
  );
};

export default Comic;
