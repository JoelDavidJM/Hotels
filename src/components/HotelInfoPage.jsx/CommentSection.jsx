import { useEffect } from "react"
import iseCrud from "../../hook/iseCrud"
import './style/CommentSection.css'

const CommentSection = ({hotelId}) => {

    const [reviews, getReviews] = iseCrud()

    useEffect(() => {
        if(hotelId) {
           getReviews(`/reviews?hotelId=${hotelId}`) 
        }
    }, [hotelId])

    console.log(reviews);

  return (
    <div className="CommentSection__div">
        <h2 className="CommentSection__div__h2">Comments</h2>
        <div className="CommentSection__div__container">
            {
                reviews?.results.map(reviewInfo => (
                    <div key={reviewInfo.id}>
                        <h4 className="CommentSection__div__h4"><span className="CommentSection__div__img">date</span><span className="CommentSection__div__img">{reviewInfo.createdAt}</span></h4>
                        <div className="CommentSection__div__estrella">
                        <div>{reviewInfo.rating}⭐</div>
                        </div>
                     <p className="CommentSection__div__comment"><span className="CommentSection__div__comment__title">Comment: </span><span className="CommentSection__div__comment__span">{reviewInfo.comment}</span></p>   
                    </div>
                    
                ))
            }
        </div>
    </div>
  )
}

export default CommentSection