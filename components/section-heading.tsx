import React from 'react'

type SectionHeaidngProps={
    children: React.ReactNode
}

export default function SectionHeading({
    children}: SectionHeaidngProps) {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 text-center'>{children}</h2>
  )
}
