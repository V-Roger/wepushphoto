<template>
  <Layout class="index parallax-wrapper">
    <section class="landing">
      <g-image alt="collectif PUSH" src="../assets/wepush.jpg"/>
      <h1>The <b>PUSH</b> Collective</h1>
    </section>
    <section class="section parallax">
    </section>
    <section class="background">
    </section>
    <section class="bio">
      <article class="bio__text" v-html="$page.post.content">
      </article>
      <div class="bio__photos">
        <g-link to="/charles-pietri" class="bio__photo">
          <g-image alt="Chrales Pietri" class="bio__photo-img" src="../assets/charles.jpg" width="356" height="356"/>
          <span>Charles<br/><b>PIETRI</b></span>
        </g-link>
        <g-link to="/virgil-roger" class="bio__photo">
          <g-image alt="Virgil Roger" class="bio__photo-img" src="../assets/virgil.jpg" width="356" height="356"/>
          <span>Virgil<br/><b>ROGER</b></span>
        </g-link>
        <g-link to="/david-darle" class="bio__photo">
          <g-image alt="David Darle" class="bio__photo-img" src="../assets/david.jpg" width="356" height="356"/>
          <span>David<br/><b>DARLE</b></span>
        </g-link>
      </div>
    </section>
    <section class="contact">
      <ul class="contact__social">
        <li>
          <a href="https://facebook.com/wepushphoto"><pre>FACEBOOK</pre></a>
        </li>
        <li>
          <a href="https://instagram.com/wepushphoto"><pre>INSTAGRAM</pre></a>
        </li>
        <li>
          <a href="mailto:wepushphoto@gmail.com"><pre>EMAIL</pre></a>
        </li>
      </ul>
    </section>
  </Layout>
</template>

<page-query>
query {
  post: index (path: "/content/wepush") {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'The PUSH Collective'
  }
}
</script>

<style lang="scss">
  .index {
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }

  .landing {
    position: relative;
    height: calc(100vh - 30px);
    background: var(--color-white);
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
    z-index: 3;
    box-shadow: 0 6px 24px 0 rgba(29, 29, 27, 0.8);

    & h1 {
      font-size: 1.8em;
    }

    & img {
      max-width: 350px;
    }
  }

  .parallax {
    position: relative;
    background-image: url('../assets/background.jpg');
    background-size: cover;
    background-attachment: fixed;
    height: 80vh;
    width: 100vw;
    z-index: 2;
    box-shadow: 0 6px 24px 0 rgba(29, 29, 27, 0.3);
  }

  .background {
    z-index: -1;

    &:before {
      content: '';
      display: block;
      position: absolute;
      left: 15px;
      top: calc(50vh - 15px);
      width: calc(50vw - 15px);
      height: calc(50vh - 15px);
      background: var(--color-primary);
      z-index: 1;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      right: 30px;
      top: 15px;
      width: calc(50vw - 30px);
      height: calc(50vh - 30px);
      background: var(--color-black);
      z-index: 1;
    }
  }

  .bio {
    position: relative;
    min-height: 100vh;
    padding: 80px;

    & .bio__text {
      position: relative;
      background: white;
      padding: 80px;
      min-height: 50%;
      max-width: 66vw;
      @media all and (max-width: 1000px) {
        max-width: unset;
      }
      margin: 0 auto;
      display: flex;
      flex-flow: column nowrap;
      z-index: 2;
      border-radius: 2px;
      box-shadow: 0 0 8px 0 rgba(29, 29, 27, 0.15);
      font-size: 1.3em;
      line-height: 1.5em;

      & h1 {
        text-align: center;
      }

      & p {
        text-align: justify;

        &:first-letter {
          font-size: 1.2em;
        }
      }
    }

    & .bio__photo {
      position: relative;
      background: white;
      padding: 80px;
      height: 50%;
      display: flex;
      flex-flow: row nowrap;
      align-content: center;
      justify-content: center;
      align-items: center;
      justify-items: center;
      z-index: 2;
      border-radius: 2px;
      box-shadow: 0 0 8px 0 rgba(29, 29, 27, 0.15);
      font-size: 1.5em;
      line-height: 2em;
      color: var(--color-black);
    }

    & .bio__photos {
      height: 40%;
      display: flex;
      flex-flow: row wrap;
      align-content: center;
      justify-content: space-between;
      text-align: center;
      margin-top: 120px;

      & .bio__photo {
        flex: 0 0 30%;
        height: 356px;
        box-shadow: none;
        padding: 0;
        background: none;
        cursor: pointer;

        & span {
          position: absolute;
          bottom: 0;
          width: 356px;
          height: 356px;
          border-radius: 356px;
          padding-top: 50%;
          overflow: hidden;
          z-index: 3;
          line-height: 1.2em;
          box-shadow: 0 0 8px 0 rgba(29, 29, 27, 0.15);
          transition: all 180ms  cubic-bezier(0.77, 0, 0.175, 1);

          &:after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 100px;
            background: white;
            z-index: -1;
            transition: all 180ms  cubic-bezier(0.77, 0, 0.175, 1);
          }
        }

        &:hover,
        &:focus {
          & span {
            padding-top: 80px;
            & b {
              color: var(--color-primary);
            }

            &:after {
              height: 100%;
            }
          }
        }

        & .bio__photo-img {
          border-radius: 100%;
          border: 10px solid white;
        }
      }
    }
  }

  .contact {
    position: relative;
    height: 30vh;
    margin-top: 120px;
    padding: 80px;

    & a {
      position: relative;
      text-decoration: none;
      color: var(--color-primary);
      font-weight: bold;
      z-index: 1;
      cursor: pointer;

      &:hover,
      &:focus {
        color: var(--color-black);

        &:before {
          content: '';
          display: block;
          position: absolute;
          left: -0.5em;
          top: 2.8em;
          height: 1.5em;
          width: 1.5em;
          background: var(--color-primary);
          z-index: -1;
        }
      }
    }
    
    & ul {
      position: relative;
      background: white;
      height: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-content: center;
      justify-content: center;
      align-items: center;
      justify-items: center;
      z-index: 2;
      border-radius: 2px;
      box-shadow: 0 0 8px 0 rgba(29, 29, 27, 0.15);
      font-size: 1.5em;
      line-height: 2em;
      list-style-type: none;
      margin: 0;
      padding: 0;

      & li {
        position: relative;
        padding: 20px;
      }
    }
  }

  @media screen and (max-width: 800px) {
    & .landing {
      & img {
        width: 100vw;
        max-width: unset;
      }
    }

    & .parallax {
      height: 60vh;
      background-position: center;
    }

    & .background {
      &:before {
        left: 0;
        top: 50vh;
        height: 50vh;
        width: 50vw;
      }

      &:after {
        right: 0;
        top: 0;
        height: 50vh;
        width: 50vw;
      }
    }

    & .bio {
      padding: 15px;

      & .bio__text {
        padding: 15px;
      }

      & .bio__photos {
        flex-flow: column nowrap;

        & .bio__photo {
          margin: 30px 0;
          width: 100%;
          max-width: 356px;

          & span {
            padding-top: 70%;
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    & .contact {
      padding: 15px;
      height: unset;

      & ul {
        flex-flow: column nowrap;
      }
    }
  }
</style>
