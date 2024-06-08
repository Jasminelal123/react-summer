import React from 'react'

const Card = ({structure}) => {
    console.log(structure)
  return (
    <div className=''>
      <div className='m-2 p-4 bg-slate-300 h-[600px] w-[200px] flex flex-col items-center'>
    <img src={structure.thumbnail} alt=" " />
    <h3 className='font-bold text-center'>{structure.title}</h3>
    <p className=''>{structure.description}</p>
    <h1 className='font-bold text-center'>{structure.price}</h1>
    <button className='bg-black text-cyan-50 p-1 mb-1 rounded-xl'>Buy now</button>

        
      </div>
    </div>
  )
}

export default Card
