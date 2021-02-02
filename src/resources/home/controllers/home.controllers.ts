import catchAsync from '../../../utils/catchAsync'
import { User } from '../../../services/auth/user/models/user.model'
let msgErrorController = 'Error in home controller'

const home = catchAsync(msgErrorController, async (req, res, next) => {

  const user = await User.findById('601973ce6e96053225656811')
  const email = user.helloworld('adasadasdasdsadd')
  const test = user.lala()

  res.status(200).json({ 
    message: "Home router",
    payload: req.payload,
    hello:`hello ${email}`,
    test:`ada ${test}`
  })
})

export { home }
  //  console.log('home method: ', req.method)
  //  console.log('home status: ', res.statusCode)
