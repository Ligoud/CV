import React from 'react'

import '../scss/nav.scss'

export default class CircleNav extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(            
            <React.Fragment>
                <nav>
                    <div id='mainNav'>
                        <img src={require('../publicFiles/FirstLogo.png')}></img>
                    </div>       
                    <div id='extNav'>
                        <div id='about'>
                            <i className="fas fa-info"></i>
                            <span>О себе</span>
                        </div>
                        <div id='projects'>
                            <i className="fas fa-tasks"></i>
                            <span>О проектах</span>
                        </div>              
                    </div>                                                                                             
                </nav>        
                {/* <div style={{height:'200vh'}}></div> */}

            </React.Fragment>
            
        )
    }
}