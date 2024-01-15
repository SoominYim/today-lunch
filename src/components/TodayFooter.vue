<template>
    <div>
        <a href="https://github.com/SoominYim" title="git_hub" class="sns" target="blank">
            <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.instagram.com/_soo_min_/" title="instagram" class="sns" target="blank">
            <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100002681110982" title="facebook" class="sns" target="blank"> <i
                class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://s-o-o-min.tistory.com/" title="tistory" class="sns" target="blank"> <i
                class="fa-solid fa-t"></i></a>
        <span>© 2024. S-o-o-Min . All rights reserved.</span>
    </div>
</template>

<script>
export default {
    name: "BlogFooter",
};
</script>

<style lang="scss" scoped>
div {
    height: 200px;

    .sns {
        color: #fff;
        font-size: 40px;
        padding: 10px;

        &:hover {
            color: #888;
        }

        transition: all 0.5s ease;
    }

    span {
        font-size: 14px;
        display: block;
        margin-top: 20px;
        color: #fff;
    }
}
</style>