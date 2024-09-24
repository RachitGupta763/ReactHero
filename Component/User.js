
const User = (props) => {
    const {name, location}=props;
    return (
        <div>
           <p>{name}</p>
           <p>{location}</p>
        </div>
    )
}
export default User;