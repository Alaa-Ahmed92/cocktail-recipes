import React from 'react'
import { Button, ButtonProps } from 'semantic-ui-react'


const MainButton: React.FC<ButtonProps> = ({ size, color, text, onclick, children, link }) => {
  let additionalClassName = '';
  additionalClassName += link && 'btn-link';

  return (
    <Button className={additionalClassName} size={size} onClick={onclick}>{children}</Button>
  )
}

export default MainButton