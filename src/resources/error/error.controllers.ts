import ErrorResponse from '../../utils/errorResponse'
export const me = (req, res, next) => {
  try{
    res.status(200).json({
      name:'hello world'
    })
  }catch(err){
    ErrorResponse(err, 'Error en controlador me', 500)
    next(err)
  }
}
