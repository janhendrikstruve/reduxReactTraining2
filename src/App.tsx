import { useGetCharactersPageQuery } from './features/api/apiSlice'
import { goPageDown, goPageUp } from './features/page/pageSlice'
import { showDetailCard, setDetailCardData } from './features/detailCard/detailCardSlice'
import { useAppDispatch, useAppSelector } from './app/hooks'
import DetailCard  from './components/DetailCard/DetailCard'
import Favorite from './components/Favorite/Favorite'
import RatingStar from './components/RatingStar/RatingStar'
import { characterType } from './types'
import './App.css'

function App() {
  const dispatch = useAppDispatch()
  const page = useAppSelector(state => state.page)
  const isDetailCardShown = useAppSelector(state => state.detailCard).show

  const { data: rawData, isFetching, isError, error } = useGetCharactersPageQuery(page.value)

  if (isFetching) return <div>Data is fetching, please wait</div>

  if (isError) return <div>A wild Error appeared: {error}</div>

  const data = rawData.results.map(({ id, name, status, species, gender, image}: characterType) => (
    {
      id, 
      name, 
      status, 
      species, 
      gender, 
      image
    }
  ))

  console.log(data)
  console.log(isDetailCardShown)

  function handleLastPageClick () {
    dispatch(goPageDown())
  }

  function handleNextPageClick () {
    dispatch(goPageUp())
  }

  function handleDetailCardClick (character: characterType) {
    dispatch(setDetailCardData(character))
    dispatch(showDetailCard())
  }

  return (
    <>
      <div className="App">
        {data.map((character: characterType) => (
          <section className='Card' key={character.id}>
            <small>{character.id}</small>
            <Favorite id={character.id}/>
            <h2>{character.name}</h2>
            <img className="Card__Img" src={character.image} alt={"image of " + character.name} />
            <RatingStar id={character.id}/>
            <button onClick={() => handleDetailCardClick(character)}>more details</button>
          </section>
        ))}
        <button onClick={handleLastPageClick}>Last Page</button>
        <span>{page.value}</span>
        <button onClick={handleNextPageClick}>Next Page</button>
        <DetailCard/>
      </div>    
    </>
  )
}

export default App
