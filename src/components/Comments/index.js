import { useState } from "react"
import {v4 as uuidv4} from "uuid"
import CommentItem from "../CommentItem"
import "./index.css"

const Comments=()=>{
    const[name,setName]=useState("")
    const[commentText,setCommentText]=useState("")
    const[commentsList,setCommentsList]=useState([])

    const onChangeName=(event)=>{
        setName(event.target.value)
    }

    const onChangeComment=(event)=>{
        setCommentText(event.target.value)
    }

    const onAddComment=(event)=>{
        event.preventDefault()
        const newComment={
            id:uuidv4(),
            name,
            commentText
        }
        setCommentsList(prevCommentsList=>[...prevCommentsList,newComment])
        setName("")
        setCommentText("")
    }

    return(
        <div className="comments-container">
            <h1 className="comments-title">Comments</h1>  
            <form className="form" onSubmit={onAddComment}>
                <input type="text" placeholder="Your name" className="nameInput" onChange={onChangeName} value={name}/>
                <textarea rows="6" placeholder="Your Comment" className="commentInput" onChange={onChangeComment} value={commentText}/>
                <button type="submit" className="submit-btn" >Comment</button>
            </form>
            <ul className="comments-list">
                {commentsList.map((eachComment=>(
                    <CommentItem key={eachComment.id} commentDetails={eachComment}/>
                )))}
            </ul>
        </div>
    )
}

export default Comments