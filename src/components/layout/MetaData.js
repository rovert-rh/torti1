import React from 'react'
import { Helmet } from 'react-helmet'

const MetaData = ({titulo}) => {
  return (
        <Helmet>
            <title>{ `${titulo} - Medicina Alternativa` }</title>
        </Helmet>
  )
}

export default MetaData