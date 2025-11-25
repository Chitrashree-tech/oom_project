import React, { useState } from 'react';
import Sidebar from '../components/common/Sidebar';
import FileRow from '../components/file_manager/FileRow';
import SharedFiles from '../components/file_manager/SharedFiles';
import AdminReports from "../components/file_manager/AdminReports"; // ✅ Added
import { FaSearch } from 'react-icons/fa';

const styles = {
    layout: { display: 'flex', height: '100vh', backgroundColor: '#f9f9f9' },
    mainContent: { flexGrow: 1, padding: '30px' },
};

const DashboardPage = ({ onLogout }) => {

    const [files, setFiles] = useState([
        { id: 1, name: 'Project_SRS.pdf', type: 'pdf', size: '2.5 MB', date: '2025-11-20' },
        { id: 2, name: 'Q3_Financials.xlsx', type: 'xlsx', size: '1.2 MB', date: '2025-11-18' },
    ]);

    const [activeTab, setActiveTab] = useState("myfiles");
    const [searchQuery, setSearchQuery] = useState('');

    const handleFileUpload = (file) => {
        const newFile = {
            id: Date.now(),
            name: file.name,
            type: file.name.split('.').pop(),
            size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
            date: new Date().toISOString().slice(0, 10)
        };
        setFiles(prev => [...prev, newFile]);
    };

    const handleReceiveSharedFile = (file) => {
        const newFile = {
            id: Date.now(),
            name: file.name,
            type: file.name.split('.').pop(),
            size: "Shared File",
            date: new Date().toISOString().slice(0, 10)
        };
        setFiles(prev => [...prev, newFile]);
        setActiveTab("myfiles");
    };

    const filteredFiles = files.filter(file =>
        file.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={styles.layout}>

            <Sidebar
                onLogout={onLogout}
                setActiveTab={setActiveTab}
                onFileUpload={handleFileUpload}
            />

            <div style={styles.mainContent}>

                {/* MY FILES */}
                {activeTab === "myfiles" && (
                    <>
                        <h1>My Files</h1>

                        <div style={{ marginBottom: "20px", position: "relative" }}>
                            <FaSearch style={{ position: 'absolute', padding: "10px", color: '#666' }} />
                            <input
                                type="text"
                                placeholder="Search files"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    padding: '10px 15px 10px 40px',
                                    borderRadius: '20px',
                                    width: '300px',
                                    border: '1px solid #ccc'
                                }}
                            />
                        </div>

                        <table style={{
                            width: '100%',
                            background: 'white',
                            borderRadius: '6px',
                            overflow: 'hidden',
                        }}>
                            <thead>
                                <tr>
                                    <th style={{ padding: '12px', background: '#ecf0f0' }}>File Name</th>
                                    <th style={{ padding: '12px', background: '#ecf0f0' }}>Size</th>
                                    <th style={{ padding: '12px', background: '#ecf0f0' }}>Upload Date</th>
                                    <th style={{ padding: '12px', background: '#ecf0f0', textAlign: 'right' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredFiles.length > 0 ? (
                                    filteredFiles.map(file => (
                                        <FileRow key={file.id} file={file} />
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" style={{ textAlign: 'center', padding: '20px', color: '#777' }}>
                                            No files found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </>
                )}

                {/* SHARED WITH ME */}
                {activeTab === "shared" && (
                    <SharedFiles onReceiveSharedFile={handleReceiveSharedFile} />
                )}

                {/* ✅ ADMIN REPORTS SECTION */}
                {activeTab === "reports" && (
                    <AdminReports files={files} />
                )}

            </div>
        </div>
    );
};

export default DashboardPage;
