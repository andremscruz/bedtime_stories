import storiesServices from './service/stories'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [stories, setStories] = useState([])
  const [visibleStories, setVisibleStories] = useState([])

  useEffect(() => {
    storiesServices.getAll().then((initialStories) => setStories(initialStories))
  }, [])

  function handleClick(index) {
    setVisibleStories((prevVisibility) => {
      const updatedVisibility = [...prevVisibility]
      updatedVisibility[index] = !updatedVisibility[index]
      return updatedVisibility
    })
  }

  return (
    <>
      {stories.map((story, index) => (
        <div key={index}>
          <div className='button-container'>
            <button onClick={() => handleClick(index)}>
              <h3>{story.title}</h3>
              <h5>Tempo: {story.readTime} min</h5>
            </button>
          </div>

          {visibleStories[index] && (
            <div>
              <h3 className='title'>{story.title}</h3>
              <h4 className='author'>Escrito por {story.author}</h4>
              <h5 className='time'>Tempo de leitura: {story.readTime} minutos</h5>
              <p className='content'>{story.content}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default App
