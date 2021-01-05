<template>
    <div class="card">
        <div class="card-inner">
            <div class="card-front">
                <div class="card-content">
                    <h2>Portfolio</h2>
                    <p>------</p>
                    <p>HTML, CSS, JS</p>
                    <p>Bootstrap, Tailwind</p>
                    <p>Ajax, Typescript</p>
                    <p>React, Rails</p>
                    <p>Vue, Svelte</p>
                    <p>Node, Python</p>
                    <p>Git, Gitlab</p>
                    <p>Bash, Zsh</p>
                    <p>MySQL, Postgres</p>
                </div>
            </div>
            <div class="card-back">
                <div class="card-top">
                    <div class="card-image"></div>
                </div>
            <p>Suivez-nous sur :</p>
            <div class="card-icons">
                <a class="ico1" href="https://www.linkedin.com/in/e-baroni" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a class="ico2" href="https://github.com/ipopop" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
                <a class="ico3" href="mailto:contact@maboite.space" target="_blank">
                    <i class="fas fa-at"></i>
                </a>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["flipCard"],
};
</script>

<style src="./../assets/flip-card.css"></style>