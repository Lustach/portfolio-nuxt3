<template>
  <footer id="contacts" class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__credits">
          <div class="footer__copyright">
            &copy; {{ new Date().getFullYear() }} {{ $t("rightsReserved") }}
          </div>

          <div class="footer__social">
            <!-- <a href="https://vk.com/tartarin3" class="footer__link">
              <svg>
                <use
                  xlink:href="@/assets/images/svgSprites.svg#vk"
                  xmlns="http://www.w3.org/2000/svg"
                />
              </svg>
            </a> -->
            <a href="https://github.com/Lustach" class="footer__link">
              <svg>
                <use
                  xlink:href="@/assets/images/svgSprites.svg#github"
                  xmlns="http://www.w3.org/2000/svg"
                />
              </svg>
            </a>
            <a href="https://t.me/Lustach" class="footer__link">
              <svg>
                <use
                  xlink:href="@/assets/images/svgSprites.svg#telegram"
                  xmlns="http://www.w3.org/2000/svg"
                />
              </svg>
            </a>
            <!--          https://t.me/Lustach-->
          </div>
        </div>
        <!-- /.footer__credits -->

        <nav class="footer__nav">
          <pre>{{ data }}</pre>
          <a class="footer__nav-link" href="#">{{ $t('projects') }}</a>
          <a class="footer__nav-link" href="#">{{ $t('aboutMe') }}</a>
          <!--          <a class="footer__nav-link" href="#">Blog</a>-->
          <!--          <a class="footer__nav-link" href="#">Contact</a>-->
          <!--          <a class="footer__nav-link  footer__nav-link&#45;&#45;btn"  data-modal="#modal_hire_me" @click="showHireMe()">Нанять</a>-->
        </nav>
      </div>
      <!-- /.footer__inner -->
    </div>
    <!-- /.container -->
  </footer>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/hello");
console.log(data);
// const { showResume } = useModal();
</script>

<style scoped></style>
