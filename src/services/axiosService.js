import { RandomUserAPIRequest, ChuckJokeAPIRequest } from '../utils/config/axios.config'

export function getRandomUser () {
  return RandomUserAPIRequest.get('/',
    {
      validateStatus: function (status) {
        return status < 500 // Resolve only if the status code is less than 500
      }
    }
  ) // https://randomuser.me/
}

export function getChuckJoke () {
  return ChuckJokeAPIRequest.get('/',
    {
      validateStatus: function (status) {
        return status < 500 // Resolve only if the status code is less than 500
      }
    }
  ) // https://api.chucknorris.io/#!
}
