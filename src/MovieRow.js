import React, { Component } from 'react';

class MovieRow extends Component {
    viewMovie(){
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
        window.location.href = url;
    }

    render() { 
        return ( 
            <div className='movie-table'>
                <div className='table-picture'>
                    <img src={this.props.movie.poster_src} width='200' alt="poster"/>
                </div>
                <div className='table-content'>
                    {this.props.movie.title}
                    <p>{this.props.movie.overview}</p>
                    <input type="button" onClick={this.viewMovie.bind(this)} value="View"/>
            </div>
            </div>
         );
    }
}
 
export default MovieRow;