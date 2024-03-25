// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {itemDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = itemDetails
  return (
    <li className="list-items">
      <div className="items-container">
        <div className="currencyName-image">
          <img className="money-logo" src={currencyLogo} alt={currencyName} />
          <p className="currency-name">{currencyName}</p>
        </div>
        <div className="money-value">
          <p className="euro-value">{euroValue}</p>
          <p className="usd-value">{usdValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
