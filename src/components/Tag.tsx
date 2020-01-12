import React from 'react'

type Props = {
  label: string
}

const Tag: React.FC<Props> = (props) => {
  const { label } = props

  return <div className='tag'>
    {label}
  </div>
}

export default Tag