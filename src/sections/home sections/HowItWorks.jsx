import React from 'react'
import SectionHeading from '../../components/SectionHeading'
import { Card } from '../../components/Card'

export const HowItWorks = () => {
    return (
        <div className='pb-16'>
            <SectionHeading heading={'How It works'} />

            <div>
                <div className="grid lg:grid-cols-4 gap-8 mt-10">
                   <Card />
                   <Card />
                   <Card />
                   <Card />

                </div>
            </div>
        </div>
    )
}
