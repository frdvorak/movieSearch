import React, { Component } from 'react';
import './App.css';

class App extends Component {
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

      <input className="main-input" placeholder="Enter search term"></input>

      </div>
    );
  }
}

export default App;
