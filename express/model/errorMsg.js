module.exports = {
  NotLoginOrExpire: {
    errno: 530,
    message: '未登录'
  },
  UsernameIsExist: {
    errno: 409,
    message: '用户名已存在'
  },
  UsernameNotExist: {
    errno: 666, // 等待更改
    message: '用户名不存在'
  },
  RegisterError: {
    errno: -1, // 等待更改
    message: '注册失败'
  },
  NotAdminError: {
    errno: -2,
    message: '你不是管理员,无法更改'
  },
  HomeDataNotFound: {
    errno: -3,
    message: '首页数据获取失败'
  },
  DeleteFailError: {
    errno: -4,
    message: '删除失败'
  }
}