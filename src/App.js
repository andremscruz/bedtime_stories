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
              <h5>Tempo de leitura: {story.readTime} min</h5>
            </button>
          </div>

          {visibleStories[index] && (
            <div>
              <p className='content'><label className='e'>E</label>{story.content}</p>
              <h4 className='author'>Escrito por {story.author}</h4>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default App
