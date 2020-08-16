import Admin from './pages/Admin';
import AdminNews from './pages/Admin/pages/AdminNews';
import AdminGames from './pages/Admin/pages/AdminGames';

const routes = [
    {
        path: '/admin',
        component: Admin,
        routes: [
            {
                path: '/admin/news',
                component: AdminNews,
            },
            {
                path: '/admin/games',
                component: AdminGames,
            },
        ],
    },
];

export default routes;
