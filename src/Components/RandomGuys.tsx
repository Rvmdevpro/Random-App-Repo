
import {useQuery} from "react-query"
import { RandomUser} from './RandomUserInterface';




export default function RandomGuys() {
   
        


        
        const fetchPeople  = async () => {
        const response = await fetch ("https://randomuser.me/api/?results=5&gender=male")
        return response.json();
        


    };
        const{data,status}= useQuery("people", fetchPeople)

      if (status==="loading"){
        return <div>Loading...</div>
      }
      if (status==="error"){
        return <div>Error</div>
      }
    return (


      <div>
       {data.results.map((person: RandomUser)=>(
         <div>{person.name.first}</div>
       ))}
      </div>
    )
  }
  
  




