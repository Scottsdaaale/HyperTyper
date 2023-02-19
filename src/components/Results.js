// this component will store the data from the user and display it on another 
import React, {useState, useEffect} from 'react'

function Results({currentUser}) {
  const [resultsData, setResultsData] = useState([]);

  useEffect(()=>{
    // if(currentUser){
    // fetch(`http://localhost:9292/users/${currentUser.id}`)
    // .then(res => res.json())
    // .then(data => setResultsData(data.results))}
    fetch('http://localhost:9292/results')
    .then(res => res.json())
    .then(data => setResultsData(data))
  }, [])
  
  const results = resultsData.map((eachResult)=>{
    console.log(eachResult.words_per_minute)
    return(
      <>
        {/* <p key={eachResult.id}>{eachResult.user_id}</p> */}
        <p className='underlined' key={eachResult.id}>{eachResult.date}</p>
        
        <p key={eachResult.id}> Words Per Minute: {eachResult.words_per_minute}</p>
      </>
    )
  })


  return (
    <div className="results-container">
      Results
      <div className="results">
        {results}
      </div>
    </div>
  )
}

export default Results