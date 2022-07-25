import React, { useState, useEffect } from "react";
import { fetchAPI } from '../lib/api';

const Header =  ({children})=>{
    const onClick = () => alert('you clicked me')
    const [data, setData] = useState(undefined);

    useEffect( () => {
        const fetchData = async () => {
            const respond = await fetchAPI(`
                    query MyQuery {
                        countries {
                          edges {
                            node {
                              country {
                                value
                                link
                              }
                            }
                          }
                        }
                      }
                      `)
                    //  {console.log("respond",respond.countries)}
                     //const countries = respond.edges
                      setData(respond.countries.edges )
                    }
                    
        fetchData().catch(console.error);;
      }, []);
   
return (
    <div>
    <button onClick={(onClick)}>
        {children}
       
       {/* <h2>{data.getCityByName.name}, {data.getCityByName.country}</h2> */}
    </button>
       {console.log("data",data)}
       {data&&data[0].node.country.link}
    </div>
)
}

export default Header