import MainLayout from '@/components/MainLayout'
import React from 'react'
import MenuContextProvider, { MenuContext } from '../../context/MenuContext'

const HomePage = () => {
	return (
		<div className="bg-pink-100">
			<MenuContextProvider>Homepage</MenuContextProvider>
		</div>
	)
}

export default HomePage
