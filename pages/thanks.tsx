import React from 'react'
import Typography from '@material-ui/core/Typography'

const Thanks = (): React.ReactElement => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>THANKS</h1>
      <h1>:)</h1>
      <Typography paragraph>I will let you know if you make it to round 2</Typography>
      <img src='/images/mandudu.png' style={{ width: 250, maxWidth: '100%' }} />
    </div>
  )
}

export default Thanks
