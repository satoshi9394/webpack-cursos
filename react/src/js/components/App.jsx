import React, {useState} from 'react'
import data from './data.json'
import Loader from './Loader'

function App() {
  const [ loaderList, setLoaderList] = useState([])
  const handleClick = () => {
    setLoaderList(data.loaders)
  }
  return (
    <div>
      <h1>Que linda app hecha en React.js</h1>
      <ul>
        {
          loaderList.map( item => <Loader {...item} key={item.id}/>)
        }
      </ul>
      <button
        onClick={handleClick}
      >
        Mostrar lo aprendido hasta el momento
      </button>
    </div>
  )
}

export default App
