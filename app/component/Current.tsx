import { getCurrentDate } from '../utils/currentDate';
import 'primeicons/primeicons.css';
import { Tag } from 'primereact/tag'
import { Divider } from 'primereact/divider'
import { Badge } from 'primereact/badge'
import { Panel } from 'primereact/panel'

interface CurrentProps {
  data: {
    current: {
      condition: {
        icon: string;
        text: string;
      };
      wind_kph: number;
      wind_dir: string;
      temp_c: number;
      wind_mph: number;
      feelslike_c: number;
      uv: number;
      humidity: number;
      cloud: number;
    };
    location: {
      name: string;
      region: string;
      country: string;
      localtime: string;
    };
  };
}

const Current = ({ data }: CurrentProps) => {
  const currentDate = getCurrentDate();
  const weatherIcon = data.current.condition.icon
  return (
    <div className='grid'>
      <div className="flex flex-column mb-8  px-2 md:mb-0 align-items-center gap-2 w-auto sm:col-12 md:col-12 lg:col-6 text-color">
        <div>
          <div>
            <h1 className='text-3xl px-2 py-2 font-bold text-center'>Today</h1>
            <p className='text-2xl px-2 text-center'>{currentDate}</p>
          </div>

        </div>
        <div>
        <p className='text-2xl px-2 text-center'> {data.current.temp_c.toFixed()}°C </p>
        <span className='px-2 text-center'> {data.current.condition.text} </span>
        {weatherIcon && (
              <img className="align-items-center" src={weatherIcon} alt={data.current.condition.text} />
          )}
        </div>
        <div className='flex align-items-center'>
          <div className='flex flex-wrap px-2 py-2 gap-1 max-w-20rem'>
            <Tag icon="pi pi-map-marker" className='text-base ml-2 border-noround' style={{background:'text-color-secondary'}} >
            <span className=' white-space-normal'>{data.location.name}, {data.location.region}, {data.location.country} </span>
            </Tag>
          </div>
          <div className='flex px-2 gap-1'>
            <Tag icon="pi pi-map-marker" className='text-base border-noround'>
              <span> Local Time: {data.location.localtime} </span>
            </Tag>
          </div>
        </div>
      </div>
      <div className='sm:col-12 md:col-12 lg:col-6 px-5 mt-3 ml-2'>
        <Panel header="Weather Details" className='align-items-center border-noround'>
          <div className="grid">
            <div className="gap-3 xs:col-6 sm:col-6 md:col-3 lg:col-4">
              <span className='font-bold'>Wind Speed: </span>
              <Badge
              severity={
                data.current.wind_kph <= 20 ? "info" :
                (data.current.wind_kph > 20 && data.current.wind_kph <= 40) ? "warning" :
                data.current.wind_kph > 40 ? "danger" : "info"
              }
              value={`${data.current.wind_kph} KMPH`}
            ></Badge>
            </div>
            <div className="gap-1 xs:col-6 sm:col-6 md:col-3 lg:col-4">
              <span className='font-bold'>Wind Direction: </span>
              <Badge
              value={data.current.wind_dir}
            ></Badge>
            </div>
            <div className="gap-1 xs:col-6 sm:col-6 md:col-3 lg:col-4">
              <span className='font-bold'>Feels Like: </span>
              <Badge
              severity={
                data.current.feelslike_c > 30 ? "danger":
                (data.current.feelslike_c >= 26 && data.current.feelslike_c <= 30) ? "warning" :
                (data.current.feelslike_c >= 19 && data.current.feelslike_c <= 25) ? "success" :
                data.current.feelslike_c < 9 ? "info" : null
              }
              value={`${data.current.feelslike_c} °C`}
            ></Badge>
            </div>
            <div className="gap-1 xs:col-6 sm:col-6 md:col-3 lg:col-4">
              <span className='font-bold'>UV: </span>
              <Badge
              severity={
                data.current.uv <= 5 ? null :
                (data.current.uv >= 6 && data.current.uv <= 7) ? "warning" :
                data.current.uv >= 8 ? "danger" : null
              }
              value={data.current.uv}
            ></Badge>
            </div>
            <div className="gap-1 sm:col-6 md:col-3 lg:col-4">
              <span  className='font-bold'>Humidity: </span>
              <Badge
              severity={
                data.current.humidity <= 30 ? "warning" :
                (data.current.humidity > 30 && data.current.humidity <= 60) ? null :
                (data.current.humidity > 60 && data.current.humidity <= 80) ? "warning" :
                data.current.humidity > 80 ? "danger" : "info"
              }
              value={`${data.current.humidity}%`}
            ></Badge>
            </div>
            <div className="gap-1 sm:col-6 md:col-3 lg:col-4">
              <span  className='font-bold'>Cloud: </span>
              <Badge
              value={`${data.current.cloud}%`}
            ></Badge>
            </div>
          </div>

          <div>

          </div>
        </Panel>
      </div>
    </div>


  )
}

export default Current
