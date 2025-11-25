import React, { useState } from 'react';

const styles = {
    input: {
        width: '100%',
        padding: '10px',
        margin: '8px 0',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
    },
    button: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '15px',
        fontSize: '16px',
        transition: 'background-color 0.3s',
    },
};

const AuthForm = ({ isRegister, onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(isRegister ? 'register' : 'login');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={styles.input}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={styles.input}
            />
            {isRegister && (
                <input
                    type="text"
                    placeholder="Name"
                    required
                    style={styles.input}
                />
            )}
            <button type="submit" style={styles.button}>
                {isRegister ? 'Register' : 'Login'}
            </button>
        </form>
    );
};

export default AuthForm;