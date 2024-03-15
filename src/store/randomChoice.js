import { createStore } from "vuex";
import foods from "@/data/foods";

const randomChoice_store = createStore({
  state() {
    return {
      // 음식
      allFood: {
        foods: foods,
        koreanFoods: [],
        chineseFoods: [],
        japaneseFoods: [],
        westernFoods: [],
        asianFoods: [],
      },
      // 랜덤 선택된 음식
      randomSelectedFood: {
        allChoiceFood: "",
        koreanChoiceFood: "",
        chineseChoiceFood: "",
        japaneseChoiceFood: "",
        westernChoiceFood: "",
        asianChoiceFood: "",
      },
      // 메뉴
      menu: {
        menuIdx: "",
        groupedIndexes: {},
      },
      // 최종 뽑은 음식
      selectedFood: {
        selectedFood: "",
        selectedCountry: "all",
      },
    };
  },
  mutations: {},
  actions: {},
  getters: {},
});

export default randomChoice_store;
