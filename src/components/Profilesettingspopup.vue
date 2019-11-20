<template>
    <v-dialog max-width="600px">
        <template v-slot:activator="{on}">
            <v-btn text class="success" v-on="on">
                Add New Project
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>
        </v-card>
        <v-card-text class="white">
            <v-form class="px-3">
                <v-text-field label="Title" v-model="title"></v-text-field>
                <v-textarea label="Information" v-model="content"></v-textarea>
            </v-form>
        </v-card-text>
    </v-dialog>
</template>

<script>
    export default {
        title: '',
        content: ''
    }
</script>

<style scoped>

</style>