import * as types from "../action-types";
const initState = {
  taglist: [
    {title:'组件0',key:'/subset0'},
  ],
  selectKey:'/subset0'
};
export default function app(state = initState, action) {
  let tagOne= state.taglist[0]
  switch (action.type) {
    case types.TAGSVIEW_SELECT_KEY:
        return{
            ...state,
            selectKey:action.key
        }
    case types.TAGSVIEW_ADD_TAG:
      const tag = action.tag;
      let index = state.taglist.findIndex(item=>item.key === tag.key)
      if (index!== -1) {
        return state;
      } else {
        return {
          ...state,
          taglist: [...state.taglist, tag],
        };
      }
    case types.TAGSVIEW_DELETE_TAG:
      return {
        ...state,
        taglist: [...state.taglist.filter((item) => item.key !== action.tag)],
      };
    case types.TAGSVIEW_EMPTY_TAGLIST:
      return {
        ...state,
        taglist: [
          ...state.taglist.filter((item) => item.key === tagOne.key),
        ],
      };
    case types.TAGSVIEW_CLOSE_OTHER_TAGS:
      return {
        ...state,
        taglist: [
          ...state.taglist.filter((item) => item.key === tagOne.key || item.key === action.tag),
        ],
      };
    default:
      return state;
  }
}
