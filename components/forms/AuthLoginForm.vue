<template>
 <form @submit="onSubmit" class="space-y-2">
    <BaseInput label="Usuario" placeholder="Ingrese su usuario" v-model="form.usuario" required />
    <BaseInput label="Password" placeholder="**********" v-model="form.password" type="password" required />
    <BaseButton type="submit" class="mt-2"> Entrar</BaseButton>
  </form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';

type LoginForm = {
    usuario: string;
    password: string;
};

const form = reactive<LoginForm>({
    usuario: '',
    password: ''
});

function onSubmit(e: Event) {
    e.preventDefault();
    console.log('@@@  submit => login', form);
}

</script>