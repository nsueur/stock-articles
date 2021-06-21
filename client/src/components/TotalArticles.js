import React from 'react';

function TotalArticles ({category, newSum}){
    //console.log(newSum)
    let sum = 0 ;
 

    if(newSum !== undefined){
        newSum.forEach(element => {
         
            if(category === "homme" && element.category === "homme" ){
                sum = sum + Number(Number(element.quantity).toFixed(2))
              
           }else if (category === "femme" && element.category === "femme") {
              
               sum = sum + Number(Number(element.quantity).toFixed(2))
           }else if (category === "enfant" && element.category === "enfant") {
               sum = sum + Number(Number(element.quantity).toFixed(2))
           }else if(category === "totale"){
               sum = sum + Number(Number(element.quantity).toFixed(2))
           }
        })
    }
    
          
    return (
        <div className="totalSum">
            <h2>Quantité {category}</h2>
            <p> {sum}</p>

        </div>
        
    );
}

export default TotalArticles