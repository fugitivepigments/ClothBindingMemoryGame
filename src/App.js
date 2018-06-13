import React, { Component } from 'react';
import './App.css';
import cloths from './cloths.json'
import Wrapper from './components/Wrapper'
import Navigation from './components/Navigation'
import Title from './components/Title'
import ClothCard from './components/ClothCard'

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        cloths: cloths,
        unselectedCloths: cloths
    }

    componentDidMount() {
    }

    shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    selectCloth = cloth => {
      const findCloth = this.state.unselectedCloths.find(item => item.cloth === cloth);

      if(findCloth === undefined) {
        //did not select a new cloth
        this.setState({
          message: 'Sorry, you guessed wrong!',
          topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
          curScore: 0,
          cloths: cloths,
          unselectedCloths: cloths
        });
      }
      else {
        //selected a new cloth
        const newCloths = this.state.unselectedCloths.filter(item => item.cloth !== cloth);

        this.setState({
          message: 'Congrats! You guessed righto!',
          curScore: this.state.curScore + 1,
          cloths: cloths,
          unselectedCloths: newCloths
        });
      }

      this.shuffleArray(cloths);
    };

    render() {
      return (
        <Wrapper>
          <Navigation
            message={this.state.message}
            curScore={this.state.curScore}
            topScore={this.state.topScore}
          />
        <Title />
        {
          this.state.cloths.map(cloth => (
            <ClothCard
              cloth={cloths.cloth}
              image={cloths.image}
              selectCloth={this.selectCloth}
              curScore={this.state.curScore}
            />
          ))
        }
        </Wrapper>
      );
    }
}

export default App;
