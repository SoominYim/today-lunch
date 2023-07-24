<template lang="ko">
     <div class="container">
        <div class="form">
            <!-- 전체 메뉴 -->
            <div class="radio-box">
                <input type="radio" class="radio-btn" name="country_menu" id="all" value="all" @click="radioChange($event)" checked="checked">
                <label class="radio-label" for="all">전체</label>
                <div class="spinner"></div>
            </div>
            <!-- 나라별 메뉴 -->
            <div class="radio-box" v-for="(country_menu, i) in  Object.keys(groupedIndexes) " :key="i">
                <input type="radio" class="radio-btn" name="country_menu" :id="country_menu" @click="radioChange($event)" :value="country_menu">
                <label class="radio-label" :for="country_menu">
                    <span>
                    {{ (country_menu === "korean") ? "한식" : (country_menu === "chinese") ? "중식" : (country_menu === "japanese") ? "일식" : (country_menu === "western") ? "양식" : (country_menu === "asian") ? "아시안" : "없는 나라" }}
                    </span>
                </label>
                
                <div class="spinner"></div>
            </div>
            <span class="marker"></span>
        <!-- 결과값 -->
            <div class="result_wrap">
                <span v-if="menuActive == 0">
                {{ (selectedCountry === "all" ) ? "뭐든" : (selectedCountry === "korean") ? "한식" : (selectedCountry === "chinese") ? "중식" : (selectedCountry === "japanese") ? "일식" : (selectedCountry === "western") ? "양식" : (selectedCountry === "asian") ? "아시안" : "없는 나라" }} <br> 먹을거야?
                </span>
                <div class="result_box" >
                    <span v-if="menuActive == 1">알았어.<br>{{ selectedFood }}<br>먹어</span>
                    <span v-if="menuActive == 2">다른거 못 골라.<br>{{ selectedFood }}<br>먹어</span>
                    <span v-if="menuActive == 3">못고른다고,<br>그냥<br>{{ selectedFood }}<br>먹어</span>
                    <span v-if="menuActive == 4">이럴거면 이거 왜 했어<br>{{ selectedFood }}<br>먹어</span>
                    <span v-else-if="menuActive > 4" >{{ selectedFood }}<br>먹어</span>
                </div>
                <button type="button" @click="submitSelect()"> 눌 러 </button>
            </div>
         </div>
    </div>
</template>
<script>
import randomChoice_store from "@/store/randomChoice";
import TodayAnime from "@/components/TodayAnime.vue";
export default {
    components: {
        TodayAnime,
    },

    data() {
        return {
            // 음식
            foods: randomChoice_store.state.allFood.foods,
            koreanFoods: randomChoice_store.state.allFood.koreanFoods,
            chineseFoods: randomChoice_store.state.allFood.chineseFoods,
            japaneseFoods: randomChoice_store.state.allFood.japaneseFoods,
            westernFoods: randomChoice_store.state.allFood.westernFoods,
            asianFoods: randomChoice_store.state.allFood.asianFoods,

            // 랜덤 선택된 음식
            allChoiceFood: randomChoice_store.state.randomSelectedFood.allChoiceFood,
            koreanChoiceFood: randomChoice_store.state.randomSelectedFood.koreanChoiceFood,
            chineseChoiceFood: randomChoice_store.state.randomSelectedFood.chineseChoiceFood,
            japaneseChoiceFood: randomChoice_store.state.randomSelectedFood.japaneseChoiceFood,
            westernChoiceFood: randomChoice_store.state.randomSelectedFood.westernChoiceFood,
            asianChoiceFood: randomChoice_store.state.randomSelectedFood.asianChoiceFood,

            // 메뉴
            menuActive: 0,
            menuIdx: randomChoice_store.state.menu.menuIdx,
            groupedIndexes: randomChoice_store.state.menu.groupedIndexes,

            // 최종 뽑은 음식
            selectedFood: randomChoice_store.state.selectedFood.selectedFood,
            selectedCountry: randomChoice_store.state.selectedFood.selectedCountry,
            // 음식 종료 ---------------------------------------
        };
    },
    methods: {
        // 라디오 변경 이벤트 시 선택된 라디오 value 값 수정
        radioChange(event) {
            this.selectedCountry = event.target.value;
        },
        // 선택된 country의 랜덤 음식 뽑아버리기
        submitSelect() {
            if (this.menuActive === 0) {
                if (this.selectedCountry === "all") {
                    this.selectedFood = this.allChoiceFood.food;
                } else if (this.selectedCountry === "korean") {
                    this.selectedFood = this.koreanChoiceFood.food;
                } else if (this.selectedCountry === "chinese") {
                    this.selectedFood = this.chineseChoiceFood.food;
                } else if (this.selectedCountry === "japanese") {
                    this.selectedFood = this.japaneseChoiceFood.food;
                } else if (this.selectedCountry === "western") {
                    this.selectedFood = this.westernChoiceFood.food;
                } else if (this.selectedCountry === "asian") {
                    this.selectedFood = this.asianChoiceFood.food;
                }
            }
            // if (this.menuActive === 4) {
            //     this.menuActive = 1
            // }
            this.menuActive++;
        },
    },
    created() { },
    computed: {
        // 라디오 체크 되어있나 확인
        selectActive() {
            return this.selectedCountry !== "";
        },
    },
    mounted() {
        // 전체 음식 초기화
        const foods = this.foods;
        // 나라별 음식 초기화
        const koreanFoods = [];
        const chineseFoods = [];
        const japaneseFoods = [];
        const westernFoods = [];
        const asianFoods = [];

        // 나라별 음식 푸시
        for (let i = 0; i < foods.length; i++) {
            const food = foods[i];
            const country = food.country;
            const foodName = food.food;

            if (country === "korean") {
                koreanFoods.push(foodName);
            } else if (country === "chinese") {
                chineseFoods.push(foodName);
            } else if (country === "japanese") {
                japaneseFoods.push(foodName);
            } else if (country === "western") {
                westernFoods.push(foodName);
            } else if (country === "asian") {
                asianFoods.push(foodName);
            }
        }

        // foods country 별로 data()바인딩
        if (this.koreanFoods === [] || this.chineseFoods === [] || this.japaneseFoods === [] || this.westernFoods === [] || this.asianFoods === []) {
            this.koreanFoods = koreanFoods;
            this.chineseFoods = chineseFoods;
            this.japaneseFoods = japaneseFoods;
            this.westernFoods = westernFoods;
            this.asianFoods = asianFoods;
        }

        // 랜덤 선택 메소드
        const getRandomFood = (foods) => {
            const randomFood = foods[Math.floor(Math.random() * foods.length)];
            return {
                country: randomFood.country,
                food: randomFood.food,
            };
        };
        // 전체 선택
        const allChoiceFood = getRandomFood(foods);

        // 한식 선택
        const koreanChoiceFood = getRandomFood(foods.filter((food) => food.country === "korean"));

        // 중식 선택
        const chineseChoiceFood = getRandomFood(foods.filter((food) => food.country === "chinese"));

        // 일식 선택
        const japaneseChoiceFood = getRandomFood(foods.filter((food) => food.country === "japanese"));

        // 양식 선택
        const westernChoiceFood = getRandomFood(foods.filter((food) => food.country === "western"));

        // 동남아 선택
        const asianChoiceFood = getRandomFood(foods.filter((food) => food.country === "asian"));

        // 랜덤 선택 음식 변수 data() 바인딩
        if (this.allChoiceFood === "" || this.koreanChoiceFood == "" || this.chineseChoiceFood == "" || this.westernChoiceFood == "" || this.asianChoiceFood == "") {
            this.allChoiceFood = allChoiceFood;
            this.koreanChoiceFood = koreanChoiceFood;
            this.chineseChoiceFood = chineseChoiceFood;
            this.japaneseChoiceFood = japaneseChoiceFood;
            this.westernChoiceFood = westernChoiceFood;
            this.asianChoiceFood = asianChoiceFood;
        }

        // 새로운 나라 추가시 푸시 (store에 country 추가시 자동 푸시)
        const groupedIndexes = {};
        for (let i = 0; i < foods.length; i++) {
            const food = foods[i];
            const country = food.country;
            groupedIndexes[country] = [];
            groupedIndexes[country].push(i);
        }
        // 각 country 별 index 및 object data() 바인딩
        const menuIdx = Object.keys({ ...groupedIndexes }).length;
        this.menuIdx = menuIdx;
        this.groupedIndexes = { ...groupedIndexes };
    },
};
</script>
<style lang="scss" scoped>
@charset "UTF-8";
@import "@/css/root.scss";

* {
    overflow: hidden;
}

@media all and (min-width: 1024px) {
    .container {
        width: 100vw;
        height: 100vh;
        position: absolute;
        flex-direction: column;
        top: 5vw;
        left: 0;
    }

    label,
    label:before,
    label:after {
        left: 0;
        right: 0;
        top: 2px;
        bottom: 0;
    }

    .form {
        position: relative;
        height: 60%;
        width: 45%;
        display: flex;
        margin: 50px auto;
    }

    label {
        margin: 0 auto;
        position: absolute;
        width: 5vw;
        height: 5vw;
        border-radius: 50%;
        padding-top: 3px;
        background-color: var(--color-background-secondary);
        border: 1px solid var(--color-border);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
        font-size: 1.5rem;
        cursor: pointer;

        &+div {
            margin: 0 auto;
            position: absolute;
            width: calc(5vw + 5px);
            height: calc(5vw + 5px);
            z-index: 0;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            border-radius: 50%;
        }

        &:hover {
            color: var(--color-text-secondary);
        }
    }

    .result_wrap {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;

        span {
            position: absolute;
            top: 15.8vw;
            left: 9vw;
            width: 11vw;
            height: 6.8vw;
            border-radius: 8px;
            border: 2px solid #3B9554;
            background-color: #fff;
        }

        button {
            opacity: 0;
            position: absolute;
            top: 19.6vw;
            left: 23.3vw;
            width: 5.5vw;
            height: 2.5vw;
            cursor: pointer;
        }
    }
}

@media all and (min-width: 768px) and (max-width: 1024px) {
    .container {
        width: 100vw;
        height: 100vh;
        position: absolute;
        flex-direction: column;
        top: 30vw;
        left: 0;
    }

    label,
    label:before,
    label:after {
        left: 0;
        right: 0;
        top: 2px;
        bottom: 0;
    }

    .form {
        width: 95%;
        display: flex;
        margin: 50px auto;
    }

    label {
        margin: 0 auto;
        position: absolute;
        width: 10vw;
        height: 10vw;
        border-radius: 50%;
        padding-top: 3px;
        background-color: var(--color-background-secondary);
        border: 1px solid var(--color-border);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
        font-size: 1.5rem;
        cursor: pointer;

        &+div {
            margin: 0 auto;
            position: absolute;
            width: calc(10vw + 5px);
            height: calc(10vw + 5px);
            z-index: 0;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            border-radius: 50%;
        }

        &:hover {
            color: var(--color-text-secondary);
        }
    }

    .result_wrap {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;

        span {
            position: absolute;
            top: 39.8vw;
            left: 21vw;
            width: 24.4vw;
            height: 14.8vw;
            border-radius: 8px;
            border: 2px solid #3B9554;
            background-color: #fff;
        }

        button {
            opacity: 0;
            position: absolute;
            top: 19.6vw;
            left: 23.3vw;
            width: 5.5vw;
            height: 2.5vw;
            cursor: pointer;
        }
    }
}

@media all and (max-width: 768px) {
    .container {
        width: 100vw;
        height: 100vh;
        position: absolute;
        flex-direction: column;
        top: 32vw;
        left: 0;
    }

    label,
    label:before,
    label:after {
        left: 0;
        right: 0;
        top: 2px;
        bottom: 0;
    }

    .form {
        display: flex;
        width: 100%;
        margin: 50px auto;
    }

    label {
        margin: 0 auto;
        position: absolute;
        width: 10vw;
        height: 10vw;
        border-radius: 50%;
        padding-top: 3px;
        background-color: var(--color-background-secondary);
        border: 1px solid var(--color-border);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
        font-size: 5px;
        cursor: pointer;

        &+div {
            margin: 0 auto;
            position: absolute;
            width: calc(10vw + 5px);
            height: calc(10vw + 5px);
            z-index: 0;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            border-radius: 50%;
        }

        &:hover {
            color: var(--color-text-secondary);
        }

    }

    .result_wrap {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;

        span {
            position: absolute;
            top: 46.5vw;
            left: 18.9vw;
            width: 26.4vw;
            height: 16.1vw;
            border-radius: 5px;
            border: 2px solid #3B9554;
            background-color: #fff;
        }

        button {
            opacity: 1;
            position: absolute;
            top: 55.5vw;
            left: 51.3vw;
            width: 13.1vw;
            height: 5.5vw;
            cursor: pointer;
        }
    }
}

.container {
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    position: absolute;
}

.radio-box {
    width: 20vw;
    height: 20vw;
    position: relative;
    text-align: center;
}

.radio-label {
    z-index: 1;
}

.radio-btn:checked+label+div {
    background-image: conic-gradient(transparent, var(--spinner));
    animation: spin 2s linear infinite;
}

@keyframes dot-anim {
    0% {
        top: 0vw;
    }

    50% {
        top: 2vw;
    }

    100% {
        top: 0vw;
    }
}

.radio-btn:checked+label {
    color: var(--color-accent);
}

label:hover:before {
    box-shadow: rgba(0, 0, 0, 0.0784314) 0 0 1vw 0, rgba(0, 0, 0, 0.239216) 0 1vw 1vw 0;
}

[type="radio"] {
    display: none;
}

@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}
</style>
