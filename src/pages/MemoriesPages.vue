<template>

    <base-layout page-title="Mis memorias">
        <ion-list>
            <ion-item v-for="m in memories" :key="m.id" :router-link="`/memories/${m.id}`">
                <ion-thumbnail slot="start">
                    <ion-img :src="m.image" :alt="m.title"></ion-img>
                </ion-thumbnail>
                <ion-label>
                    {{m.title}}
                </ion-label> 
            </ion-item>
        </ion-list>
    </base-layout>

</template>

<script>
import BaseLayout from '@/components/base/BaseLayout.vue';
import { IonList, IonItem, IonImg, IonLabel, IonThumbnail } from '@ionic/vue';


export default {
    components: {
        IonList,
        IonItem,
        IonImg,
        BaseLayout,
        IonLabel,
        IonThumbnail
    },
    computed: {
        memories(){
            return this.$store.getters.memories;
        }
    }
        
}
</script>

<style>

</style>
