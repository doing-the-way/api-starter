import catchAsync from '@src/utils/catchAsync'
const home = catchAsync('error', async (req, res, next) => {
  res.status(200).json({
    message:"hola"
  })
})

export default home