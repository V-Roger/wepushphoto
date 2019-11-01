<template>
  <main class="collective-member">
    <ClientOnly>
      <header>
        <g-link class="button button--back" to="/">
          <g-image src="../assets/icon--back.svg" alt="retour à l'accueil"/>
        </g-link>
        <g-image :alt="memberKey" class="bio__photo-img" :src="memberImgPath"/>
      </header>
      <section class="collective-member__bio" v-html="$page.post.content"/>
      <section class="collective-member__resume" v-html="resumeContent" />
      <section class="collective-member__gallery">
        <gallery :images="photos" :index="index" @close="index = null"/>
        <masonry
          class="collective-member__gallery-thumbnails"
          :cols="{default: 4, 700: 2, 400: 1}"
          :gutter="15"
        >
          <g-image v-for="(path, idx) in photos" :key="path" :src="path" @click="index = idx"/>
        </masonry>
      </section>
    </ClientOnly>
  </main>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    id
    content
  }
  photos: allPhoto {
    edges {
      node {
        fileInfo {
          path
          directory
        }
      }
    }
  } 
  bios: allBio {
    edges {
      node {
        path
        id
        title
        content
      }
    }
  }
}
</page-query>
<script>
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
      images: [],
      index: null,
    };
  },
  computed: {
    memberKey() {
      return this.$route.path.replace('/', '');
    },
    memberImgPath() {
      return require(`../assets/${this.memberKey.replace('/', '').replace('-bio', '').replace('-post', '')}.jpg`);
    },
    photos() {
      return this.$page.photos.edges.filter(edge => edge.node.fileInfo.directory.includes(this.memberKey)).map(edge => require(`../../${edge.node.fileInfo.path}`));
    },
    resume() {
      return this.$page.bios.edges.filter(edge => edge.node.path.includes(this.memberKey));
    },
    resumeContent() {
      return this.resume && this.resume[0] && this.resume[0].node && this.resume[0].node.content;
    },
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
      flex: 0 0 calc(100% - 50vh);
      max-width: 100%;
      max-height: 50vh;
      display: flex;
      flex-flow: row wrap;
      padding-left: 20px;

      & /deep/ ul {
        list-style-type: none;
        height: 100%;
        flex: 0 0 100%;
        overflow: auto;
        display: flex;
        flex-flow: column wrap;
        margin: 0;
        padding: 0;

        & > li {
          padding-right: 30px;
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

    & .collective-member__gallery {
      flex: 0 0 calc(100% - 50vh);
    }

    & .collective-member__gallery-thumbnails {
      width: 100%;
      min-height: 50vh;
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

    & .collective-member__resume {
      width: 50vh;
      flex: 0 0 50vh;
      padding-left: 40px;
      padding-right: 30px;
      display: flex;
      align-content: center;
      justify-items: center;
      align-items: center;
      flex-flow: column nowrap;

      & /deep/ h1,
      & /deep/ h2 {
        color: var(--color-black);
        font-size: 3em;
        text-align: left;

        & a {
          display: none;
        }
      }

      & /deep/ p {
        font-size: 1.2em;
        line-height: 1.5em;
        text-align: justify;
      }

      & /deep/ a {
        position: relative;
        text-decoration: none;
        color: var(--color-primary);
        font-weight: bold;
        margin: 0 1em;
        z-index: 1;

        &:hover,
        &:focus {
          color: var(--color-black);
  
          &:before {
            content: '';
            display: block;
            position: absolute;
            left: -0.5em;
            top: 0;
            height: 2em;
            width: 2em;
            background: var(--color-primary);
            z-index: -1;
          }
        }
      }

      & /deep/ code {
        font-size: 2em;
        line-height: 2.5em;
      }

      & /deep/ ul {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-content: flex-start;
        justify-content: flex-start;
        align-items: flex-start;
        justify-items: flex-start;
        list-style-type: square;
      
        & li {
          padding: 5px 0;
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
      flex-flow: column nowrap;

      & .collective-member__bio {
        max-height: unset;
        flex: 1 1 100%;
        padding-left: 40px;
        overflow: visible;
        order: 3;

        & /deep/ ul {
          overflow: unset;
  
          & li ul{
            & li {
              margin-bottom: 0;
            }
          }
        }
      }

      & .collective-member__resume {
        width: 100%;
        order: 1;
      }

      & .collective-member__gallery {
        padding: 0 20px 0 35px;
        order: 2;
      }
    }
  }
</style>