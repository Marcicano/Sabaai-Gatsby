import React from 'react'
import { internalPage} from '../../templates/cursosTemplate'

const CursosPreview = ({ entry, widgetFor }) => (
    <internalPage
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

export default CursosPreview