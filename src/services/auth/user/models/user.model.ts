import { Schema, model, Model, Document } from 'mongoose'
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
userSchema.statics.static1 = function () { return '' };
userSchema.statics.lala = function () {
  return 'lala'
}
userSchema.methods.helloworld = function() {
  return 'hello world'
}

userSchema.methods.helloworld2 = function() {
  return 'hello world'
}

interface TUser {
  email: string
}

interface TUserBase extends TUser, Document {}

interface TUserDoc extends  TUserBase {
  helloworld() : string
  helloworld2() : string
  helloworld3() : string
}

interface TUserModel extends Model<TUserDoc> {
  lala:() => string,
  static1: () => string
  static2: () => string
}


export const User = model<TUserDoc , TUserModel>('user', userSchema)
