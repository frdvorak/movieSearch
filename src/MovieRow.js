import React, { Component } from 'react';

class MovieRow extends Component {
    render() { 
        return ( 
            <table key={this.props.movie.id}>
                <tbody>
                    <tr>
                        <td>
                            <img src="" width='80' alt="poster"/>
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