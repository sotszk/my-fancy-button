import * as React from 'react'
import styles from './styles.module.css'

export interface MyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const MyButton: React.FC<MyButtonProps> = ({ children, ...rest}) => {
  return <button className={styles['my-fancy-button']} {...rest}>{children}</button>
}
