import Dashboard from '@/components/modules/Dashboard';
import React from 'react'

const Page = ({ params }: { params: { id: string } }) => (
  <>
    <Dashboard id={params.id} />
  </>
);



export default Page;