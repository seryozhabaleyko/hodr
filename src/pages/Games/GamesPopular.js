import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Button, Select } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

import GameCard, { GameCardSkeleton } from '../../components/GameCard';
import { fetchGames } from './actions';
import { getPopularGames } from './selectors';
import useQuery from '../../hooks/useQuery';

import './GamesPopular.scss';

function GamesPopular() {
    const dispatch = useDispatch();
    const query = useQuery();

    console.log(query.get('name'));

    useEffect(() => {
        document.title = 'Популярные игры - Hodr - компьютерные игры';
    }, []);

    useEffect(() => {
        dispatch(fetchGames());
    }, [dispatch]);

    const platforms = [
        { label: 'Все платформы', value: 'all' },
        { label: 'PC', value: 'pc' },
        { label: 'Google Stadia', value: 'googleStadia' },
        { label: 'Xbox Series X', value: 'xboxSeriesX' },
        { label: 'PlayStation 4', value: 'playStation4' },
        { label: 'PlayStation 3', value: 'playStation3' },
        { label: 'PlayStation 5', value: 'playStation5' },
        { label: 'Nintendo Switch', value: 'nintendoSwitch' },
        { label: 'iOS', value: 'iOS' },
        { label: 'Mac', value: 'mac' },
        { label: 'PlayStation Vita', value: 'playStationVita' },
        { label: 'Nintendo 3DS', value: 'nintendo3DS' },
        { label: 'PlayStation 2', value: 'playStation2' },
        { label: 'Xbox', value: 'xbox' },
        { label: 'PlayStation Portable (PSP)', value: 'playStationPortable(PSP)' },
        { label: 'Nintendo DS', value: 'nintendoDS' },
        { label: 'Nintendo Entertainment System (NES)', value: 'nintendoEntertainmentSystem(NES)' },
        { label: 'Nintendo GameCube', value: 'nintendoGameCube' },
        { label: 'GameCube', value: 'gameCube' },
        { label: 'Nintendo 64', value: 'nintendo64' },
        { label: 'Super Nintendo (SNES)', value: 'superNintendo(SNES)' },
    ];

    const genres = [
        { label: 'Все жанры', value: 'all' },
        { label: 'Экшен', value: 'action' },
        { label: 'Шутеры', value: 'shooters' },
        { label: 'Ролевые', value: 'rpg' },
        { label: 'Стратегии', value: 'strategy' },
        { label: 'Симуляторы', value: 'simulators' },
        { label: 'Приключения', value: 'adventures' },
        { label: 'MOBA', value: 'moba' },
        { label: 'Аркады', value: 'arcade' },
        { label: 'Файтинги', value: 'fighting' },
        { label: 'Гонки', value: 'racing' },
        { label: 'Спорт', value: 'sport' },
        { label: 'MMO', value: 'mmo' },
        { label: 'Пазлы', value: 'puzzle' },
    ];

    const users = [
        { label: 'Оценка пользователей', value: 'all' },
        { label: '1 - 3', value: '1and3' },
        { label: '4 - 7', value: '4and7' },
        { label: '8 - 10', value: '8and10' },
    ];

    const date = [
        { label: 'Дата выхода', value: 'all' },
        { label: '1985 - 1989', value: '1' },
        { label: '1990 - 1994', value: '2' },
        { label: '1995 - 1999', value: '3' },
        { label: '2000 - 2004', value: '4' },
        { label: '2005 - 2009', value: '5' },
        { label: '2010 - 2014', value: '6' },
        { label: '2015 - 2019', value: '7' },
        { label: '2018', value: '8' },
        { label: '2019', value: '9' },
        { label: '2020', value: '10' },
        { label: '2021', value: '?years=2021' },
    ];

    return (
        <div className="container">
            <header className="games-page-popular__heading">
                <h1 className="games-page-popular__title">Популярные игры</h1>
                <Button HtmlType="button" icon={<FilterOutlined />}>
                    Фильтры
                </Button>
            </header>

            <div className="games-page-popular__filters">
                <Select defaultValue="all" style={{ minWidth: 180 }}>
                    {platforms.map(({ label, value }) => (
                        <Select.Option value={value} key={value}>
                            {label}
                        </Select.Option>
                    ))}
                </Select>
                <Select defaultValue="all" style={{ minWidth: 180 }}>
                    {genres.map(({ label, value }) => (
                        <Select.Option value={value} key={value}>
                            {label}
                        </Select.Option>
                    ))}
                </Select>
                <Select defaultValue="all" style={{ minWidth: 180 }}>
                    {users.map(({ label, value }) => (
                        <Select.Option value={value} key={value}>
                            {label}
                        </Select.Option>
                    ))}
                </Select>
                <Select defaultValue="all" style={{ minWidth: 180 }}>
                    {date.map(({ label, value }) => (
                        <Select.Option value={value} key={value}>
                            {label}
                        </Select.Option>
                    ))}
                </Select>
            </div>

            <GamesPopularList />
        </div>
    );
}

function GamesPopularList() {
    const { loading, items = [], error } = useSelector(getPopularGames, shallowEqual);

    if (loading) {
        return (
            <div className="games-page-popular__list games-page-popular__grid">
                {[...Array(42)].map((el, elIndex) => (
                    <GameCardSkeleton key={elIndex} />
                ))}
            </div>
        );
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <div className="games-page-popular__list games-page-popular__grid">
            {[...items, ...Array(41)].map((game, elIndex) => (
                <GameCard {...game} key={elIndex} />
            ))}
        </div>
    );
}

export default GamesPopular;
