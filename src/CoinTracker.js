import { useEffect, useState } from "react";
import { renderMatches } from "react-router-dom";

// select에서 옵션을 선택 후, 해당 옵션에 해당하는 USD 가격으로 변환.

function CoinTracker() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	const [asset, setAsset] = useState("");
	const [exchange, setExchange] = useState(0);

	const onChange = (event) => {
		setAsset(event.target.value)
	};


	const onSubmit = (event) => {
		event.preventDefault();
		const coinSelect = document.querySelector('select');
		const coinValue = coinSelect.options[coinSelect.selectedIndex].value.replace(/[^-\.0-9]/g,'');

		setAsset("");
		setExchange((currentAsset) => (asset * coinValue));

	}


	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then((response) => response.json())
			.then((json) => {
				setCoins(json);
				setLoading(false);
			});
	}, [])


	return (
		<div>
			<h1>The Coins! {loading ? "" : `(${coins.length})`} </h1>
			{loading ? (<strong>Loading...</strong>) : (
				<select>
					{coins.map((coin) => <option key={coin.id}>{coin.name} ({coin.symbol}): ${parseFloat(coin.quotes.USD.price)} USD</option>)}
				</select>
			)}

			<br/><br/>

			<form onSubmit={onSubmit}>
				<input onChange={onChange} value={asset} type="number" placeholder="write your asset" />
				<hr/>
				<p>${exchange} USD</p>
			</form>
		</div>
	);
}


export default CoinTracker;