import "./index.css"

const CommentItem=(props)=>{
    const {commentDetails}=props
    const {name,commentText}=commentDetails
    return(
        <>
            <li className="list-item">
                {name && <p className="avatar">{name[0].toUpperCase()}</p>}
                <div className="name-comment-container">
                    <p className="name-text">{name}</p>
                    <p className="comment-text">{commentText}</p>
                </div>
            </li>
            <hr className="horizontal-line"/>
        </>
    )
}

export default CommentItem