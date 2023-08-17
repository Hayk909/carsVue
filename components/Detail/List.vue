<template>
  <div>
    <div>
      <h3>Car Details</h3>
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
    </div>
    <detail-buttons />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


import DetailButtons from '~/components/Detail/Buttons'

export default {
  name: 'List',
  components: {
    DetailButtons
  },
  data() {
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
        },

      }
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
