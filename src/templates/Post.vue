<template>
  <main class="collective-member">
    <header>
      <g-image alt="Virgil Roger" class="bio__photo-img" src="../assets/virgil-roger.jpg"/>
    </header>
    <section class="collective-member__bio" v-html="$page.post.content"/>
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
export default {
  name: 'Post',
};
</script>

<style lang="scss" scoped>
  .collective-member {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 100%;

    & header {
      flex: 0 0 50vh;
      width: 50vw;
      height: 50vh;

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
</style>