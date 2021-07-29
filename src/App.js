import React from 'react';
import Pic from './Moi.jpg'
import ReactDOM from 'react-dom';
import './App.css'


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Fakhri Abousaoud Kahouach",
      bio: "diploma of higher technician in geology of reservoirs and Full-Stack Js web developper in progress.",
      profession: "geophysicist and at the same time a poet",
      imageSrc:Pic,
      show: true,
      date: 0,
    };
    
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
}
  
  
componentDidMount() {
  this.interval = setInterval(() => this.setState({ date: this.state.date + 1 }), 1000);
}
componentWillUnmount() {
  clearInterval(this.interval);
}
  render() {
    return (
      
      <div className="App">
        {this.state.show && (
          <div>
          <h2>Hello there, this is me {this.state.fullName}</h2>
          <p>
            I have a {this.state.bio}.      
          </p>
          <p>
            I'm a {this.state.profession}.
          </p>
          <h2>
            My profile picture:
          </h2>
  
            <div>
              <img src={this.state.imageSrc} id="img-change" alt="" width="300" height="300"/>  
            </div>
            <h5> The last component was mounted since : {this.state.date
            } </h5>
          </div>
        )}
        
        <button className="btn" onClick={this.handleShowPerson}><span> {this.state.show? 'Hide' : ' Show'} </span></button>
      </div>
    );
  }
}

ReactDOM.render(<Profile />, document.getElementById('root'));

export default Profile;