import React, { useRef, useState } from 'react'
import { Audio } from 'react-loader-spinner'
// import styled, { keyframes } from 'styled-components'

// import music from '../../public/fake_verthandi.mp3'

// const Box = styled.div`
//   display: flex;
//   cursor: pointer;
//   position: fixed;
//   right: 8rem;
//   top: 3rem;
//   z-index: 3;

//   & > *:nth-child(1) {
//     animation-delay: 0.2s;
//   }
//   & > *:nth-child(2) {
//     animation-delay: 0.3s;
//   }
//   & > *:nth-child(3) {
//     animation-delay: 0.4s;
//   }
//   & > *:nth-child(4) {
//     animation-delay: 0.5s;
//   }
//   & > *:nth-child(5) {
//     animation-delay: 0.8s;
//   }

//   &:before {
//     content: '<audio>';
//     font-family: 'La Belle Aurore', cursive;
//     color: #00ff7f;
//     font-size: 18px;
//     position: absolute;
//     margin-top: -20px;
//     left: -60px;
//     opacity: 0.9;
//     line-height: 20 px;
//   }

//   &:after {
//     content: '<audio/>';
//     font-family: 'La Belle Aurore', cursive;
//     color: #00ff7f;
//     font-size: 18px;
//     line-height: 20px;
//     position: absolute;
//     left: -60px;
//     bottom: -20px;
//     opacity: 0.9;
//   }
// `

// const play = keyframes`
// 0%{
//     transform:scaleY(1);
// }
// 50%{
//     transform:scaleY(2);
// }
// 100%{
//     transform:scaleY(1);
// }
// `
// const Line = styled.span`
//   background: #00ff7f;
//   border: 1px solid;

//   animation: ${play} 1s ease infinite;
//   animation-play-state: ${(props) => (props.click ? 'running' : 'paused')};
//   height: 1rem;
//   width: 2px;
//   margin: 0 0.1rem;
// `
const SoundBar = () => {
  const ref = useRef(null)
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)

    if (!click) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
  }
  return (
    <div onClick={() => handleClick()}>
      <div className="flex flex-col cursor-pointer text-[#4ff924] text-xs before:content-['<audio>'] after:content-['</audio>']">
           <Audio
  height="50"
  width="50"
  color="#4ff924"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  // visible={true}
  // onclick visible = {true} else false 
  visible={click ? true : false}

/>
{/* 
    <p
    >
      {
        click ? 
        (
          <span className="text-green-500">Playing</span>
        )
        : 
        (
          <span className="text-gray-500"></span>
        )
      }
    </p> */}
      <audio src='/ludovico.mp3' ref={ref} loop /> &nbsp;
    </div>
</div>
  )
}

export default SoundBar