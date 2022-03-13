import { addFavorite,deleteFavorite } from '../../features/favorite/favioriteSlice'
import { useAppDispatch,useAppSelector } from '../../app/hooks'
import { FaPoop } from 'react-icons/fa'
import { BiCool } from 'react-icons/bi'

export default function Favorite ({ id }: { id: number }) {
  const { favored } = useAppSelector( state => state.favorite)
  const dispatch = useAppDispatch()

  function handleSetFavored () {
    dispatch(addFavorite(id))
  }

  function handleSetUnfavored () {
    dispatch(deleteFavorite(id))
  }

  return (
    <>
      {favored.includes(id) ? <BiCool onClick={handleSetUnfavored}/> : <FaPoop onClick={handleSetFavored}/>}
    </>
  )

}