import React, {Component} from 'react';

class Player extends Component {

    constructor(props){
        super(props)
        this.state = {
            score : this.props.score
        }

        this.incrementScore = this.incrementScore.bind(this)
        this.decrementScore = this.decrementScore.bind(this)
    }

    incrementScore(event){
        this.setState({
            score : this.state.score + 10
        })
        //console.log("+ diklik");
    }

    decrementScore(event){
        this.setState({
            score : this.state.score - 10
        })
        //console.log("+ diklik");
    }
    
    render() {
        const style = {
            player : {
                display : 'flex',
                padding : 10
            },
            name : {
                flex : 1
            },
            playerScore: {
                width: 150
            },
            score : {
                padding : 20
            },
            button : {
                padding : 10
            }
        }
        return (
            <div style={style.player}>
                        <div style={style.name}>{ this.props.name }</div>
                        <div style={style.playerScore}>
                            <div>
                                <button onClick={this.decrementScore} style={style.button}>-</button>
                                <span style={style.score}>{this.state.score}</span>
                                <button onClick={this.incrementScore} style={style.button}>+</button>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default Player;