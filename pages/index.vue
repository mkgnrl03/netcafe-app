<template>
  <div>
      <h1>Selected Port: {{ selectedPort }}</h1> 
      <select name="serial-port" id="serial-port" v-model="selectedPort">
        <option disabled value="">Please select one</option>
        <option v-for="option in comPortOptions" :value="option.value">
          {{ option.name }}
        </option>
      </select>
    
  </div>
</template>

<script setup>
  const { serialPorts } = useSerialComPort() 

  const comPortOptions = computed(() => {
    return Object.keys(serialPorts.value).map((port) => ({
      name: port,
      value: port,
    }))
  })

  const selectedPort = ref(null)

</script>