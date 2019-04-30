import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';

import { firebase } from '../../../firebase';

const AdminNav = () => {
  const links = [
    { title: 'Matches', linkTo: '/admin_matches' },
    { title: 'Add Match', linkTo: '/admin_matches/edit_match' },
    { title: 'Players', linkTo: '/admin_players' },
    { title: 'Add Players', linkTo: '/admin_players/add_player' },
  ];

  const style = {
    color: '#ffffff',
    fontWeight: '300',
    borderBottom: '1px solid #353535',
  };

  const renderItems = () => {
    return links.map(link => (
      <Link key={link.title} to={link.linkTo}>
        <ListItem button style={style}>
          {link.title}
        </ListItem>
      </Link>
    ));
  };

  const logoutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          console.log('Log out successful');
        },
        err => {
          console.log('ERROR logging out');
        }
      );
  };

  return (
    <div>
      {renderItems()}{' '}
      <ListItem button style={style} onClick={() => logoutHandler()}>
        Log out
      </ListItem>
    </div>
  );
};

export default AdminNav;
