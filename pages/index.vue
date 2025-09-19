<template>
    <BaseCard class="shadow-xl">
    <div class="flex items-center gap-2 mb-4">
        <IconUser class="w-6 h-6" />
        <h1 class="text-2xl font-semibold text-neutral">Iniciar sesion</h1>
        <div> Aqui va el formulario</div>
        <div class="mt-4 text-sm">
            ¿No tienes una cuenta?
            <NuxtLink to="/register" class="link link-primary ml-1">Crear una cuenta
           </NuxtLink>
         </div>
      <h1>Texto</h1>
    </div>
  </BaseCard>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'auth'
}); 
</script>