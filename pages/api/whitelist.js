// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import checkAccess from '../../util/checkAccess'
import whitelist from '../../util/whitelist'

export default (req, res) => {
  const origin = req.headers.origin
  const { appId } = req.query
  if (!appId) res.status(400).end()

  const isValid = checkAccess(appId, origin)
  res.status(200).json({
    yourDomain: origin,
    yourAppId: appId,
    isValid,
    rules: whitelist
  })
}
