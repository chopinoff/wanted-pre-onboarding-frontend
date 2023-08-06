import React, { useState } from 'react';

function EmailPasswordForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <form>
        <input data-testid="email-input" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          data-testid="password-input"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button data-testid="signup-button">회원가입</button>
      </form>
    </div>
  );
}

export default EmailPasswordForm;
