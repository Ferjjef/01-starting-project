
function UserData(){
  user = {
    first:"Justin",
    last:"Jeffrey",
    age: 22,
  };


  return(
    <div>
      <ul>
        User Data 
        <li>First {user.first}</li>
        <li>Last {user.last}</li>
        <li>Age: {user.age}</li>
      </ul>
    </div>
  );
}