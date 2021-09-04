//랭킹 데이터, 사용자 숫자 입력에 따른 게임 내역 데이터(스트라이크 아웃 볼 등)

// 액션 선언
const INSERT_GAMERECORD = "data/INSERT_GAMERECORD" as const;
const CONCAT_GAMERECORD = "data/CONCAT_GAMERECORD" as const;
const CONCAT_RANKING = "data/CONCAT_RANKING" as const;

//액션 생성함수
export const insertGameRecord = (value: string) => ({
  type: INSERT_GAMERECORD,
  payload: value,
});

export const concatGameRecord = (value: string) => ({
  type: CONCAT_GAMERECORD,
  payload: value,
});

export const concatRanking = (value: any) => ({
  type: CONCAT_RANKING,
  payload: value,
});

type ActionType =
  | ReturnType<typeof insertGameRecord>
  | ReturnType<typeof concatGameRecord>
  | ReturnType<typeof concatRanking>;

// 상태 초기값

export type rankingOb = {
  score: number;
  nickName: string;
};

export type data = {
  gamerecordData: string;
  rankingData: rankingOb[];
};
const initialValue: data = {
  gamerecordData: "",
  rankingData: [],
};

//리듀서 생성
export function reducer(state: data = initialValue, action: ActionType) {
  switch (action.type) {
    case CONCAT_GAMERECORD:
      return {
        ...state,
        ...{
          gamerecordData: (state.gamerecordData += action.payload),
        },
      };
    case INSERT_GAMERECORD:
      state.gamerecordData = action.payload;
      return Object.assign({}, state);
    case CONCAT_RANKING:
      const temp = {
        score: action.payload.score,
        nickName: action.payload.nickName,
      };
      let i;
      for (i = 0; i < state.rankingData.length; ++i) {
        if (state.rankingData[i].score < temp.score) {
          continue;
        } else {
          break;
        }
      }
      state.rankingData.splice(i, 0, temp);
      return Object.assign({}, state);
    default:
      return state;
  }
}

export type RootState = ReturnType<typeof reducer>;
