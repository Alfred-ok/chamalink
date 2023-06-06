'use client'

import React from 'react'
import Input from './input'
import { useState } from 'react'
import './registration.css'
import { useRouter } from 'next/navigation'

export default function Page() {
  const [inputproperty, setInputproperty] =useState([
    {type:'text',placeholder:'Enter Chama Name',label:'Chama Name'},
    {type:'number',placeholder:'Enter Number of Members',label:'Number of Members'},
    {type:'text',placeholder:'Enter Country',label:'Country'},
    {type:'text',placeholder:'Enter County',label:'County'},
    {type:'text',placeholder:'Enter Registration Status',label:'Registration Status'},
    {type:'text',placeholder:'Enter Registration Number',label:'Registration Number'},
    {type:'email',placeholder:'Enter Email',label:'Email'},
    {type:'name',placeholder:'Enter name',label:'Name'},
    {type:'email',placeholder:'Enter Email',label:'Email'},
    {type:'number',placeholder:'Enter Phone number',label:'Phone Number'},
    {type:'date',placeholder:'Enter Date of Birth',label:'Date of Birth'},
    {type:'Number',placeholder:'Enter Id Number',label:'Identification Number(ID)'}
  ])
  const router = useRouter();
  const handleSubmit =(e)=>{
    e.preventDefault()
    router.push('/chama')
  }
  return (

    <div className='container'>
      <h1>Chama Registration</h1>
      <form className='formContainer' onSubmit={handleSubmit}>
          {
            inputproperty.map((property, index)=>(
              <Input type={property.type} placeholder={property.placeholder} label={property.label} key={index}/>
            ))
          }
          <button>Submit</button>
        </form>
    </div>
  )
}