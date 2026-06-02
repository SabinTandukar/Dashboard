"use client";

import React from 'react'
import { FiUser } from 'react-icons/fi'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// #region Sample data
const data = [
    { name: 'Jan', desktop: 4000, mobile: 2400, amt: 2400 },
    { name: 'Feb', desktop: 3000, mobile: 1398, amt: 2210 },
    { name: 'Mar', desktop: 1000, mobile: 5000, amt: 2290 },
    { name: 'Apr', desktop: 2780, mobile: 3908, amt: 2000 },
    { name: 'May', desktop: 1890, mobile: 4800, amt: 2181 },
    { name: 'Jun', desktop: 6390, mobile: 3500, amt: 2500 },
    { name: 'Jul', desktop: 3670, mobile: 4300, amt: 2100 },
];

const ActivityGraph = () => {
    return (
        <div className='col-span-8 overflow-hidden rounded border border-stone-300 bg-white'>
            <div className='p-4'>
                <h3 className="flex items-center gap-1.5 font-medium text-stone-700">
                    <FiUser /> Activity
                </h3>
            </div>

            <div className="h-64 px-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                    >
                        {/* CartesianGrid using Tailwind's stone-200 color */}
                        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />

                        {/* X & Y Axes using Tailwind's stone-500 color for labels */}
                        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} stroke="#78716c" fontSize={12} />
                        <YAxis stroke="#78716c" fontSize={12} />

                        <Tooltip
                            cursor={{ stroke: '#d6d3d1' }} // stone-300
                            contentStyle={{
                                backgroundColor: '#ffffff',
                                borderColor: '#e7e5e4',
                                borderRadius: '0.375rem'
                            }}
                        />
                        <Legend />

                        {/* Line 1: Using Tailwind's Indigo 500 (#6366f1) */}
                        <Line
                            type="monotone"
                            dataKey="mobile"
                            stroke="#6366f1"
                            strokeWidth={3}
                            dot={{ fill: '#ffffff', stroke: '#6366f1', strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6, stroke: '#ffffff', strokeWidth: 2 }}
                        />

                        {/* Line 2: Using Tailwind's Emerald 500 (#10b981) */}
                        <Line
                            type="monotone"
                            dataKey="desktop"
                            stroke="#10b981"
                            strokeWidth={3}
                            dot={{ fill: '#ffffff', stroke: '#10b981', strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6, stroke: '#ffffff', strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default ActivityGraph