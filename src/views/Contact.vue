<script>
export default {
  data() {
    return {
      form: {
        message: "",
        name: "",
        email: "",
        subject: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.form);
      alert("Thank you! Your message has been sent.");
      this.form = {
        message: "",
        name: "",
        email: "",
        subject: "",
      };
    },
  },
};
</script>

<template>
  <!-- Hero Section -->
  <header class="hero">
    <div class="hero-content text-center">
      <h1 class="noth-font">Contact</h1>
      <p>Pixel perfect design with awesome contents</p>
    </div>
  </header>
  <div class="container p-140">
    <div class="row">
      <h3 class="form-title">Get in Touch</h3>
      <!-- Contact Form -->
      <div class="col-md-8">
        <form @submit.prevent="submitForm">
          <div class="form-group mb-3">
            <textarea
              v-model="form.message"
              class="form-control input-textarea"
              rows="5"
              placeholder="Enter Message"
              required
            ></textarea>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group mb-3">
                <input
                  v-model="form.name"
                  type="text"
                  class="form-control input-field"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-3">
                <input
                  v-model="form.email"
                  type="email"
                  class="form-control input-field"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
          </div>
          <div class="form-group mb-3">
            <input
              v-model="form.subject"
              type="text"
              class="form-control input-field"
              placeholder="Enter Subject"
              required
            />
          </div>
          <button type="submit" class="btn btn-submit">Send</button>
        </form>
      </div>

      <!-- Contact Information -->
      <div class="col-md-3 ms-5 contact-info">
        <ul class="contact-list">
          <li class="contact-item">
            <i class="bi bi-house-door contact-icon"></i>
            <div>
              <strong>Buttonwood, California.</strong><br />
              Rosemead, CA 91770
            </div>
          </li>
          <li class="contact-item">
            <i class="bi bi-phone contact-icon"></i>
            <div class="media">
              <strong> +1 253 565 2365</strong><br />
              <small>Mon to Fri 9am to 6pm</small>
            </div>
          </li>
          <li class="contact-item">
            <i class="bi bi-envelope contact-icon"></i>
            <div>
              <strong> support@colorlib.com</strong><br />
              <small>Send us your query anytime!</small>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hero Section */
.hero {
  background: url("../assets/contact/bradcam4.png") no-repeat center
    center/cover;
  padding: 175px 0;
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

.form-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.input-textarea {
  min-height: 200px;
  max-height: 800px;
  border: 1px solid #e5e6e9;
  border-radius: 0px;
  padding-left: 18px;
  font-size: 13px;
  background: transparent;
}

.input-field {
  height: 50px;
  border-color: #f0e9ff;
  font-size: 13px;
  color: #999999;
  padding-left: 20px;
  border-radius: 0;
}

.btn-submit {
  background-color: #20c997;
  color: white;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #17a589;
}

.contact-info {
  padding-left: 1rem;
}

.contact-list {
  padding: 0;
  list-style: none;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  line-height: 1.5;
}

.contact-icon {
  color: #8f9195;
  font-size: 27px;
  margin-right: 16px;
}
</style>
