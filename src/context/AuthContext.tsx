
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useToast } from "@/hooks/use-toast";

type User = {
  username: string;
  role: 'admin';
};

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const { toast } = useToast();

  const login = async (username: string, password: string) => {
    // This is a simple authentication system for demo purposes only
    // In a real application, you would validate against a secure backend
    if (username === 'admin' && password === 'macaron123') {
      const user = { username, role: 'admin' as const };
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      toast({
        title: "Login successful",
        description: "Welcome back, admin!",
      });
      return true;
    }
    
    toast({
      title: "Login failed",
      description: "Invalid username or password",
      variant: "destructive",
    });
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
