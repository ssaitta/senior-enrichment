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
            this.history.push('/campuses') //to redirect
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


    handleChange(event,stateproperty) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const newCampus = Object.assign({},this.state)
        const { campus } = this.props

        return (
            <form onSubmit={(e)=>this.props.handleSubmit(e,newCampus)}>
                <div>
                    <label>name</label>
                    <br/>
                    <input 
                    type="text" 
                    value={this.state.name} 
                    onChange={this.handleChange}
                 
                    name='name'
                    ></input>
                </div>
                <div>
                <label>imageUrl</label>
                <br/>
                    <input 
                    type="text" 
                    value={this.state.imageUrl} 
                    onChange={this.handleChange}
                   
                    name='imageUrl'
                    ></input>
                </div>
                <div>
                    <label>description</label>
                    <br/>
                    <input 
                    type="text" 
                    value={this.state.description} 
                    onChange={this.handleChange}
                    
                    name='description'
                    ></input>
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCampus)
