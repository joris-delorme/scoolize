import { Button } from '@/components/ui/button'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'

export default function Home() {
  return (
    <MaxWidthWrapper className='mb-12 flex mt-28 flex-col items-center justify-center text-center'>
      <iframe className='w-[90vw] h-[90vw] sm:w-[50vh] sm:h-[50vh]' src="https://lottie.host/embed/fcc1c92b-c635-4079-be72-a68a1355b4e5/Mpfi4HeaKq.json"></iframe>
      <h1 className='sm:text-3xl text-xl font-black text-center max-w-2xl'>
        <span className='text-red-400'>Qu&apos;est-ce que tu veux faire plus tard ?</span>
        <span className='font-normal mt-2 block'>On t&apos;aide à y répondre une bonne fois pour toutes, <span className='underline'>simplement</span> et <span className='underline'>efficacement</span> !</span>
      </h1>
      <div className="flex mt-6 gap-4">
        <Button>Commencer</Button>
        <Button variant="outline">Je suis une école</Button>
      </div>
    </MaxWidthWrapper>
  )
}
