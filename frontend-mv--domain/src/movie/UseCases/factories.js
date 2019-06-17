import MoviesRepositoriesFactories from "../Repositories/factories";
import SearchMovieUseCase from "./SearchMovieUseCase";

export default class MovieUseCasesFactories {
    static searchMovieUseCase = ({ config }) =>
        new SearchMovieUseCase({
            repository: MoviesRepositoriesFactories.httpMovieRepository({ config })
    })
}