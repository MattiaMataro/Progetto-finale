import Post from "../models/post";

export const getPosts = () => {
    fetch('http://wordpress.test/wp-json/wp/v2/posts')
    .then(res => res.json())
    .then(posts => posts.result.map(post => new Post(post.id, post.title, post.content, post.date)))
}