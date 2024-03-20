import {HoloCard} from 'bereact-ui';
import 'bereact-ui/style.css';
import './index.css';


function App() {

    // TypeScript nécessaire pour les composants.
    const testCompos = () =>
        (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection:'column',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(51,103,124,1) 0%, rgba(144,128,46,1) 50%, rgba(148,45,45,1) 100%)'
            }}>
                <p style={{fontWeight:900,fontSize:'32px'}} color={'black'}>HoloCard</p>
                <div style={{width:'350px',height:'500px'}}></div>
            </div>
        );


    return (
        <section className={'container dark'} style={{width: '100vw', height: '100vh', flexDirection: 'column'}}>
          {/* TESTS ZONE  */}

          <div style={{display:"flex",gap:'25px'}}>
            <HoloCard size={450} pattern={"../img/money.png"} content={<img src="../img/CashAppCard.jpg" alt=""/>}/>
            <div style={{display:"flex",flexDirection:"column",gap:'50px'}}>
                <HoloCard size={450}  content={<img src="../img/bgMoon.jpg" alt=""/>}/>
                <HoloCard size={450}  pattern={"../img/rareEffect2.jpg"} content={<img src="../img/bgMoon.jpg" alt=""/>}/>
                <HoloCard size={450} beginWithEffect endKeepEffect pattern={"../img/rareEffect10.png"} content={<img src="../img/bgMoon.jpg" alt=""/>}/>
            </div>
              <HoloCard beginWithEffect endKeepEffect content={testCompos()}/>
          </div>

          {/* FIN TESTS ZONE  */}
      </section>
  )

}

export default App
