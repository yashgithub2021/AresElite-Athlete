import React from 'react'
import { Table } from '@mantine/core';
import { Avatar } from '@mantine/core';
import { Button } from '@mantine/core';
import { NavLink,useNavigate } from 'react-router-dom';

const TableComp = ({data}) => {
  const naviagte= useNavigate()
  console.log("thedata",data)
  const rows = data?.map((data) => 
  {
    const date= new Date(data.app_date)
    const dtstring=`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
   return(
    <Table.Tr key={data._id}>
      <Table.Td><p className='d-flex align-items-center'><span style={{marginRight:"3px"}}> <Avatar src={"https://s3-alpha-sig.figma.com/img/63c4/be83/222c85e6c852819bc5d4b24a87a87fb6?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CCIP7DFZ2x9yXzdFgWFArmwk7ph~5ovexvWejMmfkCQ~WgL2w9JE5hnFnNqVAL4taDDWEjteHCc5bRiYWlLHA24~LvWiUc1~PEbqoUAlIB9sMCg-OV3YqAD-kSOuprPZInRtZXqkPs7L5-kQj5mwK2gh8vKM7LUP8HLwdmySsOkyBOrwrflVNRrHhdetXuDviaOVaZ7geVH4tHO~FmIKqarODz95EOvKs20HPIztElUMoNHMh3aeYMUGPb-oLWDswwSXGBThPln0sXvslUiYJoZHoIcVtr~ln9CN1huBrXFR~T~Lf~nk2jEuFdM1TmxN5CwcvCo2YNDotPY5O1gBoA__"} alt="no image here" /></span>{data.doctor_trainer}</p></Table.Td>
      <Table.Td><p>{data.service_type}</p></Table.Td>
      <Table.Td><p>{dtstring}</p></Table.Td>
      <Table.Td><p>{data.app_time}</p></Table.Td>
      <Table.Td>{
        <div className='d-flex flex-column gap-2'>
    {data.status=="paid" && <Button variant="filled" color="#7257FF" style={{fontSize:"12px",borderRadius:"12px"}} onClick={()=>{naviagte(`/a-drill`)}}>Start Drill </Button>}
          {data.status!="paid" && <Button variant="filled" color="#7257FF26"style={{fontSize:"12px",color:"#7257FF",borderRadius:"12px" }}>Pay</Button>}
          </div>
        }</Table.Td>
    </Table.Tr>
  )
});
  return (
    <Table.ScrollContainer minWidth={500} type="native">
      <Table  >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Service Type 
</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Time</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  )
}

export default TableComp