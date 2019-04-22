import React from 'react'
import {cursosTemplate} from '../../templates/cursosTemplate'

const CursosPreview = ({ entry, widgetFor }) => (
    <cursosTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

export default CursosPreview