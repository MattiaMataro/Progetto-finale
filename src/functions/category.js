import Category from "../models/Category";

export const getCategory = () => fetch(`http://wordpress.test/wp-json/wp/v2/categories`)
    .then(res => res.json())
    .then(categories => categories.map(category => new Category(category.name, category.id)));