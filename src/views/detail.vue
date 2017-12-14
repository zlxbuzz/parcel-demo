<template>
    <div>
        <mt-radio
              title="单选框列表"
                v-model="value"
                  :options="['选项A', '选项B', '选项C']">
         </mt-radio>
    </div>
</template>
<style scoped>
div{
    height: 100%;
}
</style>
