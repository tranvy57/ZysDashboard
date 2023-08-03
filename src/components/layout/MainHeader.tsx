'use client'
import React, { useContext } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { MenuContext } from '../../../context/MenuContext'
import UserAreaSelectBox from './UserAreaSelectBox'

const MainHeader = () => {
	const { toggle }: any = useContext(MenuContext)
	return (
		<div className="bg-pink-300 flex justify-between items-center px-4 h-12 mb-4">
			<div>Zyy</div>
			<div className="flex items-center justify-center gap-4">
				<div>
					<MenuIcon className="cursor-pointer lg:hidden" onClick={toggle} />
				</div>
				<div>
					<UserAreaSelectBox />
				</div>
			</div>
		</div>
	)
}

export default MainHeader
