'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate passwords match
    if (formData.password !== formData.repeatPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate password length
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || 'User created successfully!');
        router.push('/');
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Create Account</h1>
        <p className="signup-subtitle">Sign up to start listing on Treazure Yaad</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              placeholder="••••••••"
              required
              minLength={8}
            />
          </div>

          <div className="form-group">
            <label htmlFor="repeatPassword" className="form-label">
              Repeat Password
            </label>
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleChange}
              className="form-input"
              placeholder="••••••••"
              required
              minLength={8}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div className="signup-footer">
          Already have an account?{' '}
          <Link href="/" className="link">
            Back to Home
          </Link>
        </div>
      </div>

      <style jsx>{`
        .signup-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          padding: 2rem;
        }

        .signup-card {
          background: linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%);
          border: 3px solid #9333ea;
          border-radius: 20px;
          padding: 3rem;
          width: 100%;
          max-width: 500px;
          box-shadow: 0 20px 60px rgba(147, 51, 234, 0.4);
        }

        .signup-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #9333ea 0%, #3b82f6 50%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
        }

        .signup-subtitle {
          color: #9ca3af;
          text-align: center;
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .error-message {
          background: rgba(239, 68, 68, 0.1);
          border: 2px solid #ef4444;
          color: #ef4444;
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1.5rem;
          text-align: center;
          font-weight: 600;
        }

        .signup-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          color: #ffffff;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .form-input {
          padding: 0.875rem 1rem;
          background: #0a0a0a;
          border: 2px solid #3a3a3a;
          border-radius: 10px;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: #9333ea;
          box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.2);
        }

        .form-input::placeholder {
          color: #6b7280;
        }

        .submit-btn {
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #9333ea 0%, #3b82f6 100%);
          border: none;
          border-radius: 12px;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 1rem;
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.3);
        }

        .submit-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(147, 51, 234, 0.5);
        }

        .submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .signup-footer {
          margin-top: 1.5rem;
          text-align: center;
          color: #9ca3af;
          font-size: 0.95rem;
        }

        .link {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 600;
        }

        .link:hover {
          color: #9333ea;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
