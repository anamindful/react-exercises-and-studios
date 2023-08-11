import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {label:"cookies", value: "cookies"},
      {label:"cake", value: "cake"},
      {label:"brownies", value: "brownies"}
   ];

   const [boardName, setName] = useState ("");

   const handleChange = (event) => {
      setName(event.target.value);
   }


   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
            {boards.map((item) => (
               <option key={item.value} value={item.value}>
                  {item.label}
               </option>
            ))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}