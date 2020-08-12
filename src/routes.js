import Admin from './pages/Admin';
import AdminNews from './pages/Admin/pages/AdminNews';
import AdminGames from './pages/Admin/pages/AdminGames';
import Game from './pages/Game';
import GameVideos from './pages/Game/GameVideos';

const routes = [
    /* {
        path: '/game/:slug',
        component: Game,
        routes: [
            {
                path: '/game/:slug/videos',
                component: GameVideos,
            },
        ],
    }, */
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
