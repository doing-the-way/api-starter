import catchAsync from '../../../utils/catchAsync'

let msgErrorController = 'Error in home controller'

const home = catchAsync(msgErrorController, async (req, res, next) => {
  res.status(200).json({ 
    message: "Home router",
    payload: req.payload,
   })
})

export { home }
  //  console.log('home method: ', req.method)
  //  console.log('home status: ', res.statusCode)
