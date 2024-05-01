import React from "react";


export default function ItsMe(){


    return (
        <>
            <div>
                
                <div class="grid grid-cols-3 gap-4  mt-20">

                <div class="">
                    <img src={require("../../assets/img/khaled.jpeg")} alt="" class="w-60 h-60 rounded-full"  />
                </div>
                <div class="col-span-2 mt-4 ml-4">
                    
                        <h1 className="text-xl">HI, MY NAME IS</h1>
                        <h1 className="h1 font-Meutas text-7xl ml-2 mt-2    ">
                        KHALED
                        <br/>
                        MRAD
                        </h1>
                        <h1 className="text-2xl mt-2">Into everything FOSS</h1>
                </div>

                </div>
                    <div className="mt-10 Roboto">
                    I'm a Software Engineer at HPE, sometimes a public speaker, and a community organizer and moderator. 
                    I enjoy writing about UI tooling,
                     front-end web development, design systems, static site generators, and JavaScript!      
                     </div>          
            </div>

        </>
    );
}