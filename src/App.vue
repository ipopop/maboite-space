<template>
<div id="app">
        <div class="anim-background">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    <section id="header" class="bg-dark">
        <container class="mx-auto xxl:max-w-8xl flex">
            <div class="flex-1 m-auto max-w-md px-8 py-4 sm:py-8 sm:max-w-xl lg:py-0 lg:px-12">
                <div class="ml-auto lg:max-w-112 lg:py-0 lg:ml-12 xl:max-w-lg xl:mt-18">
                    <img class="object-full object-center w-full mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-84 lg:hidden" src="img/web_design_2020_1280p.jpg" alt="Digital Web Design" />
                    <h2 class="mt-8 text-2xl font-bold leading-tight text-pkgray-300 sm:text-4xl lg:text-2xl lg:my-4">
                        Votre Site Web sur mesure.
                        <br class="sm:hidden lg:inline" />
                        <span class="text-purple-500">Profitez-en dès maintenant.</span>
                    </h2>
                    <p class="mt-2 md:mr-2 lg:mr-5 text-pkgray-400 sm:mt-4 sm:text-xl lg:text-lg lg:max-w-sm xl:text-xl xl:mt-6 xl:mr-16">Vous rêvez d'un site web moderne, design et accessible pour tous vos clients. Nous sommes le lien entre vos idées et leur mise en forme.</p>
                    <div class="text-center sm:text-left my-10 sm:mt-10 sm:text-base lg:my-6 xl:mt-10 xl:text-sm">
                        <button class="btn btn-purple mb-8 sm:mb-0 shadow-lg w-full sm:w-auto" onclick="location.href='#footer'" type="button">
                            Nous contacter
                        </button>
                        <br class="sm:hidden inline" />
                        <button class="btn btn-pkgray py-2 border-2 w-full sm:w-auto sm:ml-5" onclick="location.href='#portfolio'" type="button">
                            En savoir +
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex-1 hidden overflow-hidden lg:block">
                <img class="object-cover w-full xl:w-180" src="img/web_design_2020_1280p.jpg" alt="Digital Web Design" />
            </div>
        </container>
    </section>

    <section id="portfolio">
        <div class="text-center max-w-md my-10 px-8 py-8 mx-auto sm:max-w-2xl lg:max-w-6xl lg:px-12">
            <h2 class="text-4xl text-purple-500">Portfolio</h2>
            <p class="text-xl text-gray-600">Différents types de projets en cours de développement</p>
            <div class="flex my-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
            </div>
            <div class="flex flex-wrap text-center">
                <div class="object-center mx-auto max-w-350 min-h-300 sm:max-w-450 px-4 mt-10" v-for="contentCard in dataCard" v-bind:key="contentCard">
                    <ContentCard :contentCard="contentCard" />
                </div>
            </div>
        </div>
    </section>

    <section id="footer" class="flex flex-wrap bg-dark mt-24 body-font">
        <container class="flex flex-wrap m-auto py-4 sm:py-8 lg:py-0 lg:px-12 mx-auto">
            <div class="mx-auto py-8">
                <FlipCard :flipCard="flipCard" />
            </div>
            <div class="flex flex-wrap m-auto max-w-md px-8 py-4 sm:py-8 sm:max-w-xl lg:py-0 lg:px-12">
                <div class="mx-auto max-w-350 flex flex-col items-center">
                    <h2 class="text-center text-pkgray-300 text-xl font-bold leading-tight sm:text-2xl lg:text-xl">
                        Votre Site Web sur mesure.
                        <br />
                        <span class="text-purple-500">Profitez-en dès maintenant.</span>
                    </h2>
                    <button class="flex-1 mx-auto btn btn-purple my-8 shadow-lg" onclick="location.href='mailto:contact@maboite.space'" type="button">
                        Nous contacter
                    </button>
                </div>
            </div>
        </container>
    </section>

</div>
</template>

<script>
import ContentCard from "./components/ContentCard";
import FlipCard from "./components/FlipCard";

export default {
    name: "app",
    components: {
        ContentCard,
        FlipCard,
    },
    data() {
        return {
            dataCard: [
                {
                    dataName: "service photo",
                    dataCnt1: "yetistudio.fr",
                    dataCnt2: "https://www.yetistudio.fr/",
                    imageUrl: "img/yetistudio-fr.jpg",
                    imageAlt: "yetistudio.fr",
                },
                {
                    dataName: "tests design",
                    dataCnt1: "card & graphs",
                    dataCnt2: "https://my-props-test.vercel.app/",
                    imageUrl: "img/props.jpg",
                    imageAlt: "react props tests",
                },
                {
                    dataName: "Motion Pizza",
                    dataCnt1: "pizza command",
                    dataCnt2: "https://framer-motion-pizzajoint.vercel.app/",
                    imageUrl: "img/motion-pizza.jpg",
                    imageAlt: "pizza command",
                },
                {
                    dataName: "Restau Menu",
                    dataCnt1: "menu template",
                    dataCnt2: "https://ipopop.github.io/eb-dev_OC_p3/index.html",
                    imageUrl: "img/resto.jpg",
                    imageAlt: "menu template",
                },
                {
                    dataName: "ecommerce",
                    dataCnt1: "boutique web",
                    dataCnt2: "https://bootik.onrender.com/",
                    imageUrl: "img/boutique.jpg",
                    imageAlt: "boutique web",
                },
                {
                    dataName: "animal 'tinder'",
                    dataCnt1: "tindog",
                    dataCnt2: "https://ipopop.github.io/Bootstrap-tindog-project/",
                    imageUrl: "img/tindog.jpg",
                    imageAlt: "tindog",
                },
                {
                    dataName: "food ninja",
                    dataCnt1: "recettes",
                    dataCnt2: "https://ipopop.github.io/tailwind-tutorial/",
                    imageUrl: "img/food-ninja.jpg",
                    imageAlt: "food ninja recettes",
                },
                {
                    dataName: "collection",
                    dataCnt1: "livres",
                    dataCnt2: "https://fullstack-web-dev-mybrary.herokuapp.com/",
                    imageUrl: "img/mybrary.jpg",
                    imageAlt: "books & authors",
                },
                {
                    dataName: "site business",
                    dataCnt1: "demo template",
                    dataCnt2: "https://ipopop.github.io/Business-Site-in-Jekill-and-BootStrap-4/",
                    imageUrl: "img/corp.jpg",
                    imageAlt: "business company template",
                },
                {
                    dataName: "remote work",
                    dataCnt1: "alakaza.me",
                    dataCnt2: "https://www.alakaza.me",
                    imageUrl: "img/tailwind.jpg",
                    imageAlt: "remote work",
                },
                {
                    dataName: "travel blog",
                    dataCnt1: "wonderful world",
                    dataCnt2: "https://frontity.sqrl.vercel.app/",
                    imageUrl: "img/wonderful-world-blog-512px.jpg",
                    imageAlt: "remote work",
                },
                {
                    dataName: "minimal game",
                    dataCnt1: "rock paper scissors",
                    dataCnt2: "https://rock-paper-scissors-gray.vercel.app/",
                    imageUrl: "img/rock-paper-scissors-512px.jpg",
                    imageAlt: "Rock Paper Scissors",
                },
                {
                    dataName: "Friend List",
                    dataCnt1: "your contact list",
                    dataCnt2: "https://ruby-on-rails-friends-list.herokuapp.com/home/about",
                    imageUrl: "img/friend-list.jpg",
                    imageAlt: "your contact list",
                },
                {
                    dataName: "Cosmo Junkie",
                    dataCnt1: "dev portfolio",
                    dataCnt2: "https://ipopop.github.io/responsive-css-grid-build/",
                    imageUrl: "img/cosmos-junk.jpg",
                    imageAlt: "dev portfolio",
                },
            ],
        };
    },
};
</script>

<style src="./assets/anim-bg.css"></style>
<style src="./assets/tailwind.css"></style>
