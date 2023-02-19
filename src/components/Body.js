import React from 'react'
import Test from './Test'
import { useEffect, useState } from 'react'

function Body({currentUser, setCurrentUserResults}) {
  
  const [dataForTest, setDataForTest] = useState([])

  useEffect(()=>{
    fetch('http://localhost:9292/words')
    .then(res => res.json())
    .then(testData => setDataForTest(testData))
  }, [])

  const word = dataForTest.map((eachWord)=>{
    return eachWord.word
  })
  const words = word.slice(0, 32)
  const wordTest = words.join(" ")
  const comparisonArr = wordTest.split("")
  
  return (
    <div id="app-body">
      <Test comparisonArr={comparisonArr} currentUser={currentUser} setCurrentUserResults={setCurrentUserResults}/>
    </div>
  )
}

export default Body