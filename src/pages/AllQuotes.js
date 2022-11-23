import QuoteList from "../components/quotes/QuoteList";

export const DUMMY_QUOTES = [
  {id: 'q1', author: 'Adel', text: 'nice quote from pulp fiction'},
  {id: 'q2', author: 'Gia', text: 'nice quote from a beautiful book'},
]

const AllQuotes = () => {
  return(
    <div>
      <QuoteList quotes={DUMMY_QUOTES}/>
    </div>
  )
}
export default AllQuotes;
