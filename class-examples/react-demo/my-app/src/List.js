import React from 'react'; 

export default class List extends React.Component{
    render(){
        const numbers = [1, 3, 5, 6, 6];
        const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
        return(
            <ul>
                {listItems}
            </ul>
        );
    }
}