<script setup>
import Navbar from './components/Navbar.vue'

</script>

<template>
    <v-app>
        <Navbar></Navbar>
        
        <main>
            <router-view></router-view>
        </main>
    </v-app>

</template>
