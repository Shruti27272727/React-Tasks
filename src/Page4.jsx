import { useState } from "react";

function UserCard() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      <h2>Enter User Details</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <br /><br />

      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>{age > 18 ? "Adult" : "Minor"}</p>
    </div>
  );
}

export default UserCard;
