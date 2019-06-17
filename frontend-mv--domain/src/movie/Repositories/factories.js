import FetcherFactories from '../../Fetcher/factories'
import HTTPMovieRepository from './HTTPMovieRepository'
import MovieValueObjectsFactories from '../ValueObjects/factories'

export default class MoviesRepositoriesFactories {
    static httpMovieRepository = ({ config }) =>
    new HTTPMovieRepository ({
        fetcher: FetcherFactories.httpFetcher(),
        movieListValueObjectFactory: MovieValueObjectsFactories.movieListValueObject,
        config
    })
}