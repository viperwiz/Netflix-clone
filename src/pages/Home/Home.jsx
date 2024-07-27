import React, { useEffect, useState } from "react";
import Row from '../../components/Row/row'
import "./home.scss";
import axios from "axios";

const movieUrl = "https://api.themoviedb.org/3/movie";
const tvUrl = "https://api.themoviedb.org/3/tv";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const api_key = "your api key here";
// where to get api key? from tmdv
// go to tmdv WebTransportBidirectionalStream, create account on seeting you can find api section 
// there you can create your own api



function Home() {
  const [upcomingMovies, setupcomingMovies] = useState([]);
  const [popularMovies, setpopularMovies] = useState([]);
  const [topRatedMovies, settopRatedMovies] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [picker, setpicker] = useState(0);

  useEffect(() => {
    const fetchUpcomingData = async () => {
      const {
        data: { results },
      } = await axios.get(`${movieUrl}/${upcoming}?api_key=${api_key}&page=2`);
      setupcomingMovies(results);
    };

    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${movieUrl}/top_rated?api_key=${api_key}`);
      settopRatedMovies(results);
    };

    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${movieUrl}/popular?api_key=${api_key}`);
      setpopularMovies(results);
    };

    const fetchTrending = async () => {
      const {
        data: { results },
      } = await axios.get(`${tvUrl}/airing_today?api_key=${api_key}`);
      setAiringToday(results);
    };

    const chooseBanner = () => {
      setInterval(() => {
        const newPicker = Math.round(Math.random() * popularMovies.length);
        setpicker(newPicker);
      }, 50000);
    };

    chooseBanner();
    fetchUpcomingData();
    fetchTopRated();
    fetchPopular();
    fetchTrending();
  }, [popularMovies.length]);

  const bannerMovie = popularMovies.length > 1 ? popularMovies[picker] : null;
  const bannerImage = bannerMovie
    ? `url(${imgUrl}/${bannerMovie.backdrop_path})`
    : "rgb(16,16,16)";

  const getTitleParts = (title) => {
    if (title && title.includes(" ")) {
      const parts = title.split(" ");
      return {
        part1: parts[0],
        part2: parts.slice(1).join(" "),
      };
    }
    return { part1: title, part2: "" };
  };

  const { part1, part2 } = bannerMovie
    ? getTitleParts(bannerMovie.original_name || bannerMovie.title)
    : { part1: "No Title Available", part2: "" };

  return (
    <div className="home">
      <div className="banner" style={{ backgroundImage: bannerImage }}>
      <div className="overlay"></div>
        <div className="content">
          <h1>
            <span className="part1">{part1}</span>
            {part2 && (
              <>
                <br />
                <span className="part2">{part2}</span>
              </>
            )}
          </h1>
          <p>{bannerMovie? bannerMovie.overview : "No overview Available"}</p>
          <button className="play">
            <i className="ri-play-fill"></i> Play
          </button>
          <button className="wishlist">
            <i className="ri-add-line"></i> Watchlist
          </button>
        </div>
      </div>
      <Row title={"Popular On Netflix"} movie={popularMovies} />
      <Row title={"Upcoming On Netflix"} movie={upcomingMovies} />
      <Row title={"Airing Today On Netflix"} movie={airingToday} />
      <Row title={"Top Rated On Netflix"} movie={topRatedMovies} />
    </div>
  );
}



export default Home;
