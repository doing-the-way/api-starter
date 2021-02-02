
const fname = async (req, res, next) => {

  const { fname } = req.body

  if(!fname){
    return res.status(500).json({
      message:'Por favor ingresa una función'
    }) 
  }

  req.fname = fname
  next()
}

export default fname
