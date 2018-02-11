import http from './config'
export class MusicService {
  // 首页轮播
  static banner () {
    return http.get('banner')
  }

  // 推荐歌单
  static getRecommendSongs () {
    return http.get('personalized')
  }
  // 独家放送
  static getPersonalRecommends () {
    return http.get('personalized/privatecontent')
  }

  // 新碟上架
  static getLatestMusic (page, index) {
    return http.get(`top/album?offset=${page}&limit=${index}`)
  }
}
