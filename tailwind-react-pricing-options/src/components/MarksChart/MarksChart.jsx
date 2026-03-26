import React, { use } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
    const marksDataRes = use(marksPromise);
    // console.log(marksData);
    const marksData = marksDataRes.data;

    // data processing for chart
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.physics,
            chemistry: studentData.chemistry,
            math: studentData.math,
        }

        const avg = (student.physics + student.chemistry + student.math) / 3;
        student.avg = avg;
        return student;
    })

    console.log(marksChartData);
    return (
        <div className='flex justify-center mt-10'>
            <div className=' w-full md:w-2/3 lg:w-1/2 h-75 border p-6 rounded-2xl'>
            <h1 className='text-center text-xl md:text-2xl'>Bar Chart</h1>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={marksChartData}>
                        <XAxis dataKey={'name'}></XAxis>
                        <YAxis></YAxis>
                        <Bar dataKey={'avg'} fill='green'></Bar>
                        <Bar dataKey={'chemistry'} fill='blue'></Bar>
                    </BarChart>
                </ResponsiveContainer>

            </div>
        </div>
    );
};

export default MarksChart;