import React from 'react';
import { useRouteMatch } from 'react-router';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SeeArticle (){
    let match = useRouteMatch();
    const id = match.params.id;
    const [articles, setArticles] = useState([]);


    useEffect(function(){
        fetch(`http://localhost:3001/api/article/${id}`)
        .then(
            res => res.json()
        )
        .then((response) => {
            setArticles(response)
          
        }
    
        )
    }, []);
    
 
    
    
        return (
            <div className="container">
            <Link to="/"> Retour </Link>
                {articles.map((val) =>{
                    return (
                        <div>
                            <h1>Article {val.name} </h1>
                            <p>Description : {val.description}</p>
                            <p>Prix unitaire: {Number(val.unit_price).toFixed(2)} €</p>
                            <p>Quantité : {val.quantity} </p>
                        </div>
                        
                    );
                    
                })}
            </div>
        );
}

export default SeeArticle