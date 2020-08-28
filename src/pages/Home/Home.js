import React from 'react';
import SlickSlider from 'react-slick';

import { GamesCollection } from '../Games/components/GamesCollection';
import Collection from '../../components/Collection';
import NewsCard from '../../components/NewsCard';

import './Home.scss';

const settings = {
    className: 'home-slider',
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: (
        <button type="button">
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                />
            </svg>
        </button>
    ),
    prevArrow: (
        <button type="button">
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
                />
            </svg>
        </button>
    ),
};

function Home() {
    return (
        <>
            <SlickSlider {...settings}>
                <div style={{ width: 1320 - 8 }}>
                    <div className="something">
                        <img
                            src="https://thumbs.dfs.ivi.ru/storage28/contents/7/e/4d57a7180dc685680bdfc294b62101.jpg/1216x370/"
                            alt="1"
                        />
                    </div>
                </div>
                <div>
                    <div className="something">
                        <img
                            src="https://thumbs.dfs.ivi.ru/storage15/contents/0/8/f24f1d3a42a18da711824e9133d71f.jpg/1216x370/"
                            alt="2"
                        />
                    </div>
                </div>
                <div>
                    <div className="something">
                        <img
                            src="https://thumbs.dfs.ivi.ru/storage6/contents/4/e/9e498aed17efe7b0cf8c80e18ccb31.jpg/1216x370/"
                            alt="3"
                        />
                    </div>
                </div>
                <div>
                    <div className="something">
                        <img
                            src="https://thumbs.dfs.ivi.ru/storage15/contents/c/8/458b692220b4b10378422e347be999.jpg/1216x370/"
                            alt="4"
                        />
                    </div>
                </div>
                <div>
                    <div className="something">
                        <img
                            src="https://thumbs.dfs.ivi.ru/storage32/contents/1/d/3a584893be6ac26a00e43e3fb64fa3.jpg/1216x370/"
                            alt="5"
                        />
                    </div>
                </div>
                <div>
                    <div className="something">
                        <img
                            src="https://thumbs.dfs.ivi.ru/storage28/contents/e/7/87f7f813e53ccd2b5263a854b7310a.jpg/1216x370/"
                            alt="6"
                        />
                    </div>
                </div>
            </SlickSlider>

            <div className="container">
                <GamesCollection title="Популярные игры" linkToFullCollection="/games/popular" />

                <Collection title="Новости" linkToFullCollection="/news">
                    {[...Array(4)].map((foo, index) => (
                        <NewsCard key={index} />
                    ))}
                </Collection>

                <GamesCollection title="Новые игры" linkToFullCollection="/games/new" />
            </div>
        </>
    );
}

export default Home;
