import React from 'react';

function TotalSum ({category, newSum}){
    //console.log(newSum)
    let sum = 0 ;
 

    if(newSum !== undefined){
        newSum.forEach(element => {

         
            if(category === "homme" && element.category === "homme" ){
                sum = sum + Number(element.unit_price*element.quantity)
              
           }else if (category === "femme" && element.category === "femme") {
              
               sum = sum + Number(element.unit_price*element.quantity)
           }else if (category === "enfant" && element.category === "enfant") {
               sum = sum + Number(element.unit_price*element.quantity)
           }else if(category === "totale"){
               sum = sum + Number(element.unit_price*element.quantity)
           }
        })
    }
    
          
    return (
        <div className="totalSum">
            <h2>Somme {category}</h2>
            <p>Prix : {sum.toFixed(2)} €</p>

        </div>
        
    );
}

export default TotalSum