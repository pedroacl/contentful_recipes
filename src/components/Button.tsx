import React from 'react'

import './styles.scss'

type Props = {
  label: string
}

const Button: React.FC<Props> = (props) => {
  const { label } = props

  return <div className="button">{label}</div>
}

export default Button