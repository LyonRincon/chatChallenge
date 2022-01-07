export interface iMessageList {
  chat: iMessageItem[];
  bot: any;
}

export interface iMessageItem {
  id: string;
  text: string;
  sender: string;
  time: string;
  botImage: any;
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

export interface iBotSelector {
  id: number;
  name: string;
  avatar: any;
  subject: string;
  selected?: boolean;
  onPress: (id: number) => void;
}
