import { List, ListItem, Toolbar, Paper, Container, ListItemButton, ListItemText } from '@mui/material';
import { useLocation, useParams, Link, matchPath } from 'react-router-dom';

const pages = [
  { name: 'Kundenübersicht', path: '/', pattern: '/' },
  { name: 'Incidents', path: 'incidents', pattern: '/customers/:customer/incidents' },
  { name: 'Reparaturaufträge', path: 'orders', pattern: '/customers/:customer/orders' },
];

const MenuDrawer = () => {
  const location = useLocation();
  const params = useParams();

  return (
    <Paper sx={{ width: '100%', height: '100%', overflowY: 'auto', borderRadius: 0 }}>
      <Toolbar variant="dense" />
      <Container>
        <List>
          <ListItem>
            <ListItemText>Kunde: {params.customer}</ListItemText>
          </ListItem>
          {pages.map((page, i) => (
            <Link to={page.path} key={i}>
              <ListItem>
                <ListItemButton selected={!!matchPath(page.pattern, location.pathname)}>
                  <ListItemText>{page.name}</ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Container>
    </Paper>
  );
};

export default MenuDrawer;
