import React, {useState} from 'react'
import data from './data.json'
import Loader from './Loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

//styles
import '../../less/less.less'
import '../../sass/sass.scss'
import '../../stylus/stylus.styl'

function App() {
  const [ loaderList, setLoaderList] = useState([])
  const handleClick = async () => {
    setLoaderList(data.loaders)
    const { alerta } = await import('./alert.js')
    alerta('omg, este modulo ha cargado dinamicamente')
  }
  return (
    <div>
      <p className="sass">
        esto es sass
      </p>
      <p className="stylus">
        esto es stylus
      </p>
      <p className="less">
        esto es less
      </p>
      <p className="post-css">
        esto es post-css
      </p>
      <h5>Que linda app hecha en React.js</h5>
      <video src={video} width={360} height={360} controls poster={logo}></video>
      <p>
        <img src={logo} alt="logo" width={40} height={40}/>
      </p>
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
