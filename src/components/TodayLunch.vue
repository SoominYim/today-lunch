<template lang="ko">
    <div class="container">
        <form action="" method="">
         <!-- 전체 메뉴 -->
        <div class="radio-box">
            <label class="radio-label" for="all">전체</label>
            <input type="radio" class="radio-btn" name="country_menu" id="all" value="all" @click="radioChange($event)" checked="checked">
        </div>
        <!-- 나라별 메뉴 -->
        <div class="radio-box" v-for="(country_menu, i) in  Object.keys(groupedIndexes) " :key="i">
            <label class="radio-label" :for="country_menu">{{ `${country_menu}` }}</label>
            <input type="radio" class="radio-btn" name="country_menu" :id="country_menu" @click="radioChange($event)" :value="country_menu">
        </div>
        <span class="marker"></span>
        <!-- 결과값 -->
        <div class="result_wrap">
            <div class="result_box" v-if="selectActive">
            <span>{{ selectedFood }}</span>
            </div>
        </div>
        <button type="button" class="submit" @click="submitSelect()">머</button>
        </form>
    </div>
</template>
<script>
import randomChoice_store from '@/store/randomChoice'
import "../css/test.scss"
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
            menuIdx: randomChoice_store.state.menu.menuIdx,
            groupedIndexes: randomChoice_store.state.menu.groupedIndexes,

            // 최종 뽑은 음식
            selectedFood: randomChoice_store.state.selectedFood.selectedFood,
            selectedCountry: randomChoice_store.state.selectedFood.selectedFood,
        };
    },
    methods: {
        // 라디오 변경 이벤트 시 선택된 라디오 value 값 수정
        radioChange(event) {
            this.selectedCountry = event.target.value;
        },
        // 선택된 country의 랜덤 음식 뽑아버리기
        submitSelect() {
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
        },
    },
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
        console.log(this.groupedIndexes);
    },
};
</script>
<style lang="scss" scoped></style>
