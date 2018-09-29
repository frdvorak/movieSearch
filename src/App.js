import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    console.log('This is my initializer!');
    

    const movies = [
      {id: 0, title: 'Avengers', overview: 'asdas ahsd kfjojlwf kasdja'},
      {id: 1, title: 'Grease', overview: 'asdas ahsd kfjojlwf kasdja'},
      {id: 2, title: 'Lalaland', overview: 'asdas ahsd kfjojlwf kasdja'},
      {id: 3, title: 'Terminator', overview: 'asdas ahsd kfjojlwf kasdja'},
    ]

    var movieRows = [];
    movies.forEach((movie)=> {
      const movieRow = <table key={movie.id}>
        <tbody>
          <tr>
            <td>
              <img src="" width='80' alt="poster"/>
            </td>
          </tr>
          <tr>
            <td>
              {movie.title}
              <p>{movie.overview}</p>
            </td>
          </tr>
        </tbody>
      </table>
      movieRows.push(movieRow)
    })

    this.state = {rows: movieRows}
  }

  

  render() {
    return (
      <div className="App">
        <table  className='titleBar'>
          <tbody>
            <tr>
              <td>
                <img width="70" src="camera.svg" alt='logo'/>
              </td>
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>
      <input className="main-input" placeholder="Enter search term"/>
      
      <div className='app-body'>
        {this.state.rows}
      </div>
      </div>
    );
  }
}

export default App;
