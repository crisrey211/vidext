import { Badge } from '@/components/ui/badge'
import Videoplayer from './videplayer'
import VideoSelector from './videoselector'
import React from 'react'
import { api } from '@/trpc/react'

const videoList = [
    { id: 'K89tb7lWHyQ', title: 'Video 1' },
    { id: 'i3f9BXMoQsY', title: 'Video 2' },
    { id: '3JZ_D3ELwOQ', title: 'Video 3' },
]

export default function Home({ searchParams }: any) {
    const videoId = searchParams.get('videoId') || videoList[0]?.id
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
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
            <Videoplayer videoId={videoId} />
            <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1">
                <div>
                    <Badge>Platform</Badge>
                </div>
                <div className="flex gap-2 flex-col">
                    <h2 className="text-xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                        This is the start of something new
                    </h2>
                    <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                        This description highlights the ease and efficiency of
                        the video player, aligning with the style of modernizing
                        and streamlining experiences.
                    </p>
                </div>
                <VideoSelector videoList={videoList} currentVideoId={videoId} />
            </div>
        </div>
    )
}
