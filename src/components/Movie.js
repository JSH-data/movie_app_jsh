import React from 'react';
import PropTypes from "prop-types";
import "./Movie.css"
import { Link } from "react-router-dom";

function Movie({id, title, year, poster, summary, genres}) {
    return (
        <div className="movie">
            <Link to={{
                pathname:`/movie/${id}`,
                state:{
                    id,
                    year,
                    title,
                    summary,
                    poster,
                    genres
                }
            }}>
                <img src={poster} alt={title} title={title}/>
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => ( // map 함수는 자동적으로 인덱스값을 부여해 줄 수 있다. 
                            <li key={index} className="genres__genre">
                                {genre}
                            </li>
                        ))}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 140)}...</p>
                </div>
            </Link>
        </div>
    )
}
// title을 img에 넣는 이유는 마우스를 갖다대면 이름이 팝업으로 나오기 때문이다. 
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
