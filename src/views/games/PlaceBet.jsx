import {useState} from 'react'

function PlaceBet() {
  const [countHome, setCountHome] = useState(0);
  const [countAway, setCountAway] = useState(0);

  function increase(element= '') {
    if(element == 'home') {
      if(countHome < 15) {
        setCountHome(countHome + 1);
      }
    }

    if(element == 'away') {
      if(countAway < 15) {
        setCountAway(countAway + 1);
      }
    }
  }

  function decrease(element= '') {
    if(element == 'home') {
      if(countHome > 0) {
        setCountHome(countHome - 1);
      }
    }

    if(element == 'away') {
      if(countAway > 0) {
        setCountAway(countAway - 1);
      }
    }
  }

  return <div className="h-[249px] flex items-center shrink-0 rounded-[0px_0px_50px_50px]">
    <div className="game-card bg-[url('src/assets/img/pl.svg')] bg-no-repeat bg-right-bottom flex flex-1 flex-col items-center w-[327px] h-[183px] shrink-0 rounded-[0px_0px_16px_16px]">
      <div className="stadium text-[color:var(--additional-colors-black,#111)] text-sm not-italic font-medium leading-[22px] tracking-[0.07px]">Stamford Bridge</div>
      <div className="round text-[color:var(--grayscale-grayscale-60,#9CA4AB)] text-xs not-italic font-normal leading-4 tracking-[0.06px]">Week 10</div>
      <div className="confront inline-flex items-center gap-5">
        <div className="home flex flex-col items-center gap-2">
          <div className="badge w-16 h-16">
            <img src="src/assets/img/ch.svg" alt="Chelsea Badge"/>
          </div>
          <div className="name w-[88px] text-[color:var(--additional-colors-black,#111)] text-center text-sm not-italic font-medium leading-[22px] tracking-[0.07px]">Chelsea</div>
          <div className="lineup text-[color:var(--grayscale-grayscale-60,#9CA4AB)] text-xs not-italic font-normal leading-4 tracking-[0.06px]">Home</div>
        </div>
        <div className="scoreboard flex flex-col items-center">
          <div className="result flex justify-center gap-4 w-20 text-[color:var(--additional-colors-black,#111)] text-center text-[32px] not-italic font-semibold leading-10 tracking-[0.16px]">
            <div className="home-score">
              <div className="increase-home-score border-b border-gray-300" onClick={() => increase('home')}>+</div>
              <div className="home-score-value border-b border-gray-300">{countHome}</div>
              <div className="decrease-home-score" onClick={() => decrease('home')}>-</div>
            </div>
            <div className="separator-score flex items-center">:</div>
            <div className="away-score">
              <div className="increase-away-score border-b border-gray-300" onClick={() => increase('away')}>+</div>
              <div className="away-score-value border-b border-gray-300">{countAway}</div>
              <div className="decrease-away-score" onClick={() => decrease('away')}>-</div>
            </div>
          </div>
          <div className="date bg-blue-800 flex justify-center items-center gap-2 border border-[color:white] px-2 py-1 rounded-xl border-solid">
            <span className="text-[color:white] text-xs not-italic font-medium leading-4 tracking-[0.06px]">Salvar Palpite</span>
          </div>
        </div>
        <div className="away flex flex-col items-center gap-2">
          <div className="badge w-16 h-16">
            <img src="src/assets/img/mu.svg" alt="Manchester United Badge"/>
          </div>
          <div className="name w-[88px] text-[color:var(--additional-colors-black,#111)] text-center text-sm not-italic font-medium leading-[22px] tracking-[0.07px]">Man Utd</div>
          <div className="lineup text-[color:var(--grayscale-grayscale-60,#9CA4AB)] text-xs not-italic font-normal leading-4 tracking-[0.06px]">Away</div>
        </div>
      </div>
    </div>


  </div>
}

export default PlaceBet
