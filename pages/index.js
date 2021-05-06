import { Typography } from '@material-ui/core';
import rules from '../util/whitelist'

export default function Home() {
  return (
    <div>
      <Typography variant="h6" gutterBottom>Whitelist Server</Typography>
      <Typography varient="body1">[GET] /api/talk?apiId=xxx&userInput=HIHI</Typography>
      <Typography varient="body1">[GET] /api/whitelist?apiId=xxx</Typography>
      {rules.map((r,index) =>
        <ul key={index}>APP ID = {r.appId}
          {r.domain.map(d => <li key={d}>{d}</li>)}
        </ul>
      )}
    </div>
  )
}
