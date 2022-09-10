import { Navbar } from './components/navbar/Navbar';
import { ToggleProvider } from './contexts/ToggleContext';
import { Routers } from './routers/Routers';


function App() {

    return (

        <div className="App">
            <Navbar />
            <Routers />
        </div>
    )
}

export default App
