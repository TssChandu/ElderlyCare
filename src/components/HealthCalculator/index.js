import { Component } from "react";
import Header from "../Header";

import './index.css'

class HealthCalculator extends Component{
    state = {gender: "male",age: "",height: "",weight: "",isSubmitted:false,resultsObj:{}}

    onSubmitingForm = async event => {
        event.preventDefault()
        const {gender,age,height,weight,resultsObj,isSubmitted} = this.state
        const url = `https://health-calculator-api.p.rapidapi.com/bodyfat?gender=${gender}&age=${age}&height=${height}&weight=${weight}&unit=metric`
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '46fa647b6dmshf8a93017e724ce4p1042adjsn5675b6433081',
                'X-RapidAPI-Host': 'health-calculator-api.p.rapidapi.com'
            }
        }
        const response = await fetch(url,options)
        if (response.ok) {
            const data = await response.json()
            this.setState({
                resultsObj: {...resultsObj,
                    age:data.age,
                    bodyMassIndex:data.bmi,
                    bodyFat:data.bodyfat,
                    bodyFatStatus:data.bodyfat_status,
                    gender:data.gender,
                    height:data.height,
                    weight:data.weight},
                gender: "",
                age : "",
                height : "",
                weight : "",
                isSubmitted : !isSubmitted
            })
        } else{
            console.log(response)
        }
    }

    onChangingAge = event => {
        this.setState({age : event.target.value})
    }

    onChangingHeight = event => {
        this.setState({height:event.target.value})
    }

    onChangingOption = event => {
        this.setState({gender:event.target.value})
    }

    onChangingWeight = event => {
        this.setState({weight:event.target.value})
    }
    
    renderFormInput = () => {
        const {gender,age,height,weight} = this.state
        return(
            <div className="health-calculator-card">
                <form className="form-container" onSubmit={this.onSubmitingForm}>
                    <h1 className="form-heading">Health Calculator</h1>
                    <label htmlFor="gender" className="label">Gender</label>
                    <select value={gender} id="gender" className="select-input" onChange={this.onChangingOption}>
                        <option value="male" >Male</option>
                        <option value="female">Female</option>
                    </select>
                    <label htmlFor="ageInput" className="label">Age</label>
                    <input type="text" id="ageInput" className="input" value={age} placeholder="Enter Age in Years" onChange={this.onChangingAge}/>
                    <label htmlFor="heightInput" className="label">Height</label>
                    <input type="text" id="heightInput" className="input" value={height} placeholder="Enter height in Centimeters" onChange={this.onChangingHeight}/>
                    <label htmlFor="weightInput" className="label">Weight</label>
                    <input type="text" id="weightInput" className="input" value={weight} placeholder="Enter Weight in Kilograms" onChange={this.onChangingWeight}/>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        )
    }

    renderFormAgain = () => {
        this.setState(prevState => ({
            isSubmitted : !prevState.isSubmitted
        }))
    }

    renderResultView = () => {
        const {resultsObj} = this.state 
        const {age,
            bodyMassIndex,
            bodyFat,
            bodyFatStatus,
            gender,
            height,
            weight} = resultsObj
        return(
            <div className="results-container">
                <h1 className="form-heading">Health Calculator</h1>
                <div className="results-card">
                    <p className="result-para"><span>Age: </span> {age}</p>
                    <p className="result-para"><span>Body Mass Index: </span> {bodyMassIndex}</p>
                    <p className="result-para"><span>Body Fat: </span>{bodyFat}</p>
                    <p className="result-para"><span>Body Fat Status: </span>{bodyFatStatus}</p>
                    <p className="result-para"><span>Gender: </span>{gender}</p>
                    <p className="result-para"><span>Height: </span>{height}</p>
                    <p className="result-para"><span>Weight: </span>{weight}</p>
                </div>
                <button className="form-btn" onClick={this.renderFormAgain}>
                    Fill Form
                </button>
            </div>
        )
    }

    render(){
        const {isSubmitted} = this.state
        return(
            <div className="bg-container">
                <Header/>
                {!isSubmitted ? this.renderFormInput() : this.renderResultView()}
            </div>
        )
    }
}


export default HealthCalculator