import catchAsync from '../../../utils/catchAsync'
import { User } from '../../../services/auth/user/models/user.model'
let msgErrorController = 'Error in home controller'

const home = catchAsync(msgErrorController, async (req, res, next) => {
  const user = await User.findOne({})
  const hello = await user.helloworld()
  res.status(200).json({ 
    message: "Home router",
    payload: req.payload,
    hello:`hello ${hello}`
   })
})

export { home }
  //  console.log('home method: ', req.method)
  //  console.log('home status: ', res.statusCode)
