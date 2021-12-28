import React from 'react'

type Header = {
  name: string,
  parts: number, // Total 12 parts
}

type Props = {
  headers: Array<Header>,
  rows: Array<Array<string | JSX.Element>>
}

export function List ({ headers, rows }:Props) {
  return <div className='w-full'>
    <div className='flex'>
      {
        headers.map((header) => {
          return <div className={`w-${header.parts}/12 border-b`}><p className='font-light text-swpGray-light p-2'>{header.name}</p></div>
        })
      }
    </div>
    <div>
      {/* {
        headers.map((header, index) => {
          return (
            <div className='flex w-full'>
              {
                rows.map((row) => {
                  return <div className={`w-${header.parts}/12 border-b p-2`}>{row[index]}</div>
                })
              }
            </div>
          )
        })
      } */}
      {
        rows.map((row) => {
          return (
            <div className='flex w-full'>
              {
                row.map((element, index) => {
                  return <div className={`w-${headers[index].parts}/12 border-b p-2`}>{element}</div>
                })
              }
            </div>
          )
        })
      }
    </div>
  </div>
}
