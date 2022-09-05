import ApiService from '../api.service';

const Characters = {
  data: () => ApiService.get('https://swapi.dev/api/people/'), // passing only the resource since the API is already configured
};

export default Characters;
