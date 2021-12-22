export interface iToDoList {
  list: iToDoListItem[];
  completed: boolean;
  splittedView: boolean;
}

export interface iToDoListItem {
  id: string;
  label: string;
}

export interface iSimpleHeader {
  title: string;
  backToClick?: () => void;
  rightComponent?: {
    iconName: string;
    onPress: () => void;
  };
}
