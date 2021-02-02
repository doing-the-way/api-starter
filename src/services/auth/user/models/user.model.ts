import { Schema, model, Model, Document } from 'mongoose'
import bcrypt from 'bcrypt'

type TUser =  {
  email:string,
  password:string,
  rol:string,
  helloworld():string
}

type TUserDoc = TUser & Document

type TUserModel = TUserDoc & Model<TUserDoc> & {
  helloworld():string
}

const userSchema = new Schema(
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

userSchema.methods.helloworld = function() {
  return 'hello world'
  }

  userSchema.statics.helloworld = function() {
    return 'hello world'
    }



export const User = model< TUserModel >('user', userSchema)
