import React from 'react'
import { Card } from 'primereact/card'

const WeekForecast = ({ data }) => {
  return (
    <div className='grid'>
        <div className='col-3 md:col-3 lg:col-12 px-3'>
            <div className='grid gap-2'>
            {data.forecast.forecastday.map((day, index) => (
                <div key={index} className= 'p-2 text-center align-items-center '>
                    <Card title= {data.forecast.forecastday[index].day.condition.text} className='w-10rem h-12rem'>
                        {data.forecast.forecastday[index].date}
                    </Card>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default WeekForecast
