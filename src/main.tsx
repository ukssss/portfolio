import router from '@/routes/router';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './fonts/SUITE.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RecoilRoot>
        <RouterProvider router={router} />
    </RecoilRoot>
);
