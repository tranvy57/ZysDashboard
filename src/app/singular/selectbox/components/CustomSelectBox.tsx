'use client'
import React, { useState } from 'react'
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'

const cities = ['TP Hồ Chí Minh', 'Đà Lạt', 'Hà Nội', 'Phú Yên', 'Nam Định']

const CustomSelectBox = () => {
	const [selectedCity, setSelectedCity] = useState('TP Hồ Chí Minh')
	const [open, setOpen] = useState(false)
	return (
		<>
			<div className="flex flex-col justify-center items-center w-fit bg-gray-100  relative z-30">
				<div
					onClick={() => setOpen((prev) => !prev)}
					className="flex flex-row justify-between items-center bg-white w-48 my-2 rounded-lg cursor-pointer"
				>
					<span>{selectedCity}</span>
					<UnfoldMoreOutlinedIcon className="text-gray-400" />
				</div>
				<div
					className={`flex flex-col bg-white w-48 my-2 rounded-lg ${
						open ? 'opacity-100 h-auto' : 'opacity-0 h-0'
					} transition-all duration-200 overflow-hidden absolute top-16 left-0`}
				>
					{cities.map((item) => (
						<div
							key={item}
							onClick={() => {
								setSelectedCity(item)
								setOpen(false)
							}}
							className={`flex justify-start items-center gap-x-2 px-2 py-1 hover:bg-orange-100 cursor-pointer ${
								selectedCity === item ? 'bg-orange-100' : ''
							}`}
						>
							<CheckOutlinedIcon
								className={`text-orange-300 ${selectedCity === item ? 'opacity-100' : 'opacity-0'}`}
							/>
							{item}
						</div>
					))}
				</div>
			</div>
			<div
				onClick={() => setOpen(false)}
				className={`bg-gray-100 fixed inset-0 opacity-50 z-0 ${open ? 'block' : 'hidden'}`}
			></div>
		</>
	)
}

export default CustomSelectBox
