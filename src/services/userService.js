import UserModel from '../models/user'

export default class userService {
  constructor() {
  }

  async create(params) {
    const conditions = {
      userId: params.userId,
      role: params.role
    }
    return await UserModel.findOneAndUpdate(
      conditions,
      params,
      {upsert: true, new: true}
    )
  }
}