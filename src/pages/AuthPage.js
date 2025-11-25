import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',   // Same as dashboard
    },
    card: {
        backgroundColor: 'white',
        padding: '35px 40px',
        borderRadius: '8px',
        width: '380px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',  // Same shadow style
        textAlign: 'center',
    },
    header: {
        fontSize: '22px',
        marginBottom: '5px',
        color: '#333',
        fontWeight: '600',
    },
    subText: {
        color: '#666',
        fontSize: '14px',
        marginBottom: '20px',
    },
    toggle: {
        marginTop: '20px',
        fontSize: '14px',
        color: '#555',
    },
    link: {
        color: '#007bff',
        cursor: 'pointer',
        marginLeft: '5px',
        fontWeight: '500',
    }
};

const AuthPage = ({ onLoginSuccess }) => {
    const [isRegister, setIsRegister] = useState(false);

    const handleAuthSubmit = () => {
        // Redirect directly without alert
        onLoginSuccess();
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.header}>Cloud-Based File Storage System</h2>

                {!isRegister && (
                    <p style={styles.subText}>
                        Login to securely access your cloud dashboard
                    </p>
                )}

                <AuthForm 
                    isRegister={isRegister}
                    onSubmit={handleAuthSubmit}
                />

                <div style={styles.toggle}>
                    {isRegister ? "Already registered?" : "Need an account?"}

                    <span 
                        style={styles.link}
                        onClick={() => setIsRegister(!isRegister)}
                    >
                        {isRegister ? "Login" : "Register"}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
