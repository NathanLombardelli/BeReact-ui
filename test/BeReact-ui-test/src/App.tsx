import {NeoToogle} from 'bereact-ui/Input';
import 'bereact-ui/style.css';
import './index.css';
import {useState} from "react";

function App() {

    // TypeScript nécessaire pour les composants.

    const[checked,setChecked] = useState(true);

  return (
      // Switch className dark to light for light mode.
      <section className={'container dark'} style={{width:'100vw',height:'100vh',flexDirection:'column'}}>
          {/* TESTS ZONE  */}

          <NeoToogle checkedChange={setChecked} checked={checked} />

          <h1>{checked? "Active" : "Disable"}</h1>

          {/* FIN TESTS ZONE  */}
      </section>
  )

}

export default App
