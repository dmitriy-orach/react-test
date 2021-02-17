import './App.css';
import React from 'react';

import Figure from './Figure';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { selectedImage: "" };
  }

  figures = [
    {
      url:'https://i.pinimg.com/originals/10/73/0d/10730d8a30a60f56e3ef58329c9b8500.png',
      name:'Triangle',
      id: 'triangle'
    },
    {
      url:'http://pngimg.com/uploads/square/square_PNG28.png',
      name:'Square ',
      id: 'square'
    },
    {
      url:'https://image.flaticon.com/icons/png/512/22/22554.png',
      name:'Rhombus',
      id: 'rhombus'
    }
  ]

  dimensions = [
    {
      side_length:'25 centimeters',
    },
    {
      side_length:'20 centimeters',
    },
    {
      side_length:'16 centimeters',
    }
  ]

  selectImage = (url) => {this.setState({selectedImage: url})};

  render() {
    return (
      <div className="App">
        <ul className="leftColumn">
          <ul className="select">
            {this.figures.map(({url, name}, index) => <li key={index} className="select_item"><Figure selectImage={this.selectImage} url={url} alt={name}/></li>)}
          </ul>
        </ul>
        <div className="rightColumn">
          <div className="selected">
            <img id="chosen-image" src={this.state.selectedImage} />
          </div>
        </div>
      </div>            
    );
  }
}

export default App;
