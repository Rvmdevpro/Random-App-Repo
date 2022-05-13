import {useQuery} from "react-query"
import { RandomUser} from './RandomUserInterface';




export default function RandomUS() {

   
        

        
        const fetchPeople  = async () => {
        const response = await fetch ("https://randomuser.me/api/?results=10&nat=ch")
        return response.json();
        




    };
        const{data,status}= useQuery("CH", fetchPeople)


      if (status==="loading"){
        return <div>Loading...</div>
      }
      if (status==="error"){
        return <div>Error</div>
      }
    return (


      <div>
       {data.results.map((person: RandomUser)=>(
         <div>
           <section>
           <img src={person.picture.large} alt=""></img>
           </section>
           <section>
           {person.name.title}
           {person.name.first}
           {person.name.last}
           </section>
           <section>
           {person.dob.age}
           </section>
           <section>
           {person.cell}
           </section>
           <section>
           {person.email}
           </section>
         </div>
       ))}
      </div>
    )
  }
  

  





