//tab button
export default function TabButton(
    {children, onSelect, ...props}){
    return(
        <li>
            <button className = {isSelected ? 'active' : ''} {... props}
             onClick = {onSelect} >
               {children}
            </button>
        </li>
    );
}