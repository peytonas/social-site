import mongoose from "mongoose"
import bcrypt from 'bcryptjs'
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const SALT = 10



let _schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  hash: { type: String, required: true }
}, { timestamps: true })

_schema.methods.validatePassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.hash, function (err, isMatch) {
      if (err || !isMatch) {
        return reject(err)
      }
      return resolve(isMatch)
    })
  })
}

_schema.set('toJSON', {
  virtuals: true
});

export default class UserService {
  get repository() {
    return mongoose.model('User', _schema)
  }
  generateHash(password) {
    return bcrypt.hashSync(password, SALT)
  }
}