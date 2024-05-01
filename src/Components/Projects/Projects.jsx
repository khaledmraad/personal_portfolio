import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Projects() {
  return (
    <>
      <h1 className="text-6xl my-10">PROJECTS</h1>  

      <h1 className="text-4xl my-10">project 1</h1>     

      <a className="group flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:group-hover:bg-gray-700 relative">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={require("../../assets/img/khaled.jpeg")} alt=""/>
    
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">tets</h5>
        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">sdchsbkdjchsbd</p>

        <button className="btn group-hover:opacity-100 opacity-0" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button>

        
    </div>
</a>

<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

    </>
  );
}
