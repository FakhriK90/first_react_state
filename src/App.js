import React from 'react';

import ReactDOM from 'react-dom';
import './App.css'


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Fakhri Abousaoud Kahouach",
      bio: "diploma of higher technician in geology of reservoirs and Full-Stack Js web developper in progress.",
      profession: "geophysicist and at the same time a poet",
      imageSrc:"https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/53272254_2357069554305399_8937195187646496768_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=U3eNHoDd57gAX-F3hxx&_nc_ht=scontent.ftun9-1.fna&oh=ed49ac9aaa5b55c1dbc60b7352ce8011&oe=60F9A70D",
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
              <img src={this.state.imageSrc} id="img-change" alt="" width="400" height="400"/>  
            </div>
            <h5> The last component was mounted since : {this.state.date} </h5>
          </div>
        )}
        
        <button className="btn" onClick={this.handleShowPerson}><span>Show / Hide</span></button>
      </div>
    );
  }
}

ReactDOM.render(<Profile />, document.getElementById('root'));

export default Profile;