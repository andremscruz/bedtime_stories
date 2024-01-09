import storiesServices from './service/stories'
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [stories, setStories] = useState([])
  const [contentShow, setContentShow] = useState(false)

  useEffect(() => {
    storiesServices
      .getAll()
      .then(intialStories => setStories(intialStories))
  },[])

  function handleClick(){
    return(
      setContentShow(prevShow => !prevShow)
    )
  }


  return(
    <>
    {stories.map(story =>
    <div>
      <div className='button-container'>
        <button onClick={handleClick}>
        <h3>{story.title}</h3>
        <h5>Tempo: {story.readTime} min</h5>
        </button>
      </div>
      
      {contentShow &&
        <div>
          <h3 className='title' >{story.title}</h3>
          <h4 className='author' >Escrito por {story.author}</h4>
          <h5 className='time'>Tempo de leitura: {story.readTime} minutos</h5>
          <p className='content'>{story.content}</p>
        </div>
        
      }
      
    </div>
    
    )}
    </>
  )
}

export default App