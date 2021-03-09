import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
    return (
        <div className="app">
            <Nav />
            <Banner /> 
            <Row
                title="Netflix-originals"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow={true}
            />
            <Row title="Trending now" fetchUrl={requests.fetchTrending} />
            <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romantic movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

        </div>
    );
}

export default App;
