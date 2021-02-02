import { Schema, model, Model, Document } from 'mongoose'
import TUser from '../types/user.type'
import helloworld from './userSchema/hello_world.methods'
import lala from './userSchema/lala.methods'
import bcrypt from 'bcrypt'

const userSchema = new Schema<TUserDoc , TUserModel>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    password: {
      type: String,
      required: true
    },
    rol:{
        type:String,
        default:'user'
    }
  },
  { timestamps: true }
)


userSchema.pre("save", function(this: any, next: any){
    if (!this.isModified('password')) {
        return next()
    }

    bcrypt.hash(this.password, 8, (err, hash) => {
        if (err) {
        return next(err)
        }

        this.password = hash
        next()
    })
})
// userSchema.statics
userSchema.methods.checkPassword = function(user, password:string) {
  const passwordHash = user.password
  return new Promise((resolve, reject) => {
      bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
          return reject(err)
      }

      resolve(same)
      })
  })
}


userSchema.methods =  {
  helloworld : (param) => helloworld(param),
  lala : () => lala()
}



type TUserBase = TUser & Document 

type TUserDoc =  TUserBase & {
  lala() : string
  helloworld(param) : string
  checkPassword(user, password): boolean
}

type TUserModel = Model<TUserDoc> & {
  lala:() => string,
}


export const User = model<TUserDoc , TUserModel>('user', userSchema)
