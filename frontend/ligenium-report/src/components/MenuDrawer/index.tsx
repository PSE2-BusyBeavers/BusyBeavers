import {
  List,
  ListItem,
  Toolbar,
  styled,
  Paper,
  Container,
  ListItemButton,
  ListItemText
} from '@mui/material'

const pages = ['Kundenübersicht', 'Ladungsträger', 'Reparaturaufträge']

const Content = styled('div')({
  overflow: 'hidden',
  height: '100%',
  position: 'relative',
  marginTop: 5
})

const MenuDrawer = () => {
  return (
    <Paper
      sx={{ width: '100%', height: '100%', overflowY: 'auto', borderRadius: 0 }}
    >
      <Toolbar variant='dense' />
      <Container>
        <List>
          {pages.map(page => (
            <ListItem key={page}>
              <ListItemButton>
                <ListItemText>{page}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Container>
    </Paper>
  )
}

export default MenuDrawer
