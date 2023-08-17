<template>
  <v-sheet
    height="100%"
    class="d-flex justify-center align-center"
  >
    <v-container class="px-7">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          lg="4"
          class="mx-auto"
        >
          <h1 class="text-center">
            {{ $t('LOGIN_TEXT') }}
          </h1>
          <div class="mt-7">
            <v-text-field
              v-model="login"
              :error-messages="loginRule"
              dense
              class="my-10"
              label="Login"
              @input="$v.login.$touch"
              @blur="$v.login.$touch"
            />
            <v-text-field
              v-model="password"
              :error-messages="passwordRule"
              type="password"
              dense
              label="Password"
              @input="$v.password.$touch"
              @blur="$v.password.$touch"
            />
          </div>
          <div class="text-center mt-7">
            <v-btn
              :loading="loading"
              :disabled="isDisabled"
              width="120"
              elevation="0"
              color="primary"
              class="text-none"
              @click="authenticate"
            >
              Log In
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapActions } from 'vuex'

import { required, email, minLength } from 'vuelidate/lib/validators'


export default {
  layout: 'auth',
  data() {
    return {
      login: '',
      password: '',
      loading: false
    }
  },
  validations: {
    login: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  computed: {
    loginRule() {
      const errors = []

      const { $dirty, required, email} = this.$v.login

      if ($dirty && !required) {
        errors.push('Required field')
      }

      if ($dirty && !email) {
        errors.push('Email is false')
      }

      return errors
    },
    passwordRule() {
      const errors = []

      const { $dirty, required, minLength } = this.$v.password

      if ($dirty && !required) {
        errors.push('Required field')
      }

      if ($dirty && !minLength) {
        errors.push(`Current length is: ${this.password.length}`)
      }

      return errors
    },
    isDisabled() {
      return this.$v.$invalid
    }
  },
  methods: {
    ...mapActions({
      loginUser: 'Users/login'
    }),
    authenticate() {
      this.loading = true

      if(!this.$v.$invalid) {
        setTimeout(async () => {
           const user = {
            email: this.login,
            password: this.password
          }

          const auth = await this.loginUser(user)

          if (auth) {
            this.$router.push(this.localePath('/'))
          }

          this.loading = false
        }, 1000)
      }

    }
  },
}
</script>
