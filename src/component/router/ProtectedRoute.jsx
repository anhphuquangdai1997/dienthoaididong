import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contex/AuthContext';

const ProtectedRoute = ({ isAdmin = false, children }) => {
    const { currentUser, isAuthenticated, loading } = useAuth();
    // Nếu đang tải, có thể hiển thị spinner hoặc trả về null
    if (loading) {
        return <div>Loading...</div>; // Hoặc một spinner
    }

    // Nếu người dùng chưa đăng nhập
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Nếu yêu cầu quyền admin và người dùng không phải admin
    if (isAdmin && currentUser?.role !== "admin") {
        return <Navigate to="/login" replace />;
    }

    // Render component nếu tất cả điều kiện đều thỏa mãn
    return children
};

export default ProtectedRoute;
