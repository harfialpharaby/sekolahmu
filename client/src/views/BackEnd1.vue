<template>
  <b-container class="text-left">
    <b-row>
      <b-col class="d-flex align-items-center">
        <p class="question">
          Jelaskan dengan tingkat kompleksitas dengan pendekatan notasi O(n)
          untuk algoritma-algoritma di bawah ini
        </p>
      </b-col>
      <b-col cols="2" class="d-flex align-items-center">
        <router-link
          to="/backend2"
          tag="div"
          class="w-50 font-weight-bold zoom-next"
        >
          NEXT CHALLENGE
        </router-link>
      </b-col>
    </b-row>
    <hr class="bg-success" />
    <b-row class="mt-3">
      <b-col
        cols="3"
        class="text-light d-flex align-items-center font-weight-bold p-3"
        style="background-color: #19459B"
      >
        <div>
          <pre class="font-weight-light text-light" style="font-size:12px">
def get_first_item(arr):
  return arr[0]
          </pre>
          <p>Answer: O(1)</p>
        </div>
      </b-col>
      <b-col cols="9" class="d-flex align-items-center">
        <p>
          Kompleksitas algoritma stabil sebanyak apapun input yang diberikan.
        </p>
      </b-col>
    </b-row>

    <b-row class="mt-3">
      <b-col
        cols="3"
        class="text-light d-flex align-items-center font-weight-bold p-3 text-left"
        style="background-color: #19459B"
      >
        <div>
          <pre class="font-weight-light text-light" style="font-size:12px">
def check_duplicate(arr):
  for outer in range(len(arr)):
    for inner in range(len(arr)):
      if outer == inner:
        continue
      if arr[outer] == arr[inner]:
        return true
    return false
          </pre>
          <p>Answer: O(n<sup>2</sup>)</p>
        </div>
      </b-col>
      <b-col cols="9" class="d-flex align-items-center">
        <p>
          Kompleksitas algoritma sebesar pangkat 2 dari input yang diberikan.
          Hal ini juga berlaku untuk semua nested loop dimana makin dalam nested
          loop yang diberikan maka kompleksitas juga akan menjadi lebih besar
          pangkatnya.
        </p>
      </b-col>
    </b-row>

    <b-row class="mt-3">
      <b-col
        cols="3"
        class="text-light d-flex align-items-center font-weight-bold p-3 text-left"
        style="background-color: #19459B"
      >
        <div>
          <pre class="font-weight-light text-light" style="font-size:12px">
def Fibonacci(number):
  if number &lt;= 1:
    return number
  return Fibonacci(number - 2) + 
    Fibonacci(number - 1)
          </pre>
          <p>Answer: O(2<sup>n</sup>)</p>
        </div>
      </b-col>
      <b-col cols="9" class="d-flex align-items-center">
        <p>
          Kompleksitas algoritma sebesar 2 kali dari pemanggilan recursive. Hal
          ini bisa dilihat secara jelas dari dalam fungsi Fibonacci dimana dalam
          fungsi tersebut melakukan recursive sebanyak 2x yaitu untuk
          Fibonacci(number - 2) dan Fibonacci(number - 1).
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>
