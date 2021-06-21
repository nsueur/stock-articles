import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TotalSum from './TotalSum';
import TotalArticles from './TotalArticles';
import Axios from 'axios';

function TotalList (){
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
    )
    ;
       
}








    return (
        <div className="row">
            <div className="col-12 order-1 col-lg-2 order-lg-0">
            <TotalArticles newSum={articles}  category ="totale" />
            <TotalArticles newSum={articles} category ="homme" />
            <TotalArticles newSum={articles} category ="femme" />
            <TotalArticles newSum={articles} category ="enfant" />
            </div>
        
            <div className="col-12 order-1 col-8 col-lg-8 order-lg-0">
                <h1>Liste totale</h1>
                <div className="table-responsive">

               
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
                    {articles.map((val) => {
                        return (
                            
                            <tr key={val.id}>
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

                    )}
                


                
                
                    
                </tbody>
                </table>
                </div>
            </div>
            <div className="col-12 col-lg-2">
            <TotalSum newSum={articles}  category ="totale" />
            <TotalSum newSum={articles} category ="homme" />
            <TotalSum newSum={articles} category ="femme" />
            <TotalSum newSum={articles} category ="enfant" />
            </div>
        </div>
    );
}

export default TotalList