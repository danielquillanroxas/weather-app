import { getCurrentDate } from '../utils/currentDate';
import 'primeicons/primeicons.css';
import { Tag } from 'primereact/tag'
import { Fieldset } from 'primereact/fieldset'

interface CurrentProps {
  data: {
    current: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
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

      <div className="flex flex-column mb-8  px-2 md:mb-0 align-items-start gap-2 w-6 sm:col-12 md:col-12 lg:col-6">
        <div className="flex">
          <div>
            <h1 className='text-3xl px-2 py-2 font-bold'>Today</h1>
            <p className='text-2xl px-2'>{currentDate}</p>
          </div>

        </div>
        <div>
        <p className='text-2xl px-2'> {data.current.temp_c.toFixed()}°C </p>
        <span className='px-2'> {data.current.condition.text} </span>
        {weatherIcon && (
            <div>
              <img src={weatherIcon} alt={data.current.condition.text} />
            </div>
          )}
        </div>
        <div>
          <div className='flex align-items-center px-2 py-2 gap-1'>
            <Tag icon="pi pi-map-marker" className='text-base' >
            <span>{data.location.name}, {data.location.region}, {data.location.country} </span>
            </Tag>
          </div>
          <div className='flex align-items-center px-2 gap-1'>
            <Tag icon="pi pi-map-marker" className='text-base'>
              <span> Local Time: {data.location.localtime} </span>
            </Tag>
          </div>
        </div>
      </div>



  )
}

export default Current
