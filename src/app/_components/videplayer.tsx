'use client'
import { api } from '@/trpc/react'

export default function Videoplayer({ videoId }: { videoId: string }) {
    const { data, isLoading, error } = api.youtube.getVideo.useQuery({
        videoId,
    })
    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error.message}</p>
    }
    return (
        <div>
            <h1>{data?.title}</h1>
            <iframe
                width="560"
                height="315"
                src={data?.videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}
