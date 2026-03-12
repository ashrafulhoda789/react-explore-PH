export default function Friend({friend}){
    // console.log(friend);
    const {name, email, phone, website} = friend;
    
    return(
        <div className="borderedCard">
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    )
}