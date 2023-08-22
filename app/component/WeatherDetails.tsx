import { Button } from "primereact/button"
import { Card } from "primereact/card"
import { Divider } from "primereact/divider";

interface DetailsProps {
  data:{
    location:{
      name: string;
    };
  };
}

const WeatherDetails = ( { data }: DetailsProps) => {
  return (
    <div className="align-items-center">
        <div className="w-20rem h-20rem m-2 bg-primary-reverse">
          <div>
            {data.forecast.forecastday.map((day, index) => (
              <div key={index} className="align-items-center">

              </div>
            ))}
          </div>
          <Divider />
        </div>
        <Button  label="Show Details" className="m-2 p-2"/>
        {/* {data.location.name} */}
    </div>
  )
}

export default WeatherDetails
