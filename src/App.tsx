import '@/App.css';
import { Footer, Header } from '@/components';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
    const location = useLocation();

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            {location.pathname === '/' ? null : <Footer />}
        </>
    );
}

export default App;
