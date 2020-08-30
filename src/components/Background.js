import React from 'react'

import '../scss/background.scss'

export default class Background extends React.Component{
    constructor(props){
        super(props)
        this.state={
            color:`linear-gradient(${props.linearGradient.color1},${props.linearGradient.color2})`,
            heightInPages:(props.heightInPages*100)+'vh'
        }
    }
    render(){
        return(
            <React.Fragment>
                <div id='moveBg' style={{background:this.state.color}}></div>
                <div id='staticBg'></div>
            </React.Fragment>
            
        )
    }
}