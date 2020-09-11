<template>
<div id="app">
    <section id="header" class="bg-dark">
        <container class="mx-auto max-w-xxl flex">
            <div class="flex-1 m-auto max-w-md px-8 py-4 sm:py-8 sm:max-w-xl lg:max-w-6xl lg:w-1/2 lg:py-0 lg:px-12 xl:w-2/5">
                <div class="ml-auto xl:max-w-lg xl:mt-18 lg:max-w-112">
                    <img class="object-full object-center w-full mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-84 lg:hidden" src="img/web_design_2020_1280p.jpg" alt="Digital Web Design" />
                    <h2 class="mt-8 text-2xl font-bold leading-tight text-pkgray-300 sm:text-4xl lg:text-2xl">
                        Votre Site Web sur mesure.
                        <br class="sm:hidden lg:inline" />
                        <span class="text-purple-500">Profitez-en dès maintenant.</span>
                    </h2>
                    <p class="mt-2 md:mr-2 lg:mr-5 text-pkgray-400 sm:mt-4 sm:text-xl lg:text-xl xl:text-xl xl:mt-6 xl:mr-16">Vous rêvez d'un site web moderne, design et accessible pour tous vos clients. Nous sommes le lien entre vos idées et leur mise en forme.</p>
                    <div class="text-center sm:text-left my-10 sm:mt-6 sm:text-base xl:mt-10 xl:text-sm">
                        <button class="btn btn-purple mb-8 sm:mb-0 shadow-lg w-full sm:w-auto">
                            <a href="mailto:contact@maboite.space">Nous contacter</a>
                        </button>
                        <br class="sm:hidden inline" />
                        <button class="btn btn-pkgray py-2 border-2 w-full sm:w-auto sm:ml-4">
                            <a href="#portfolio">En savoir +</a>
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex-1 hidden overflow-hidden lg:block lg:w-1/2 lg:relative xl:w-3/5">
                <img class="object-cover h-full w-full xl:w-180 xl:object-scale-down" src="img/web_design_2020_1280p.jpg" alt="Digital Web Design" />
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
        <div class="mx-auto px-8 py-24">
            <div class="flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <h2 class="text-center text-pkgray-300 sm:pr-16 text-xl font-bold leading-tight sm:text-2xl lg:text-xl">
                    Votre Site Web sur mesure.
                    <br />
                    <span class="text-purple-500">Profitez-en dès maintenant.</span>
                </h2>
                <button class="mx-auto btn btn-purple mt-8 sm:mt-0 shadow-lg">
                    <a href="mailto:contact@maboite.space">Nous contacter</a>
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
            ],
        };
    },
};
</script>

<style src="./assets/tailwind.css"></style>
