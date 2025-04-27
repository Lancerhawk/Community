import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Admin.css';
// import api from '../../api/api';
import api from '../../api'; // or correct path


// const API_URL = 'http://localhost:3001';

function Admin() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const usersPerPage = 5;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await api.get(`/api/admin/users?page=${currentPage}&limit=${usersPerPage}&search=${searchTerm}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = response.data;
                if (data.users) {
                    setUsers(data.users);
                    setCurrentPage(Number(data.currentPage));
                    setTotalPages(Number(data.totalPages));
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
                setLoading(false);
            }
        };
        
        fetchUsers();
    }, [currentPage, searchTerm, usersPerPage]);

    // Users are already filtered by the backend
    const currentUsers = users;
    const [totalPages, setTotalPages] = useState(1);


    return (
        <div className="admin-container">
            <h1 className="page-title">Admin Dashboard</h1>
            <div className="admin-cards">
                <div className="admin-card" onClick={() => navigate('/hackathon-add')}>
                    <div className="card-icon">🏆</div>
                    <h2>Hackathon Panel</h2>
                    <p>Manage hackathons, events, and competitions</p>
                </div>
                <div className="admin-card">
                    <div className="card-icon">🚀</div>
                    <h2>Startup Panel</h2>
                    <p>Manage startup listings and applications</p>
                </div>
                <div className="admin-card">
                    <div className="card-icon">📚</div>
                    <h2>Content Panel</h2>
                    <p>Manage courses, roadmaps, and learning materials</p>
                </div>
            </div>

            <div className="users-section">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {loading ? (
                    <div className="loading">Loading users...</div>
                ) : (
                    <>
                        <div className="users-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>College</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentUsers.map((user, index) => (
                                        <tr key={index}>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.college}</td>
                                            <td>
                                                <span className={`status ${user.veri === 'verified' ? 'verified' : 'unverified'}`}>
                                                    {user.veri === 'verified' ? 'Verified' : 'Unverified'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="pagination">
                            <button 
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <span>{currentPage} of {totalPages}</span>
                            <button 
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Admin;