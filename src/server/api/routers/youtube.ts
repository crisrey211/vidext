import { z } from 'zod'
import { publicProcedure, createTRPCRouter } from '@/server/api/trpc'

export const youtubeRouter = createTRPCRouter({
    getVideo: publicProcedure
        .input(z.object({ videoId: z.string() }))
        .query(async ({ input }) => {
            const { videoId } = input
            const res = await fetch(
                `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,contentDetails&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
            )
            const data = await res.json()

            if (data.items.length > 0) {
                return {
                    title: data.items[0].snippet.title,
                    description: data.items[0].snippet.description,
                    videoUrl: `https://www.youtube.com/embed/${videoId}`,
                }
            } else {
                throw new Error('Video not found')
            }
        }),
})
