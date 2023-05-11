<template></template>

<script setup lang='ts'>
import { reactive } from 'vue'
function Reactive() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args)
        return reactive(this)
      }
    }
  }
}

@Reactive()
class CreateUserForm {
  username = 'yuanke'
  email = 'cc@qq.com'
  password = '123'
  confirmPassword = '123'
}

const form = new CreateUserForm()
console.log(form)
</script>