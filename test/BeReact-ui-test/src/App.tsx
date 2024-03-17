import {HoloCard} from 'bereact-ui'
import 'bereact-ui/style.css';
import './index.css';


function App() {

    // TypeScript nécessaire pour les composants.

  return (
      <section className={'container dark'} style={{width: '100vw', height: '100vh', flexDirection: 'column'}}>
          {/* TESTS ZONE  */}

          <HoloCard content={<img src="../img/CashAppCard.jpg" alt=""/>}/>
          <HoloCard content={<img src="../img/CashAppCard.jpg" alt=""/>}/>

          {/* FIN TESTS ZONE  */}
      </section>
  )

}

export default App
