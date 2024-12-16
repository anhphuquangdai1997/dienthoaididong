import React, { useState, useEffect } from "react";
import axios from "axios";

const About = () => {
  const [users, setUsers] = useState([]); // Lưu danh sách người dùng
  const [loading, setLoading] = useState(true); // Trạng thái loading
  const [error, setError] = useState(null); // Trạng thái lỗi

  // Hàm gọi API để lấy danh sách người dùng
  const fetchUsers = async () => {
    try {
      setLoading(true); // Bật trạng thái loading

      // Cấu hình để gửi cookie kèm theo yêu cầu
      const config = {
        withCredentials: true, // Gửi cookie kèm theo yêu cầu
      };

      // Gửi yêu cầu GET tới API với headers
      const { data } = await axios.get("/api/admin/users", config);
      setUsers(data.users);
      console.log(data.users)
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false); // Tắt trạng thái loading
    }
  };

  // Gọi API khi component được render
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {users.map((user)=>(
        <p>{user.role==="admin"?(<p>phus</p>):(<p>man</p>)}</p>
      ))}
    </div>
  );
};

export default About;
