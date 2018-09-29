import React, { Component } from 'react';

class MovieRow extends Component {
    render() { 
        return ( 
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={this.props.movie.poster_src} width='200' alt="poster"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {this.props.movie.title}
                            <p>{this.props.movie.overview}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
         );
    }
}
 
export default MovieRow;