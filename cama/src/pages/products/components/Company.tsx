// Company.tsx
import React from "react";

interface CompanyProps {
  name: string;
  onModify: () => void;
}

const Company: React.FC<CompanyProps> = ({ name, onModify }) => {
  return <button onClick={onModify}>{name}</button>;
};

export default Company;
