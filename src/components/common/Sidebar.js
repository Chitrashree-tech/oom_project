import React, { useRef } from 'react';
import { FaFolder, FaShareAlt, FaChartBar, FaSignOutAlt, FaUpload } from 'react-icons/fa';

const Sidebar = ({ onLogout, setActiveTab, onFileUpload }) => {
    const fileInputRef = useRef();

    const onUploadFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            onFileUpload(file);
        }
    };

    return (
        <div style={{
            width: '250px',
            backgroundColor: '#2c3e50',
            color: 'white',
            padding: '20px',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>

            <h2 style={{ marginBottom: '40px', color: '#2ecc71' }}>FileCloud System</h2>

            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={onUploadFile}
            />

            <button
                onClick={() => fileInputRef.current.click()}
                style={{
                    padding: '12px',
                    backgroundColor: '#2ecc71',
                    borderRadius: '6px',
                    marginBottom: '30px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }}
            >
                <FaUpload style={{ marginRight: '10px' }} /> Upload File
            </button>

            <div
                style={{ padding: '12px', cursor: 'pointer', background: '#34495e' }}
                onClick={() => setActiveTab("myfiles")}
            >
                <FaFolder style={{ marginRight: '15px' }} /> My Files
            </div>

            <div
                style={{ padding: '12px', cursor: 'pointer' }}
                onClick={() => setActiveTab("shared")}
            >
                <FaShareAlt style={{ marginRight: '15px' }} /> Shared with Me
            </div>

            {/* ✅ Admin Reports Button Added */}
            <div
                style={{ padding: '12px', cursor: 'pointer' }}
                onClick={() => setActiveTab("reports")}
            >
                <FaChartBar style={{ marginRight: '15px' }} /> Admin Reports
            </div>

            <div
                style={{ marginTop: 'auto', paddingTop: '20px', cursor: 'pointer' }}
                onClick={onLogout}
            >
                <FaSignOutAlt style={{ marginRight: '15px' }} /> Logout
            </div>
        </div>
    );
};

export default Sidebar;
