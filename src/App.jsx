import Home from './components/Home';
import MyProvider from "./MyProvider";
import {PlasmicRootProvider} from '@plasmicapp/react-web';

function App() {
    return (
        <PlasmicRootProvider>
            <MyProvider>
                <Home/>
            </MyProvider>
        </PlasmicRootProvider>
    );
}

export default App;
  