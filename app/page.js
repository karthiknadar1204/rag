'use client'

import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
const page = () => {
  const {user} = useUser();
  const createUser=useMutation(api.user.createUser);


  useEffect(() => {
    user&&checkUser();
  }, [user]);

  const checkUser = async () => {
    const result=await createUser({
      email:user?.primaryEmailAddress?.emailAddress,
      imageUrl:user?.imageUrl,
      name:user?.fullName,
    })
    console.log(result);
  }

  return (
    <div>
      <UserButton />
      <Button>
        Daba mujhe bc
      </Button>
    </div>
  )
}

export default page