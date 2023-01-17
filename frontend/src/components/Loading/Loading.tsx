import * as h from './Loading.header'

export default function Loading() {
  return (
    <div className={h.styles.Loading}>
      <div className={h.styles.LoadingContent}>
        <div />
        <div />
        <div />
      </div>
      <div className={h.styles.LoadingLabelWrapper}>
        <span>Carregando...</span>
      </div>
    </div>
  )
}
