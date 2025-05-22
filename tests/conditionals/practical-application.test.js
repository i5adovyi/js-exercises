import {
  users,
  permissions,
  authenticateUser,
  authorizeAccess,
  changePassword
} from '../../src/conditionals/practical-application.js';

// Helper to get a valid token
function getValidToken(username = 'admin', password = 'admin123') {
  const result = authenticateUser(username, password);
  return result.token;
}

describe('User Authentication System', () => {
  // Keep a copy of the original users array to restore after tests
  const originalUsers = [...users];
  
  // Reset users array before each test
  beforeEach(() => {
    // Reset users to original state
    users.length = 0;
    originalUsers.forEach(user => {
      users.push({...user});
    });
  });

  describe('authenticateUser', () => {
    it('should authenticate a valid user', () => {
      const result = authenticateUser('admin', 'admin123');
      
      expect(result.success).toBe(true);
      expect(result.user).toEqual(expect.objectContaining({
        id: 1,
        username: 'admin',
        role: 'admin'
      }));
      expect(result.token).toBeDefined();
    });

    it('should reject missing credentials', () => {
      expect(authenticateUser('', 'password123')).toEqual({
        success: false,
        error: 'Username and password are required'
      });
      
      expect(authenticateUser('user1', '')).toEqual({
        success: false,
        error: 'Username and password are required'
      });
    });

    it('should reject non-existent users', () => {
      expect(authenticateUser('nonexistent', 'password')).toEqual({
        success: false,
        error: 'User not found'
      });
    });

    it('should reject inactive users', () => {
      expect(authenticateUser('user2', 'letmein')).toEqual({
        success: false,
        error: 'Account is inactive'
      });
    });

    it('should handle incorrect passwords', () => {
      expect(authenticateUser('admin', 'wrongpassword')).toEqual({
        success: false,
        error: 'Invalid password',
        attemptsRemaining: 2
      });
    });

    it('should lock account after 3 failed attempts', () => {
      // Make 3 failed login attempts
      authenticateUser('admin', 'wrong1');
      authenticateUser('admin', 'wrong2');
      authenticateUser('admin', 'wrong3');
      
      // Now the account should be locked
      expect(authenticateUser('admin', 'admin123')).toEqual({
        success: false,
        error: 'Account locked due to too many failed login attempts'
      });
    });

    it('should reset failed attempts after successful login', () => {
      // Make 2 failed login attempts
      authenticateUser('admin', 'wrong1');
      authenticateUser('admin', 'wrong2');
      
      // Successful login
      const successResult = authenticateUser('admin', 'admin123');
      expect(successResult.success).toBe(true);
      
      // User's failed attempts should be reset
      const adminUser = users.find(u => u.username === 'admin');
      expect(adminUser.failedLoginAttempts).toBe(0);
    });
  });

  describe('authorizeAccess', () => {
    let adminToken, userToken, editorToken;
    
    beforeEach(() => {
      adminToken = getValidToken('admin', 'admin123');
      userToken = getValidToken('user1', 'password123');
      editorToken = getValidToken('editor', 'edit123');
    });
    
    it('should authorize users with proper permissions', () => {
      // Admin can do everything
      expect(authorizeAccess(adminToken, 'read', 'posts')).toEqual({
        success: true,
        message: 'Access granted: admin can perform read on posts'
      });
      
      expect(authorizeAccess(adminToken, 'delete', 'users')).toEqual({
        success: true,
        message: 'Access granted: admin can perform delete on users'
      });
      
      // Editor can read and write
      expect(authorizeAccess(editorToken, 'read', 'posts')).toEqual({
        success: true,
        message: 'Access granted: editor can perform read on posts'
      });
      
      expect(authorizeAccess(editorToken, 'write', 'posts')).toEqual({
        success: true,
        message: 'Access granted: editor can perform write on posts'
      });
      
      // Regular user can only read
      expect(authorizeAccess(userToken, 'read', 'posts')).toEqual({
        success: true,
        message: 'Access granted: user1 can perform read on posts'
      });
    });
    
    it('should deny access when user lacks permissions', () => {
      // Regular user cannot write
      expect(authorizeAccess(userToken, 'write', 'posts')).toEqual({
        success: false,
        error: 'Permission denied: user cannot perform write'
      });
      
      // Editor cannot delete
      expect(authorizeAccess(editorToken, 'delete', 'posts')).toEqual({
        success: false,
        error: 'Permission denied: editor cannot perform delete'
      });
    });
    
    it('should reject invalid tokens', () => {
      expect(authorizeAccess('invalid-token', 'read', 'posts')).toEqual({
        success: false,
        error: 'Invalid or expired token'
      });
    });
    
    it('should require all parameters', () => {
      expect(authorizeAccess(adminToken, '', 'posts')).toEqual({
        success: false,
        error: 'Missing required parameters'
      });
      
      expect(authorizeAccess(adminToken, 'read', '')).toEqual({
        success: false,
        error: 'Missing required parameters'
      });
    });
  });

  describe('changePassword', () => {
    let adminToken, userToken;
    
    beforeEach(() => {
      adminToken = getValidToken('admin', 'admin123');
      userToken = getValidToken('user1', 'password123');
    });
    
    it('should allow users to change their own password', () => {
      expect(changePassword(userToken, 2, 'password123', 'newpassword456')).toEqual({
        success: true,
        message: 'Password changed successfully'
      });
      
      // Verify password was actually changed
      const user = users.find(u => u.id === 2);
      expect(user.password).toBe('newpassword456');
    });
    
    it('should allow admins to change any user password', () => {
      expect(changePassword(adminToken, 2, '', 'adminchanged123')).toEqual({
        success: true,
        message: 'Password changed successfully'
      });
      
      // Verify password was actually changed
      const user = users.find(u => u.id === 2);
      expect(user.password).toBe('adminchanged123');
    });
    
    it('should prevent non-admins from changing others passwords', () => {
      expect(changePassword(userToken, 4, 'password123', 'newpassword')).toEqual({
        success: false,
        error: 'Permission denied: You can only change your own password'
      });
    });
    
    it('should validate current password for non-admin users', () => {
      expect(changePassword(userToken, 2, 'wrongpassword', 'newpassword456')).toEqual({
        success: false,
        error: 'Current password is incorrect'
      });
    });
    
    it('should enforce password requirements', () => {
      expect(changePassword(userToken, 2, 'password123', 'short')).toEqual({
        success: false,
        error: 'Password must be at least 8 characters long'
      });
    });
    
    it('should reject invalid tokens', () => {
      expect(changePassword('invalid-token', 2, 'password123', 'newpassword456')).toEqual({
        success: false,
        error: 'Invalid or expired token'
      });
    });
  });
});