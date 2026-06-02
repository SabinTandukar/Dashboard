"use client";

import React from 'react'
import { FiEye } from 'react-icons/fi';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

// #region Sample data
const data = [
    {
        subject: 'Tracking',
        A: 90,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Builder',
        A: 87,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Schedule',
        A: 46,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'AI train',
        A: 69,
        B: 100,
        fullMark: 150,
    },
    {
        subject: 'Interval',
        A: 85,
        B: 90,
        fullMark: 150,
    },
];


const UsageRadar = () => {
    return (
        <div className='col-span-4 overflow-hidden rounded border border-stone-300'>
            <div className='p-4'>
                <h3 className="flex items-center gap-1.5 font-medium">
                    <FiEye /> Usage
                </h3>
            </div>
            <div className='h-64 px-4'>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                        style={{ maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
                        responsive
                        outerRadius="80%"
                        data={data}
                        margin={{
                            top: 20,
                            left: 20,
                            right: 20,
                            bottom: 20,
                        }}
                    >
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis />
                        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default UsageRadar
