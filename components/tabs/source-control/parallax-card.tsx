'use client'
import { darkenScreen } from '@/components/redux/slices/ide-controls-slice'
import Tilt from 'react-parallax-tilt'
import { useDispatch } from 'react-redux'

export default function ParallaxCard() {
  const dispatch = useDispatch()

  return (
    <div className='relative w-full min-w-[350px] max-w-[500px] p-10 overflow-visible z-[100]'>
      <Tilt 
        onEnter={() => dispatch(darkenScreen(true))}
        onLeave={() => dispatch(darkenScreen(false))}
        glareEnable 
        glarePosition='all' 
        glareMaxOpacity={0.2}
        scale={1.05}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className='rounded-md'
      >
        <div className='relative pb-5 rounded-md bg-gradient-to-br from-zinc-300 via-zinc-200 to-zinc-400 shadow-xl border border-zinc-500 z-[400]'>
          <div className='absolute top-0 left-0 w-full p-3 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 text-zinc-200 rounded-t-md'>
            <div className='flex items-center space-x-3'>
              <img src="/pictures/gh-profile.png" alt="Avatar" className='rounded-full border-2 border-zinc-400 min-w-[40px]' width={40} />
              <div>
                <h3 className='font-bold tracking-wide'>Francesco Macaluso</h3>
                <a href="https://github.com/FrancescoMaca" target='_blank'
                  className='text-zinc-400 hover:text-accent'
                >
                  @FrancescoMaca
                </a>
              </div>
            </div>
          </div>
          
          <div className='mt-20 p-6 space-y-4'>
            <div className='bg-dark/10 p-3 rounded-md backdrop-blur-sm'>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span className='text-dark'>Rank:</span>
                  <span>Contributor Level 3</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-dark'>Commits:</span>
                  <span>800+</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-dark'>Longest Day Streak:</span>
                  <span>19</span>
                </div>
              </div>
            </div>

            <div className='bg-dark/10 p-3 rounded-md backdrop-blur-sm'>
              <h4 className='text-dark mb-2'>Specializations:</h4>
              <div className='flex flex-wrap gap-2'>
                {['Frontend', 'React', 'TypeScript', 'Carbonara', 'Dog Lover'].map((skill) => (
                  <span key={skill} className='px-2 py-1 rounded-md bg-zinc-700 text-zinc-200'>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className='bg-dark/10 p-3 rounded-md backdrop-blur-sm'>
              <div className='flex justify-between text-sm'>
                <span className='text-zinc-600'>Service Period:</span>
                <span className=''>2021 - Present</span>
              </div>
            </div>
          </div>

          <div className='absolute bottom-1 left-1/2 -translate-x-1/2'>
            <div className='text-center'>
              <div className='text-control-disable font-mono'>ID: GH-2024-FM-1337</div>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  )
}