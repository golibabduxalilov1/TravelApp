<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Google inks pact for new 35-storey office",
          description:
            "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
          image:
            "https://preview.colorlib.com/theme/travelo/img/blog/single_blog_1.png",
          date: "15 Jan",
          category: "Travel, Lifestyle",
          comments: 3,
        },
        {
          id: 2,
          title: "Google inks pact for new 35-storey office",
          description:
            "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
          image:
            "https://preview.colorlib.com/theme/travelo/img/blog/single_blog_2.png",
          date: "15 Jan",
          category: "Travel, Lifestyle",
          comments: 3,
        },
        {
          id: 3,
          title: "Google inks pact for new 35-storey office",
          description:
            "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
          image:
            "https://preview.colorlib.com/theme/travelo/img/blog/single_blog_4.png",
          date: "15 Jan",
          category: "Travel, Lifestyle",
          comments: 3,
        },
      ],
      categories: [
        "Restaurant food (37)",
        "Travel news (10)",
        "Modern technology (03)",
        "Product (11)",
        "Inspiration (21)",
        "Health Care (219)",
      ],
      recentPosts: [
        {
          id: 1,
          title: "From life was you fish...",
          image:
            "https://preview.colorlib.com/theme/travelo/img/post/post_1.png",
        },
        {
          id: 2,
          title: "The Amazing Hubble",
          image:
            "https://preview.colorlib.com/theme/travelo/img/post/post_2.png",
        },
        {
          id: 3,
          title: "Astronomy Or Astrology",
          image:
            "https://preview.colorlib.com/theme/travelo/img/post/post_4.png",
        },
        {
          id: 4,
          title: "Asteroids telescope",
          image:
            "https://preview.colorlib.com/theme/travelo/img/post/post_3.png",
        },
      ],
      tags: [
        "project",
        "love",
        "technology",
        "travel",
        "restaurant",
        "life style",
        "design",
        "illustration",
      ],
      instagramFeeds: [
        "https://preview.colorlib.com/theme/travelo/img/post/post_1.png",
        "https://preview.colorlib.com/theme/travelo/img/post/post_2.png",
        "https://preview.colorlib.com/theme/travelo/img/post/post_3.png",
        "https://preview.colorlib.com/theme/travelo/img/post/post_4.png",
        "https://preview.colorlib.com/theme/travelo/img/post/post_5.png",
        "https://preview.colorlib.com/theme/travelo/img/post/post_6.png",
      ],
    };
  },
};
</script>

<template>
  <header class="hero">
    <div class="hero-content text-center">
      <h1 class="noth-font">Blog</h1>
      <p>Pixel perfect design with awesome contents</p>
    </div>
  </header>

  <div class="container mt-4 p-140">
    <div class="row">
      <div class="col-lg-8 mb-5 mb-lg-0">
        <div class="card mb-4" v-for="post in posts" :key="post.id">
          <img :src="post.image" class="card-img-top" alt="Post Image" />
          <div class="card-body">
            <h4 class="card-title mt-3">{{ post.title }}</h4>
            <p class="card-text mt-4 mb-5">{{ post.description }}</p>
            <div class="d-flex justify-content-between">
              <div class="text-muted">
                <span class="me-3"
                  ><i class="bi bi-person"></i> Travel, Lifestyle</span
                >
                <span><i class="bi bi-chat"></i> 03 Comments</span>
              </div>
              <div class="date-info text-muted">
                <i class="bi bi-clock-history me-1"></i>
                <span>{{ post.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card card-left-search">
          <input
            type="text"
            class="form-control"
            placeholder="Search Keyword"
          />
          <button class="btn hov-red mt-3">SEARCH</button>
        </div>

        <div class="card p-3 mb-4 card-category">
          <h5 class="mb-4">Category</h5>
          <ul class="">
            <li
              class="list-group-item"
              v-for="category in categories"
              :key="category"
            >
              <a href="#">
                <p>{{ category }}</p>
              </a>
            </li>
          </ul>
        </div>

        <div class="card card-recently">
          <h5 class="mb-4">Recent Post</h5>
          <div
            class="media post_item"
            v-for="post in recentPosts"
            :key="post.id"
          >
            <img :src="post.image" alt="post" />
            <div class="media-body">
              <a href="#">
                {{ post.title }}
              </a>
              <p>January 12, 2019</p>
            </div>
          </div>
        </div>

        <div class="card card-tags">
          <h5 class="mb-4">Tag Clouds</h5>
          <div>
            <a href="#">
              <span class="badge m-1" v-for="tag in tags" :key="tag">{{
                tag
              }}</span></a
            >
          </div>
        </div>

        <div class="card ins-feed">
          <h5 class="mb-4">Instagram Feeds</h5>
          <ul class="flex">
            <li
              class="list-group-item"
              v-for="image in instagramFeeds"
              :key="image"
            >
              <a href="#"> <img :src="image" class="img-fluid" /></a>
            </li>
          </ul>
        </div>

        <div class="card news-card">
          <h5>Newsletter</h5>
          <input
            type="email "
            class="form-control mb-3"
            placeholder="Enter email"
          />
          <button class="btn">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hero {
  background: url("../assets/homeImages/banner.png") no-repeat center
    center/cover;
  padding: 100px 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 5rem;
}

.hero p {
  font-size: 1.2rem;
}

.card {
  border-radius: 10px;
  overflow: hidden;
  background: #fbf9ff;
  border: none;
  padding: 30px;
  margin-bottom: 30px;
}

.card-left-search button {
  color: #fff;
  background: #1ec6b6;
  transition: 0.3s;
}

.card-left-search input {
  height: 50px;
  border-color: #f0e9ff;
  font-size: 13px;
  color: #999999;
  padding-left: 20px;
  border-radius: 0;
  border-right: 0;
}

.card-text {
  color: #7a838b;
}

.card-title {
  font-size: 24px;
  margin-bottom: 15px;
}

.card-category .list-group {
  border-color: 0 !important;
}

.card-category li {
  border-bottom: 1px solid #f0e9ff;
  transition: all 0.3s ease 0s;
  padding-bottom: 12px;
}

.card-category li a {
  text-decoration: none;
  color: #999999;
}

.card-category li a p {
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: #7a838b;
  margin-bottom: 0;
}

.card-recently .post_item {
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
}

.media-body {
  align-self: center;
  padding-left: 20px;
}

.media-body a {
  text-decoration: none;
  color: #7a838b;
}

.ins-feed ul {
  display: flex;
  margin-right: -6px;
  margin-left: -6px;
}

.ins-feed li {
  width: 33.3%;

  padding-right: 6px;
  padding-left: 6px;
  margin-bottom: 15px;
}

.news-card button {
  color: #fff;
  background: #1ec6b6;
  transition: 0.3s;
}

.news-card input {
  height: 50px;
  border-color: #f0e9ff;
  font-size: 13px;
  color: #999999;
  padding-left: 20px;
  border-radius: 0;
  border-right: 0;
}

.date-info {
}
</style>
