import {Link, Route, useParams} from "react-router-dom";
import Comments from "../components/comments/Comments";
import {DUMMY_QUOTES} from "./AllQuotes";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const QuoteDetail = () => {
  const quotes = [...DUMMY_QUOTES]
  const params = useParams()
  const quote = quotes.find(item => item.id === params.quoteId)
  if (!quote) {
    return <p>no quote found!</p>
  }
  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments/>
      </Route>
    </div>
  )
}

export default QuoteDetail;
