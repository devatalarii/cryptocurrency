// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyList extends Component {
  state = {CryptoCurrencyData: [], isLoader: true}

  componentDidMount = () => {
    this.getThisData()
  }

  getThisData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))

    this.setState({CryptoCurrencyData: formattedData, isLoader: false})
  }

  render() {
    const {CryptoCurrencyData, isLoader} = this.state
    console.log(CryptoCurrencyData)

    return (
      <div className="CryptocurrencyList-container">
        <h1 className="title">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="CryptoCurrencyItem-container">
          <div className="navbar-container">
            <h4 className="coin-type">Coin Type</h4>
            <div className="rupees-container">
              <h4 className="usd-style">USD</h4>
              <h4 className="euro-style">EURO</h4>
            </div>
          </div>
          <ul>
            {isLoader ? (
              <div data-testid="loader">
                <Loader type="Rings" color="#ffffff" height={80} width={80} />
              </div>
            ) : (
              CryptoCurrencyData.map(eachItem => (
                <CryptocurrencyItem itemDetails={eachItem} key={eachItem.id} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrencyList
