import React, { Component } from 'react'
import store, { createNewCampus } from '../store/index.js'
import { connect } from 'react-redux'


const mapStateToProps = function (state) {
    return {
        campus: state.campus
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        handleSubmit(event,newCampus) {
            event.preventDefault()
            dispatch(createNewCampus(newCampus))
            this.history.push('/campuses')
            //to redirect, but also need a refresh
        }
    }

}  


class NewCampus extends Component {
    
    constructor() {
        super();
        this.state = {
            name: '',
            imageUrl: '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this)

    }

    componentWillUnmount(){
        window.location.reload() //to refesh the add to show new data? but it looks terrible
    }

    handleChange(event,stateproperty) {
        // const stateproperty = event.target.name
        // this.setState({stateproperty: event.target.value})//can't get this to work
        console.log(this.state)
        switch(stateproperty){
            case 'name':
            return this.setState({name: event.target.value})
            case 'imageUrl':
            return this.setState({imageUrl: event.target.value})
            case 'description':
            return this.setState({description: event.target.value})
        }
    }

    render() {
        const newCampus = Object.assign({},this.state)
        const { campus } = this.props

        return (
            <form onSubmit={(e)=>this.props.handleSubmit(e,newCampus)}>
                <div>
                    <label>name</label>
                    <input 
                    type="text" 
                    value={this.state.name} 
                    onChange={(e)=>this.handleChange(e,'name')}
                    name='name'
                    ></input>
                </div>
                <div>
                <label>imageUrl</label>
                    <input 
                    type="text" 
                    value={this.state.imageUrl} 
                    onChange={(e)=>this.handleChange(e,'imageUrl')}
                    name='imageUrl'
                    ></input>
                </div>
                <div>
                    <label>description</label>
                    <input 
                    type="text" 
                    value={this.state.description} 
                    onChange={(e)=>this.handleChange(e,'description')}
                    name='description'
                    ></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCampus)
