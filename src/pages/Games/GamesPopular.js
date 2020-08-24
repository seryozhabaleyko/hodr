import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Button, Select } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

import GameCard, { GameCardSkeleton } from '../../components/GameCard';
import { fetchGames, setFilterByRating, setFilterByYear } from './actions';
import { getGames } from './selectors';
import useQuery from '../../hooks/useQuery';
import useQueryState from '../../hooks/useQueryState';

import './GamesPopular.scss';

function GamesPopular() {
    const dispatch = useDispatch();
    const query = useQuery();

    useEffect(() => {
        document.title = 'Популярные игры - Hodr - компьютерные игры';

        dispatch(fetchGames());

        const ratings = query.get('ratings');
        const years = query.get('years');

        if (ratings) {
            dispatch(setFilterByRating(ratings));
        }

        if (years) {
            dispatch(setFilterByYear(years));
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container">
            <header className="games-page-popular__heading">
                <h1 className="games-page-popular__title">Популярные игры</h1>
                <Button icon={<FilterOutlined />}>Фильтры</Button>
            </header>

            <FilterPanel />

            <GamesPopularList />
        </div>
    );
}

function FilterPanel() {
    const [ratings, setRatings] = useQueryState('ratings', 'all');
    const [years, setYears] = useQueryState('years', 'all');
    const dispatch = useDispatch();

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

    const optionsGenres = [
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

    const optionsRatings = [
        { label: 'Оценка пользователей', value: 'all' },
        { label: '1 - 3', value: '1-3' },
        { label: '4 - 7', value: '4-7' },
        { label: '8 - 10', value: '8-10' },
    ];

    const optionsYears = [
        { label: 'Дата выхода', value: 'all' },
        { label: '1985 - 1989', value: '1985-1989' },
        { label: '1990 - 1994', value: '1990-1994' },
        { label: '1995 - 1999', value: '1995-1999' },
        { label: '2000 - 2004', value: '2000-2004' },
        { label: '2005 - 2009', value: '2005-2009' },
        { label: '2010 - 2014', value: '2010-2014' },
        { label: '2015 - 2019', value: '2015-2019' },
        { label: '2018', value: '2018' },
        { label: '2019', value: '2019' },
        { label: '2020', value: '2020' },
        { label: '2021', value: '2021' },
    ];

    const handleRatingsChange = (value) => {
        setRatings(value);
        dispatch(setFilterByRating(value));
    };

    const handleYearsChange = (newValue) => {
        setYears(newValue);
        dispatch(setFilterByYear(newValue));
    };

    return (
        <div className="games-page-popular__filters">
            <Select defaultValue="all" options={platforms} style={{ minWidth: 180 }} />
            <Select defaultValue="all" options={optionsGenres} style={{ minWidth: 180 }} />
            <Select
                defaultValue="all"
                options={optionsRatings}
                style={{ minWidth: 180 }}
                value={ratings}
                onChange={handleRatingsChange}
            />
            <Select
                defaultValue="all"
                options={optionsYears}
                style={{ minWidth: 180 }}
                value={years}
                onChange={handleYearsChange}
            />
        </div>
    );
}

function GamesPopularList() {
    const { loading, items = [], error } = useSelector(getGames, shallowEqual);

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
