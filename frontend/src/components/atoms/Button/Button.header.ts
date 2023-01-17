import styles from './Button.module.css'

interface ButtonProps {
  variation: 'contained' | 'outlined' | 'text'
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
  children?: React.ReactNode
  onClick: () => void
}

export type { ButtonProps }

export { styles }
