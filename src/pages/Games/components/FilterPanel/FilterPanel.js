import React from 'react';
import { useDispatch } from 'react-redux';
import { Select } from 'antd';

import useQueryState from '../../../../hooks/useQueryState';
import { setFilterByGenre, setFilterByRating, setFilterByYear } from '../../actions';

function FilterPanel() {
    const [platform, setPlatform] = useQueryState('platform', 'all');
    const [genre, setGenre] = useQueryState('genre', 'all');
    const [ratings, setRatings] = useQueryState('ratings', 'all');
    const [years, setYears] = useQueryState('years', 'all');
    const dispatch = useDispatch();

    const platforms = [
        { label: 'Все платформы', value: 'all' },
        { label: 'PC', value: 'pc' },
        { label: 'Google Stadia', value: 'google-stadia' },
        { label: 'Xbox Series X', value: 'xbox-series-X' },
        { label: 'PlayStation 4', value: 'play-station-4' },
        { label: 'PlayStation 3', value: 'play-station-3' },
        { label: 'PlayStation 5', value: 'play-station-5' },
        { label: 'Nintendo Switch', value: 'nintendo-switch' },
        { label: 'iOS', value: 'iOS' },
        { label: 'Mac', value: 'mac' },
        { label: 'PlayStation Vita', value: 'play-station-vita' },
        { label: 'Nintendo 3DS', value: 'nintendo-3DS' },
        { label: 'PlayStation 2', value: 'play-station-2' },
        { label: 'Xbox', value: 'xbox' },
        { label: 'PlayStation Portable (PSP)', value: 'play-station-portable-PSP' },
        { label: 'Nintendo DS', value: 'nintendo-DS' },
        {
            label: 'Nintendo Entertainment System (NES)',
            value: 'nintendo-entertainment-system-NES',
        },
        { label: 'Nintendo GameCube', value: 'nintendo-game-cube' },
        { label: 'GameCube', value: 'game-cube' },
        { label: 'Nintendo 64', value: 'nintendo-64' },
        { label: 'Super Nintendo (SNES)', value: 'super-nintendo-SNES' },
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

    const handlePlatformsChange = (value) => {
        setPlatform(value);
    };

    const handleGenresChange = (value) => {
        setGenre(value);
        dispatch(setFilterByGenre(value));
    };

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
            <Select
                defaultValue="all"
                options={platforms}
                style={{ minWidth: 180 }}
                value={platform}
                onChange={handlePlatformsChange}
            />
            <Select
                defaultValue="all"
                options={optionsGenres}
                style={{ minWidth: 180 }}
                value={genre}
                onChange={handleGenresChange}
            />
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

export default FilterPanel;
