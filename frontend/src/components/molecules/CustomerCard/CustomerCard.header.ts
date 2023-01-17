import styles from './CustomerCard.module.css'
import Button from '../../atoms/Button/Button'
import { Customer } from '../../../models/Customer'

interface CustomerCardProps {
  customer: Customer
}

export type { CustomerCardProps }

export { styles, Button }
