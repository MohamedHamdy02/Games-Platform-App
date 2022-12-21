
import React from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function All() {

  const [allGames, setAllGames] = useState([])

  const fetch = () => {
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: { 'sort-by': 'all' },
      headers: {
        'X-RapidAPI-Key': '5060ffdc52msh9622d7b285fae4ep16dc31jsn396048d6b722',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      setAllGames(response.data);
    })
  };
  
  useEffect(() => {
    fetch()
  }, [])

  return <>
    <div className="container">
      <div className="row">
        {allGames.map((item, index) => {
          return (
            <div key={index} className="col-md-3 all mt-5">
              <Link to={`/itemDetails/${item.id}`}>
                <div className="card border-0 mb-5">
                  <img className='w-100' src={item.thumbnail} />
                  <div className="card-name d-flex justify-content-between  mt-3 px-2">
                    <h5 className='text-white'>{Object.keys(item.title).length > 10 ? `${item.title.slice(0, 10)}...` : item.title}</h5>
                  </div>
                  <h6 className='text-muted px-2'>{item.short_description.slice(0, 14)}..</h6>
                  <div className="footer-card px-2 d-flex justify-content-between align-items-center mb-4">
                    <i className="fa-solid fa-square-plus fa-1x text-muted"></i>
                    <div className="right-footer d-flex align-items-center">
                      <p className='bg-secondary mb-0 text-dark rounded px-1 me-2'>{item.genre}</p>
                      {item.platform == 'PC (Windows)' ? <i className="fa-brands fa-windows fa-1x text-muted"></i> : <i className="fa-solid fa-window-maximize fa-1x text-muted"></i>}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  </>
}
