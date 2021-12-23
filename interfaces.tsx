export interface iMessageList {
  chat: iMessageItem[];
}

export interface iMessageItem {
  id: string;
  text: string;
  sender: string;
  time: string;
}

export interface iSimpleHeader {
  title: string;
  backToClick?: () => void;
  rightComponent?: {
    iconName: string;
    onPress: () => void;
  };
  useBg?: boolean;
}
