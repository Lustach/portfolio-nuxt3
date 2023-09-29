<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="user">
          <div class="user__avatar">
            <!--            <img loading="lazy" src="" alt=""/>-->
          </div>
          <div class="user__content">
            <div class="user__name">
              Влад <br />
              Луста
            </div>
            <div class="user__prof">Frontend Developer</div>
          </div>
        </div>
        <nav class="nav">
          <div class="nav__link--block" :class="{ 'mobile-menu': isMobileMenu }">
            <a
              v-for="(item, key) in menu"
              :key="key"
              :href="item.to"
              class="nav__link"
              @click="showMobileMenu()"
              >{{ item.name }}</a
            >
            <!--            <a class="nav__link nav__link&#45;&#45;btn" data-modal="#modal_hire_me" @click="showHireMe();showMobileMenu()">Нанять</a>-->
          </div>
        </nav>
        <div class="burger" @click="showMobileMenu()">
          <img
            loading="lazy"
            class="burger__icon"
            src="@/assets/images/bars.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { deleteBodyOverflow, setBodyOverflow } from "@/composables/useBodyOverflow";
//   mixins: [modal],
const isMobileMenu = ref(false);
const menu = ref([
  {
    name: "Проекты",
    to: "#work",
    toShow: true,
  },
  {
    name: "Обо мне",
    to: "#about_me",
    toShow: true,
  },
  // {
  //   name: 'Блог',
  //   to: '#blog',
  //   toShow: false,
  // },
  // {
  //   name: 'Контакты',
  //   to: '#contacts',
  //   toShow: false,
  // }
]);
const showMobileMenu = () => {
  if (window.innerWidth <= 767) {
    isMobileMenu.value = !isMobileMenu.value;
    isMobileMenu.value ? setBodyOverflow() : deleteBodyOverflow();
  }
};
</script>

<style scoped lang="scss">
//.mobile-menu {
//  display: flex;
//  position: fixed;
//  height: 100vh;
//}

.header {
  padding: 1.2rem 0;
  //  @media @tablet-big {
  //  box-shadow: 0 0 10px;
  //}

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.user {
  display: flex;

  &__avatar {
    width: 47px;
    height: 47px;
    margin-right: 9px;
    box-sizing: content-box;
    background: #8d8d8e;
    border-radius: 50%;
    img {
      border-radius: 50%;
    }
  }

  &__name {
    font-size: 1.06rem;
    color: black;
    font-weight: 700; //bold==700
    line-height: 1.2rem;
  }

  &__prof {
    font-size: 0.8rem;
    color: rgba(black, 0.7);
    line-height: 1.46rem;
    padding-top: 1px;
  }
}

.mobile-menu {
  display: flex !important;
  height: 100vh;
}
</style>
