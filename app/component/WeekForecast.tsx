import React,{ useRef } from 'react'
import { Card } from 'primereact/card'
import { Chip } from 'primereact/chip'
import WeatherDetails from './WeatherDetails';
import { OverlayPanel } from 'primereact/overlaypanel'
import { Button } from 'primereact/button';

const WeekForecast = ({ data }) => {
    const op = useRef(null);
  return (
    <div className='grid'>
        <div className='pl-5 mt-5'>
            <div className='grid '>
            {data.forecast.forecastday.map((day, index) => (
                <div key={index} className= ' text-center sm:col-3 md:col-3 lg:col-1 m-1 md:m-1 lg:m-5'>
                    <Card
                    subTitle= {data.forecast.forecastday[index].day.condition.text}
                    className='w-11rem h-20rem'
                    header={
                        <img
                            src={data.forecast.forecastday[index].day.condition.icon}
                            alt={data.forecast.forecastday[index].day.condition.text}
                            className="m-auto w-5" // This will make the image take the full width of the card header.
                        />
                    }

                    footer={
                        <div className='mb-0 mt-auto'>
                            {/* <WeatherDetails></WeatherDetails> */}
                            <Button type="button" icon="pi pi-cloud" label="Details" onClick={(e) => op.current.toggle(e)} />

            <OverlayPanel ref={op} showCloseIcon>
                        <WeatherDetails data={data} />
            </OverlayPanel>
                            tangina
                            {/* <WeatherDetails /> */}
                        </div>
                    }
                    >
                    <Chip
                            label={data.forecast.forecastday[index].date}>
                            </Chip>

                    </Card>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default WeekForecast
