import catchAsync from '@src/utils/catchAsync'

const admin = catchAsync('error', async (req, res, next) => {
  res.status(200).json({
    message:"hola",
    data:'data'
  })
})

export default admin