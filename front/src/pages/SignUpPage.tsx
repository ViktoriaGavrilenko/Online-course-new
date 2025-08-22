import React, {useState} from 'react';
import SignUp from '../components/SignUp';

interface Props {}

const SighUpPage: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex">
      <SignUp/>
    </div>
  );
};

export default SighUpPage;