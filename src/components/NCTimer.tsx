import { useTimer } from 'react-timer-hook';

type NCTimerProp = {
  expiryTimestamp: Date
}

export default function NCTimer({ expiryTimestamp }: NCTimerProp) {

  const { seconds, minutes, hours, totalSeconds , restart } = useTimer({ 
    expiryTimestamp, 
    onExpire: () => handleRestart(60), 
    interval: 20 
  });

  function handleRestart(seconds: number) {
    const time = new Date()
    time.setSeconds(time.getSeconds() + seconds + totalSeconds)
    restart(time)
  }


  return (
    <div className='text-center font-mono'>
      <div className='text-7xl'>
       <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p className='text-semibold '>Remaining Time</p>
      <button
        className='mt-12 bg-blue-500 py-2 px-4 rounded-lg'
        onClick={() => handleRestart(30)}>
         Restart
      </button>
    </div>
  );
}
