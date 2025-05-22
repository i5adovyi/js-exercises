/**
 * Practical Application: User Authentication and Authorization System
 * 
 * This file contains a mini-project to apply conditional logic in a realistic scenario.
 * It implements a simplified user authentication and authorization system.
 */

/**
 * User database (simplified for this example)
 */
export const users = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123', // In a real system, NEVER store passwords in plain text
    role: 'admin',
    status: 'active',
    lastLogin: new Date('2023-01-15T08:30:00'),
    failedLoginAttempts: 0
  },
  {
    id: 2,
    username: 'user1',
    password: 'password123',
    role: 'user',
    status: 'active',
    lastLogin: new Date('2023-01-10T14:20:00'),
    failedLoginAttempts: 0
  },
  {
    id: 3,
    username: 'user2',
    password: 'letmein',
    role: 'user',
    status: 'inactive',
    lastLogin: new Date('2022-12-05T11:45:00'),
    failedLoginAttempts: 0
  },
  {
    id: 4,
    username: 'editor',
    password: 'edit123',
    role: 'editor',
    status: 'active',
    lastLogin: new Date('2023-01-12T09:15:00'),
    failedLoginAttempts: 0
  }
];

/**
 * Resource permissions by role
 */
export const permissions = {
  'admin': ['read', 'write', 'delete', 'manage_users'],
  'editor': ['read', 'write'],
  'user': ['read']
};

/**
 * Authenticate a user
 * 
 * @param {string} username - The username to authenticate
 * @param {string} password - The password for authentication
 * @returns {Object} Authentication result with user and token if successful
 */
export function authenticateUser(username, password) {
  // Check if username and password are provided
  if (!username || !password) {
    return {
      success: false,
      error: 'Username and password are required'
    };
  }

  // Find the user
  const user = users.find(u => u.username === username);
  
  // Check if user exists
  if (!user) {
    return {
      success: false,
      error: 'User not found'
    };
  }

  // Check if account is locked due to too many failed attempts
  if (user.failedLoginAttempts >= 3) {
    return {
      success: false,
      error: 'Account locked due to too many failed login attempts'
    };
  }

  // Check if user is active
  if (user.status !== 'active') {
    return {
      success: false,
      error: 'Account is inactive'
    };
  }

  // Validate password
  if (user.password !== password) {
    // Increment failed login attempts
    user.failedLoginAttempts += 1;
    
    return {
      success: false,
      error: 'Invalid password',
      attemptsRemaining: 3 - user.failedLoginAttempts
    };
  }

  // Reset failed login attempts on successful login
  user.failedLoginAttempts = 0;
  
  // Update last login time
  user.lastLogin = new Date();
  
  // Generate a simple token (in a real app, use a proper JWT or session)
  const token = generateToken(user);
  
  return {
    success: true,
    user: {
      id: user.id,
      username: user.username,
      role: user.role,
      lastLogin: user.lastLogin
    },
    token
  };
}

/**
 * Check if a user has permission to access a resource
 * 
 * @param {string} token - The authentication token
 * @param {string} action - The action to perform (read, write, delete, manage_users)
 * @param {string} resource - The resource to access
 * @returns {Object} Authorization result
 */
export function authorizeAccess(token, action, resource) {
  // Validate inputs
  if (!token || !action || !resource) {
    return {
      success: false,
      error: 'Missing required parameters'
    };
  }
  
  // Verify token
  const payload = verifyToken(token);
  
  if (!payload) {
    return {
      success: false,
      error: 'Invalid or expired token'
    };
  }
  
  // Get user permissions based on role
  const userPermissions = permissions[payload.role] || [];
  
  // Check if user has the required permission
  if (!userPermissions.includes(action)) {
    return {
      success: false,
      error: `Permission denied: ${payload.role} cannot perform ${action}`
    };
  }
  
  // Additional resource-specific checks could go here
  // For example, checking if a user can only modify their own data
  
  return {
    success: true,
    message: `Access granted: ${payload.username} can perform ${action} on ${resource}`
  };
}

/**
 * Change a user's password
 * 
 * @param {string} token - The authentication token
 * @param {string} userId - The ID of the user to update
 * @param {string} currentPassword - The current password
 * @param {string} newPassword - The new password
 * @returns {Object} Password change result
 */
export function changePassword(token, userId, currentPassword, newPassword) {
  // Verify token
  const payload = verifyToken(token);
  
  if (!payload) {
    return {
      success: false,
      error: 'Invalid or expired token'
    };
  }
  
  // Convert userId to number for comparison
  const userIdNum = Number(userId);
  
  // Check if user is changing their own password or is an admin
  if (payload.id !== userIdNum && payload.role !== 'admin') {
    return {
      success: false,
      error: 'Permission denied: You can only change your own password'
    };
  }
  
  // Find the user to update
  const userToUpdate = users.find(u => u.id === userIdNum);
  
  if (!userToUpdate) {
    return {
      success: false,
      error: 'User not found'
    };
  }
  
  // Validate password requirements
  if (!newPassword || newPassword.length < 8) {
    return {
      success: false,
      error: 'Password must be at least 8 characters long'
    };
  }
  
  // If not admin, verify current password
  if (payload.role !== 'admin' && userToUpdate.password !== currentPassword) {
    return {
      success: false,
      error: 'Current password is incorrect'
    };
  }
  
  // Change password
  userToUpdate.password = newPassword;
  
  return {
    success: true,
    message: 'Password changed successfully'
  };
}

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

/**
 * Generate a simple authentication token
 * (In a real app, use a proper JWT library)
 * 
 * @param {Object} user - The user to generate a token for
 * @returns {string} The generated token
 */
function generateToken(user) {
  const payload = {
    id: user.id,
    username: user.username,
    role: user.role,
    exp: Date.now() + 3600000 // 1 hour expiration
  };
  
  // Simple encoding (NOT secure, just for demonstration)
  return Buffer.from(JSON.stringify(payload)).toString('base64');
}

/**
 * Verify a token and extract its payload
 * (In a real app, use a proper JWT library)
 * 
 * @param {string} token - The token to verify
 * @returns {Object|null} The payload if valid, null otherwise
 */
function verifyToken(token) {
  try {
    // Decode the token
    const payload = JSON.parse(Buffer.from(token, 'base64').toString());
    
    // Check if token is expired
    if (payload.exp < Date.now()) {
      return null;
    }
    
    return payload;
  } catch (error) {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Example usage (for demonstration purposes)
// ---------------------------------------------------------------------------

/*
// Example 1: Successful login
const loginResult = authenticateUser('admin', 'admin123');
console.log(loginResult);
// { success: true, user: {...}, token: '...' }

// Example 2: Authorize access
const authResult = authorizeAccess(loginResult.token, 'manage_users', 'users');
console.log(authResult);
// { success: true, message: 'Access granted: admin can perform manage_users on users' }

// Example 3: Failed authorization
const authResult2 = authorizeAccess(loginResult.token, 'unknown_action', 'users');
console.log(authResult2);
// { success: false, error: 'Permission denied: admin cannot perform unknown_action' }

// Example 4: Change password
const pwdResult = changePassword(loginResult.token, 1, 'admin123', 'newpassword123');
console.log(pwdResult);
// { success: true, message: 'Password changed successfully' }
*/