// 페이지네이션 추가, 공통된 타입 줄이기 예정

// 네트워크 페이지에서 다른 유저의 다이어리를 불러옴
export interface DairyItemType {
  diary_id: number;
  user_id: number;
  username: string;
  profileImage: string;
  title: string;
  dateCreated: Date;
  content: string;
  emoji: string;
}

// 마이 페이지에서 내 다이어리를 불러옴
export interface MyDairyItemType {
  id: string;
  title: string;
  is_public: boolean;
  createdDate: string;
}

// 캘린더에 들어갈 다이어리를 불러옴

export interface CalendarDiaryItemType {
  id: string;
  authorId: string;
  createdDate: string;
  title: string;
  emoji: string;
}
