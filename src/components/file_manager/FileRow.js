import React from "react";
import { FaFile, FaShareAlt, FaDownload, FaHistory } from "react-icons/fa";

const styles = {
    tableRow: {
        borderBottom: "1px solid #eee",
    },
    tableCell: {
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
    },
    actionButton: {
        marginLeft: "10px",
        backgroundColor: "transparent",
        border: "none",
        color: "#007bff",
        cursor: "pointer",
        fontSize: "16px",
    },
};

const FileRow = ({ file }) => (
    <tr style={styles.tableRow}>
        <td style={styles.tableCell}>
            <FaFile style={{ marginRight: "10px", color: "#3498db" }} />
            {file.name}
        </td>
        <td style={styles.tableCell}>{file.size}</td>
        <td style={styles.tableCell}>{file.date}</td>

        <td style={{ ...styles.tableCell, justifyContent: "flex-end" }}>
            <button
                style={styles.actionButton}
                onClick={() => alert(`Downloading ${file.name}`)}
            >
                <FaDownload />
            </button>

            <button
                style={styles.actionButton}
                onClick={() => alert(`Sharing ${file.name}`)}
            >
                <FaShareAlt />
            </button>

            <button
                style={styles.actionButton}
                onClick={() => alert(`Viewing history for ${file.name}`)}
            >
                <FaHistory />
            </button>
        </td>
    </tr>
);

export default FileRow;
