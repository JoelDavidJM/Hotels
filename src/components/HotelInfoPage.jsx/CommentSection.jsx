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
                reviews?.map(reviewInfo => (
                    <div key={reviewInfo.id}>
                        <div className="CommentSection__div__container__img">
                          <img className="CommentSection__div__img" src={reviewInfo.hotel.images[0].url} alt="" />
                        </div>
                        
                        <div className="CommentSection__div__County">
                            <h3 className="CommentSection__div__h3">{reviewInfo.hotel.city.name}</h3>
                        <h3 className="CommentSection__div__h3">{reviewInfo.hotel.city.country}</h3>
                        
                        </div>
                        <h4 className="CommentSection__div__h4"><span className="CommentSection__div__img">Price</span><span className="CommentSection__div__img">{reviewInfo.hotel.price}</span></h4>
                        <div className="CommentSection__div__estrella">
                        <div className="CommentSection__div__rating">{reviewInfo.rating} <img className="estrella" src="https://cdn.dribbble.com/users/261302/screenshots/2192967/star.gif" alt="" /></div>
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