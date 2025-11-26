<script setup>
import {ref} from 'vue'
  const arrXO = ref(Array.from({ length: 9 }, () => ({ value: 0, order: 0 })));

  console.log(arrXO.value);
  
  const order = ref(0)
  const winner = ref(null) // null - игра идет, 1 - победил O, 2 - победил X

  const is_x = ref(false)

  const checkWinner = () => {
    const winCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // по горизонтали
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // по вертикали
      [0, 4, 8], [2, 4, 6]             // по диагонали
    ];
    
    for (const combo of winCombinations) {
      const [a, b, c] = combo;
      if (arrXO.value[a].value && arrXO.value[a].value === arrXO.value[b].value && arrXO.value[a].value === arrXO.value[c].value) {
        winner.value = arrXO.value[a].value;
        return;
      }
    }
  }

  const addXO = (index)=>{
    // Запрещаем ход, если ячейка занята или игра окончена

    if(winner.value) { 
      arrXO.value = Array.from({ length: 9 }, () => ({ value: 0, order: 0 }));
      order.value = 0
      winner.value = null
    } 
    if(arrXO.value[index].value!==0) return
    
    order.value++
    arrXO.value[index].value = is_x.value ? 1:2
    arrXO.value[index].order = order.value

    if(order.value>6) {
      const index = arrXO.value.findIndex(el => el.order === order.value - 6);      
      arrXO.value[index].value = 0;
      arrXO.value[index].order = 0;
    }

    is_x.value = !is_x.value

    checkWinner()
  }

</script>

<template>
  <div class="box">
    <div class="item" v-for="(item, index) in arrXO" @click="addXO(index)">
      
      <span v-if="item.value==1">O</span>
      <span v-if="item.value==2">X</span>
    </div>
    
  </div>
  <div v-if="winner" class="winner-message">
    Победил: {{ winner === 1 ? 'O' : 'X' }}
  </div>
</template>

<style scoped>
  .box{
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(3, auto);
  }
  .item{
    width: 50px;
    height: 50px;
    background-color: #1d89f5;
    color: #fff;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    cursor: pointer;    
  }
  .item:hover{
    filter: brightness(1.2);  
    }
  .winner-message {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px;
    border-radius: 10px;
    font-size: 24px;
    z-index: 10;
  }
</style>