import { useEffect, useState } from "react"
import { MarketStatus } from "../services/market"


export default function useMarketOpen () {
	const market = MarketStatus.get()

	const [isOpen, setIsOpen] = useState(market.open)

	useEffect(() => {
		setIsOpen(market.open)
	}, [isOpen])
    

	return isOpen
	
}
