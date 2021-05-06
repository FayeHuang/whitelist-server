import whitelist from './whitelist'

export default function(appId, origin) {
  const tempList = whitelist.filter(w => w.appId === appId)
  if (tempList.length === 0)
    return false
  else {
    const originMatchList = tempList[0].domain.filter(d => d === origin)
    if (originMatchList.length === 0)
      return false
    else
      return true
  }
}