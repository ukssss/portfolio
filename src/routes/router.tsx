import App from '@/App';
import { Error } from '@/components';
import { About, Contact, Home, Projects, TechStack } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'tech',
                element: <TechStack />,
            },
            {
                path: 'projects',
                element: <Projects />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
        ],
    },
]);

export default router;
