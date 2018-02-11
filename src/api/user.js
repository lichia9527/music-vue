import http from './config'
export class UserService {
  // 登陆
  static login (phone, password) {
    return http.get(`login/cellphone?phone=${phone}&password=${password}`)
  }
}
