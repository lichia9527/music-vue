import http from './config'
export class MusicService {
  static banner () {
    return http.get('banner')
  }

  static getRecommendSongs () {
    return http.get('personalized')
  }
}
