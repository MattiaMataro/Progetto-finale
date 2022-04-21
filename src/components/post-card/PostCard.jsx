export default function PostCard(props) {
    return (
        <div className="card" style={{width: '100%'}}>
            <div className="card-body">
                <h5 className="card-title">{ props.post.title }</h5>
                <p className="card-text">{ props.post.content }</p>
            </div>
        </div>
    );
}