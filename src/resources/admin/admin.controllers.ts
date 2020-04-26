
export const me = (req, res) => {
  res.status(200).json({ 
    message: "Admin router",
    payload:req.payload
  })
  // console.log('admin status: ', res.statusCode)
}
