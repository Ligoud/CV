
class CustomAnimations{
    constructor(projectInfoRef){
        //
        this.typeText=this.typeText.bind(this)
        //
        this.scrolling=this.scrolling.bind(this)
        this.isObjectInViewport=this.isObjectInViewport.bind(this)
        this.isObjectpartiallyInViewport=this.isObjectpartiallyInViewport.bind(this)
        //
        this.pRef=projectInfoRef
        this.writeOnceInViewPort=true  // true если еще надо отрисовать. Название переменной дерьмо

        document.onscroll=this.scrolling
    }

    scrolling(e) {
        
        if(this.isObjectInViewport(this.pRef) && this.writeOnceInViewPort){
            this.writeOnceInViewPort=false
            this.typeText(0,require('./txtinfo.json').projectInfo,this.pRef)
            
        }
    }

    isObjectInViewport(el){
        var elementBoundary = el.getBoundingClientRect();
 
        var top = elementBoundary.top;
        var bottom = elementBoundary.bottom;
   
        return ((top >= 0) && (bottom <= window.innerHeight));
    }
    isObjectpartiallyInViewport(el){
     var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
      var height = elementBoundary.height;
 
      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }

    typeText(ind,text,textField){
        // console.log(ind,text,textField)
        
        let currentLetter=text[ind]
        let prevText=textField.textContent
        textField.innerHTML=prevText+currentLetter
        ind++

        if(ind<text.length)
            setTimeout(this.typeText,50,ind,text,textField)
    }
}

module.exports.CustomAnimations= CustomAnimations;