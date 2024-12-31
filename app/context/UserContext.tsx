'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// 사용자 데이터 타입 정의
interface UserData {
  username: string;
  studentId: string;
  email: string;
  password: string;
}

// 컨텍스트의 기본 값 타입 정의
interface UserContextType {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

// 기본 값 설정
const defaultUserData: UserData = {
  username: '',
  studentId: '',
  email: '',
  password: '',
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData>(defaultUserData);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}