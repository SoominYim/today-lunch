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
    </div>
    <div>
    </div>
    <div class="result_wrap">
        <span v-if="menuActive == 0">
          {{ (selectedCountry === "all" ) ? "뭐든" : (selectedCountry === "korean") ? "한식" : (selectedCountry === "chinese") ? "중식" : (selectedCountry === "japanese") ? "일식" : (selectedCountry === "western") ? "양식" : (selectedCountry === "asian") ? "아시안" : "없는 나라" }} 먹을거야?
        </span>
        <div class="result_box" >
            <span v-if="menuActive == 1">알았어. {{ selectedFood }} 먹어</span>
            <span v-if="menuActive == 2">다른거 못 골라. {{ selectedFood }} 먹어</span>
            <span v-if="menuActive == 3">못고른다고, 그냥 {{ selectedFood }} 먹어</span>
            <span v-if="menuActive == 4">이럴거면 이거 왜 했어 {{ selectedFood }} 먹어</span>
            <span v-else-if="menuActive > 4" >{{ selectedFood }} 먹어</span>
        </div>
        <button type="button" class="comet" @click="submitSelect()">눌러서 뜨는거 먹어</button>
    </div>
    </div>
</template>
<script>
import randomChoice_store from "@/store/randomChoice";

export default {
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

.container {
    width: 100vw;
    height: 50vw;
    display: flex;
    flex-direction: column;
    position: relative;
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
    width: 100%;
    display: flex;
}

.radio-box {
    width: 300px;
    height: 200px;
    position: relative;
    text-align: center;
}

.radio-label {
    z-index: 1;
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
    transition: all 1s ease-in-out;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 2.5s;
    // animation-name: dot-anim;
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
        transition: all 1s ease-in-out;
        animation-iteration-count: infinite;
        animation-duration: 2.5s;
    }

    &:hover {
        color: var(--color-text-secondary);
    }
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

// 버튼
@import url(https://fonts.googleapis.com/css?family=Roboto:900);

// ____________ dimension / timing

$size: 4px;
$dur: 1s;

// ____________ colors

$blue: #011c37; // 022649
$slime-green: #29FF6A;

$dark: $blue;
$dark-muted: mix(white, $blue, 10%);
$light: #fff;
$spot: $slime-green;
$spot-muted: mix(white, $slime-green, 20%);


// ____________ ease mixin

@mixin ease($type) {
    @if $type =="In" {
        animation-timing-function: ease-in;
    }

    @if $type =="Out" {
        animation-timing-function: ease-out;
    }

    @if $type =="InOut" {
        animation-timing-function: ease-in-out;
    }

    @if $type =="none" {
        animation-timing-function: linear;
    }
}


// ____________ tail mixins

$bxs-1: rgba($spot, 0.7);
$bxs-2: rgba($spot, 0.5);
$bxs-3: rgba($spot, 0.3);
$bxs-4: rgba($spot, 0.25);

$val-1: 4px;
$val-2: 8px;
$val-3: 12px;
$val-4: 14px;


@mixin tail {
    box-shadow:
        0 0 15px 1px $spot,
        0 0 2px $bxs-1,
        0 0 2px $bxs-2,
        0 0 2px $bxs-3,
        0 0 1px $bxs-4;
}

@mixin tail-1 {
    box-shadow:
        0 0 15px 1px $spot,
        ($val-1 * -1) 0 2px $bxs-1,
        ($val-2 * -1) 0 2px $bxs-2,
        ($val-3 * -1) 0 2px $bxs-3,
        ($val-4 * -1) 0 1px -1px $bxs-4;
}

@mixin tail-2 {
    box-shadow:
        0 0 15px 1px $spot,
        0 ($val-1 * -1) 2px $bxs-1,
        0 ($val-2 * -1) 2px $bxs-2,
        0 ($val-3 * -1) 2px $bxs-3,
        0 ($val-4 * -1) 1px $bxs-4;
}

@mixin tail-3 {
    box-shadow:
        0 0 15px 1px $spot,
        $val-1 0 2px $bxs-1,
        $val-2 0 2px $bxs-2,
        $val-3 0 2px $bxs-3,
        $val-4 0 1px $bxs-4;
}

@mixin tail-4 {
    box-shadow:
        0 0 15px 1px $spot,
        0 $val-1 2px $bxs-1,
        0 $val-2 2px $bxs-2,
        0 $val-3 2px $bxs-3,
        0 $val-4 1px $bxs-4;
}


*,
*:before,
*:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
}

body {
    display: flex;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    background-color: $dark;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSJub25lIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMzQyNjEiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4='),
        linear-gradient(160deg, $dark, $dark-muted);
    background-size: 5px 5px, cover;
}

.comet {
    position: relative;
    display: block;
    margin: auto;
    padding-right: 2rem;
    padding-left: 2rem;
    font-size: 1rem;
    font-weight: 900;
    line-height: 4rem;
    text-transform: uppercase;
    letter-spacing: 6px;
    color: $dark;
    background-color: rgba($spot, 0);
    background-image: linear-gradient(150deg, rgba($spot, 02), rgba($spot, 0.1));
    background-size: calc(100% - 15px) calc(100% - 15px);
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    user-select: none;
    box-shadow:
        0 0 0 1px rgba($spot, 0.1),
        inset 0 0 0 1px rgba($spot, 0.1);
    transform: translateZ(0);
    transition:
        transform 0.1s,
        box-shadow 0.3s,
        background-color 0.3s linear,
        background-size 0.3s 0.3s ease-in-out,
        line-height 0.3s 0.3s,
        padding-right 0.3s 0.3s,
        padding-left 0.3s 0.3s;
}

.comet:hover {
    padding-right: calc(2rem - 10px);
    padding-left: calc(2rem - 10px);
    background-size: calc(100%) calc(100%);
    line-height: calc(4rem - 15px);
    background-color: rgba($spot, 1);
    box-shadow:
        0 0 15px 1px rgba($spot, 0.4),
        inset 0 0 0 1px rgba($spot, 1);
    transition:
        transform 0.1s,
        background-size 0.3s ease-in-out,
        background-color 3s 0.3s linear,
        line-height 0.3s,
        padding-right 0.3s,
        padding-left 0.3s,
        box-shadow 1s 0.6s;
}

.comet:active {
    transform: scale(0.9);
}

.comet:before,
.comet:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: $size;
    width: $size;
    background-color: $spot;
    animation-name: comet;
    animation-iteration-count: infinite;
    animation-play-state: running;
    animation-timing-function: linear;
    animation-delay: -0.3;
    border-radius: 50%;
    opacity: 1;
    transform: translateX(-50%) translateY(-50%) scale(1);
    transition: all 4s;
}

.comet:before {
    animation-duration: $dur*2;
}

.comet:after {
    animation-duration: $dur*2.5;
}

.comet:hover:before,
.comet:hover:after {
    opacity: 0;
    filter: blur(2px);
    transform: translateX(-50%) translateY(-50%) scale(2);
    @include tail;
    transition: all 0.7s;
}

@keyframes comet {
    0% {
        top: 0;
        left: 0;
        @include tail;
        @include ease(In);
    }

    // top left
    15% {
        top: 0;
        left: 50%;
        @include tail-1;
        @include ease(Out);
    }

    30% {
        top: 0;
        left: 100%;
        @include tail;
        @include ease(In);
    }

    // top right
    40% {
        top: 50%;
        left: 100%;
        @include tail-2;
        @include ease(Out);
    }

    50% {
        top: 100%;
        left: 100%;
        @include tail;
        @include ease(In);
    }

    // bottom right
    65% {
        top: 100%;
        left: 50%;
        @include tail-3;
        @include ease(Out);
    }

    80% {
        top: 100%;
        left: 0;
        @include tail;
        @include ease(In);
    }

    // bottom left
    90% {
        top: 50%;
        left: 0;
        @include tail-4;
        @include ease(Out);
    }

    100% {
        top: 0;
        left: 0;
        @include tail;
        @include ease(In);
    }

    // top left
}
</style>
