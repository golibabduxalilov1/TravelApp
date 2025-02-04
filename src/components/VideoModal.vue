<script>
export default {
    data() {
        return {
            videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
            isModalVisible: false,
        };
    },
    mounted() {
        const morePlacesButton = document.querySelector(".btn-danger");
        if (morePlacesButton) {
            morePlacesButton.addEventListener("click", function () {
                alert("More places coming soon!");
            });
        }

        const videoModal = document.getElementById("videoModal");
        const videoFrame = document.getElementById("videoFrame");

        videoModal.addEventListener("show.bs.modal", () => {
            videoFrame.src = this.videoURL;
        });

        videoModal.addEventListener("hidden.bs.modal", () => {
            videoFrame.src = "";
        });
    },
};

</script>

<template>
    <!-- Video Section -->
    <section class="video-section">
        <div class="container text-center">
            <h2 class="video-title noth-font">Enjoy Video</h2>
            <button class="play-button" data-bs-toggle="modal" data-bs-target="#videoModal">
                ▶
            </button>
        </div>
    </section>

    <!-- Video Modal -->
    <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="video-container">
                        <iframe id="videoFrame" width="100%" height="315" src="" frameborder="0"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Button */
.btn-danger {
    background-color: #ff4d4d;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1rem;
    transition: 0.3s;
}

.btn-danger:hover {
    background-color: #cc0000;
}

/* Video Section */
.video-section {
    padding: 190px 0;
    background: url("../assets/homeImages/video.png") no-repeat center center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
}

.video-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
}

.video-section .container {
    position: relative;
    z-index: 1;
}

.video-title {
    font-size: 5rem;
    margin-bottom: 20px;
}

.play-button {
    width: 84px;
    height: 84px;
    text-align: center;
    line-height: 84px;
    border: none;
    border-radius: 50%;
    background: #1ec6b6;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
}

/* Video Modal */
.modal-content {
    background: black;
}

.modal-body {
    position: relative;
    padding: 0;
}

.btn-close {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1000;
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>