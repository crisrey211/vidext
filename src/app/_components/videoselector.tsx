'use client'

import { useRouter } from 'next/navigation'

export default function VideoSelector({
    videoList,
    currentVideoId,
}: {
    videoList: Array<{ id: string; title: string }>
    currentVideoId: string
}) {
    const router = useRouter()

    const handleSelectVideo = (videoId: string) => {
        router.push(`/?videoId=${videoId}`)
    }

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Select a video:</h3>
            <ul className="list-none p-0">
                {videoList.map((video) => (
                    <li key={video.id}>
                        <button
                            onClick={() => handleSelectVideo(video.id)}
                            className={`text-blue-500 hover:underline ${currentVideoId === video.id ? 'font-bold' : ''}`}
                        >
                            {video.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
