import React from 'react'
import { Avatar, RingProgress,LoadingOverlay} from "@mantine/core";
import { Text } from "@mantine/core";
const Drillstats = ({data,ispaid}) => {
    console.log(data)
    const perc= (data?.completedDrills/data?.totalDrills *100).toFixed(1)
  return (
    <>
    {( data?.totalDrills!=0  && ispaid=="paid") ?  <div xs={6} sm={6} className="training-card text-shadow">
        
        <div className="d-flex  flex-wrap justify-content-between upper-train  ">
          <div>
            <h2 style={{fontSize:"700"}}>Drills</h2>
          </div>
          <div>
           
          </div>
        </div>
        <div className="train-stat-cont flex-shift gap-3">
          <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
            <table style={{ width: "100%", height: "70%" }}>
              {data?.totalDrills && <tr>
                <th style={{ color: "#3C3F53" }}>Total</th>
                <td style={{ color: "#8C90AA" }}>-{data.totalDrills}</td>
              </tr>}
              <tr>
                <th style={{ color: "#3C3F53" }}>Completed</th>
                <td style={{ color: "#8C90AA" }}>-{data?.completedDrills}</td>
              </tr>
              <tr>
                <th style={{ color: "#3C3F53" }}>Remaining</th>
                <td style={{ color: "#8C90AA" }}>-{data?.totalDrills-data?.completedDrills}</td>
              </tr>
            </table>
          </div>
          <div className="d-flex justify-content-center items-start text-shadow">
            <RingProgress
              hiddenFrom="sm"
              size={100}
              thickness={8}
              roundCaps
              label={
                <Text c="black" fw={700} ta="center" size="xl">
                {perc}%
                </Text>
              }
              sections={[{ value: perc, color: "#7257FF" }]}
            />
            <RingProgress
              visibleFrom="sm"
              size={150}
              thickness={12}
              roundCaps
              label={
                <Text c="black" fw={700} ta="center" size="xl">
              {perc} %
                </Text>
              }
              sections={[{ value:perc, color: "#7257FF" }]}
            />
          </div>
        </div>
        
      </div>:<>
      {( data && ispaid!="paid") && <> <div xs={6} sm={6} className="training-card text-shadow " style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}> <img src="/images/DoctorMenuLogo.png" style={{height:"90%",marginBottom:"-50px"}} /><h3>Select a plan to start drill</h3></div></>}
      {!data  &&   <div xs={6} sm={6} className="training-card text-shadow pulsate">{<LoadingOverlay visible={true} zIndex={1000} overlayProps={{  blur: 0,radius:"xl"}} />}</div> }
    
      
      </>}
  
      </>
  )
}

export default Drillstats