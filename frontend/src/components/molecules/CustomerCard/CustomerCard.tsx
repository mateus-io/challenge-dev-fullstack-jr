import * as h from './CustomerCard.header'

export default function CustomerCard({ customer }: h.CustomerCardProps) {
  return (
    <div className={h.styles.CardWrapper}>
      <ul className={h.styles.CardContent}>
        <li className={h.styles.CardItem}>
          <span className={h.styles.Key}>ID: </span>
          <span className={h.styles.Value}>{customer.id}</span>
        </li>

        <li className={h.styles.CardItem}>
          <span className={h.styles.Key}>Nome: </span>
          <span className={h.styles.Value}>{customer.name}</span>
        </li>

        <li className={h.styles.CardItem}>
          <span className={h.styles.Key}>Email: </span>
          <span className={h.styles.Value}>{customer.email}</span>
        </li>

        <li className={h.styles.CardItem}>
          <span className={h.styles.Key}>Username: </span>
          <span className={h.styles.Value}>{customer.username}</span>
        </li>
      </ul>
    </div>
  )
}
