import ErrorResponse from '../../utils/errorResponse'

export const me = (req, res, next) => {
  try{
    res.statusssss(200).json({ 
      message: "Home router ..",
      payload: req.payload,
     })
  }catch(err){
    ErrorResponse(err, 'Error en controlador home', 500)
    next(err)
  }
  //  console.log('home method: ', req.method)
  //  console.log('home status: ', res.statusCode)
}
