import React, {Component} from 'react'
import axios from 'axios'

export default class Campuses extends Component{
    constructor(){
        super();
        this.state ={
            campuses: []
        }
    }

    componentDidMount(){
        axios.get('./api/campuses')
            .then(res=>res.data)
            .then(campuses=>{
                this.setState({campuses})
            })

    }

    render(){
        const campuses = this.state.campuses

        return(
            <div>
                <h1>Welcome to Sunnydale High!</h1>
                {campuses.map(campus =>(
                    <div key={campus.id} className="CampusImages">
                        <h5 className="CampusName"><span>{campus.name}</span></h5>
                        <img src={campus.imageUrl}/>
                    </div>
                ))}    
            </div>
        )
    }
}