import { setRating, unsetRating } from '../../features/rating/ratingSlice'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import Rating from 'react-rating'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export default function RatingStar ({ id }: { id:number }) {
  const ratings = useAppSelector(store => store.rating).ratings
  const dispatch = useAppDispatch()

  const ratingObject = ratings.find(rating => rating.id === id)


  function handleSetRatingClick (value: number) {
    dispatch(setRating({ id , value}))
  }

  function handleUnsetRatingClick () {
    dispatch(unsetRating(id))
  }

  return <div>
    <Rating
    onClick={handleSetRatingClick}
    initialRating={ratingObject ? ratingObject.value : 0}
    emptySymbol={<AiOutlineStar/>}
    fullSymbol={<AiFillStar/>}
    />
    <br />
    {ratingObject? <button onClick={handleUnsetRatingClick}>Reset Rating</button> : <div>Rate Me!</div>}
  </div>

}