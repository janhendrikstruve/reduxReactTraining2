import { hideDetailCard} from '../../features/detailCard/detailCardSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import './DetailCard.css'

export default function DetailCard () {
  const detailCard  = useAppSelector(state => state.detailCard)
  const { id, name, status, species, gender, image } = detailCard.data
  const dispatch = useAppDispatch()

  function handleCloseClick () {
    dispatch(hideDetailCard())
  }

  if (!detailCard.show) return <></>

  return (
    <article className='Detail_Card'>
      <small>id: {id}</small> 
      <h2>name: {name}</h2>
      <h2>status: {status}</h2>
      <h2>species: {species}</h2>
      <h2>gender: {gender}</h2>
      <img src={image} alt={`Picture of ${name}`} />
      <br />
      <button onClick={handleCloseClick}>close</button>
    </article>
  )
  

}