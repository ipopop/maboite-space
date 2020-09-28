<template>
<div class="flex flex-wrap sm:flex-no-wrap justify-center items-center overflow-hidden bg-white rounded-lg shadow-lg">
    <img class="object-center w-auto sm:w-72 h-auto" :src="contentCard.imageUrl" :alt="contentCard.imageAlt">
    <div class="object-center sm:pt-10 sm:px-6 py-4 sm:w-48 sm:h-48">
        <h3 class="text-lg font-semibold text-gray-800">{{ contentCard.dataName }}</h3>
        <p class="text-gray-600">{{ contentCard.dataCnt1 }}</p>
        <div class="mt-5 mb-4 sm:mb-0">
            <a :href="contentCard.dataCnt2" class="shadow-lg btn btn-pink sm:text-base py-2" target="_blank"> DEMO </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['contentCard'],
}
</script>
