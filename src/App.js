import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
    /*
    const movies = [
      {id: 0, title: 'Avengers', overview: 'asdas ahsd kfjojlwf kasdja'},
      {id: 1, title: 'Grease', overview: 'asdas ahsd kfjojlwf kasdja'},
      {id: 2, title: 'Lalaland', overview: 'asdas ahsd kfjojlwf kasdja'},
      {id: 3, title: 'Terminator', overview: 'asdas ahsd kfjojlwf kasdja'},
    ]

    var movieRows = [];
    movies.forEach((movie)=> {
      const movieRow = <MovieRow movie={movie} />
      movieRows.push(movieRow)
    })

    this.state = {rows: movieRows}
    */

   this.performSearch();

  }

  performSearch(){
    console.log('Perform search using movie DB');
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
