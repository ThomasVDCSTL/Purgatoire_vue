<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { useUserStore } from '@/stores/user.store.js'
import router from '@/router/index.js'


const loginSchema = Yup.object().shape({
  mail: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required')
});

const registerSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
  mail: Yup.string().required('Email is required')
});

async function onSubmitLogin(values) {
  const authStore = useUserStore();
  const { mail, password } = values;
  console.log(values + " " + mail + " " + password)
  await authStore.login(mail, password);
  router.push('/');
}


async function onSubmitRegister(values) {
  const authStore = useUserStore();
  const { username, password, mail } = values;
  await authStore.register(username, password, mail);
  router.push('/');
}
</script>

<template>
  <h1 class="text-8xl font-alfa text-center p-52 pb-32">LOGIN</h1>
  <div class="p-12 flex justify-around gap-14">
    <div class="card m-3 bg-white3 w-1/4 rounded-3xl justify-center items-center font-kanit p-12">
      <h4 class="card-header text-3xl">Login</h4>
      <div class="card-body">
        <Form @submit="onSubmitLogin" :validation-schema="loginSchema" v-slot="{ errors, isSubmitting }" >
          <div class="form-group">
            <label>Email</label>
            <Field name="mail" type="text" class="form-control" :class="{ 'is-invalid': errors.mail }" />
            <div class="invalid-feedback">{{ errors.mail }}</div>
          </div>
          <div class="form-group pt-12">
            <label>Password</label>
            <Field name="password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" />
            <div class="invalid-feedback">{{ errors.password }}</div>
          </div>
          <div class="form-group flex justify-end pt-12">
            <button class="btn btn-primary" :disabled="isSubmitting">
              <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
              Login
            </button>
          </div>
        </Form>
      </div>
    </div>
    <div class="card bg-white3 w-1/2 rounded-3xl justify-center items-center font-kanit p-12">
      <h4 class="card-header text-3xl">Register</h4>
      <div class="card-body w-3/4">
        <Form @submit="onSubmitRegister" :validation-schema="registerSchema" v-slot="{ errors, isSubmitting }" >
          <div class="form-group">
            <label>Username</label>
            <Field name="username" type="text" class="form-control" :class="{ 'is-invalid': errors.username }" />
            <div class="invalid-feedback">{{ errors.username }}</div>
          </div>
          <div class="form-group pt-12">
            <label>Password</label>
            <Field name="password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" />
            <div class="invalid-feedback">{{ errors.password }}</div>
          </div>
          <div class="form-group pt-12">
            <label>Email</label>
            <Field name="mail" type="mail" class="form-control" :class="{ 'is-invalid': errors.mail }" />
            <div class="invalid-feedback">{{ errors.mail }}</div>
          </div>
          <div class="form-group flex justify-end pt-12">
            <button class="btn btn-primary" :disabled="isSubmitting">
              <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
              Register
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>