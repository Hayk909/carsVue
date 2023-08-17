<template>
  <div>
    <v-dialog
      v-model="openModal"
      width="500"
      @click:outside="$emit('close')"
    >
      <v-card>
        <v-card-title>
          Do you want to buy this car?
        </v-card-title>
        <v-card-text class="pb-0">
          <v-divider />
          <v-card-subtitle class="px-0 text-h6">
            <span>Current car</span>
            &mdash;
            <strong class="font-weight-black text-capitalize"> {{ activeCar.name }} </strong>
          </v-card-subtitle>
          <v-list>
            <v-list-item
              v-for="(item, index) in texts"
              :key="index"
              class="px-0"
            >
              <v-list-item-icon
                class="mr-2"
              >
                <v-icon v-text="item.icon" />
              </v-list-item-icon>
              <v-list-item-title>
                <span>{{ item.text }}</span>
                &mdash;
                <strong class="text-capitalize">{{ item.value }}</strong>
              </v-list-item-title>
            </v-list-item>
          </v-list>
          <v-divider />
        </v-card-text>
        <v-card-actions class="d-flex justify-end py-3">
          <div>
            <v-btn
              color="primary"
              class="text-none"
              elevation="0"
              :loading="buyLoading"
              @click="buy"
            >
              Buy
            </v-btn>
            <v-btn
              :loading="loading"
              color="secondary"
              elevation="0"
              class="text-none"
              @click="cancel"
            >
              Cancel
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Modal',
  props: {
    openModal: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      textsData: {
        model: {
          text: 'Model',
          icon: 'mdi-car',
          value: ''
        },
        year: {
          text: 'Year',
          icon: 'mdi-calendar-account',
          value: ''
        },
        owner: {
          text: 'Owner',
          icon: 'mdi-account',
          value: ''
        }
      },
      loading: false,
      buyLoading: false
    }
  },
  computed: {
    texts() {
      return Object.values(this.textsData)
    },
    ...mapGetters({
      activeCar: 'Cars/activeCar'
    })
  },
  methods: {
    ...mapMutations({
      setLog: 'Cars/setLog'
    }),
    cancel() {
      this.log('cancel', `Cancelled order: ${this.activeCar.name} - ${this.activeCar.model}`)
    },
    buy() {
      this.log('ok', `Success order: ${this.activeCar.name} - ${this.activeCar.model}`)
    },
    log(type, order) {
      const loadingProperty = type === 'ok'
        ? 'buyLoading'
        : 'loading'

      this[loadingProperty] = true

      const payload = {
        date: new Date(),
        type,
        newOrder: order
      }

      setTimeout(() => {
        this.setLog(payload)

        this[loadingProperty] = false

        this.$emit('close')
      }, 1000 )
    }
  },
  created() {
    const {
      model,
      year,
      owner
    } = this.activeCar

    this.textsData.model.value = model
    this.textsData.year.value = year
    this.textsData.owner.value = owner
  }
}
</script>
