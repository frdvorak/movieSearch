import React, { Component } from 'react';

class MovieRow extends Component {
    viewMovie(){
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
        window.location.href = url;
    }

    render() { 
        return ( 
            
           
                <div className="movie-table col-sm-12 col-md-6 col-lg-4 col-md-offset-2 px-2 justify-content-between">
                    
                        <img src={this.props.movie.poster_src} className="rounded float-left" alt="poster"/>
                        <h3>{this.props.movie.title}</h3>
                        <p>{this.props.movie.overview}</p>
                        <input className="btn-group float-right mt-2 btn btn-sm btn-info" type="button" onClick={this.viewMovie.bind(this)} value="View"/>
                    
                </div>
      
            
         );
    }
}
 
export default MovieRow;