import "./index.css";
import { useState,useEffect } from "react";
export default function Card() {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('/db.json') 
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            setDetails(data);
          })
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
     return (
        <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {details.map(data=>{
            return <div className="card" style={{ width: "250px" ,"height":"500px" }}>
                <img className="card-img-top" style={{"height":"250px"}} src={data.img} alt="Carditop" />
             <div className="card-body">
               <h6 className="card-title">{data.title}</h6>
               <p className="card-text">
                 <span className="card-text">Minimum Bid</span>&nbsp;&nbsp;&nbsp;
                 <span className="card-text" style={{ fontWeight: "bold","marginRight":'1px'}}>
                   ${data.mBid}
                 </span>
               </p>
               <p className="card-text">
                 <span className="card-text">Current Bid</span>&nbsp;&nbsp;&nbsp;
                 <span className="card-text" style={{ fontWeight: "bold" }}>
                   ${data.maxBid}
                 </span>
               </p>
               <p className="card-text">Ends in :{data.End}</p>
               <button className="btn btn-primary col-md-6">Bid</button>
             </div>
              </div>
         })}
         </div>
     );
        
       

  
}
