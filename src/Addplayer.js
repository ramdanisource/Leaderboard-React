import React, {Component} from 'react';

class Addplayer extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: ""
        }
        this.onPlayerChange = this.onPlayerChange.bind(this)
        this.addPlayer = this.addPlayer.bind(this)
    }
    addPlayer(event){
        this.props.onAdd(this.state.name)
        this.setState({
            name: ""
        })

    }
    onPlayerChange(event){
        this.setState({
            name: event.target.value
        })
    }

    render() {

        const style = {
            addPlayer:{
                display : 'flex',
            },

            input:{
                flex : 1,
                padding: 10,
                width: 100
            },
            button:{
                                
                width: 100
            }
        }
        return (
            <div style={style.addPlayer}>
                <input style={style.input} onChange={this.onPlayerChange} type="text" placeholder="input name" value={this.state.name}/>
                <button style={style.button} onClick={this.addPlayer}>Add Player</button>
            </div>
        );
    }
}

export default Addplayer;