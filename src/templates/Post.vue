<template>
  <main class="collective-member">
    <header>
      <g-link class="button button--back" to="/">
        <g-image src="../assets/icon--back.svg" alt="retour à l'accueil"/>
      </g-link>
      <g-image alt="Virgil Roger" class="bio__photo-img" src="../assets/virgil-roger.jpg"/>
    </header>
    <section class="collective-member__bio" v-html="$page.post.content"/>
    <ClientOnly>
      <section class="collective-member__gallery">
        <gallery :images="images" :index="index" @close="index = null"/>
        <masonry
          class="collective-member__gallery-thumbnails"
          :cols="{default: 6, 700: 2, 400: 1}"
          :gutter="15"
        >
          <g-image v-for="(thumbnail, idx) in images" :key="thumbnail" :src="thumbnail" @click="index = idx"/>
        </masonry>
      </section>
    </ClientOnly>
  </main>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
  }
}
</page-query>

<script>
function importAll(r) {
  return r.keys().map(r);
}

export default {
  name: 'Post',
  components: {
    gallery: () =>
      import('vue-gallery')
      .then(m => m)
      .catch()
  },
  data() {
    return {
      images: importAll(require.context('../../content/gallery/virgil-roger', false, /\.(png|jpe?g|svg)$/)),
      index: null,
    };
  },
};
</script>

<style lang="scss" scoped>
  .collective-member {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    min-height: 100%;

    & header {
      flex: 0 0 50vh;
      width: 50vw;
      height: 50vh;

      & .button--back {
        position: fixed;
        top: 15px;
        left: 15px;
        background: var(--color-white);
        z-index: 2;
        padding: 12px;
        border-radius: 100%;
        line-height: 0;
        box-shadow: 0 0 12px 0 rgba(29, 29, 27, 0.3);

        & img {
          position: relative;
          left: 0;
          transition: all 80ms  cubic-bezier(0.77, 0, 0.175, 1);
        }

        &:hover,
        &:focus {
          & img {
            left: -3px;
          }
        }
      }

      & .bio__photo-img {
        position: absolute;
        top: 0;
        left: 0;
        height: 50vh;
        width: 50vh;
        object-fit: cover;
      }
    }

    & .collective-member__bio {
      flex: 1 1 50vh;
      max-width: 100%;
      max-height: 50vh;
      display: flex;
      flex-flow: row wrap;
      padding-left: 20px;

      & /deep/ h1 {
        flex: 1 1 100%;
        color: var(--color-primary);
      }

      & /deep/ ul {
        list-style-type: none;
        height: calc(100% - 50px);
        display: flex;
        flex-flow: column wrap;
        margin: 0;
        padding: 0;

        & > li {
          padding-right: 40px;
          margin-bottom: 15px;
          
          & code {
            font-weight: bold;
          }

          & ul {
            list-style-type: none;
          }
        }
      }
    }

    & .collective-member__gallery-thumbnails {
      width: 100%;
      min-height: 50vh;
      padding: 40px;
      text-align: center;

      & img {
        max-height: 50vh;
        max-width: 100%;
        object-fit: contain;
        cursor: pointer;
        transition: all 80ms  cubic-bezier(0.77, 0, 0.175, 1);

        &:hover,
        &:focus {
          opacity: 0.8;
        }
      }
    }

    &:before {
      content: '';
      position: fixed;
      top: 50vh;
      left: 0;
      height: 50vh;
      width: 20px;
      background: var(--color-primary);
    }

    &:after {
      content: '';
      position: fixed;
      top: 0;
      right: 0;
      height: 50vh;
      width: 20px;
      background: var(--color-black);
    }
  }

  @media screen and (max-width: 800px) {
    .collective-member {
      & .collective-member__bio {
        max-height: unset;
      }
    }
  }
</style>