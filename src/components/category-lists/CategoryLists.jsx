import { useState } from "react";
import { Link } from "react-router-dom";
import { getCategory } from "../../functions/category";

export default function CategoryLists (){
    const [categories, setCategories] = useState([]);

    if(!categories.lenght) {
        getCategory().then(categories => setCategories(categories));
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a class="navbar-brand">Fakebook</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                { 
                    categories.map(category => (
                        <li key={category.id} className="nav-item">
                            <Link className="nav-link" to={`/fakebook/categories/${category.id}/posts`}>{ category.id }</Link>
                        </li>
                    ))
                }
                </ul>
                </div>
            </div>
        </nav>
    )
}