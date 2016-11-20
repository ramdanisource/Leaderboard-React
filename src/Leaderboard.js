import React from 'react';
import Players from './Players.js'
import Addplayer from './Addplayer.js'

class Leaderboard extends React.Component {
    constructor(props){
        super(props)

        const PLAYERS = [
                {id : 1, name : "Danang Hermanto", score : 25 },
                {id : 2, name : "Evi Saraswati", score : 10 },
                {id : 3, name : "Nur Hidayat", score : 15 }
        ]
        this.state = {
            members : PLAYERS
        }

        this.onPlayerAdd = this.onPlayerAdd.bind(this)
    }

    onPlayerAdd(name){
        let newMembers = this.state.members
        newMembers.push({
            id : newMembers.length + 1,
            name : name,
            score : 10
        })
        this.setState({
            members : newMembers
        })
    }


  render(){

    const style = {
        container : {
            padding : 60
        }
    }
    return (
        <div style={style.container}>
        <h1>Leaderboard</h1>
        <Players members={this.state.members}/>
        <Addplayer onAdd={this.onPlayerAdd} />
        </div>
    )
  }
}

export  default Leaderboard