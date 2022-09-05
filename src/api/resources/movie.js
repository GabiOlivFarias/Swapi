import ApiService from '../api.service';

const Movies = {
  list: () => ApiService.get('https://swapi.dev/api/films/'), // passing only the resource since the API is already configured
};

export default Movies;
