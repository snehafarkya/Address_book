import React from "react";
import {Table} from 'reactstrap'
import arrayy from "./Array";

export default function Test(){
    
   
        // if(diy.firstname === ' '){ 
                   // checked the conditions 
                   
        return (
            <>
            <div className="container">
            <Table className="col-12 col-md-8  " responsive stripped bordered dark>
                <caption  > Displaying details of people</caption>
                <thead>
                    <tr>
                        <td>
                            Image
                        </td>
                        <td>
                            Fullname
                        </td>
                        <td>
                            Age
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {arrayy.map((diy) =>{ 
                        if(diy.id != '2' ){
                        return(
                            <tr className="justify-content-center">
                            <td className="col-12 col-md-4" key={diy.id}><img src={`${diy.image}`} alt="" width="100%"/></td>
                            <td  >
                             {diy.firstname} {diy.lastname}  
                            </td>
                            <td>
                             {diy.age}
                            </td>
                            </tr>
                        )
                        }
                        else{
                            return (
                                <>
                                <h3></h3>
                                </>
                            )
                        }
                    })}
                
            </tbody>
            </Table>
            </div>
            </>
        ) ; 
        
      
    
// return (
//     <>
//      <h1>{nameee}</h1>
//     </>
// )
}