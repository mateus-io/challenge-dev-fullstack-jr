/* eslint-disable react/button-has-type */
import * as h from './Button.header'

export default function Button({
  variation,
  children,
  disabled,
  type,
  onClick,
}: h.ButtonProps) {
  if (variation === 'contained') {
    return (
      <button
        className={h.styles.ButtonContained}
        type={type || 'submit'}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
  if (variation === 'outlined') {
    return (
      <button
        className={h.styles.ButtonOutlined}
        type={type || 'submit'}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
  return (
    <button
      className={h.styles.ButtonText}
      type={type || 'submit'}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
