'use client'
import React, { useState } from 'react'
import CustomSelectBox from './components/CustomSelectBox'

const SelectBoxPage = () => {
	return (
		<div className="bg-white rounded-lg mx-4 p-4">
			<h1>This is SelectBox Page</h1>
			<br />
			<br />
			<CustomSelectBox />
		</div>
	)
}

export default SelectBoxPage
