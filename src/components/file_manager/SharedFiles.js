import React from 'react';

const sharedFilesMock = [
    { id: 101, name: "Team_Plan.pdf", owner: "Harshitha", date: "2025-11-22" },
    { id: 102, name: "Design_UI.png", owner: "Dyuthi", date: "2025-11-23" },
    { id: 103, name: "Finance_Report.xlsx", owner: "Chitra", date: "2025-11-21" },
    { id: 104, name: "Project_Timeline.docx", owner: "Harshitha", date: "2025-11-20" },
    { id: 105, name: "Marketing_Strategy.pdf", owner: "Dyuthi", date: "2025-11-19" },
    { id: 106, name: "Logo_Assets.zip", owner: "Chitra", date: "2025-11-18" },
    { id: 107, name: "Client_Feedback.docx", owner: "Harshitha", date: "2025-11-17" },
    { id: 108, name: "Sprint_Backlog.xlsx", owner: "Dyuthi", date: "2025-11-16" },
    { id: 109, name: "User_Research.pdf", owner: "Chitra", date: "2025-11-15" },
    { id: 110, name: "Presentation_Final.pptx", owner: "Harshitha", date: "2025-11-14" },
    { id: 111, name: "Wireframes.sketch", owner: "Dyuthi", date: "2025-11-13" },
    { id: 112, name: "Budget_Overview.xlsx", owner: "Chitra", date: "2025-11-12" },
    { id: 113, name: "Meeting_Notes.docx", owner: "Harshitha", date: "2025-11-11" },
    { id: 114, name: "Prototype_Files.zip", owner: "Dyuthi", date: "2025-11-10" },
    { id: 115, name: "Roadmap_2026.pdf", owner: "Chitra", date: "2025-11-09" },
];


const styles = {
    container: {
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        width: "100%",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
    },
    headerCell: {
        padding: "12px",
        background: "#eef2f5",
        fontWeight: "bold",
        borderBottom: "1px solid #ddd",
        textAlign: "left",
    },
    rowCell: {
        padding: "12px",
        borderBottom: "1px solid #eee",
    },
    empty: {
        textAlign: "center",
        padding: "30px",
        color: "#888",
    }
};

const SharedFiles = ({ onReceiveSharedFile }) => {

    // This will create a fake file Blob so that download works in MyFiles
    const generateMockContent = () => {
        return new Blob(["This is a shared file mock content."], { type: "text/plain" });
    };

    const handleReceive = (file) => {
        const fullFile = {
            id: Date.now(),
            name: file.name,
            owner: file.owner,
            originalDate: file.date,
            receivedAt: new Date().toLocaleString(),    // store date/time
            type: "text/plain",
            content: generateMockContent()               // fake file content
        };

        onReceiveSharedFile(fullFile);  // Send to Dashboard.js
    };

    return (
        <div style={styles.container}>
            <h2 style={{ marginBottom: "15px" }}>Shared With Me</h2>

            {sharedFilesMock.length === 0 ? (
                <div style={styles.empty}>No files shared with you</div>
            ) : (
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.headerCell}>File Name</th>
                            <th style={styles.headerCell}>Shared By</th>
                            <th style={styles.headerCell}>Date Shared</th>
                            <th style={styles.headerCell}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {sharedFilesMock.map(file => (
                            <tr key={file.id}>
                                <td style={styles.rowCell}>{file.name}</td>
                                <td style={styles.rowCell}>{file.owner}</td>
                                <td style={styles.rowCell}>{file.date}</td>
                                <td style={{ ...styles.rowCell, textAlign: "right" }}>
                                    <button 
                                        onClick={() => handleReceive(file)}
                                        style={{
                                            padding: "6px 12px",
                                            background: "#3498db",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "4px",
                                            cursor: "pointer"
                                        }}
                                    >
                                        Download
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default SharedFiles;
