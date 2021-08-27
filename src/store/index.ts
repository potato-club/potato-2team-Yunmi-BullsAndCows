//랭킹 데이터, 사용자 숫자 입력에 따른 게임 내역 데이터(스트라이크 아웃 볼 등)

// 액션 선언
const INSERT_GAMERECORD = "data/INSERT_GAMERECORD" as const;
const CONCAT_GAMERECORD = "data/CONCAT_GAMERECORD" as const;
const CONCAT_RANGKING = "data/CONCAT_RANGKING" as const;

//액션 생성함수
export const insertGameRecord = (value: string) => ({
  type: INSERT_GAMERECORD,
  payload: value,
});

export const concatGameRecord = (value: string) => ({
  type: CONCAT_GAMERECORD,
  payload: value,
});

export const concatRangking = (value: any) => ({
  type: CONCAT_RANGKING,
  payload: value,
});

type ActionType =
  | ReturnType<typeof insertGameRecord>
  | ReturnType<typeof concatGameRecord>
  | ReturnType<typeof concatRangking>;

// 상태 초기값

export type rangkingOb = {
  score: number;
  nickName: string;
};

export type data = {
  gamerecordData: string;
  rangkingData: rangkingOb[];
};
const initialValue: data = {
  gamerecordData: "",
  rangkingData: [],
};

//리듀서 생성
export function reducer(state: data = initialValue, action: ActionType): data {
  switch (action.type) {
    case CONCAT_GAMERECORD:
      state.gamerecordData += action.payload;
      return Object.assign({}, state);
    case INSERT_GAMERECORD:
      state.gamerecordData = action.payload;
      return Object.assign({}, state);
    case CONCAT_RANGKING:
      const temp = {
        score: action.payload.score,
        nickName: action.payload.nickName,
      };
      let i;
      for (i = 0; i < state.rangkingData.length; ++i) {
        if (state.rangkingData[i].score < temp.score) {
          continue;
        } else {
          break;
        }
      }
      state.rangkingData.splice(i, 0, temp);
      return Object.assign({}, state);
    default:
      return state;
  }
}
