import React from "react";

const styles = {
    card: {
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        marginBottom: "20px"
    },
    title: {
        fontSize: "22px",
        marginBottom: "10px",
        fontWeight: "bold"
    }
};

const AdminReports = ({ files }) => {

    // Total files
    const totalFiles = files.length;

    // Shared files count
    const sharedFilesCount = files.filter(f => f.size === "Shared File").length;

    // Recent 5 activities
    const recent = [...files]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);

    return (
        <div>
            <h1 style={{ marginBottom: "20px" }}>Admin Reports</h1>

            {/* SUMMARY CARD */}
            <div style={styles.card}>
                <div style={styles.title}>Summary</div>
                <p><b>Total Files:</b> {totalFiles}</p>
                <p><b>Files Received From Shared:</b> {sharedFilesCount}</p>
            </div>

            {/* RECENT ACTIVITY */}
            <div style={styles.card}>
                <div style={styles.title}>Recent Activity</div>

                {recent.length === 0 ? (
                    <p style={{ color: "#888" }}>No recent activity</p>
                ) : (
                    <ul>
                        {recent.map(f => (
                            <li key={f.id} style={{ marginBottom: "8px" }}>
                                📄 {f.name} — <small>{f.date}</small>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default AdminReports;
