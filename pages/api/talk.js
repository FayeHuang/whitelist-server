import checkAccess from '../../util/checkAccess'
export default (req, res) => {
  const origin = req.headers.origin
  const { appId, userInput } = req.query
  if (!appId || !userInput) res.status(400).end()

  const isValid = checkAccess(appId, origin)
  if (!isValid) res.status(403).end()
  res.status(200).json({
    text: userInput,
    response: 'OK !'
  })
}
