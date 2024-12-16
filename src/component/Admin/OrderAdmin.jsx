import axios from "axios";
import React, { useEffect, useState } from "react";

const OrderAdmin = () => {
  const [data, setData] = useState(null);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);
  const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWE4ZGUzNDM4MzY5MGI4MDkzNzlhZCIsImlhdCI6MTczMjE1OTE2NSwiZXhwIjoxNzMyNTkxMTY1fQ.8f2f9Wzw7k5iTvN-eD3gl6vbErWQGRcNdhhsdvdQeOE'

  useEffect(() => {  
    const fetchData = async () => {  
      try {  
        const response = await axios.get('https://ecommerce-q3sc.onrender.com/api/v1/admin/products', {  
          headers: {  
            'Authorization': 'Bearer'+token,
          }  
        });  
        
        setData(response.data);  
      } catch (error) {  
        setError(error.message);  
      } finally {  
        setLoading(false);  
      }  
    };  

    fetchData();  
  }, []);  

  if (loading) return <div>Loading...</div>;  
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Product List</h1>
      
    </div>
  );
};

export default OrderAdmin;
