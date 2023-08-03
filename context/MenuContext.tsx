'use client'
import { createContext, useState } from 'react'

const MenuContext = createContext({})

const MenuContextProvider = ({ children }: any) => {
	const [open, setOpen] = useState(false)

	const toggle = () => {
		console.log({ open })
		setOpen((prev) => !prev)
	}

	return <MenuContext.Provider value={{ open, toggle }}>{children}</MenuContext.Provider>
}

export { MenuContext, MenuContextProvider }
