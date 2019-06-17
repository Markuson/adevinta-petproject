import Config from './Config'
import MovieUseCasesFactories from './movie/UseCases/SearchMovieUseCase'

const config = new Config()

const useCases = {
    search_movies_use_case: MovieUseCasesFactories.SearchMovieUseCase({ config })
}

export default class Domain {
    get(useCase) {
        return useCases[useCase]
    }
}