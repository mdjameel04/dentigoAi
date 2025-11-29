 "use server"

import prisma from "../prisma"


export async function getDoctors (){
 try {
    const doctors = await prisma.doctor.findMany({
        include: {
            _count: {select: {apponiment:true}}
    },
    orderBy : {createdAt : "desc"}
    })
  return doctors.map((doctor)=>({
    ...doctor,
    appoinmentCount : doctor._count.apponiment
  }))
 } catch (error) {
    console.log("error fecthing doctoes ", error)
    throw new Error("failed to fetch doctors")
 }   
}