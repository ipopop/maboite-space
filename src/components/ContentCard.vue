<template>
<div class="flex items-center overflow-hidden bg-white rounded-lg shadow-lg">
    <img class="flex-shrink-0 w-32 h-32" :src="contentCard.imageUrl" :alt="contentCard.imageAlt">
    <div class="px-6 py-4">
        <h3 class="text-lg font-semibold text-gray-800">{{ contentCard.dataName }}</h3>
        <p class="text-gray-600">{{ contentCard.dataCnt1 }}</p>
        <div class="mt-4">
            <span class="text-gray-600">Voir le site : </span>
            <a :href="contentCard.dataCnt2" class="text-sm font-semibold text-purple-500 hover:text-purple-400" target="_blank">{{ contentCard.imageAlt }}</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['contentCard'],
}
</script>
