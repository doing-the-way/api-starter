import * as controller  from './resources/controllers/index.controller'

const fn = async (req, res, next) => {
  let fname = controller[req.fname] ;

  if(!fname) {
    return res.status(404).json({message:'fname no existe!!'})
  }

  return fname(req, res, next)
}

export default fn
