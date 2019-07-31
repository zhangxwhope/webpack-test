import { fetch } from '@/http/index'

export default {
  // 获取首页数据
  getData () {
    return fetch.get('/api/user/info')
  }
}
