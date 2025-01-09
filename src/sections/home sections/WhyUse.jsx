import React from 'react'
import SectionHeading from '../../components/SectionHeading'
import { WhyChooseCard } from '../../components/WhyChooseCard'

export const WhyUse = () => {
    return (
        <div className='pb-32'>
            <div className="lg:bg-white lg:py-16 lg:px-12 rounded-lg">
                <SectionHeading heading={'Why Use Document Tagging Assistant?'} />

                <div>
                    <div className="grid lg:grid-cols-2 mt-12 gap-8">
                        <WhyChooseCard />
                        <WhyChooseCard />
                        <WhyChooseCard />
                        <WhyChooseCard />


                    </div>
                </div>

            </div>
        </div>
    )
}
