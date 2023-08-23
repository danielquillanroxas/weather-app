import React,{ useRef } from 'react'
import { Card } from 'primereact/card'
import { Chip } from 'primereact/chip'
import { OverlayPanel } from 'primereact/overlaypanel'
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';

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
                    className='w-11rem h-20rem border-noround shadow-1'
                    header={
                        <img
                            src={data.forecast.forecastday[index].day.condition.icon}
                            alt={data.forecast.forecastday[index].day.condition.text}
                            className="m-auto w-5"
                        />
                    }

                    footer={
                        <div className='mb-0 mt-auto'>
                            <Button type="button" icon="pi pi-cloud" label="Details" onClick={(e) => op.current.toggle(e)} className='border-noround'/>

                        <OverlayPanel ref={op} showCloseIcon>
                        <div>
                            <div>
                                <div className='bg-primary-reverse' >
                                        <div>
                                            <span className='font-bold'> <i className='pi pi-arrow-up'></i> Max temp: </span>
                                            <span>{`${data.forecast.forecastday[index].day.maxtemp_c}°C`}</span>
                                        </div>
                                        <Divider />
                                        <div>
                                            <span className='font-bold'> <i className='pi pi-arrow-down'></i> Min temp: </span>
                                            <span>{`${data.forecast.forecastday[index].day.mintemp_c}°C`}</span>
                                        </div>
                                        <Divider />
                                        <div>
                                            <span className='font-bold'> <i className='pi pi-chart-bar'></i> Avg temp: </span>
                                            <span>{`${data.forecast.forecastday[index].day.avgtemp_c}°C`}</span>
                                        </div>
                                        <Divider />
                                        <div>
                                            <span className='font-bold'> <i className='pi pi-percentage'></i> Humidity: </span>
                                            <span>{`${data.forecast.forecastday[index].day.avghumidity}%`}</span>
                                        </div>
                                        <Divider />
                                        <div>
                                            <span className='font-bold'> <i className='pi pi-sort-up'></i>  <i className='pi pi-sun'></i> Sunrise: </span>
                                            <span>{data.forecast.forecastday[index].astro.sunrise}</span>
                                        </div>
                                        <Divider />
                                        <div>
                                            <span className='font-bold'> <i className='pi pi-sort-down'></i>  <i className='pi pi-sun'></i> Sunset: </span>
                                            <span>{data.forecast.forecastday[index].astro.sunset}</span>
                                        </div>

                                </div>
                            </div>
                        </div>
                        </OverlayPanel>

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
