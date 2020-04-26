
const admin = (req, res) => {
  res.status(200).json({ 
    message: "Admin router",
    payload:req.payload
  })
}

export { admin }