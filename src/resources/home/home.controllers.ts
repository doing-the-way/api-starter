export const me = (req, res) => {
  res.status(200).json({ 
    message: "Home router ..",
    payload: req.payload,
   })
  //  console.log('home method: ', req.method)
  //  console.log('home status: ', res.statusCode)
}
