import React, { useState } from 'react';
import Axios from 'axios';

function AddArticle ({isChange}){
    const [article, setArticle] = useState({
        name: '',
        description: '',
        quantity: 0,
        category: '',
        unit_price: 0

    });
    const [confirmAdd, setConfirmAdd] = useState(false);
   

    function handleInputChange (e){
        const name = e.target.name;
        const value = e.target.value;
       
       
        setArticle(prevInput => {
            
            return({
                ...prevInput,
                [name] : value
            })
            
        })
     
    }

const AddNewArticle = (e) => {
    e.preventDefault()

    Axios.post("http://localhost:3001/api/create",{
        name: article.name,
        description: article.description,
        quantity: article.quantity,
        category: article.category,
        unit_price: article.unit_price
    }).then(
        setConfirmAdd(true)
    )

} 


    return (
       
        <div className="container">
             
            
            <h1>Ajouter un Article</h1>
            {confirmAdd ? <div class="alert alert-success" role="alert">
  Article ajouté !
</div> : null}
            <form onSubmit={AddNewArticle}>
            <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nom</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" value={article.name} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={article.description} name="description" onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Quantité</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" value={article.quantity} name="quantity" onChange={handleInputChange} />
                </div>
                <div class="mb-3">
                    <label for="disabledSelect" class="form-label">Catégorie</label>
                    <select value={article.category} name="category" onChange={handleInputChange} className="form-select" aria-label="Default select example">
                        <option selected>Sélectionnez une catégorie</option>
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                        <option value="enfant">Enfant</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Prix unitaire</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"value={article.unit_price} name="unit_price" onChange={handleInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>

        </div>
    );
       
        
    
}

export default AddArticle