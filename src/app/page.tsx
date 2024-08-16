'use client'
import { useSearchParams } from 'next/navigation'
import Home from './_components/home'

export default function MainComponent() {
    const searchParams = useSearchParams()
    return (
        <main className="w-full py-20 lg:py-40">
            <div className="container mx-auto">
                <Home searchParams={searchParams} />
            </div>
        </main>
    )
}
