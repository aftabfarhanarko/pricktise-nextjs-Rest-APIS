import React from 'react';


const data = async (id) => {
  const res = await fetch(
    ` https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    {
      next: { revalidate: 1000 },
    }
  );

  const data = await res.json();
  return data.details || [];
};

const Detlisepages = async ({params}) => {
    const {id} = await params;
      const foods = await data(id);
    console.log(foods);
    
    return (
        <div>
           This is Detlise Page 
        </div>
    );
};

export default Detlisepages;