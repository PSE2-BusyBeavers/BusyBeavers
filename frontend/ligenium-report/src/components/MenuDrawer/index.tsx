import { People } from '@mui/icons-material';
import { List, ListItem, Paper, ListItemButton, ListItemText, ListItemIcon, Divider, styled } from '@mui/material';
import { useLocation, useParams, Link, matchPath } from 'react-router-dom';

const pages = [
  { name: 'Incidents', path: 'incidents', pattern: '/customers/:customer/incidents' },
  { name: 'Reparaturaufträge', path: 'orders', pattern: '/customers/:customer/orders' },
];

const ListItemI = styled(ListItem)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
}));

const MenuDrawer = () => {
  const location = useLocation();
  const params = useParams();

  return (
    <Paper sx={{ width: '100%', height: '100%', overflowY: 'auto' }} square>
      <List>
        <Paper elevation={0}>
          <Link to={'/'}>
            <ListItemI>
              <ListItemButton component="a" sx={{ height: 56, width: '100%' }}>
                <ListItemIcon>
                  <People color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Kundenübersicht"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                  }}
                />
              </ListItemButton>
            </ListItemI>
          </Link>
        </Paper>
        <Divider />
        <ListItemI sx={{ paddingTop: 2 }}>
          <ListItemText
            primary={params.customer}
            primaryTypographyProps={{
              fontSize: 15,
              fontWeight: 'medium',
              lineHeight: '20px',
              mb: '2px',
            }}
          />
        </ListItemI>
        {pages.map((page, i) => (
          <Link to={page.path} key={i}>
            <ListItemI>
              <ListItemButton selected={!!matchPath(page.pattern, location.pathname)}>
                <ListItemText>{page.name}</ListItemText>
              </ListItemButton>
            </ListItemI>
          </Link>
        ))}
      </List>
    </Paper>
  );
};

export default MenuDrawer;
