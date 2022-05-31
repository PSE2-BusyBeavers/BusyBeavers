import {
  List,
  ListItem,
  Toolbar,
  Paper,
  Container,
  ListItemButton,
  ListItemText
} from '@mui/material'

const pages = ['Kundenübersicht', 'Ladungsträger', 'Reparaturaufträge'] as const
export type Pages = typeof pages[number]
interface Props {
  selectedTab: Pages
  onChangeTab: (tab: Pages) => void
}

const MenuDrawer = ({ selectedTab, onChangeTab }: Props) => {
  const handleTabClick = (tab: Pages) => () => {
    onChangeTab(tab)
  }
  return (
    <Paper
      sx={{ width: '100%', height: '100%', overflowY: 'auto', borderRadius: 0 }}
    >
      <Toolbar variant='dense' />
      <Container>
        <List>
          {pages.map(page => (
            <ListItem key={page}>
              <ListItemButton
                selected={selectedTab === page}
                onClick={handleTabClick(page)}
              >
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
