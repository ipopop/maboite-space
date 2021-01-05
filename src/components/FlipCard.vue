<template>
    <div class="card">
        <div class="card-inner">
            <div class="card-front" onclick="void(0)">
                <div class="card-content">
                    <p><strong>Portfolio / Skills</strong></p>
                    <p>------</p>
                    <p>HTML, CSS, JS</p>
                    <p>Sass, Bootstrap, Tailwind</p>
                    <p>Ajax, Typescript</p>
                    <p>React, Vue, Svelte</p>
                    <p>Ruby, RubyOnRails</p>
                    <p>Node, Python</p>
                    <p>Git, Github, Gitlab</p>
                    <p>Bash, Zsh, Oh-My-Zsh</p>
                    <p>MySQL, Postgres, Mongodb</p>
                    <p>Gh-pages, Heroku, Vercel, Onrender</p>
                </div>
            </div>
            <div class="card-back" onclick="void(0)">
                <div class="card-top">
                    <div class="card-image"></div>
                </div>
            <p>Linkedin / Github / Email</p>
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