import React from 'react'
import { Typography } from '@mui/material'


function MuiTypography() {
  return (
    <div>
        <Typography variant='h1'>h1 heading</Typography>
        <Typography variant='h2'>h2 heading</Typography>
        <Typography variant='h3'>h3 heading</Typography>
        <Typography variant='h4' component="h1">h4 heading</Typography>
        <Typography variant='h5'>h5 heading</Typography>
        <Typography variant='h6'>h6 heading</Typography>

        <Typography variant='subtitle1'>sub 1</Typography>
        <Typography variant='subtitle2'>sub 2</Typography>

        <Typography variant='body1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste hic quibusdam commodi eaque minus, fugiat culpa, eum similique numquam adipisci in. Neque ea vel voluptates rem consequuntur quisquam iusto nulla.</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quasi modi minima maiores odio, ullam cumque error ab consectetur accusantium temporibus hic ex nobis porro? Eveniet perspiciatis quae sint facilis.</Typography>
    </div>
  )
}

export default MuiTypography