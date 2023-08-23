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
        <div className="sm:w-15rem sm:h-18rem md:w-15rem md:h-20rem lg:w-20rem lg:h-20rem m-2 bg-primary-reverse">
          <div>
              <div key={index} className="align-items-center">
                <div>
                <p className="m-0 overflow-scroll ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
        numquam deserunt quisquam repellat libero asperieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </p>
                </div>
              </div>
          </div>
          <Divider />
        </div>
        <Button  label="Show Details" className="m-2 p-2"/>
        {/* {data.location.name} */}
    </div>
  )
}

export default WeatherDetails
