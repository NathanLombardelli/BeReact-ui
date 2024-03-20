import {HoloCard} from 'bereact-ui';
import 'bereact-ui/style.css';
import './index.css';


function App() {

    // TypeScript nécessaire pour les composants.

  return (
      <section className={'container dark'} style={{width: '100vw', height: '100vh', flexDirection: 'column'}}>
          {/* TESTS ZONE  */}

          <div style={{display:"flex"}}>
            <HoloCard size={550} pattern={"../img/rareEffect1.jpg"} content={<img src="../img/CashAppCard.jpg" alt=""/>}/>
            <div style={{display:"flex",flexDirection:"column",gap:'50px'}}>
                <HoloCard size={250} beginWithEffect pattern={"../img/rareEffect1.jpg"} content={<img src="../img/bgMoon.jpg" alt=""/>}/>
                <HoloCard size={250} beginWithEffect endKeepEffect pattern={"../img/rareEffect1.jpg"} content={<img src="../img/bgMoon.jpg" alt=""/>}/>
            </div>
              {/*<HoloCard pattern={"../img/rareEffect1.jpg"} content={<p style={{backgroundColor:'red'}}>Test</p>}/>*/}
          </div>

          {/* FIN TESTS ZONE  */}
      </section>
  )

}

export default App
