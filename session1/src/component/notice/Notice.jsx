import React from 'react'
import ScreenContainer from '../ScreenContainer'

const Notice = () => {
  return (
    <ScreenContainer>
      <p className='title'>네편 설명서</p>
      <p className='date'>2025.07.10</p>
      <p className='text'>본문</p>
      <button className='button'>목록 보기</button>
    </ScreenContainer>
  )
}

export default Notice;