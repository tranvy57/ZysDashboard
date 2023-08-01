'use client'
import React, { useContext } from 'react'
import MainHeader from './MainHeader'
import Link from 'next/link'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import SettingsPhoneOutlinedIcon from '@mui/icons-material/SettingsPhoneOutlined'
import { MenuContext } from '../../context/MenuContext'

const MainLayout = ({ children }: any) => {
	const { open }: any = useContext(MenuContext)
	return (
		<div className="bg-pink-400 w-screen min-h-screen">
			<MainHeader />
			<div className="flex justify-start items-start">
				{/* <aside className="bg-white rounded-lg w-60 p-4"> */}
				<aside
					className={`bg-white rounded-lg  overflow-hidden transition-all duration-200 
					${open ? 'w-60 p-4	' : 'w-0'} lg:w-60 lg:p-4`}
				>
					<ul>
						<li className="flex justify-start items-center hover:bg-pink-200 hover:text-pink-950 rounded-xl p-2">
							<HomeOutlinedIcon className="mr-2" />
							<Link href="/">Home</Link>
						</li>
						<li className="flex justify-start items-center hover:bg-pink-200 hover:text-pink-950 rounded-xl p-2">
							<AccountTreeOutlinedIcon className="mr-2" />
							<h3 className="flex-1">Projects</h3>
							<KeyboardArrowRightIcon />
						</li>
						<li className="flex justify-start items-center hover:bg-pink-200 hover:text-pink-950 rounded-xl p-2">
							<CheckOutlinedIcon className="mr-2" />
							<h3 className="flex-1">Singule</h3>
							<KeyboardArrowRightIcon />
						</li>
						<li className="flex justify-start items-center hover:bg-pink-200 hover:text-pink-950 rounded-xl p-2">
							<DoneAllOutlinedIcon className="mr-2" />
							<h3 className="flex-1">Complex</h3>
							<KeyboardArrowRightIcon />
						</li>
						<li className="flex justify-start items-center hover:bg-orange-200 hover:text-pink-950 rounded-xl p-2">
							<InfoOutlinedIcon className="mr-2" />
							<Link href="/about-us">About Us</Link>
						</li>
						<li className="flex justify-start items-center hover:bg-green-200 hover:text-pink-950 rounded-xl p-2">
							<SettingsPhoneOutlinedIcon className="mr-2" />
							<Link href="/contact-us">Contact Us</Link>
						</li>
					</ul>
				</aside>
				<main className="flex-1">{children}</main>
			</div>
		</div>
	)
}

export default MainLayout
