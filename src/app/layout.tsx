import type { Metadata } from 'next'

import '@/shared/styles/common/index.scss'

export const metadata: Metadata = {
    title: 'Yumie Promo',
    openGraph: {
        title: 'Yumie',
        description: `
            Yumie – мобильное приложение для знакомств, которое переосмысливает социальные связи. 
            Находите друзей, партнеров и единомышленников с помощью уникальной системы подбора на основе тегов и статистики. 
            Преодолейте социальную изоляцию и расширьте свой круг общения с Yumie.
        `
    },
    icons: ['/icons/icon.ico']
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    )
}
