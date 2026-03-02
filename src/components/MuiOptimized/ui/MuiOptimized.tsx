import { memo } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export const MemoBox = memo(Box);
export const MemoButton = memo(Button);
export const MemoGrid = memo(Grid);
export const MemoDivider = memo(Divider);
export const MemoDrawer = memo(Drawer);
export const MemoTypography = memo(Typography);
export const MemoList = memo(List);
export const MemoListItem = memo(ListItem);
