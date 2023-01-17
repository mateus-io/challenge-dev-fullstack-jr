import * as h from './CustomersList.header'

export default function CustomersList() {
  const [customers, setCustomers] = h.useState<h.Customer[]>([])
  const [offset, setOffset] = h.useState(0)
  const [endDataset, setEndDataset] = h.useState(false)
  const [loading, setLoading] = h.useState(false)
  const [error, setError] = h.useState<Error>()
  const customerApi = h.useRef<h.ApiQueryAble>()

  async function handleGetCustomersPage() {
    if (customerApi.current) {
      setLoading(true)
      try {
        const customerPage = await h.retrieveCustomers(customerApi.current, {
          limit: h.LIMIT_PER_PAGE,
          offset: String(offset),
        })
        setEndDataset(customerPage.length === 0)
        setCustomers((currentState) => [...currentState, ...customerPage])
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    } else {
      setError(new Error('Problemas com a conexão a API de clientes'))
    }
  }

  function incrementOffset() {
    setOffset((currentState) => currentState + Number(h.LIMIT_PER_PAGE))
  }

  async function nextPage() {
    await handleGetCustomersPage()
    incrementOffset()
  }

  function didMount() {
    customerApi.current = new h.Axios({
      baseURL: import.meta.env.VITE_CUSTOMERS_API_URL,
    })
    nextPage()
  }

  h.useEffect(() => {
    didMount()
  }, [])

  if (error) {
    return <h1>{error.message}</h1>
  }

  return (
    <article className={h.styles.CustomersListWrapper}>
      <section className={h.styles.CustomersList}>
        {customers.map((customer) => (
          <h.CustomerCard key={customer.email} customer={customer} />
        ))}
      </section>
      {loading && <h.Loading />}
      {!endDataset && !loading && (
        <h.Button variation="outlined" onClick={nextPage}>
          Mais
        </h.Button>
      )}
    </article>
  )
}
