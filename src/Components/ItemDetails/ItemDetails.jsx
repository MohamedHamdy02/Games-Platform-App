import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

export default function ItemDetails() {
  const params = useParams();

  const [allGames, setAllGames] = useState({});

  const fetch = () => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
      params: { id: params.id },
      headers: {
        "X-RapidAPI-Key": "5060ffdc52msh9622d7b285fae4ep16dc31jsn396048d6b722",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    axios.request(options).then(function (response) {
      setAllGames(response.data);
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <img className="w-100 mb-2" src={allGames.thumbnail} alt="img" />
            <div className="button d-flex justify-content-between align-items-center">
              <p className="bg-secondary p-2 rounded mb-0 fw-bold">Free</p>
              {allGames.game_url ? (
                <a
                  href={allGames.game_url}
                  target="_blank"
                  type="button"
                  className="btn btn-primary w-75 m-auto p-2 text-center fw-bold"
                >
                  PLAY NOW <i className="fas fa-sign-out-alt"></i>
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-md-8">
            <h1 className="mb-4">{allGames.title}</h1>
            <h5 className="mb-3">About {allGames.title}</h5>
            <p>{allGames.short_description}</p>
            {allGames.minimum_system_requirements == null ? (
              <></>
            ) : (
              <>
                {allGames.minimum_system_requirements.graphics !== null ? (
                  <div>
                    <h4 className="mb-3">Minimum System Requirements</h4>
                    <h5 className="mb-2">
                      graphics :{" "}
                      <span className="text-muted h6">
                        {allGames.minimum_system_requirements.graphics}
                      </span>
                    </h5>
                  </div>
                ) : (
                  ""
                )}
                {allGames.minimum_system_requirements.memory !== null ? (
                  <h5 className="mb-2">
                    memory :{" "}
                    <span className="text-muted h6">
                      {allGames.minimum_system_requirements.memory}
                    </span>
                  </h5>
                ) : (
                  ""
                )}
                {allGames.minimum_system_requirements.os !== null ? (
                  <h5 className="mb-2">
                    os :{" "}
                    <span className="text-muted h6">
                      {allGames.minimum_system_requirements.os}
                    </span>
                  </h5>
                ) : (
                  ""
                )}
                {allGames.minimum_system_requirements.processor !== null ? (
                  <h5 className="mb-2">
                    processor :{" "}
                    <span className="text-muted h6">
                      {allGames.minimum_system_requirements.processor}
                    </span>
                  </h5>
                ) : (
                  ""
                )}
                {allGames.minimum_system_requirements.storage !== null ? (
                  <h5 className="mb-4">
                    storage :{" "}
                    <span className="text-muted h6">
                      {allGames.minimum_system_requirements.storage}
                    </span>
                  </h5>
                ) : (
                  ""
                )}
              </>
            )}
            <h3>{allGames.title} Screenshots</h3>
            <Carousel interval='2000'>
              {allGames.screenshots?.map((img, index) => {
                return (
                  <Carousel.Item key={index}>

                    <div className="carousel-item active">
                      <img
                        src={img.image}
                        className="d-block w-100"
                        alt="img"
                      />
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                    </button>
                  </Carousel.Item>
                );
              })}
            </Carousel>
            <h3 className="mt-3">Additional Information</h3>
            <div className="row mb-3">
              <div className="col-md-4">
                <span className="text-muted">title</span>
                <br />
                <h5>{allGames.title}</h5>
              </div>
              <div className="col-md-4">
                <span className="text-muted">Developer</span>
                <br />
                <h5>{allGames.developer}</h5>
              </div>
              <div className="col-md-4">
                <span className="text-muted">Publisher</span>
                <br />
                <h5>{allGames.publisher}</h5>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-md-4">
                <span className="text-muted">Release Date</span>
                <br />
                <h5>{allGames.release_date}</h5>
              </div>
              <div className="col-md-4">
                <span className="text-muted">Genre</span>
                <br />
                <h5>{allGames.genre}</h5>
              </div>
              <div className="col-md-4">
                <span className="text-muted">Platform</span>
                <br />
                {allGames.platform == "Windows" ? (
                  <i className="fa-brands fa-windows fa-1x"> &nbsp; Windows</i>
                ) : (
                  <i className="fa-solid fa-window-maximize">
                    &nbsp; Web Browser
                  </i>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
