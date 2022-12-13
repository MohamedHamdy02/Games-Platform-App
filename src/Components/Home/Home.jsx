
import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

  const [recommendGames, setRecommendGames] = useState([])

  const fetch = () => {
    const options = {
      method: 'GET',
      url: `https://free-to-play-games-database.p.rapidapi.com/api/games`,
      params: { 'sort-by': 'Popularity' },
      headers: {
        'X-RapidAPI-Key': '5060ffdc52msh9622d7b285fae4ep16dc31jsn396048d6b722',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      setRecommendGames(response.data)
    })
  }

  useEffect(() => {
    fetch()
  }, [])

  return <>

    <div className="hero text-center">
      <h1 className='mb-3 home-name '>Find & track the best <span className='text-info'>free-to-play</span> games!</h1>
      <p className='home-title mb-4 text-muted'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
      <Link to='/all'><button className="btn btn-secondary bg-transparent home-button">Browse Games</button></Link>
    </div>

    <div className="container">
      <div className="recommend-title d-flex align-items-center my-5">
        <i className='fas fa-robot fa-2x me-2'></i>
        <h3 className='home-title mb-0'>Personalized Recommendations</h3>
      </div>
      <div className="row">
        {recommendGames.slice(0, 3).map((item, index) => {
          return (
            <div key={index} className="col-md-4 mb-5">
              <Link to={`/itemDetails/${item.id}`}>
                <div className="card border-0 mb-5">
                  <img className='img-fluid' src={item.thumbnail} />
                  <div className="card-name d-flex justify-content-between align-items-center p-3">
                    <h5 className='text-muted'>{item.title}</h5>
                    <p className="bg-info rounded text-white p-1">
                      FREE
                    </p>
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
