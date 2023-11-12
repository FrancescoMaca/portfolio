'use client'
import { useState } from "react"
import Tab from "./tab";

export default function TabContainer({children}: {children?: React.ReactNode}) {
	const [openedTabs, setOpenedTabs] = useState(['home-page.tsx'])

	return (
		<div className="flex border-b-2 border-light-gray bg-dark-gray">
			<Tab title={'home-page.tsx'} key={Math.random()}></Tab>
			<Tab title={'project-page.tsx'} key={Math.random()}></Tab>
			<Tab title={'contact-page.tsx'} key={Math.random()}></Tab>
		</div>
	)
}