'use client'
import { useAuth } from "@clerk/nextjs";
import Navbar from "../../components/navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {

  const {userId, isLoaded} = useAuth()
  const router = useRouter()

  useEffect(()=>{
    if(isLoaded && !userId){
      router.push('/sign-in')
    }
  },[isLoaded, userId, router])

  if(!isLoaded) return 'درحال بارگذاری ...'
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Dashboard;