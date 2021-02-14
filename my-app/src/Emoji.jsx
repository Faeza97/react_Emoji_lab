import React from 'react';

function Dashboard(props) {
  return (
    <div>
      {props.data.map((item) => (
        <li>{item.character}</li>
      ))}{' '}
    </div>
  );
}
export default Dashboard;
