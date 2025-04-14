import storiesServices from './service/stories'
import { useEffect, useState } from 'react'
import './App.css'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function App() {
  const [stories, setStories] = useState([])
  const [expandedIndex, setExpandedIndex] = useState(null)

  useEffect(() => {
    storiesServices.getAll().then((initialStories) => setStories(initialStories))
  }, [])

  function handleClick(index) {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <>
      {stories.map((story, index) => (
        <div key={index} className='story-container'>
          <div className={`button-container ${expandedIndex === index ? 'active' : ''}`}>
            <button onClick={() => handleClick(index)}>
              <div className='title-row'>
                <h3>{story.title}</h3>
                {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <h5>Tempo de leitura: {story.readTime} min</h5>
            </button>
          </div>

          <div className={`story-content ${expandedIndex === index ? 'expanded' : ''}`}>
            <p className='content'><label className='e'>E</label>{story.content}</p>
            <h4 className='author'>Escrito por {story.author}</h4>
          </div>
        </div>
      ))}
    </>
  );
}

export default App

