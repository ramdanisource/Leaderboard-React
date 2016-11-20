import React, {Component} from 'react';
import Player from './Player.js';

class Players extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
            { this.props.members.map(function(player){
                return <Player key={player.id} name={player.name} score={player.score}/>        
            })}
           
            </div>
        );
    }
}

export default Players;