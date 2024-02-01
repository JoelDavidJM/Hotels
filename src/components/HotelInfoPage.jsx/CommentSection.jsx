import { useEffect } from "react"
import iseCrud from "../../hook/iseCrud"

const CommentSection = ({hotelId}) => {

    const [reviews, getReviews] = iseCrud()

    useEffect(() => {
        if(hotelId) {
           getReviews(`/reviews?hotelId=${hotelId}`) 
        }
    }, [hotelId])

    console.log(reviews);

  return (
    <div>
        <h2>Comment</h2>
        <div>
            {
                reviews?.map(reviewInfo => (
                    <div key={reviewInfo.id}>
                        <div>{reviewInfo.rating}⭐</div>
                     <p >{reviewInfo.comment}</p>   
                    </div>
                    
                ))
            }
        </div>
    </div>
  )
}

export default CommentSection