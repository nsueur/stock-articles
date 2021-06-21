import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router';
import TotalSum from './TotalSum';
import TotalArticles from './TotalArticles';

function UpdateArticle (){
   let match = useRouteMatch();
   const [article, setArticle] = useState([]);
   const [newArticle, setNewArticle] = useState([]);
   const id = match.params.id;
   const [redirection, setRedirection] = useState(false)
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


function UpdateList (){


    const row=[]
    articles.forEach(element => {
        row.push(element)
    })

    let index = null;

    for(const element of row)
    {
        if(element.id === newArticle.id){
            index = element.id
            
        }
    }
   
    article[index] = newArticle
    
    const row2 = []
    let test = article[index].id
    for(const article of articles)
    {
        if(article.id === test){
       
            row2.push(newArticle)
        }else{
            row2.push(article)
        }
        
    }
    return row2
   
}

const newList = UpdateList()




   function handleInputChange (e){
    const name = e.target.name;
    const value = e.target.value;

    setNewArticle(prevInput => {
        
        return({
            ...prevInput,
            [name] : value
        })
        
    })

   
 
}



   useEffect(() => {
       fetch(`http://localhost:3001/api/article/${id}`)
       .then(
           res => res.json()
       )
       .then((response) => {
            response.forEach(element =>{
                setArticle(element)
                setNewArticle(element)
            })
       })


     


   }, []);

 
   const updateArticle = function(e)  {
    e.preventDefault()
      Axios.put("http://localhost:3001/api/update", 
        {   
            name: newArticle.name, 
            description: newArticle.description, 
            quantity: newArticle.quantity, 
            category: newArticle.category, 
            unit_price: newArticle.unit_price, 
            id: id
        }).then(
            setArticles(newList)
        )
       
   }


   const deleteArticle = (id) => {
    Axios.delete(`http://localhost:3001/api/delete/${id}`)
      setRedirection(true)  
   
}



        if(redirection){
            return <Redirect to="/" />
        }

    return (
        <div  className="row">
            <div className="col-12 order-1 col-lg-2 order-lg-0">
            <TotalArticles newSum={articles}  category ="totale" />
            <TotalArticles newSum={articles} category ="homme" />
            <TotalArticles newSum={articles} category ="femme" />
            <TotalArticles newSum={articles} category ="enfant" />
            </div>

            <div className="col-12 order-2 col-8 col-lg-8 order-lg-0">
                <h1> Article {article.name}</h1>
            
            
                <form onSubmit={updateArticle}>
                <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nom</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={article.name} name="name"  onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={article.description}  name="description" onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Quantité</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" defaultValue={article.quantity}  name="quantity" onChange={handleInputChange} />
                    </div>
                    <div class="mb-3">
                        <label for="disabledSelect" class="form-label">Catégorie</label>
                        <select id="disabledSelect" defaultValue={article.category} name="category" onChange={handleInputChange} className="form-select" aria-label="Default select example">
                            <option selected>{article.category}</option>
                            <option value="homme">Homme</option>
                            <option value="femme">Femme</option>
                            <option value="enfant">Enfant</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Prix unitaire</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" defaultValue={article.unit_price} name="unit_price" onChange={handleInputChange} />
                    </div>
                    <button type="submit" className="btn btn-warning me-3">Modifier</button>
                    <button type="submit" className="btn btn-danger" onClick={() => deleteArticle(article.id)}>Supprimer</button>
                </form>
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

export default UpdateArticle