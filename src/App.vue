<template>
<div id="app">
    <div class="flex bg-gray-100">
        <div class="max-w-md px-8 py-4 mx-auto sm:py-12 sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
            <div class="xl:max-w-lg xl:ml-auto">
                <img class="object-cover object-center w-full h-48 mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-72 sm:object-cover lg:hidden" src="img/web_design_2020_1280p.jpg" alt="Digital Web Design" />
                <h2 class="mt-6 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl sm:mt-8 lg:text-3xl">
                    Votre page Web sur mesure.
                    <br class="sm:hidden lg:inline" />
                    <span class="text-purple-500">Profitez-en dès maintenant.</span>
                </h2>
                <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                    Vous rêvez d'un site web moderne, design, rapide et accessible sur laptops et mobiles. Profitez de notre savoir faire. Nous sommes le lien entre vos idées et leur mise en forme.
                </p>
                <div class="mt-4 sm:mt-6">
                    <a href="mailto:contact@maboite.space" class="shadow-lg btn btn-purple sm:text-base">Nous contacter</a>
                    <a href="#" class="ml-2 btn btn-gray sm:text-base">En savoir +</a>
                </div>
            </div>
        </div>
        <div class="hidden lg:block lg:w-1/2 lg:relative">
            <img class="absolute inset-0 object-contain object-center w-full h-full" src="img/web_design_2020_1280p.jpg" alt="Digital Web Design" />
        </div>
    </div>
    <div>
        <div class="max-w-md px-8 py-8 mx-auto sm:max-w-xl lg:max-w-6xl lg:px-12">
            <h2 class="text-xl text-gray-900">Portfolio</h2>
            <p class="text-gray-600">
                Une selection de différents types de sites web en cours de développement.
            </p>
            <div class="flex flex-wrap -mx-4">
                <div class="w-full px-4 mt-6 lg:w-1/2 xl:w-1/3" v-for="contentCard in dataCard" v-bind:key="contentCard">
                    <ContentCard :contentCard="contentCard" />
                </div>
            </div>
        </div>
    </div>
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
                    dataName: "service photo pro",
                    dataCnt1: "yetistudio.fr",
                    dataCnt2: "https://www.yetistudio.fr/",
                    imageUrl: "img/yetistudio-fr.jpg",
                    imageAlt: "yetistudio.fr",
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
                    dataName: "corporate template",
                    dataCnt1: "your business company",
                    dataCnt2: "https://ipopop.github.io/Business-Site-in-Jekill-and-BootStrap-4/",
                    imageUrl: "img/corp.jpg",
                    imageAlt: "your business company",
                },
                {
                    dataName: "design components",
                    dataCnt1: "react props tests",
                    dataCnt2: "https://my-props-test.vercel.app/",
                    imageUrl: "img/props.jpg",
                    imageAlt: "react props tests",
                },
                {
                    dataName: "book collection",
                    dataCnt1: "book collection",
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
