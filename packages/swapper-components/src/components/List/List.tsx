import React from 'react'

type Header = {
  name: string,
  parts: number, // Total 12 parts
}

export type Props = {
  headers: Array<Header>,
  rows: Array<Array<string | JSX.Element>>
}

export function List ({ headers, rows }:Props) {
  return <div className='w-full'>
    <div className='flex'>
      {
        headers.map((header, index) => {
          return <div key={index} className={`w-${header.parts}/12 border-b`}><p className='font-light text-swpGray-light p-2'>{header.name}</p></div>
        })
      }
    </div>
    <div>
      {
        rows.map((row, index) => {
          return (
            <div key={index} className='flex w-full'>
              {
                row.map((element, index) => {
                  return <div key={index} className={`w-${headers[index].parts}/12 border-b p-2`}>{element}</div>
                })
              }
            </div>
          )
        })
      }
    </div>
  </div>
}
