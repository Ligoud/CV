import React from 'react'

// import '../'
import CircleNav from './circleNav'
import Background from './Background'
import Content from './Content'

export default class App extends React.Component{

    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "https://kit.fontawesome.com/1aa922d09f.js";
        script.async = true;
    
        document.body.appendChild(script);
    }
    render(){
        let content=<Content />
        let clr1='#54a0ff',clr2='#ff9f43'
        return(
            <div> 
                <CircleNav />
                <Background linearGradient={{color1:clr1,color2:clr2}} heightInPages={2}/>
                {content}
            </div>
        )        
    }
}