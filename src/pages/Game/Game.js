import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Game.scss';

const tabsList = [
    { label: 'Об игре', to: '#' },
    { label: 'Видео', to: '/videos' },
    { label: 'Скриншоты', to: '/screenshots' },
    { label: 'Новости', to: '/news' },
    { label: 'Статьи', to: '/articles' },
    { label: 'Требования', to: '/requirements' },
    { label: 'Обсуждения', to: '/qwdqwdqw' },
];

const videosList = [...Array(5)];

function Game() {
    return (
        <article className="game-page">
            <section className="game-page__banner gp-banner">
                {/* <img
                    className="gp-banner__image"
                    src="https://i.ytimg.com/vi/2IlBlgR_etE/maxresdefault_live.jpg"
                    alt=""
                /> */}
            </section>

            <section className="game-page__game">
                <div className="container">
                    <header className="game-page__heading">
                        <h1 className="game-page__title">The Elder Scrolls 5: Skyrim</h1>
                        <button className="game-page__subscribers" type="button">
                            Отслеживать
                        </button>
                    </header>

                    <div className="tabs">
                        <ul className="tabs__nav">
                            {tabsList.map(({ label, to }) => (
                                <li className="tabs__tab">
                                    <NavLink className="tabs__tab-link" to={to} key={label}>
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <div className="container">
                <section style={{ margin: '30px 0' }}>
                    <img
                        src="https://i.ytimg.com/vi/rK5CEhLwxwc/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAXsElH-SE4OJKF9c-cccgkyeqQhQ"
                        alt=""
                    />
                    <div style={{ height: '30px' }}></div>
                    <p>
                        The Elder Scrolls V: Skyrim - это приключенческая ролевая игра, пятая часть
                        в серии The Elder Scrolls, с огромным открытым миром, который с самого
                        начала полностью доступен для исследования. Игрокам предстоит выступить в
                        роли Довакина, Драконорожденного, который появляется в провинции Скайрим
                        аккурат во время возвращения легендарных драконов, которые, по преданию,
                        собираются разрушить мир. Довакину предстоит преодолеть множество трудностей
                        на пути к своей цели - остановить драконьего повелителя Алдуина, который
                        готовится обрушить свою ярость на весь мир.
                    </p>
                    <p>
                        Игроки вольны выбирать, проходить им сюжетную линию, заняться побочными
                        заданиями или же просто бродить по миру. В Skyrim нет четкого понятия "класс
                        персонажа" - протагониста можно развивать, как понравится игроку, создавая
                        всевозможные комбинации из стандартных "ролевых" классов.
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
                            <article className="gp-screenshots__screenshot" key={videoIndex}>
                                1
                            </article>
                        ))}
                    </div>
                </section>

                <section className="game-page__news gp-news">
                    <header className="gp-news__heading">
                        <h2 className="gp-news__title">Новости</h2>
                        <Link className="gp-news__next-link" href="#">
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
            </div>
        </article>
    );
}

export default Game;
