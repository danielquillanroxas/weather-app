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
    <div className='grid'>
      <div className="flex flex-column mb-8  px-2 md:mb-0 align-items-center gap-2 w-6 sm:col-12 md:col-12 lg:col-6">
        <div className="flex">
          <div>
            <h1 className='text-3xl px-2 py-2 font-bold text-center'>Today</h1>
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
        <div className=' flex align-items-center'>
          <div className='flex px-2 py-2 gap-1'>
            <Tag icon="pi pi-map-marker" className='text-base' >
            <span>{data.location.name}, {data.location.region}, {data.location.country} </span>
            </Tag>
          </div>
          <div className='flex px-2 gap-1'>
            <Tag icon="pi pi-map-marker" className='text-base'>
              <span> Local Time: {data.location.localtime} </span>
            </Tag>
          </div>
        </div>
      </div>
      <div className='card sm:col-12 md:col-12 lg:col-6 px-3'>
        <Fieldset legend="More Details" className='align-items-center'>
          <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Fieldset>
      </div>
    </div>


  )
}

export default Current
