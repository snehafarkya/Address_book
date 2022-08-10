import React, { useState , useEffect} from 'react'
import {Table} from 'reactstrap'
import showw from './show.js';
export default function Input() { 

    const [data,setData] = useState("")
    const [num,setNum] = useState("")
    const [file,setFile] = useState("")
    const [list,setList] = useState([])

 
    function handleSubmit(e)
{    
  document.getElementById("tablle").style.display="block";
    e.preventDefault();
      const detail = {data,file,num}
      if(data&&num){
            setList((ls)=>[...ls,detail]) 
            setData("")
            setFile("")
            setNum ("")
      }
}  
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
  
    useEffect(() => {
      if (selectedImage) {
        setImageUrl(URL.createObjectURL(selectedImage));
      }
    }, [selectedImage]);
  
return (
    <div className='container'> <br />
    <div className="row ">
  <form onSubmit={handleSubmit} >
<input type="file" name='file' value={file} accept="image/*"  onChange={e => setSelectedImage(e.target.files[0])} /> <br /> <br /> <br />
<input type="text" name='text' value={data} onChange={(e)=>setData(e.target.value)} placeholder='Enter your name'/> <br /> <br />
<input type="number" value={num} onChange={(e)=>setNum(e.target.value)}  placeholder='Enter your name'/> <br /> <br />
        <button  >Add</button> <br />
        
        </form>
        </div>
<br />
        <Table className="col-12 col-md-6 justify-content-center align-self-center " id='tablle' responsive stripped bordered dark>
        <caption  > Displaying details of people</caption>
                <thead>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            Image
                        </td>
                        <td>
                            Age
                        </td>
                       
                    </tr>
                </thead>
                <tbody>
                 {
                    list.map((items)=>{
                        return(
                            <>
                              <tr>
                            <td className='col-12 col-md-3'><li style={{listStyleType : "none"}}>{items.data} </li></td> 
                            <td className='col-12 col-md-2'><li style={{listStyleType : "none"}}>{imageUrl && selectedImage && (
                                                                       <h1 mt={2} textAlign="center">
                                                                        <div></div>
                                                                        <img src={imageUrl} alt={selectedImage.name} height={100} width={100} />
                                                                        </h1>
                                                                        )}</li></td> 
                            <td className='col-12 col-md-1'><li style={{listStyleType : "none"}}>{items.num} </li></td>
                            </tr>
                            </>
                        )    
                        }
           
                    )
                    
                  }
            </tbody>
        </Table>
    </div>
  ) 
  
}

