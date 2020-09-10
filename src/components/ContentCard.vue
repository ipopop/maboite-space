<template>
<div class="flex flex-wrap items-center overflow-hidden bg-white rounded-lg shadow-lg">
    <img class="object-auto object-center sm:w-64 sm:h-64" :src="contentCard.imageUrl" :alt="contentCard.imageAlt">
    <div class="text-center mx-auto sm:px-6 py-4">
        <h3 class="text-lg font-semibold text-gray-800">{{ contentCard.dataName }}</h3>
        <p class="text-gray-600">{{ contentCard.dataCnt1 }}</p>
        <div class="mt-4">
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
