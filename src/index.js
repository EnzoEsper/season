import React from 'react';
import ReactDOM from 'react-dom';


// Componente basado en clase
class App extends React.Component {
  constructor(props) {
    super(props);

    // Esta es la unica vez que se hace una asignacion directa a 
    // this.state
    this.state = {lat:null, errorMessage: ''};

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // SIEMPRE USAR setState()  !!!
        this.setState({lat: position.coords.latitude})
      },
      err => {
        this.setState({errorMessage: err.message})
      }
    );
  }

  // React requiere que definamos render()
  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude:{this.state.lat}</div>
    }

    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error:{this.state.errorMessage}</div>
    }

    return <div>Loading...</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);