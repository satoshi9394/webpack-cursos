import '../css/index.css'
import text from './text'

text()



if(module.hot) {
  module.hot.accept('./text.js', function() {
    console.info('fue desde el cambio de text')
    text()
  })
}