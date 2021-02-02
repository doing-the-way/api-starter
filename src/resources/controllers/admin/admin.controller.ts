import catchAsync from '../../../utils/catchAsync'
const admin = catchAsync('error', async (req, res, next) => {
  res.status(200).json({
    message:"hola"
  })
})

export default admin