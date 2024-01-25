import React from 'react'
import Suggestion from './Suggestions/Suggestion'
import './Queries.css'
import { useState} from 'react'

const Queries = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:8075/bot/chat?prompt=${encodeURIComponent(prompt+" The response should be concise and more genuine")}`);
      const data = await response.text();
      console.log(data);
      setResponse(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
     <div className="app-container">
      {response ? (
        <div className="response-container">
          <div className="response-content">{response}</div>
        </div>
      ) : (
        <Suggestion setPrompt={setPrompt}/>
      )}
      <div className="input-feild">
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
          className="input"
          placeholder="Type something here...."
        />
        <button className="btn" onClick={handleSubmit}>
          <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" className="sparkle">
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>
          <span className="text">Buddy</span>
        </button>
      </div>
    </div>
  )
}

export default Queries