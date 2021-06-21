import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function ListCategory ({category}){
    const [articles, setArticles] = useState([]);

useEffect(() =>{
    fetch("http://localhost:3001/api/all-articles")
    .then(
        res => res.json()
    )
    .then((response) => {
        setArticles(response)
       
    }

    )
}, []);

const deleteArticle = (id) => {
    Axios.delete(`http://localhost:3001/api/delete/${id}`).then(
        setArticles(
            articles.filter((val) => {
                return val.id !== id
            })
        )
    );
       
}




    return (
        <div className="container">
            <h1>Total {category}</h1>
            <table className="table totalList table-striped">
            <thead>
                <tr>
                <th scope="col">Nom</th>
                <th scope="col">Catégorie</th>
                <th scope="col">Quantité</th>
                <th scope="col">Prix unitaire</th>
                <th scope="col">Prix total</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            
                {
                articles.filter(val => val.category === category).map((val) => {
                
                   
  
                        return (
                            
                            <tr>
                                <td>{val.name}</td>
                                <td>{val.category}</td>
                                <td className="text-end">{val.quantity}</td>
                                <td className="text-end">{(val.unit_price).toFixed(2)} €</td>
                                <td className="text-end">{(val.quantity*val.unit_price).toFixed(2)} €</td>
                                <td><Link to={`/see/`+ val.id}>  <button className="btn btn-primary"> voir</button> </Link></td>
                                <td> <Link to={`/update-article/`+ val.id}> <button className="btn btn-warning"> Modifier</button></Link> </td>
                                <td> <button className="btn btn-danger" onClick={() => deleteArticle(val.id)}>Supprimer</button></td>
                            </tr>
                            
                        );
                    }
                

                )
                }
             


               
               
                
            </tbody>
            </table>
        </div>
        

    );
}

export default ListCategory