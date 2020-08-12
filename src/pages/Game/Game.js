import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Link, NavLink, Switch, Route } from 'react-router-dom';

import { fetchGame } from './actions';
import { getGame } from './selectors';
import GameVideos from './GameVideos';
import GameScreenshots from './GameScreenshots';
import GameNews from './GameNews';
import GameArticles from './GameArticles';

import coverImg from './3.jpg';
import avatarGame from './AVGame.jpg';

import './Game.scss';

const tabsList = [
    { label: 'Об игре', to: '#', exact: true },
    { label: 'Видео', to: 'videos' },
    { label: 'Скриншоты', to: 'screenshots' },
    { label: 'Новости', to: 'news' },
    { label: 'Статьи', to: 'articles' },
    { label: 'Требования', to: 'requirements' },
    { label: 'Обсуждения', to: 'comments' },
];

const videosList = [...Array(5)];

function GamePage({ match }) {
    const dispatch = useDispatch();
    const { slug } = match.params;

    useEffect(() => {
        dispatch(fetchGame(slug));
    }, [dispatch, slug]);

    const { loading, data, error } = useSelector(getGame, shallowEqual);

    /* if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return (
            <p className="error__message" style={{ color: 'red' }}>
                {error.message}
            </p>
        );
    } */

    return (
        <article className="game-page">
            <section className="game-page__banner gp-banner">
                <img className="gp-banner__image" src={coverImg} loading="lazy" alt="" />
            </section>

            <section className="game-page__game gp-game">
                <div className="container">
                    <header className="gp-game__heading">
                        <div className="gp-game__card">
                            <div className="gp-game__avatar">
                                <img src={avatarGame} alt={data.title} />
                            </div>
                            <div className="gp-game__body">
                                <h1 className="gp-game__title">
                                    {data.title || 'Star Wars Jedi: Fallen Order'}
                                </h1>
                                <span className="gp-game__developer">Respawn Entertainment</span>
                            </div>
                        </div>
                        <button className="gp-game__subscribe btn btn-subscribe" type="button">
                            Отслеживать
                        </button>
                    </header>

                    <div className="tabs">
                        <ul className="tabs__nav">
                            {tabsList.map(({ label, to, exact }) => (
                                <li className="tabs__tab" key={label}>
                                    <NavLink
                                        className="tabs__tab-link"
                                        to={`/game/${slug}/${to}`}
                                        exact={exact}
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <div className="container">
                <Switch>
                    <Route path="/game/:slug" exact>
                        <>
                            <section style={{ margin: '30px 0' }}>
                                {/* <img src="" alt="" /> */}
                                <div style={{ height: '30px' }}></div>
                                <p>
                                    The Elder Scrolls V: Skyrim - это приключенческая ролевая игра,
                                    пятая часть в серии The Elder Scrolls, с огромным открытым
                                    миром, который с самого начала полностью доступен для
                                    исследования. Игрокам предстоит выступить в роли Довакина,
                                    Драконорожденного, который появляется в провинции Скайрим
                                    аккурат во время возвращения легендарных драконов, которые, по
                                    преданию, собираются разрушить мир. Довакину предстоит
                                    преодолеть множество трудностей на пути к своей цели -
                                    остановить драконьего повелителя Алдуина, который готовится
                                    обрушить свою ярость на весь мир.
                                </p>
                                <p>
                                    Игроки вольны выбирать, проходить им сюжетную линию, заняться
                                    побочными заданиями или же просто бродить по миру. В Skyrim нет
                                    четкого понятия "класс персонажа" - протагониста можно
                                    развивать, как понравится игроку, создавая всевозможные
                                    комбинации из стандартных "ролевых" классов.
                                </p>
                            </section>

                            <section className="game-page__videos gp-videos">
                                <header className="gp-videos__heading">
                                    <h2 className="gp-videos__title">Видео</h2>
                                    <span>показать все</span>
                                </header>
                                <div className="gp-videos__list gp-videos__grid">
                                    {videosList.map((video, videoIndex) => (
                                        <article className="gp-videos__video" key={videoIndex}>
                                            1
                                        </article>
                                    ))}
                                </div>
                            </section>

                            <section className="game-page__screenshots gp-screenshots">
                                <header className="gp-screenshots__heading">
                                    <h2 className="gp-screenshots__title">Скриншоты</h2>
                                    <span>показать все</span>
                                </header>
                                <div className="gp-screenshots__list gp-screenshots__grid">
                                    {videosList.map((video, videoIndex) => (
                                        <article
                                            className="gp-screenshots__screenshot"
                                            key={videoIndex}
                                        >
                                            1
                                        </article>
                                    ))}
                                </div>
                            </section>

                            <section className="game-page__news gp-news">
                                <header className="gp-news__heading">
                                    <h2 className="gp-news__title">Новости</h2>
                                    <Link className="gp-news__next-link" to="news">
                                        Все новости
                                        <span>о The Elder Scrolls 5: Skyrim</span>
                                    </Link>
                                </header>
                                <div className="gp-news__list gp-news__grid">
                                    {videosList.map((video, videoIndex) => (
                                        <article className="gp-news__news" key={videoIndex}>
                                            1
                                        </article>
                                    ))}
                                </div>
                            </section>

                            <section className="game-page__articles gp-articles">
                                <header className="gp-articles__heading">
                                    <h2 className="gp-articles__title">Статьи</h2>
                                    <span>показать все</span>
                                </header>
                                <div className="gp-articles__list gp-articles__grid">
                                    {videosList.map((video, videoIndex) => (
                                        <article className="gp-articles__article" key={videoIndex}>
                                            1
                                        </article>
                                    ))}
                                </div>
                            </section>
                        </>
                    </Route>
                    <Route path="/game/:slug/videos" component={GameVideos} />
                    <Route path="/game/:slug/screenshots" component={GameScreenshots} />
                    <Route path="/game/:slug/news" component={GameNews} />
                    <Route path="/game/:slug/articles" component={GameArticles} />
                </Switch>
            </div>
        </article>
    );
}

export default GamePage;
