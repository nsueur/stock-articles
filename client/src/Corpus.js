import React, { Component } from 'react';

import TotalList from './components/TotalList';
import ListCategory from './components/ListCategory';
import AddArticle from './components/AddArticle';
import UpdateArticle from './components/UpdateArticle';
import SeeArticle from './components/SeeArticle';
import {  
    Switch,
    Route
  } from "react-router-dom";

class Corpus extends Component {
 

    render (){
        return (
            <div className="Corpus">
                <div className="container-fluid">
                <Switch>
                    <Route path={`/update-article/:id`}>
                        <UpdateArticle />
                    </Route>
                    <Route path="/add-article">
                        <AddArticle />
                    </Route>
                    <Route path="/homme">
                        <ListCategory category="homme" />
                    </Route>
                    <Route path="/femme">
                        <ListCategory category="femme" />
                    </Route>
                    <Route path="/enfant">
                        <ListCategory category ="enfant" />
                    </Route>
                    <Route path="/see/:id">
                        <SeeArticle />
                    </Route>
                    <Route path="/">
                        <TotalList />
                    </Route>
                </Switch>
                    

                </div>
                
               
            </div>
        );

        
    }
}

export default Corpus