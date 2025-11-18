const VIDEO_URL = '/background-video.mp4'

interface VideoBackgroundProps {
  opacity?: number
}

export function VideoBackground({ opacity = 0.4 }: VideoBackgroundProps) {
  const opacityClass = opacity === 0.4 ? 'bg-black/40' : opacity === 0.5 ? 'bg-black/50' : `bg-black/[${Math.round(opacity * 100)}%]`
  
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="fixed inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
      <div className={`fixed inset-0 ${opacityClass} z-0`} />
    </>
  )
}

