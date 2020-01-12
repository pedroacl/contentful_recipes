import React from 'react'

import Tag from 'components/Tag'

import './styles.css'

type Props = {
  tags: any[]
}

const TagsList: React.FC<Props> = (props) => {
  const { tags } = props

  return <div className="tags-list">{tags.map(tag =>
    <Tag label={tag.fields.name} />
  )}</div>
}

export default TagsList