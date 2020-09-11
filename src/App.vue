<template>
<div id="app">
    <section id="header" class="flex bg-dark">
        <div class="mx-auto max-w-md px-8 py-4 sm:py-8 sm:max-w-xl lg:max-w-6xl lg:w-1/2 lg:py-0 lg:px-12 xxl:h-120">
            <div class="xl:max-w-lg xl:ml-auto xl:mt-18 lg:max-w-120">
                <img class="object-full object-center w-full mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-84 lg:hidden" src="img/web_design_2020_1280p.jpg" alt="Digital Web Design" />
                <h2 class="mt-8 text-2xl font-bold leading-tight text-pkgray-300 sm:text-4xl lg:text-2xl xl:mt-20">
                    Votre Site Web sur mesure.
                    <br class="sm:hidden lg:inline" />
                    <span class="text-purple-500">Profitez-en dès maintenant.</span>
                </h2>
                <p class="mt-2 md:mr-2 lg:mr-5 text-pkgray-400 sm:mt-4 sm:text-xl lg:text-xl xl:text-xl xl:mt-6 xl:mr-16">Vous rêvez d'un site web moderne, design et accessible pour tous vos clients. Nous sommes le lien entre vos idées et leur mise en forme.</p>
                <div class="text-center sm:text-left my-10 sm:mt-6 sm:text-base xl:mt-10 xl:text-sm">
                    <a href="mailto:contact@maboite.space" class="mb-8 shadow-lg btn btn-purple w-full sm:w-auto">Nous contacter</a>
                    <br class="sm:hidden inline" />
                    <a href="#portfolio" class="py-2 w-full sm:w-auto sm:ml-4 btn btn-pkgray">En savoir +</a>
                </div>
            </div>
        </div>
        <div class="hidden overflow-hidden lg:block lg:w-3/5 lg:relative xl:w-full xxl:w-3/5">
            <img class="flex-1 absolute inset-0 object-right xl:max-w-3xl mr-0" src="img/web_design_2020_1280p.jpg" alt="Digital Web Design" />
        </div>
    </section>
    <section id="portfolio">
        <div class="max-w-md px-8 py-8 mx-auto sm:max-w-2xl lg:max-w-6xl lg:px-12">
            <h2 class="text-2xl text-gray-900">Portfolio</h2>
            <p class="text-xl text-gray-600">Différents types de projets en cours de développement.</p>
            <div class="flex flex-wrap text-center">
                <div class="object-center mx-auto max-w-350 min-h-300 sm:max-w-450 px-4 mt-10" v-for="contentCard in dataCard" v-bind:key="contentCard">
                    <ContentCard :contentCard="contentCard" />
                </div>
            </div>
        </div>
    </section>
    <section id="footer" class="flex flex-wrap bg-dark mt-24 body-font">
        <div class="px-10 py-24 mx-auto">
            <div class="flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <h2 class="sm:pr-16 text-xl font-bold leading-tight text-pkgray-300 sm:text-2xl lg:text-xl">
                    Votre Site Web sur mesure.
                    <br />
                    <span class="text-purple-500">Profitez-en dès maintenant.</span>
                </h2>
                <button class="flex-shrink-0 text-center sm:text-left mt-6 sm:mt-0 sm:text-base xl:text-sm">
                    <a href="mailto:contact@maboite.space" class="shadow-lg btn btn-purple w-full sm:w-auto">Nous contacter</a>
                </button>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import ContentCard from "./components/ContentCard";

export default {
    name: "app",
    components: {
        ContentCard,
    },
    data() {
        return {
            dataCard: [{
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
                    dataName: "site business",
                    dataCnt1: "Fluid Jumbotron",
                    dataCnt2: "https://ipopop.github.io/Business-Site-in-Jekill-and-BootStrap-4/",
                    imageUrl: "img/corp.jpg",
                    imageAlt: "business company template",
                },
                {
                    dataName: "collection",
                    dataCnt1: "book & authors",
                    dataCnt2: "https://fullstack-web-dev-mybrary.herokuapp.com/",
                    imageUrl: "img/mybrary.jpg",
                    imageAlt: "book collection",
                },
            ],
        };
    },
};
</script>

<style src="./assets/tailwind.css"></style>
