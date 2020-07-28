import React from 'react';
import axious from "axios";
import Movie from "../components/Movie";
import "./Home.css"

class Home extends React.Component{
  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async () => { // 로딩이 다 끝난 다음에 불러올 수 있도록 도와준다. 
    const {
      data: { 
        data: { movies } // 이건 진짜 너무한거 아니냐고~
      }
    } = await axious.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading : false}) // === {movies:movies, isLoading: false}
  }

  componentDidMount() {
    this.getMovies();
  }

    render () {
      const { isLoading, movies } = this.state;
      return (
        <section className="container">
          {isLoading ? (
            <div className="Loader">
              <span className="Loader__text">Loading</span>
            </div>
            ) : (
              <div className="movies">
                {movies.map(movie => (
                  <Movie key={movie.id} id={movie.id} title={movie.title} year={movie.year} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
                ))}
              </div>
            )
          }
        </section>
      )
    }
  }

export default Home;
