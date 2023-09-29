<template>
  <div id="modal_project" class="modal">
    <div class="modal__dialog">
      <button class="modal__close" type="button" @click="close()">
        <img
          loading="lazy"
          src="@/assets/images/times-circle.svg"
          alt="Close"
        />
      </button>
      <div class="modal-work">
        <div class="modal-work__preview">
          <!--          {{project.imgList}}-->
          <!--          <img v-for="(item,key) in project.imgList" loading="lazy" class="modal-work__photo" :src="require(`~/assets/images/projects/${item}`)" alt=""-->
          <!--               :key="key"-->
          <!--          />-->
          <img
            v-if="activeImg"
            :src="require(`~/assets/images/projects/${activeImg}`)"
            alt=""
            loading="lazy"
            class="modal-work__photo"
          />
          <!--          <div>-->
          <!--            hui-->
          <!--          </div>-->
          <div class="carousel__items_circle__wrapper">
            <div
              v-for="(item, key) in project.imgList"
              :key="key"
              class="carousel__items_circle"
            />
          </div>
          <div class="carousel__actions">
            <button
              class="modal-work__btn prev"
              type="button"
              style="transform: scale(3.5)"
              @click="showPrevImg()"
            >
              <img
                loading="lazy"
                src="@/assets/images/chevron-left.svg"
                height="11"
                alt=""
              />
            </button>
            <button
              class="modal-work__btn prev"
              type="button"
              style="transform: scale(3.5)"
              @click="showNextImg()"
            >
              <img
                loading="lazy"
                src="@/assets/images/chevron-right.svg"
                height="11"
                alt=""
              />
            </button>
          </div>
          <!--          <img :src="require('~/assets/images/projects/corella/img_2.png')" alt="">-->
          <!--          <img src="https://drive.google.com/thumbnail?id=1bc4bcCe3vsu9&#45;&#45;1edGHx0yuRDG8v2V27" alt="">-->
        </div>
        <div class="modal-work__content">
          <div class="modal-work__header">
            <h3 class="modal-work__title">
              <a target="_blank" :href="project.link">{{ project.title }}</a>
            </h3>
            <div class="modal-work__info">
              {{ project.category }}
              <span class="modal-work__info-divider">|</span>
              {{ project.date }}
            </div>
          </div>

          <div class="modal-work__client">
            <div class="modal-work__client-title">Компания:</div>
            <div class="modal-work__client-company">
              {{ project.clientOrCompany }}
            </div>
          </div>

          <div class="modal-work__text">
            {{ project.description }}
            <!--            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dicta, recusandae debitis iusto quos voluptatum at. Dolorum a, velit rerum dicta aut-->
            <!--              sapiente,-->
            <!--              optio accusantium? Sunt sed praesentium est minima.</p>-->
            <!--            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dicta, recusandae debitis iusto quos voluptatum at. Dolorum a, velit rerum dicta aut-->
            <!--              sapiente,-->
            <!--              optio accusantium? Sunt sed praesentium est minima.</p>-->
            <!--            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dicta, recusandae debitis iusto quos voluptatum at. Dolorum a, velit rerum dicta aut-->
            <!--              sapiente,-->
            <!--              optio accusantium? Sunt sed praesentium est minima.</p>-->
            <!--            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dicta, recusandae debitis iusto quos voluptatum at. Dolorum a, velit rerum dicta aut-->
            <!--              sapiente,-->
            <!--              optio accusantium? Sunt sed praesentium est minima.</p>-->
          </div>

          <!--          <div class="modal-work__footer">-->
          <!--            <button class="modal-work__btn prev" type="button">-->
          <!--              <img-->
          <!--                loading="lazy"-->
          <!--                src="@/assets/images/chevron-left.svg"-->
          <!--                height="11"-->
          <!--                alt=""-->
          <!--              />-->
          <!--              Previous-->
          <!--            </button>-->
          <!--            <button class="modal-work__btn next" type="button">-->
          <!--              Next-->
          <!--              <img-->
          <!--                loading="lazy"-->
          <!--                src="@/assets/images/chevron-right.svg"-->
          <!--                height="11"-->
          <!--                alt=""-->
          <!--              />-->
          <!--            </button>-->
          <!--          </div>-->
        </div>
        <!-- /.modal-work__content -->
      </div>
      <!--/.modal-work -->
    </div>
    <!-- /.modal__dialog -->
  </div>
</template>

<script>
import modal from "@/mixins/modal";

export default {
  name: "Project",
  mixins: [modal],
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    activeImg: "",
    activeImgIndex: 0,
  }),
  computed: {
    projectImgListLength: (vm) => vm.project.imgList.length,
  },
  mounted() {
    this.activeImg = this.project.imgList[this.activeImgIndex];
  },
  methods: {
    showPrevImg() {
      if (
        this.activeImgIndex < this.projectImgListLength &&
        this.activeImgIndex > 0
      ) {
        this.activeImgIndex--;
      } else if (this.activeImgIndex === 0) {
        this.activeImgIndex = this.projectImgListLength - 1;
      } else {
        this.activeImgIndex--;
      }
      this.activeImg = this.project.imgList[this.activeImgIndex];
    },
    showNextImg() {
      if (this.activeImgIndex < this.projectImgListLength - 1) {
        this.activeImgIndex++;
      } else {
        this.activeImgIndex = 0;
      }
      this.activeImg = this.project.imgList[this.activeImgIndex];
    },
  },
};
</script>

<style scoped lang="scss">
.carousel {
  &__items {
    &_circle {
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background: black;
      margin-right: 5px;

      &__wrapper {
        padding-bottom: 40px;
        display: flex;
        margin-top: 10px;
      }
    }
  }

  &__actions {
    width: 95%;
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    position: absolute;
  }
}
</style>
