<template>
  <BaseCard class="shadow-xl">
    <div class="flex items-center gap-2 mb-4">
      <IconLock class="w-6 h-6" />
      <h1 class="text-2xl font-semibold text-neutral">Registrar Usuario</h1>
    </div>
     Formulario de Registro
    <!-- Aquí va el formulario de registro -->
    <AuthRegisterForm />

    <div class="mt-4 text-sm">
      ¿Ya tienes una cuenta?
      <NuxtLink to="/login" class="link link-primary ml-1">
        Iniciar sesión
      </NuxtLink>
    </div>
  </BaseCard>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'auth'
})
</script>