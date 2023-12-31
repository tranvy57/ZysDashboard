import MainLayout from '@/components/layout/MainLayout'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MenuContextProvider } from '../../context/MenuContext'

export const metadata: Metadata = {
	title: "Zy's Dashboard",
	description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body>
				<MenuContextProvider>
					<MainLayout>{children}</MainLayout>
				</MenuContextProvider>
			</body>
		</html>
	)
}
