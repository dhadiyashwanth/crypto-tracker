import React from 'react';
import './coin.css';

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <div className='coin-container'>
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">{price}rs</p>
                    <p className="coin-volume">{volume.toLocaleString()}rs</p>
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                        ) : (
                            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                    )}

                    <div className="coin-marketcap">
                        mkt cap : {marketcap.toLocaleString()}rs
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Coin
