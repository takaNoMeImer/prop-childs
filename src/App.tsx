import Container from "./components/CardContainer";
import Complement from "./components/Complement";

const App: React.FC = () => {
    return ( 
        <>
            <header className="container-fluid p-3 bg-primary text-white text-center">
                <Complement text={'Header Aplicacion: IAGH'}/>
            </header>
            
            <main>
                <Container />
            </main>

            <footer className="container-fluid p-3 bg-primary text-white text-center">
                <Complement text={'Footer Aplicacion: IAGH'}/>
            </footer>
        </>
    );
}
 
export default App;